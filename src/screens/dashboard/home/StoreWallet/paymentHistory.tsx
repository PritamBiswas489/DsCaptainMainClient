import appColors from '@src/theme/appColors';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useValues } from '../../../../../App';
import { PaymentInterface } from '@src/interfaces/store/payment.interface';
import { datetimeArr, getIndianPriceFormat } from '@src/config/utility';
import HomeNoFataFound from '@src/commonComponents/homeNoDataFound';

const PaymentHistoryList: React.FC<{paymentList:PaymentInterface[]}> = ({paymentList}) => {
    const { isDark, t, currSymbol } = useValues();
    return (
        <View style={styles.container}>
            <View style={styles.transactionContainer}>
                <Text style={[styles.transactionTitle,{color: isDark ? appColors.white : appColors.darkText}]}>{t('newDeveloper.PaymentHistory')}</Text>
            </View>
            {paymentList.length > 0 ? paymentList.map((withdraw:PaymentInterface, withdrawIndex: number) => {
                return <View key={`${'payment'+withdrawIndex}`} style={[styles.transactionDetails, { backgroundColor: isDark ? appColors.darkCardBg : appColors.white }]}>
                    <Text style={[styles.amount, { color: isDark ? appColors.white : appColors.darkText }]}>{currSymbol} {getIndianPriceFormat(withdraw.amount)}</Text>
                    <View style={styles.detailContainer}>
                        
                        <Text style={[styles.date, { color: isDark ? appColors.darkSubText : appColors.darkText }]}>{withdraw.payment_time}</Text>
                    </View>
                    <Text style={styles.status}>{t('newDeveloper.PaidVia')} {withdraw.method.replace('_',' ')}</Text>
                </View>
            }) : <HomeNoFataFound message={t('newDeveloper.Nodatafound')} />}
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

export default PaymentHistoryList;
