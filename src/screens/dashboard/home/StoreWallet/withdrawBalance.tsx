import appColors from '@src/theme/appColors';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Ensure you have react-native-vector-icons installed
import { useValues } from '../../../../../App';
import { getIndianPriceFormat } from '@src/config/utility';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';

interface Response {
  data: any;
  status: number;
  statusText: string;
  headers: any;
  config: any;
  request?: any;
}
const WithdrawBalance: React.FC = () => {
  const { isDark, t, currSymbol } = useValues();
  const {withdraw_able_balance} = useSelector((state: RootState)=>state['storeProfileData'])
  
  return (
    <View style={styles.container}>
      <View style={styles.balanceContainer}>
        <Icon name="account-balance-wallet" size={40} color="#fff" />
        <View style={styles.textContainer}>
          <Text style={styles.label}>{t('newDeveloper.WithdrawableBalance')}</Text>
          <Text style={styles.amount}>{currSymbol} {getIndianPriceFormat(withdraw_able_balance)}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.withdrawButton}>
        <Text style={styles.withdrawButtonText}>{t('newDeveloper.Withdraw')}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: appColors.primary,
    padding: 16,
    borderRadius: 8,
    margin: 16,
  },
  balanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    marginLeft: 16,
  },
  label: {
    color: '#fff',
    fontSize: 14,
  },
  amount: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  withdrawButton: {
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  withdrawButtonText: {
    color:appColors.primary,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default WithdrawBalance;
