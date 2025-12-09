import {View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {PersonalInfo} from '@otherComponent/personalInfo';
import {Call, Location} from '@utils/icons';
import {windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import {useValues} from '../../../../../../App';

export function Info() {
  const {isDark} = useValues();
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isDark ? appColors.darkTheme : appColors.boxBg,
          borderColor: isDark ? appColors.darkBorder : appColors.border,
        },
      ]}>
      <PersonalInfo
        icon={
          <Call
            height={'19'}
            width={'18'}
            color={isDark ? appColors.white : appColors.darkText}
          />
        }
        name={'providerDetail.call'}
        containerStyle={{right: windowWidth(2)}}
        detail={'+1 236 236 5653'}
        contentStyle={styles.contentStyle}
        titleStyle={styles.titleStyle}
      />
      <PersonalInfo
        icon={
          <Location
            height={'19'}
            width={'18'}
            color={isDark ? appColors.white : appColors.darkText}
          />
        }
        name={'customTime.location'}
        detail={'bookingDetail.locationAddress'}
        contentStyle={styles.address}
        titleStyle={styles.titleStyle}
      />
    </View>
  );
}
