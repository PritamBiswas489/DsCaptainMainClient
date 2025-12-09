import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {GlobalStyle} from '@style/styles';
import appColors from '@theme/appColors';
import {windowWidth} from '@theme/appConstant';
import {useValues} from '../../../../../App';

export function ServiceRange() {
  const [addKilometer, setAddKilometer] = useState<number>(5);
  const [decrementKilometer, setDecrementKilometer] = useState<number>(5);
  const [kilometer, setKilometer] = useState(5);
  const {isDark,t} = useValues();

  const onAddKilometer = () => {
    const incrementedKilometer = addKilometer + 5;
    setKilometer(incrementedKilometer);
    setAddKilometer(incrementedKilometer);
  };

  const onDecrementKilometer = () => {
    const decreasedKilometer = decrementKilometer - 5;
    setKilometer(decreasedKilometer);
    setDecrementKilometer(decreasedKilometer);
  };
  return (
    <View
      style={[
        styles.innerContainer,
        {borderColor: isDark ? appColors.darkBorder : appColors.border},
      ]}>
      <TouchableOpacity
        activeOpacity={0.9}
        style={styles.mainContainer}
        onPress={onDecrementKilometer}>
        <Text
          style={[
            styles.text,
            {color: isDark ? appColors.white : appColors.darkText},
          ]}>
          {decrementKilometer > 0
            ? '-' + decrementKilometer
            : decrementKilometer}
        </Text>
      </TouchableOpacity>
      <View
        style={[
          GlobalStyle.verticalLine,
          {
            marginHorizontal: 0,
            borderColor: isDark ? appColors.darkBorder : appColors.border,
          },
        ]}
      />
      <View
        style={[
          styles.containerStyle,
          {backgroundColor: isDark ? appColors.darkText : appColors.boxBg},
        ]}>
        <Text
          style={[
            styles.title,
            {color: isDark ? appColors.white : appColors.lightText},
          ]}>
          {kilometer + ' ' + t('auth.kilometer')}
        </Text>
      </View>
      <View
        style={[
          GlobalStyle.verticalLine,
          {
            marginHorizontal: 0,
            borderColor: isDark ? appColors.darkBorder : appColors.border,
          },
        ]}
      />
      <TouchableOpacity
        activeOpacity={0.9}
        style={[
          styles.mainContainer,
          {
            backgroundColor: appColors.primary,
            borderTopEndRadius: windowWidth(2),
            borderBottomEndRadius: windowWidth(2),
          },
        ]}
        onPress={onAddKilometer}>
        <Text style={[styles.text, {color: appColors.white}]}>
          +{addKilometer}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
