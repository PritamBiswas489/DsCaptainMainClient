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
import AddonCard from './addonCard';



import SkeletonLoader from '@src/commonComponents/SkeletonLoader';
import NoDataFound from '@src/commonComponents/noDataFound';
import { noNotification, wifi } from '@src/utils/images';
import { windowHeight } from '@src/theme/appConstant';
import GradientBtn from '@src/commonComponents/gradientBtn';
import { deleteAddon, getVendorAddons } from '@src/services/store/addons.service';
import { vendorAddonsActions } from '@src/store/redux/store/addons-redux';

interface Response {
    data: any;
    status: number;
    statusText: string;
    headers: any;
    config: any;
    request?: any;
}
type routeProps = NativeStackNavigationProp<RootStackParamList>;

//List addons
export default function ListAddons() {
    const dispatch = useDispatch()
    const { isDark, t } = useValues();
    const [refreshing, setRefreshing] = React.useState(false);
    const {
        data: addonList,
        isFirstTimeLoading,
        isNoMoreData,
    } = useSelector((state: RootState) => state['vendorAddons'])

    //drag screen refresh page
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        dispatch(vendorAddonsActions.resetState())
        setTimeout(() => {
            setRefreshing(false);
        }, 1000);
    }, []);
    //async addons load for data show
    const asyncAddons = async () => {
        const response: Response = await getVendorAddons()
        if (response?.data[0]?.id) {
            dispatch(vendorAddonsActions.setData({ field: 'data', data: response?.data }))
        }
        dispatch(vendorAddonsActions.setData({
            field: 'isFirstTimeLoading',
            data: false
        }));
    }
    useEffect(() => {
        if (isFirstTimeLoading) {
            asyncAddons()
        }
    }, [isFirstTimeLoading])

    const { navigate } = useNavigation<routeProps>();

    const navigateToEditPage = (id: string, name:string,price:string) => {
        navigate('EditVendorAddon', {id,name,price }); 

    }
    const deleteAddonFromList = (addonid: number) => {
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
                        dispatch(vendorAddonsActions.deleteAddonById(addonid))
                        deleteAddon(addonid)
                    }
                }
            ],
            { cancelable: false } // prevents the alert from being dismissed by tapping outside
        );
    }
 
    return (
        <View style={[styles.container, { backgroundColor: isDark ? appColors.darkCardBg : appColors.white }]}>
            <Header
                showBackArrow={true}
                title={'newDeveloper.ListAddons'}
                content={''}
                trailIcon1={<AddItemIcon />}
                onTrailIcon={() => { navigate('VendorCreateAddons') }}
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
                {!isFirstTimeLoading && addonList.length === 0 && <NoDataFound
                    headerTitle="home.noInternet"
                    image={noNotification}
                    title="newDeveloper.Nodatafound"
                    content="newDeveloper.noCouponFound"
                    gradiantBtn={<GradientBtn
                        additionalStyle={{ bottom: windowHeight(2) }}
                        label={'common.refresh'}
                        onPress={() => {
                            dispatch(vendorAddonsActions.resetState())
                        }} />} infoImage={undefined} />}

                {!isFirstTimeLoading && addonList.length > 0 &&
                    <FlatList
                        data={addonList}
                        renderItem={({ item }) => (
                            <>
                                <AddonCard item={item} navigateToEditPage={navigateToEditPage} deleteAddonFromList={deleteAddonFromList} />
                            </>
                        )} />
                }
                <View style={GlobalStyle.blankView} />
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
