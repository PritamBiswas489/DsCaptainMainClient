import React from 'react';
import {View, TouchableOpacity, ViewStyle} from 'react-native';
import {styles} from './styles';

export default function PaginationContainer(props: {
  data: any[];
  currentIndex: any;
  activeDotStyle?: ViewStyle;
  borderStyle?: ViewStyle;
  inActiveDotStyle?: ViewStyle;
  containerStyle?: ViewStyle;
}) {
  return (
    <View
      style={[
        styles.rowContainer,
        styles.bannerContainer,
        {justifyContent: 'center'},
        props.containerStyle,
      ]}>
      {props.data.map((item: any, key: React.Key | null | undefined) =>
        parseInt(props.currentIndex) === key ? (
          <TouchableOpacity
            key={key}
            style={[styles.border, props.borderStyle]}>
            <View style={[styles.activeDot, props.activeDotStyle]}></View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={[
              styles.inActiveDot,
              props.inActiveDotStyle,
            ]}></TouchableOpacity>
        ),
      )}
    </View>
  );
}
