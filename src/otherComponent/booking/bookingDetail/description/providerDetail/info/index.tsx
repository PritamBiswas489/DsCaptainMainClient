import {View, Text} from 'react-native';
import React, {ReactNode} from 'react';
import {styles} from './styles';
import {useValues} from '../../../../../../../App';
import appColors from '@theme/appColors';

export function InfoRow({
  icon,
  title,
  subHeading,
}: {
  icon: ReactNode;
  title: string;
  subHeading: string;
}) {
  const {isDark,t} = useValues();
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {icon}
        <Text
          style={[
            styles.titleStyle,
            {color: isDark ? appColors.white : appColors.lightText},
          ]}>
          {t(title)}
        </Text>
      </View>
      <Text
        style={[
          styles.content,
          {color: isDark ? appColors.lightText : appColors.darkText},
        ]}>
        {t(subHeading)}
      </Text>
    </View>
  );
}
