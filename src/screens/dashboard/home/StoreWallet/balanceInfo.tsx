import appColors from '@src/theme/appColors';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useValues } from '../../../../../App';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
import { getIndianPriceFormat } from '@src/config/utility';

const BalanceInfo: React.FC = () => {
  const { isDark, t, currSymbol } = useValues();
  const { cash_in_hands, withdraw_able_balance } = useSelector((state: RootState) => state['storeProfileData'])
  return (
    <View style={styles.container}>
      <View style={[styles.card, { backgroundColor: isDark ? appColors.darkCardBg : appColors.white }]}>
        <Text style={styles.amount}>{currSymbol} {getIndianPriceFormat(cash_in_hands)}</Text>
        <Text style={[styles.label, { color: isDark ? appColors.white : appColors.darkText }]}>{t('newDeveloper.CashinHand')}</Text>
      </View>
      <View style={[styles.card, { backgroundColor: isDark ? appColors.darkCardBg : appColors.white }]}>
        <Text style={styles.amount}>{currSymbol} {getIndianPriceFormat(withdraw_able_balance)}</Text>
        <Text style={[styles.label, { color: isDark ? appColors.white : appColors.darkText }]}>{t('newDeveloper.WithdrawableBalance')}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 4,
  },
  card: {
    flex: 1,
    padding: 8,
    margin: 8,
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  amount: {
    fontSize: 18,
    color: appColors.primary,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 14,
    marginTop: 8,
  },
});

export default BalanceInfo;
