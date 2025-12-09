import { View, Text, ViewStyle } from 'react-native';
import React from 'react';
import { GlobalStyle } from '@style/styles';
import { windowHeight, windowWidth } from '@theme/appConstant';
import { Timer, Certificate } from '@utils/icons';
import Experience from './experience';
import { styles } from './styles';
import { useValues } from '../.././../../App';
import appColors from '@theme/appColors';
import { formatNumberProcessing } from '@src/config/utility';
import { ServiceMenDetailsInterface } from '@src/interfaces/serviceMenDetailsInterface';

export function ExperienceDetail({
  providerContent,
  contentStyle,
  rowContainerStyle,
  details
}: {
  providerContent: string;
  contentStyle?: ViewStyle;
  rowContainerStyle?: ViewStyle;
  details: ServiceMenDetailsInterface
}) {
  const { isDark, t } = useValues();
  return (
    <View>
      <View
        style={[
          styles.rowContainer,
          rowContainerStyle,
          {
            backgroundColor: isDark ? appColors.darkTheme : appColors.boxBg,
            borderColor: isDark ? appColors.darkBorder : appColors.border,
          },
        ]}>
        <View style={{ right: windowWidth(1.8) }}>
          <Experience
            icon={
              <Timer color={isDark ? appColors.white : appColors.darkText} />
            }
            experience={t('newDeveloper.OnGoingServices')}
            totalExperience={formatNumberProcessing(details?.ongoing)}
            services={''}
            containerStyle={{ left: 3 }}
          />
        </View>
        <View
          style={[
            GlobalStyle.verticalLine,
            { height: windowHeight(5), borderWidth: 0.3 },
          ]}></View>
        <Experience
          icon={
            <Certificate
              color={isDark ? appColors.white : appColors.darkText}
            />
          }
          experience={t('newDeveloper.CompletedServices')}
          totalExperience={formatNumberProcessing(details?.completed)}
          services={''}
          containerStyle={{ left: 3 }}
        />
        <View
          style={[
            GlobalStyle.verticalLine,
            { height: windowHeight(5), borderWidth: 0.3 },
          ]}></View>
        <Experience
          icon={
            <Timer color={isDark ? appColors.white : appColors.darkText} />
          }
          experience={t('newDeveloper.CanceledServices')}
          totalExperience={formatNumberProcessing(details?.canceled)}
          services={''}
          containerStyle={{ left: 3 }}
        />
      </View>
      <View style={{ marginTop: 10, marginBottom: 10 }}></View>

    </View>
  );
}
