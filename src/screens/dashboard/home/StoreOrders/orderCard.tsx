import appColors from '@src/theme/appColors';
import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useValues } from '../../../../../App';
import { StoreOrderInterface } from '@src/interfaces/store/order.interface';
import { datetimeArr } from '@src/config/utility';
const statusColor: Record<'delivered' | 'refunded', string> = {
    delivered: appColors.success,
    refunded: appColors.error,
};
function isValidOrderStatus(status: string): status is keyof typeof statusColor {
    return status in statusColor;
 }
  
//order card 
const OrderCard = ({ item }: { item: StoreOrderInterface }) => {
    const { isDark, t } = useValues();
    const tt = datetimeArr(item.created_at)
    return <View style={styles.orderContainer}>
        <View style={styles.orderInfo}>
            <Text style={[styles.orderId, { color: isDark ? appColors.white : appColors.darkText }]}>Order ID: {item.id}</Text>
            <Text style={[styles.orderDate, { color: isDark ? appColors.darkSubText : appColors.darkText }]}>{tt.day} {tt.month} {tt.year} {tt.hours} {tt.minutes} {tt.ampm}</Text>
            <Text style={[styles.orderType, { color: appColors.primary }]}>{t(`newDeveloper.${item.order_type}`)}</Text>
        </View>
        <View style={[styles.statusButton, { backgroundColor: isValidOrderStatus(item.order_status) && statusColor?.[item.order_status] ? statusColor?.[item.order_status] :  appColors.primary }]}>
            <Text style={[styles.statusText, { color: appColors.white }]}>{t(`newDeveloper.${item.order_status}`)}</Text>
        </View>
    </View>
};

const styles = StyleSheet.create({
    orderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    orderInfo: {
        flexDirection: 'column',
    },
    orderId: {
        fontWeight: 'bold',
    },
    orderDate: {

    },
    orderType: {

    },
    statusButton: {
        borderRadius: 4,
        paddingVertical: 1,
        paddingHorizontal: 8,
        height: 25
    },
    statusText: {
        fontWeight: 'bold',
    },
});

export default OrderCard;
