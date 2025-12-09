import {View, Image, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {companyService} from '@utils/images';
import {Star, Email} from '@utils/icons';
import {ExperienceDetail} from '@otherComponent/home';
import {windowWidth} from '@theme/appConstant';
import {useValues} from '../../../../../../App';
import appColors from '@theme/appColors';

export function ServiceDetail() {
  const {isDark, t} = useValues();
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.innerContainer,
          {backgroundColor: isDark ? appColors.darkTheme : appColors.ratingBg},
        ]}
      />
      <View style={styles.profileContainer}>
        <Image source={companyService} style={styles.imageStyle} />
        <View style={styles.innerView}>
          <Text style={styles.title}>{t('companyDetails.name')}</Text>
          <View style={styles.row}>
            <Star />
            <Text
              style={[
                styles.review,
                {color: isDark ? appColors.white : appColors.darkText},
              ]}>
              {' '}
              {t('companyDetails.reviews')}
            </Text>
          </View>
          <View style={styles.row}>
            <Email height={'16'} width={'16'} />
            <Text style={styles.email}> {t('serviceManDetails.email')}</Text>
          </View>
        </View>
      </View>
      {/* <ExperienceDetail
        contentStyle={{width: windowWidth(90), marginTop: 8}}
        providerContent={'serviceManDetails.detail'}
      /> */}
    </View>
  );
}
