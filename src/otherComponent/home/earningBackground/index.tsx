import {View, Text, Image} from 'react-native';
import React from 'react';
import {earningBg} from '@utils/images';
import {styles} from './styles';
import { useValues } from '../../../../App';

export function EarningBackground({
  title,
  price,
}: {
  title: string;
  price: string;
}) {
  const {t} = useValues()
  return (
    <View>
      <Image source={earningBg} style={styles.imageStyle} />
      <View style={styles.innerView}>
        <Text style={styles.textStyle}>{t(title)}</Text>
        <Text style={styles.price}>{price.toLocaleString()}</Text>
      </View>
    </View>
  );
}
