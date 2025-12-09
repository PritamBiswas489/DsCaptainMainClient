import React from 'react';
import {View, Text, Image, ViewStyle} from 'react-native';
import {styles} from './styles';
import {serviceMen1} from '@utils/images';
import {Verify} from '@utils/icons';
import {Star} from '@assets/icons/home/star';
import {StarIcon} from '@utils/icons';
import {GlobalStyle} from '@style/styles';
import {ExperienceDetail} from '../experienceDetail';
import {useValues} from '../../../../../App';
import appColors from '@theme/appColors';

export function ProviderExperience({
  providerContent,
  rowContainerStyle,
}: {
  providerContent: string;
  rowContainerStyle?: ViewStyle;
}) {
  const {isDark,t} = useValues();
  return (
    <View>
      <View style={styles.center}>
        <Image source={serviceMen1} style={styles.personImg} />
        <View style={[styles.row, {bottom: 20}]}>
          <Text
            style={[
              GlobalStyle.title,
              {color: isDark ? appColors.white : appColors.darkText},
            ]}>
            {t('providerDetail.username')}
          </Text>
          <Verify />
        </View>
        <View style={[styles.row, {marginTop: 6, bottom: 20}]}>
          <Star width={'18'} />
          <Star width={'18'} />
          <Star width={'18'} />
          <Star width={'18'} />
          <StarIcon />
          <Text
            style={[
              styles.review,
              {color: isDark ? appColors.white : appColors.darkText},
            ]}>
            {' '}
            3.8 {t('reviews.reviews')} (50){' '}
          </Text>
        </View>
        <ExperienceDetail
          rowContainerStyle={rowContainerStyle}
          providerContent={providerContent}
        />
      </View>
    </View>
  );
}
