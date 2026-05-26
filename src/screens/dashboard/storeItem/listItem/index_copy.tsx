import { TouchableOpacity, View, Alert, StyleSheet, RefreshControl, ActivityIndicator, FlatList } from 'react-native';
import { ScrollView } from 'react-native-virtualized-view';
import React, { useEffect, useState } from 'react';
import { GlobalStyle } from '@style/styles';
import { Notification, Search, BookingFilterIcon, AddItemIcon } from '@utils/icons';
import Header from '@commonComponents/header';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from 'src/navigation/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import appColors from '@theme/appColors';
import { useValues } from '../../../../../App';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
import Icon from 'react-native-vector-icons/FontAwesome';
import PanelCard from './panelCard';
import SkeletonLoader from '@src/commonComponents/SkeletonLoader';
import NoDataFound from '@src/commonComponents/noDataFound';
import { noNotification, wifi } from '@src/utils/images';
import { windowHeight, windowWidth } from '@src/theme/appConstant';
import GradientBtn from '@src/commonComponents/gradientBtn';
import { deleteItem, getItemList, updateStatus } from '@src/services/store/item.service';
import { storeItemsActions } from '@src/store/redux/store/store-item-redux';
import FilterComponent from '@src/screens/dashboard/storeItem/listItem/filterComponent';
import StoreItemSearchBar from '@src/otherComponent/StoreItemSearchBar';
 
interface Response {
    data: any;
    status: number;
    statusText: string;
    headers: any;
    config: any;
    request?: any;
}
type routeProps = NativeStackNavigationProp<RootStackParamList>;

//List items
export default function ListItem() {
     const {
        searchValue :itemSearchValue
      } = useSelector((state: RootState) => state['storeItemSearchField'])
    
    const dispatch = useDispatch()
    const { isDark, t, currSymbol } = useValues();
    const [refreshing, setRefreshing] = React.useState(false);
    const [selectedFilter, setSelectedFilter] = useState<string>('All');
   

   
    

    const { stores: storesList } = useSelector(
        (state: RootState) => state['storeProfileData']
    );
    const { module: storeModuleDetails } = storesList[0]
    const { module_type } = storeModuleDetails


    //process filter
    const processFilter = (value: string) => {
        if (selectedFilter !== value) {
            setSelectedFilter(value)
            dispatch(storeItemsActions.resetState())
        }
    }
    
    const {
        data: storeItemList,
        offset,
        limit,
        isFirstTimeLoading,
        isNoMoreData,

    } = useSelector((state: RootState) => state['storeItem'])


    const [scrollPaging, setScrollPaging] = useState(false)

    //drag screen refresh page
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        dispatch(storeItemsActions.resetState())
        setTimeout(() => {
            setRefreshing(false);
        }, 1000);
    }, []);
    //async addons load for data show
    const asyncLoadItems = async () => {
        let type = 'all'
        if (selectedFilter === 'Non-Veg') {
            type = 'non_veg'
        } else if (selectedFilter === 'Veg') {
            type = 'veg'
        }
        const response: Response = await getItemList(limit, offset, type, itemSearchValue)
        // console.log("Items:", JSON.stringify(response?.data?.items[0]) );
        if (response?.data?.items && response?.data?.items.length > 0) {
            dispatch(storeItemsActions.addItemArr(response?.data?.items))
        } else {
            dispatch(storeItemsActions.setData({
                field: 'isNoMoreData',
                data: true
            }));
        }
        setScrollPaging(false);
        dispatch(storeItemsActions.setData({
            field: 'isFirstTimeLoading',
            data: false
        }));
    }
    useEffect(() => {
        if ((isFirstTimeLoading || scrollPaging) && !isNoMoreData) {
            const timeoutId = setTimeout(() => {
                asyncLoadItems();
            }, 1000);
            return () => clearTimeout(timeoutId);
        }
    }, [isFirstTimeLoading, scrollPaging, isNoMoreData]);

    const { navigate } = useNavigation<routeProps>();

    const navigateToEditPage = (id: string) => {
        navigate('EditVendorItem', { id });

    }
    const deleteItemFromList = (itemId: number) => {
        Alert.alert(
            "Confirmation",
            t('newDeveloper.Areyousureyouwanttoproceed'),
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel" // sets the text style to cancel
                },
                {
                    text: "OK",
                    onPress: () => {
                        dispatch(storeItemsActions.deleteItemById(itemId))
                        deleteItem(itemId)
                    }
                }
            ],
            { cancelable: false } // prevents the alert from being dismissed by tapping outside
        );
    }
    //handle scroll processing
    const handleScrollProcessing = () => {
        if (isNoMoreData) { return; }
        setScrollPaging(true)
        dispatch(storeItemsActions.setData({
            field: 'offset',
            data: offset + 1
        }));
    }

    return (
        <View style={[styles.container, { backgroundColor: isDark ? appColors.darkCardBg : appColors.white }]}>
            <Header
                showBackArrow={true}
                title={'newDeveloper.ListItem'}
                content={''}
                trailIcon1={<AddItemIcon />}
                onTrailIcon={() => { navigate('VendorAddItem') }}
            />
             
            {module_type === 'food' && <View style={{ marginTop: 5 }}>
                <FilterComponent selectedFilter={selectedFilter} setSelectedFilter={processFilter} />
            </View>}
            <StoreItemSearchBar
                searchIcon={<Search />}
                handleSetSearchValue={() => {
                    dispatch(storeItemsActions.resetState())
                    
                    return
                }}
            />
            <ScrollView
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[
                    GlobalStyle.contentContainerStyle,
                ]}
                style={[
                    GlobalStyle.mainView,
                    {
                        backgroundColor: isDark ? appColors.darkTheme : appColors.white,
                    },
                ]}
            >
                {isFirstTimeLoading && <SkeletonLoader />}
                {!isFirstTimeLoading && storeItemList.length === 0 && <NoDataFound
                    headerTitle="home.noInternet"
                    image={noNotification}
                    title="newDeveloper.Nodatafound"
                    content="newDeveloper.noCouponFound"
                    gradiantBtn={<GradientBtn
                        additionalStyle={{ bottom: windowHeight(2) }}
                        label={'common.refresh'}
                        onPress={() => {
                            dispatch(storeItemsActions.resetState())
                        }} />} infoImage={undefined} />}

                {!isFirstTimeLoading && storeItemList.length > 0 &&
                    <FlatList
                        style={{ marginTop: 5, padding: windowWidth(2) }}
                        data={storeItemList}
                        onEndReached={handleScrollProcessing}
                        renderItem={({ item }) => {
                            const price = item?.price
                            let discountedPrice = price
                            if (Number(item.discount) > 0) {
                                if (item.discount_type === 'amount') {
                                    discountedPrice = price - item.discount
                                }
                                if (item.discount_type === 'percent') {
                                    discountedPrice = price * (1 - (item.discount / 100))
                                }
                            }



                            return <>
                                <PanelCard
                                    id={item.id}
                                    title={item.name}
                                    imageUrl={item.image_full_url ? item.image_full_url : "https://via.placeholder.com/80"}
                                    price={discountedPrice}
                                    originalPrice={item.discount > 0 ? price : 0}
                                    discount={Number(item.discount) > 0 ? item.discount_type === 'percent' ? `${Number(item.discount)}% OFF` : `${Number(item.discount)}${currSymbol} OFF` : ''}
                                    rating={Number(item?.avg_rating)}
                                    reviews={Number(item?.rating_count)}
                                    status={item.status}
                                    onEdit={() => {
                                        navigateToEditPage(String(item.id))
                                    }}
                                    onDelete={() => { deleteItemFromList(item.id) }}

                                />
                            </>
                        }} />
                }
                <View style={GlobalStyle.blankView} />
                {scrollPaging && <ActivityIndicator />}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    fixedFilter: {
        top: 0,
        width: '100%',
        zIndex: 1,

        paddingVertical: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 3
    },
     
});
