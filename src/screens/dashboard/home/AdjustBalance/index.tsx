import { TouchableOpacity, View, Alert, StyleSheet, RefreshControl, Text } from 'react-native';
import { ScrollView } from 'react-native-virtualized-view';
import React, { useEffect, useState } from 'react';
import { GlobalStyle } from '@style/styles';

import Header from '@commonComponents/header';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from 'src/navigation/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import appColors from '@theme/appColors';
import { useValues } from '../../../../../App';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
import Toast from 'react-native-toast-message';
import { adjustBalance } from '@src/services/withdraw.service';
import Spinner from 'react-native-loading-spinner-overlay';
import { getAuthUserService } from '@src/services/auth.service';
import { serviceProviderAccountDataActions } from '@src/store/redux/service-provider-account-data.redux';

type routeProps = NativeStackNavigationProp<RootStackParamList>;
interface Response {
    data: any;
    status: number;
    statusText: string;
    headers: any;
    config: any;
    request?: any;
}
// Adjust balance function
export default function AdjustBalance() {
    const dispatch = useDispatch();
    const { isDark, isServiceManLogin } = useValues();
    const { navigate, goBack } = useNavigation<routeProps>();

    const { currSymbol, currValue, t } = useValues();
    const { owner } = useSelector((state: RootState) => state['serviceProviderAccountData'])
    const { account } = owner
    const { account_receivable, account_payable } = account
    const [loaderSpinner, setLoaderSpinner] = useState(false)


    //account receivable and account payable 
    useEffect(() => {
        if (account_receivable !== account_payable) {
            Toast.show({
                type: 'error',
                text1: 'ERROR',
                text2: t('newDeveloper.NotAdjustBalance'),
            });
            goBack()
        }

    }, [account_receivable, account_payable])



    //handle adjust balance
    const handleAdjustBalance = async () => {
        setLoaderSpinner(true)    
        const response:Response = await adjustBalance()
        console.log(response?.data)
        if (response?.data?.response_code === "adjusted_successfully_200") {   
            Toast.show({
                type: 'success',
                text1: t('newDeveloper.BalanceAdjusted'),
                text2: t('newDeveloper.BalanceAdjustedMessage'),
            });
            const response = await getAuthUserService()
            if (response?.data?.response_code === 'default_200' && response?.data?.content?.provider_info?.id) {
                dispatch(serviceProviderAccountDataActions.setData(response?.data?.content?.provider_info))
            }
            setLoaderSpinner(false)  
            navigate('ProfileAccountInformation')
        } else {   
            setLoaderSpinner(false)  
            if (response?.data?.message) {
                Toast.show({
                    type: 'error',
                    text1: 'ERROR',
                    text2: response?.data?.message,
                });
            } else {
                Toast.show({
                    type: 'error',
                    text1: 'ERROR',
                    text2: t('newDeveloper.failedAdjustment'),
                });
            }
        }
    };

    return (
        <View style={[styles.container, { backgroundColor: isDark ? appColors.darkCardBg : appColors.white }]}>
            <Header
                showBackArrow={true}
                title={'newDeveloper.AdjustBalance'}
                content={''}
            />
            <ScrollView
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
                <View style={GlobalStyle.blankView} />
                {/* Panel with content */}
                <View style={styles.panel}>
                    <Text style={styles.panelText}>{t('newDeveloper.ReceivableAmount')}: {currSymbol}{account_receivable}</Text>
                    <Text style={styles.panelText}>{t('newDeveloper.PayableAmount')}: {currSymbol}{account_payable}</Text>
                    <TouchableOpacity style={styles.button} onPress={handleAdjustBalance}>
                        <Text style={styles.buttonText}>{t('newDeveloper.AdjustYourBalance')}</Text>
                    </TouchableOpacity>
                </View>
                <View style={GlobalStyle.blankView} />
            </ScrollView>
            <Spinner
                visible={loaderSpinner}
                textContent={'Processing.....'}
                textStyle={{ color: '#FFF' }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    panel: {
        padding: 20,
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        marginHorizontal: 20,
        marginVertical: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 3,
    },
    panelText: {
        fontSize: 16,
        marginBottom: 10,
        color: '#333',
    },
    button: {
        backgroundColor: appColors.primary,
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
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
        elevation: 3,
    },
});
