import {View, Text} from 'react-native';
import React from 'react';
import TextRow from '@otherComponent/home/serviceContent/textRow';
import appColors from '@theme/appColors';
import {Clock, Location} from '@utils/icons';
import appFonts from '@theme/appFonts';
import {windowHeight, windowWidth} from '@theme/appConstant';
import {useValues} from '../../../../../../../App';

export function Description() {
  const {isDark,t} = useValues();
  return (
    <View style={{marginVertical: windowHeight(2), marginTop: windowHeight(2)}}>
      <TextRow
        title={'customTime.dateTime'}
        content={
          t('booking.date') + ' ' + t('booking.at') + ' ' + t('booking.time')
        }
        color={appColors.success}
        icon={
          <Clock
            height={'24'}
            color={isDark ? appColors.white : appColors.darkText}
          />
        }
        rowStyle={{paddingTop: 0}}
        titleStyle={{fontFamily: appFonts.NunitoSemiBold}}
      />
      <TextRow
        title={'customTime.location'}
        content={'bookingDetail.locationAddress'}
        color={appColors.darkText}
        icon={
          <Location color={isDark ? appColors.white : appColors.darkText} />
        }
        titleStyle={{
          fontFamily: appFonts.NunitoSemiBold,
          width: windowWidth(60),
          color: isDark ? appColors.lightText : appColors.darkText,
        }}
      />
    </View>
  );
}
