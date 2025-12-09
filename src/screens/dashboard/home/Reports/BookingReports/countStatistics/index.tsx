import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { dashBoardData } from './data/data';
import GridItem from './gridItem';
// import {styles} from '../countStatistics/gridItem/styles';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
import { formatNumberWithAbbreviation } from '@src/config/utility';
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
  const { isDark, t } = useValues()

  //======= booking count ===================//
  const {
    bookings_count,
    booking_amount
  } = useSelector(
    (state: RootState) => state['bookingReports']
  );



  return (
    <ScrollView horizontal={true} style={styles.scrollView}>
      <View style={styles.container}>
        {/* First Grid Item */}
        <View style={styles.panel}>
          <View style={[styles.gridItem, {
            backgroundColor: isDark ? appColors.darkCard : appColors.boxBg,
            borderColor: isDark ? appColors.darkBorder : appColors.border
          }]}>
            <Text style={[
              styles.number,
              { color: isDark ? appColors.white : appColors.darkText, }
            ]}>{formatNumberWithAbbreviation(bookings_count?.total_bookings)}</Text>
            <Text style={
              [styles.text,
              { color: isDark ? appColors.white : appColors.darkText, }
              ]}>{t('newDeveloper.TotalBooking')}</Text>
          </View>

          {/* Second Grid Row */}
          <View style={styles.gridRow}>
            <View style={[styles.gridItemSmall,
            {
              backgroundColor: isDark ? appColors.darkCard : appColors.boxBg,
              borderColor: isDark ? appColors.darkBorder : appColors.border
            }
            ]}>
              <Text style={[styles.smallNumber,
              { color: isDark ? appColors.white : appColors.darkText, }
              ]}>{formatNumberWithAbbreviation(bookings_count?.canceled)}</Text>
              <Text style={[styles.smallText, { color: statusColor['canceled'] }]}>{t('newDeveloper.CanceledServices')}</Text>
            </View>
            <View style={[styles.gridItemSmall,
            {
              backgroundColor: isDark ? appColors.darkCard : appColors.boxBg,
              borderColor: isDark ? appColors.darkBorder : appColors.border
            }
            ]}>
              <Text style={[styles.smallNumber,
              { color: isDark ? appColors.white : appColors.darkText, }
              ]}>{formatNumberWithAbbreviation(bookings_count?.ongoing)}</Text>
              <Text style={[styles.smallText, { color: statusColor['ongoing'] }]}>{t('newDeveloper.OnGoingServices')}</Text>
            </View>
            <View style={[styles.gridItemSmall,
            {
              backgroundColor: isDark ? appColors.darkCard : appColors.boxBg,
              borderColor: isDark ? appColors.darkBorder : appColors.border
            }
            ]}>
              <Text style={[styles.smallNumber,
              { color: isDark ? appColors.white : appColors.darkText, }
              ]}>{formatNumberWithAbbreviation(bookings_count?.accepted)}</Text>
              <Text style={[styles.smallText, { color: statusColor['accepted'] }]}>{t('newDeveloper.accepted')}</Text>
            </View>
            <View style={[styles.gridItemSmall,
            {
              backgroundColor: isDark ? appColors.darkCard : appColors.boxBg,
              borderColor: isDark ? appColors.darkBorder : appColors.border
            }
            ]}>
              <Text style={[styles.smallNumber,
              { color: isDark ? appColors.white : appColors.darkText, }
              ]}>{formatNumberWithAbbreviation(bookings_count?.completed)}</Text>
              <Text style={[styles.smallText, { color: statusColor['completed'] }]}>{t('newDeveloper.CompletedServices')}</Text>
            </View>
          </View>
        </View>

        {/* Repeat the whole panel if more items are needed */}
        <View style={styles.panel}>
          <View style={[styles.gridItem, {
            backgroundColor: isDark ? appColors.darkCard : appColors.boxBg,
            borderColor: isDark ? appColors.darkBorder : appColors.border
          }]}>
            <Text style={[
              styles.number,
              { color: isDark ? appColors.white : appColors.darkText, }
            ]}>{formatNumberWithAbbreviation(booking_amount.total_booking_amount)}</Text>
            <Text style={
              [styles.text,
              { color: isDark ? appColors.white : appColors.darkText, }
              ]}>{t('newDeveloper.TotalBookingAmount')}</Text>
          </View>
          <View style={styles.gridRow}>
            <View style={[styles.gridItemSmall,
            {
              backgroundColor: isDark ? appColors.darkCard : appColors.boxBg,
              borderColor: isDark ? appColors.darkBorder : appColors.border,
              width: windowWidth(38)
            }
            ]}>
              <Text style={[styles.smallNumber,
              { color: isDark ? appColors.white : appColors.darkText, }
              ]}>{formatNumberWithAbbreviation(booking_amount.total_unpaid_booking_amount)}</Text>
              <Text style={styles.smallText}>{t('newDeveloper.DueAmount')}</Text>
            </View>
            <View style={[styles.gridItemSmall,
            {
              backgroundColor: isDark ? appColors.darkCard : appColors.boxBg,
              borderColor: isDark ? appColors.darkBorder : appColors.border,
              width: windowWidth(38)
            }
            ]}>
              <Text style={[styles.smallNumber,
              { color: isDark ? appColors.white : appColors.darkText, }
              ]}>{formatNumberWithAbbreviation(booking_amount.total_paid_booking_amount)}</Text>
              <Text style={styles.smallText}>{t('newDeveloper.AlreadySettled')}</Text>
            </View>
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
    width: 300,
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
    fontSize: 36,
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