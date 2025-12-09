import { TouchableOpacity, View, Alert, StyleSheet, RefreshControl, ActivityIndicator, FlatList } from 'react-native';
import { ScrollView } from 'react-native-virtualized-view';
import React, { useEffect, useState, useReducer } from 'react';
import { GlobalStyle } from '@style/styles';
import { Notification, Search, BookingFilterIcon, AddItemIcon } from '@utils/icons';
import Header from '@commonComponents/header';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from 'src/navigation/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import appColors from '@theme/appColors';
import { useValues } from '../../../../../../App';
import { useSelector, useDispatch } from 'react-redux';
import SkeletonLoader from '@src/commonComponents/SkeletonLoader';

import HomeNoFataFound from '@src/commonComponents/homeNoDataFound';
import CampaignCard from './campaignCard';
import { getCampaigns } from '@src/services/store/campaign.service';
import { CampaignInterface } from '@src/interfaces/store/campaign.interface';
import { joinCampaign } from '@src/services/store/campaign.service';
import { leaveCampaign } from '@src/services/store/campaign.service';

interface Response {
    data: any;
    status: number;
    statusText: string;
    headers: any;
    config: any;
    request?: any;
}
const currentDate = new Date();
const previousDate = new Date();
previousDate.setDate(currentDate.getDate() - 30);
const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};
//Expense interface
interface CampaignState {
    campaigns: CampaignInterface[];
}
//Expense state
const initialState: CampaignState = {
    campaigns: [],
}
//action
type Action =
    | { type: 'SET_CAMPAIGNS'; payload: typeof initialState.campaigns }
    | { type: 'RESET_ALL' };
;
//reducer
const reducer = (state: CampaignState, action: Action): CampaignState => {
    switch (action.type) {
        case 'SET_CAMPAIGNS':
            return { ...state, campaigns: action.payload };
        case 'RESET_ALL':
            return {
                ...initialState
            };
        default:
            return state;
    }
}

type routeProps = NativeStackNavigationProp<RootStackParamList>;
//Store List Campaign
export default function StoreListCampaign() {
    const { isDark, t } = useValues();
    const { navigate } = useNavigation<routeProps>();
    const dispatch = useDispatch()
    const [refreshing, setRefreshing] = React.useState(false);
    const [isFirstTimeLoading, setIsFirstTimeLoading] = useState(true)
    const [CAMPAIGN_STATE, CAMPAIGN_DISPATCH] = useReducer(reducer, initialState);

    //DRAG SCREEN REFRESH PAGE
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        reset()
        setTimeout(() => {
            setRefreshing(false);
        }, 1000);
    }, []);
    //ASYNC CAMPAIGN LOAD FOR DATA SHOW
    const loadCampaignDataOnload = async () => {
        const [campaigns] = await Promise.all([getCampaigns()])
        if (campaigns?.data && campaigns?.data.length > 0) {
            CAMPAIGN_DISPATCH({ type: 'SET_CAMPAIGNS', payload: campaigns?.data })
        }
        setIsFirstTimeLoading(false)
    }
    //ONLOAD CAMPAIGN LOAD 
    useEffect(() => {
        if(isFirstTimeLoading){
            loadCampaignDataOnload()
        }
    }, [isFirstTimeLoading])

    //RESET DATA LISTING
    const reset = () => {
        setIsFirstTimeLoading(true)
        CAMPAIGN_DISPATCH({ type: 'SET_CAMPAIGNS', payload: [] });
    }

    const joinCampaignProcessing = async(campaign_id:number) =>{
        console.log(campaign_id)
        await joinCampaign(campaign_id)
        setIsFirstTimeLoading(true)

    }
    const leaveCampaignProcessing = async (campaign_id:number)=>{
        await leaveCampaign(campaign_id)
        setIsFirstTimeLoading(true)

    }

    return (
        <View style={[styles.container, { backgroundColor: isDark ? appColors.darkCardBg : appColors.white }]}>
            <Header
                showBackArrow={true}
                title={'newDeveloper.CampaignList'}
                content={''}
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
                        marginTop: 10
                    },
                ]}
            >
                {isFirstTimeLoading && <SkeletonLoader />}
                {!isFirstTimeLoading && CAMPAIGN_STATE.campaigns.length === 0 && <HomeNoFataFound message={t('newDeveloper.Nodatafound')} />}
                {!isFirstTimeLoading && CAMPAIGN_STATE.campaigns.length > 0 &&
                    <FlatList
                        data={CAMPAIGN_STATE.campaigns}
                        keyExtractor={(item) => 'campaign' + item.id}
                        renderItem={({ item }) => (
                            <>
                                <CampaignCard leaveCampaignProcessing={leaveCampaignProcessing} joinCampaignProcessing={joinCampaignProcessing} item={item} />

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
