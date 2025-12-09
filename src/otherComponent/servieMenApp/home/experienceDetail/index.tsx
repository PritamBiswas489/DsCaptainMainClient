import {View, Text, ViewStyle} from 'react-native';
import React from 'react';
import {GlobalStyle} from '@style/styles';
import {windowHeight, windowWidth} from '@theme/appConstant';
import {Timer, Certificate} from '@utils/icons';
import Experience from './experience';
import {styles} from './styles';
import {useValues} from '../../../../../App';
import appColors from '@theme/appColors';

export function ExperienceDetail({
  providerContent,
  contentStyle,
  rowContainerStyle,
}: {
  providerContent: string;
  contentStyle?: ViewStyle;
  rowContainerStyle?: ViewStyle;
}) {
  const {isDark,t} = useValues();
  return (
    <View>
      <View
        style={[
          styles.rowContainer,
          rowContainerStyle,
          {
            backgroundColor: isDark ? appColors.darkCard : appColors.boxBg,
            borderColor: isDark ? appColors.darkBorder : appColors.border,
          },
        ]}>
        <View style={{right: windowWidth(2.8)}}>
          <Experience
            icon={
              <Timer color={isDark ? appColors.white : appColors.darkText} />
            }
            experience={t('providerDetail.totalExperience')}
            totalExperience={3}
            services={t('providerDetail.years')}
          />
        </View>
        <View
          style={[
            GlobalStyle.verticalLine,
            {height: windowHeight(5), borderWidth: 0.3},
          ]}></View>
        <Experience
          icon={
            <Certificate
              color={isDark ? appColors.white : appColors.darkText}
            />
          }
          experience={t('providerDetail.serviceDelivered')}
          totalExperience={250}
          services={t('providerDetail.service')}
          containerStyle={{left: 3}}
        />
      </View>
      <View style={[styles.mainContainer, {left: windowWidth(2)}]}>
        <Text
          style={[
            styles.textStyle,
            {color: isDark ? appColors.white : appColors.darkText},
          ]}>
          {t('providerDetail.detailsProvider')}
        </Text>
        <Text style={[styles.content, contentStyle]}>{t(providerContent)}</Text>
      </View>
    </View>
  );
}
