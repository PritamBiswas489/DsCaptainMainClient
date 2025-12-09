import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import SwitchContainer from '@otherComponent/switchContainer';
import {useValues} from '../../../../../../App';
import appColors from '@theme/appColors';

export default function StatusSection() {
  const [status, setStatus] = useState(false);
  const toggleSwitch = () => {
    setStatus(prevStatus => !prevStatus);
  };
  const {isDark,t} = useValues();
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: isDark ? appColors.darkTheme : appColors.border},
      ]}>
      <View
        style={[
          styles.innerContainer,
          {backgroundColor: isDark ? appColors.darkCard : appColors.white},
        ]}>
        <View style={styles.row}>
          <Text
            style={[
              styles.status,
              {color: isDark ? appColors.white : appColors.darkText},
            ]}>
            {t('addNewService.status')}
          </Text>
          <SwitchContainer toggleDarkSwitch={toggleSwitch} switchOn={status} />
        </View>
        <Text style={styles.statusNote}>{t('addNewService.statusNote')}</Text>
      </View>
    </View>
  );
}
