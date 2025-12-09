import {View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import RenderItem from './renderItem';

export default function ServiceCount() {
  return (
    <View style={styles.container}>      
      <RenderItem />
    </View>
  );
}
