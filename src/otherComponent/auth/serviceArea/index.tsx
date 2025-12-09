import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {ServiceRange} from './serviceRange';
import { useValues } from '../../../../App';
export function ServiceArea() {
  const {t} = useValues()
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.dotStyle} />
        <Text style={styles.area}>{t('auth.availabilityArea')}</Text>
      </View>
      <ServiceRange />
    </View>
  );
}
