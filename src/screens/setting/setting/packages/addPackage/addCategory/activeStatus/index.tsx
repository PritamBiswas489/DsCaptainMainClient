import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import SwitchContainer from '@otherComponent/switchContainer';
import {useValues} from '../../../../../../../../App';
import appColors from '@theme/appColors';

export function ActiveStatus() {
  const [status, setStatus] = useState(false);
  const toggleSwitch = () => {
    setStatus(prevStatus => !prevStatus);
  };
  const {isDark,t} = useValues();
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: isDark ? appColors.darkTheme : appColors.boxBg},
      ]}>
      <View style={styles.rowContainer}>
        <Text
          style={[
            styles.title,
            {color: isDark ? appColors.white : appColors.darkText},
          ]}>
          {t('packages.activeNow')}
        </Text>
        <SwitchContainer toggleDarkSwitch={toggleSwitch} switchOn={status} />
      </View>
      <Text style={styles.content}>{t('packages.serviceStatus')}</Text>
    </View>
  );
}
