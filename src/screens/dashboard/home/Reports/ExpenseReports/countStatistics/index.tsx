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
 
export const CountStatistics = () => {
  const { isDark, t, currSymbol } = useValues()

  //======= booking count ===================//
  const { promotionalCost } = useSelector(
    (state: RootState) => state['businessExpenses']
  );
  const {
    total_expense,
    discount,
    coupon,
    campaign,
  } = promotionalCost



  return (
    <ScrollView horizontal={true} style={styles.scrollView}>
      <View style={styles.container}>

        <View style={styles.panel}>
          <View style={[styles.gridItem, {
            backgroundColor: isDark ? appColors.darkCard : appColors.boxBg,
            borderColor: isDark ? appColors.darkBorder : appColors.border
          }]}>
            <Text style={[
              styles.number,
              { color: appColors.primary, }
            ]}>{currSymbol}{convertToScale(total_expense)}</Text>
            <Text style={
              [styles.text,
              { color: isDark ? appColors.white : appColors.darkText, }
              ]}>{t('Total Expense')}</Text>
          </View>
        </View>

        <View style={styles.panel}>
          <View style={[styles.gridItem, {
            backgroundColor: isDark ? appColors.darkCard : appColors.boxBg,
            borderColor: isDark ? appColors.darkBorder : appColors.border
          }]}>
            <Text style={[
              styles.number,
              { color: appColors.primary, }
            ]}>{currSymbol}{convertToScale(discount)}</Text>
            <Text style={
              [styles.text,
              { color: isDark ? appColors.white : appColors.darkText, }
              ]}>{t('Normal Service Discount')}</Text>
          </View>
        </View>

        <View style={styles.panel}>
          <View style={[styles.gridItem, {
            backgroundColor: isDark ? appColors.darkCard : appColors.boxBg,
            borderColor: isDark ? appColors.darkBorder : appColors.border
          }]}>
            <Text style={[
              styles.number,
              { color: appColors.primary, }
            ]}>{currSymbol}{convertToScale(campaign)}</Text>
            <Text style={
              [styles.text,
              { color: isDark ? appColors.white : appColors.darkText, }
              ]}>{t('Campaign Discount')}</Text>
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
            ]}>{currSymbol}{convertToScale(coupon)}</Text>
            <Text style={
              [styles.text,
              { color: isDark ? appColors.white : appColors.darkText, }
              ]}>{t('Coupon Discount')}</Text>
          </View>
          {/* Account Receivble */}

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