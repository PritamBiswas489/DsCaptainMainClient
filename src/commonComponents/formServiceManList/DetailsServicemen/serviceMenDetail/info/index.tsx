import { View, Text } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { Email, Call, Identity } from '@utils/icons';
import appColors from '@theme/appColors';
import { windowWidth } from '@theme/appConstant';
import { useValues } from '../../../../../../../App';
import { ServiceMenDetailsInterface } from '@src/interfaces/serviceMenDetailsInterface';
export default function Info({ details }: { details: ServiceMenDetailsInterface }) {
  const { t, isDark } = useValues();
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isDark ? appColors.darkCard : appColors.boxBg,
          borderColor: isDark ? appColors.darkBorder : appColors.border,
        },
      ]}>
      <Text
        style={[
          styles.heading,
          { color: isDark ? appColors.white : appColors.darkText },
        ]}>
        {t('providerDetail.personalInfo')} :
      </Text>
      <View style={styles.row}>
        <Email
          strokeWidth={'1.4'}
          height={'20'}
          color={isDark ? appColors.white : appColors.darkText}
        />
        <Text
          style={[
            styles.titleStyle,
            { color: isDark ? appColors.white : appColors.darkText },
          ]}>
          {t('providerDetail.mail')}
        </Text>
        <View style={[styles.verticalLine, { right: windowWidth(2) }]}></View>
        <Text style={styles.content}>{details?.email}</Text>
      </View>
      <View style={styles.row}>
        <Call
          height={'20'}
          width={'19'}
          color={isDark ? appColors.white : appColors.darkText}
        />
        <Text
          style={[
            styles.titleStyle,
            { color: isDark ? appColors.white : appColors.darkText },
          ]}>
          {t('providerDetail.call')}
        </Text>
        <View style={styles.verticalLine}></View>
        <Text style={styles.content}>{details?.phone}</Text>
      </View>

      <View style={styles.row}>
        <Identity
          height={'20'}
          width={'19'}
          color={isDark ? appColors.white : appColors.darkText}
        />
        <Text
          style={[
            styles.titleStyle,
            { color: isDark ? appColors.white : appColors.darkText },
          ]}>
          {t('newDeveloper.identitytype')}
        </Text>
        <View style={styles.verticalLine}></View>
        <Text style={styles.content}>
          {details?.identification_type === 'driving_license' && t('identityDetails.driving_license')}
          {details?.identification_type === 'trade_license'   && t('identityDetails.trade_license')}
          {details?.identification_type === 'nid'             && t('identityDetails.nid')}
          {details?.identification_type === 'passport'        && t('identityDetails.passport')}
        </Text>
      </View>

      <View style={styles.row}>
        <Identity
          height={'20'}
          width={'19'}
          color={isDark ? appColors.white : appColors.darkText}
        />
        <Text
          style={[
            styles.titleStyle,
            { color: isDark ? appColors.white : appColors.darkText },
          ]}>
          {t('newDeveloper.identitynumber')}
        </Text>
        <View style={styles.verticalLine}></View>
        <Text style={styles.content}>{details?.identification_number}</Text>
      </View>
    </View>
  );
}
