import appColors from '@src/theme/appColors';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useValues } from '../../../../../App';
import WithdrawRequestList from './withdrawRequest';
import PaymentHistoryList from './paymentHistory';
import { WithdrawInterface } from '@src/interfaces/store/withdraw.interface';
import { PaymentInterface } from '@src/interfaces/store/payment.interface';


const TransactionHistory: React.FC<{withdrawList:WithdrawInterface[],paymentList:PaymentInterface[]}> = ({withdrawList,paymentList}) => {
    const { isDark, t } = useValues();
    const [listTabTyle,setListTabType] = useState<string>('transaction')
    return (
        <View style={styles.container}>
            <View style={styles.tabContainer}>
                <TouchableOpacity onPress={()=>setListTabType('transaction')}>
                    <Text style={ [listTabTyle === 'transaction' ? styles.activeTab : styles.inactiveTab,{color: isDark ? appColors.white : appColors.darkText,}]}>{t('newDeveloper.WithdrawRequest')}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>setListTabType('payment')}>
                    <Text style={[listTabTyle === 'payment' ? styles.activeTab : styles.inactiveTab,{color: isDark ? appColors.white : appColors.darkText,}]}>{t('newDeveloper.PaymentHistory')}</Text>
                </TouchableOpacity>
            </View>

            {listTabTyle === 'transaction' && <WithdrawRequestList  withdrawList={withdrawList}/> } 
            {listTabTyle === 'payment' && <PaymentHistoryList  paymentList={paymentList} />}
             
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    tabContainer: {
        flexDirection: 'row',
        marginBottom: 16,
    },
    activeTab: {
        fontSize: 16,
        fontWeight: 'bold',
        color: appColors.primary,
        borderBottomWidth: 2,
        borderBottomColor: appColors.primary,
        paddingBottom: 4,
        marginRight: 16,
    },
    inactiveTab: {
        fontSize: 16,
        paddingBottom: 4,
        marginRight: 16,
    },
    transactionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    transactionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    viewAll: {
        fontSize: 16,
        color: appColors.primary,
    },
    transactionDetails: {
        padding: 16,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    amount: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    detailContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    detail: {
        fontSize: 14,
    },
    date: {
        fontSize: 14,
    },
    status: {
        fontSize: 16,
        fontWeight: 'bold',
        color: appColors.primary,
    },
});

export default TransactionHistory;
