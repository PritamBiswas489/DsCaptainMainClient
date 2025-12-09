import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { dashBoardData } from './data/data';
import GridItem from './gridItem';
// import {styles} from '../countStatistics/gridItem/styles';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
import { convertToScale } from '@src/config/utility';
import appColors from '@src/theme/appColors';
import { useValues } from '../../../../../../../App';
import { windowWidth } from '@src/theme/appConstant';


const statusColor: Record<'pending' | 'accepted' | 'ongoing' | 'completed' | 'canceled', string> = {
  pending: appColors.pending,
  accepted: appColors.accepted,
  ongoing: appColors.primary,
  completed: appColors.success,
  canceled: appColors.error,
};

export const CountStatistics = () => {
  const { isDark, t, currSymbol } = useValues()

  //======= booking count ===================//
  const {
    accountInfo,
  } = useSelector(
    (state: RootState) => state['transactionReports']
  );



  return (
    <ScrollView horizontal={true} style={styles.scrollView}>
      <View style={styles.container}>
        {/* Provider balance */}
        <View style={styles.panel}>
          <View style={[styles.gridItem, {
            backgroundColor: isDark ? appColors.darkCard : appColors.boxBg,
            borderColor: isDark ? appColors.darkBorder : appColors.border
          }]}>
            <Text style={[
              styles.number,
              { color: appColors.primary, }
            ]}>{currSymbol}{convertToScale(accountInfo?.received_balance)}</Text>
            <Text style={
              [styles.text,
              { color: isDark ? appColors.white : appColors.darkText, }
              ]}>{t('newDeveloper.Providerbalance')}</Text>
          </View>
        </View>
        {/* Pending balance */}
        <View style={styles.panel}>
          <View style={[styles.gridItem, {
            backgroundColor: isDark ? appColors.darkCard : appColors.boxBg,
            borderColor: isDark ? appColors.darkBorder : appColors.border
          }]}>
            <Text style={[
              styles.number,
              { color: appColors.primary, }
            ]}>{currSymbol}{convertToScale(accountInfo?.balance_pending)}</Text>
            <Text style={
              [styles.text,
              { color: isDark ? appColors.white : appColors.darkText, }
              ]}>{t('newDeveloper.Pendingbalance')}</Text>
          </View>
        </View>
        {/* Already Withdrawn */}
        <View style={styles.panel}>
          <View style={[styles.gridItem, {
            backgroundColor: isDark ? appColors.darkCard : appColors.boxBg,
            borderColor: isDark ? appColors.darkBorder : appColors.border
          }]}>
            <Text style={[
              styles.number,
              { color: appColors.primary, }
            ]}>{currSymbol}{convertToScale(accountInfo?.total_withdrawn)}</Text>
            <Text style={
              [styles.text,
              { color: isDark ? appColors.white : appColors.darkText, }
              ]}>{t('newDeveloper.AlreadyWithdrawn')}</Text>
          </View>
        </View>
        {/* Account Payable */}
        <View style={styles.panel}>
          <View style={[styles.gridItem, {
            backgroundColor: isDark ? appColors.darkCard : appColors.boxBg,
            borderColor: isDark ? appColors.darkBorder : appColors.border
          }]}>
            <Text style={[
              styles.number,
              { color: appColors.primary, }
            ]}>{currSymbol}{convertToScale(accountInfo?.account_payable)}</Text>
            <Text style={
              [styles.text,
              { color: isDark ? appColors.white : appColors.darkText, }
              ]}>{t('newDeveloper.AccountPayable')}</Text>
          </View>
        </View>
        {/* Account Receivble */}
        <View style={styles.panel}>
          <View style={[styles.gridItem, {
            backgroundColor: isDark ? appColors.darkCard : appColors.boxBg,
            borderColor: isDark ? appColors.darkBorder : appColors.border
          }]}>
            <Text style={[
              styles.number,
              { color: appColors.primary, }
            ]}>{currSymbol}{convertToScale(accountInfo.account_receivable)}</Text>
            <Text style={
              [styles.text,
              { color: isDark ? appColors.white : appColors.darkText, }
              ]}>{t('newDeveloper.AccountReceivble')}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  scrollView: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  panel: {
    marginHorizontal: 5,
    width: 200,
    justifyContent: 'center',

  },
  gridItem: {
    padding: 10,
    marginBottom: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  number: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
  },
  text: {
    fontSize: 16,
    color: '#666',
  },
  gridRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  gridItemSmall: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  smallNumber: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  smallText: {
    fontSize: 12,
    textAlign: 'center',
  },
});