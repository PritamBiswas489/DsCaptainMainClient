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
import BannerCard from './bannerCard';



import SkeletonLoader from '@src/commonComponents/SkeletonLoader';
import NoDataFound from '@src/commonComponents/noDataFound';
import { noNotification, wifi } from '@src/utils/images';
import { windowHeight } from '@src/theme/appConstant';
import GradientBtn from '@src/commonComponents/gradientBtn';
 

import { getBanners } from '@src/services/store/banner.service';
import { vendorBannerActions } from '@src/store/redux/store/banner-redux';
import { BannerInterface } from '@src/interfaces/store/banner.interface';
import { deleteBanner } from '@src/services/store/banner.service';
interface Response {
    data: any;
    status: number;
    statusText: string;
    headers: any;
    config: any;
    request?: any;
}
type routeProps = NativeStackNavigationProp<RootStackParamList>;

//List banners
export default function ListBanners() {
    const dispatch = useDispatch()
    const { isDark, t } = useValues();
    const [refreshing, setRefreshing] = React.useState(false);
    const {
        data: bannerList,
        isFirstTimeLoading,
    } = useSelector((state: RootState) => state['vendorBannerList'])

    //drag screen refresh page
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        dispatch(vendorBannerActions.resetState())
        setTimeout(() => {
            setRefreshing(false);
        }, 1000);
    }, []);
    //async addons load for data show
    const asyncBanners = async () => {
        const response: Response = await getBanners()
        if (response?.data[0]?.id) {
            dispatch(vendorBannerActions.setData({ field: 'data', data: response?.data }))
        }
        dispatch(vendorBannerActions.setData({
            field: 'isFirstTimeLoading',
            data: false
        }));
    }
    useEffect(() => {
        console.log(isFirstTimeLoading)
        if (isFirstTimeLoading) {
            asyncBanners()
        }
    }, [isFirstTimeLoading])

    const { navigate } = useNavigation<routeProps>();

    const navigateToEditPage = (banner:BannerInterface) => {
        navigate('EditVendorBanner', { 
            id: String(banner.id), 
            title:banner.title, 
            image:banner.image_full_url,
            bannerLink:banner.default_link
           }); 
    }
    const deleteBannerFromList = (bannerId: number) => {
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
                        dispatch(vendorBannerActions.deleteBannerById(bannerId))
                        deleteBanner(bannerId)
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
                title={'newDeveloper.ListBanners'}
                content={''}
                trailIcon1={<AddItemIcon />}
                onTrailIcon={() => { navigate('VendorAddNewBanner') }}
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
                {!isFirstTimeLoading && bannerList.length === 0 && <NoDataFound
                    headerTitle="home.noInternet"
                    image={noNotification}
                    title="newDeveloper.Nodatafound"
                    content="newDeveloper.noCouponFound"
                    gradiantBtn={<GradientBtn
                        additionalStyle={{ bottom: windowHeight(2) }}
                        label={'common.refresh'}
                        onPress={() => {
                            dispatch(vendorBannerActions.resetState())
                        }} />} infoImage={undefined} />}

                {!isFirstTimeLoading && bannerList.length > 0 && bannerList.map((banner, index) => (
                <BannerCard
                banner={banner}
                navigateToEditPage={navigateToEditPage}
                deleteBannerFromList={deleteBannerFromList}
                />
                ))}
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
