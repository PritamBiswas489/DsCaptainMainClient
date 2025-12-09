import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import { styles } from './styles';
import SwitchContainer from '@otherComponent/switchContainer';
import appColors from '@theme/appColors';
import { useValues } from '../../../../../../../App';
import { propsType } from './data/types';
import { GlobalStyle } from '@src/style/styles';
import { windowWidth } from '@src/theme/appConstant';

export function EnableAvailability({
  availability,
  setAvailability
}:{
  availability:boolean,
  setAvailability:(value:boolean)=>void
}) {
  const { t, isDark } = useValues();

  return (
    <>
    <View
      style={[
        styles.container,
        {
          backgroundColor: isDark ? appColors.darkCard : appColors.boxBg,
          borderColor: isDark ? appColors.darkBorder : appColors.border,
        },
      ]}>
      <View style={styles.rowContainer}>
        <Text
          style={[
            styles.day,
            { color: isDark ? appColors.white : appColors.darkText },
          ]}>
          {t('newDeveloper.ServiceAvailability')}
        </Text>
        <SwitchContainer
            toggleDarkSwitch={() => { setAvailability(!availability) }}
            switchOn={availability}
            containerStyle={{ marginTop: 0 }}
        />
      </View>
      
    </View>
  
    <View style={[styles.textcontainer,{
          backgroundColor: isDark ? appColors.darkCard : appColors.boxBg,
          borderColor: isDark ? appColors.darkBorder : appColors.border,
          marginTop:10
        },]}>
        <View
          style={[
            GlobalStyle.horizontalLine,
            {borderColor: isDark ? appColors.darkBorder : appColors.border},
          ]}
        />
    <Text
    style={[
      styles.noteContainer,
      { color: isDark ? appColors.white : appColors.darkText },
      {width:windowWidth(80)}
    ]}>
   <Text>{t('newDeveloper.ServiceAvailabilityMessage')} </Text>
  </Text>
  </View>
  </>
  );
}
