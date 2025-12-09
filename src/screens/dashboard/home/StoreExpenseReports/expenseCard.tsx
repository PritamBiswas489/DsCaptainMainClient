import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useValues } from '../../../../../App';
import appColors from '@src/theme/appColors';
import { ExpenseInterface } from '@src/interfaces/store/expense.interface';
import { datetimeArr } from '@src/config/utility';
import { convertToTitleCase } from '@src/config/utility';

type ExpenseItemProps = {
     
    item:ExpenseInterface
};

const ExpenseItemCard: React.FC<ExpenseItemProps> = ({   item}) => {
    const { isDark, t, currSymbol } = useValues();
    const dateFormatted = datetimeArr(item.created_at)
    return (
        <View style={[styles.container,
        { backgroundColor: isDark ? appColors.darkCardBg : appColors.white, }
        ]}>
            <Text style={[styles.orderId,
            { color: isDark ? appColors.white : appColors.darkText }
            ]}>{t('newDeveloper.OrderID')}: #{item.order_id}</Text>
            <View style={[styles.dateRow]}>
                <Text style={[styles.dateText,
                { color: isDark ? appColors.darkSubText : appColors.darkText }
                ]}>{`${dateFormatted.day} ${dateFormatted.month} ${dateFormatted.year}`} {`${dateFormatted.hours}:${dateFormatted.minutes} ${dateFormatted.ampm}`}</Text>
                <Text style={[styles.amountLabel,
                 { color: isDark ? appColors.darkSubText : appColors.darkText }
                ]}>{t('newDeveloper.Amount')}</Text>
            </View>
            <View style={[styles.expenseRow]}>
                <Text style={[styles.expenseTypeLabel,
                    { color: isDark ? appColors.darkSubText : appColors.darkText }
                ]}>{t('newDeveloper.ExpenseType')} -</Text>

                <Text style={[styles.expenseType,
                    { color: appColors.primary }
                ]}>{convertToTitleCase(item.type)}</Text>
                <Text style={[styles.amount,
                     { color: isDark ? appColors.white : appColors.darkText }
                ]}>{currSymbol}{item.amount}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
    },
    orderId: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 8,
    },
    dateRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    dateText: {
    },
    amountLabel: {
        fontWeight: 'bold',
    },
    expenseRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    expenseTypeLabel: {
    },
    expenseType: {
    },
    amount: {
        fontWeight: 'bold',
        fontSize: 16,
    },
});
export default ExpenseItemCard;
