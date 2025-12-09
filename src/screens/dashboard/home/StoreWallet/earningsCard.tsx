import appColors from '@src/theme/appColors';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useValues } from '../../../../../App';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
import { getIndianPriceFormat } from '@src/config/utility';

const EarningsCard = () => {
  const { isDark, t, currSymbol } = useValues();
  const { total_earning, total_withdrawn,pending_withdraw } = useSelector((state: RootState) => state['storeProfileData'])
  return (
    <View style={styles.container}>
      <View style={[styles.card,{backgroundColor:isDark ? appColors.darkCardBg : appColors.white  }]}>
        <Text style={styles.amount}>{currSymbol} { getIndianPriceFormat(pending_withdraw) }</Text>
        <Text style={[styles.label,{color: isDark ? appColors.white : appColors.darkText,}]}>{t('newDeveloper.PendingWithdraw')}</Text>
      </View>
      <View style={[styles.card,{backgroundColor:isDark ? appColors.darkCardBg : appColors.white  }]}>
        <Text style={styles.amount}>{currSymbol} { getIndianPriceFormat(total_withdrawn) }</Text>
        <Text style={[styles.label,{color: isDark ? appColors.white : appColors.darkText,}]}>{t('newDeveloper.AlreadyWithdrawn')}</Text>
      </View>
      <View style={[styles.card,{backgroundColor:isDark ? appColors.darkCardBg : appColors.white  }]}>
        <Text style={styles.amount}>{currSymbol} { getIndianPriceFormat(total_earning) }</Text>
        <Text style={[styles.label,{color: isDark ? appColors.white : appColors.darkText,}]}>{t('newDeveloper.TotalEarning')}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  card: {

    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    elevation: 2, // For shadow on Android
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4, // For shadow on iOS
  },
  amount: {
    fontSize: 20,
    color: appColors.primary, // Green color
    fontWeight: 'bold',
  },
  label: {
    fontSize: 14,
    marginTop: 4,
  },
});

export default EarningsCard;
