import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import { styles } from './styles';
import SwitchContainer from '@otherComponent/switchContainer';
import appColors from '@theme/appColors';
import { useValues } from '../../../../../../../App';
import { propsType } from './data/types';
import { GlobalStyle } from '@src/style/styles';
import { windowWidth } from '@src/theme/appConstant';

export function ClosedDayService({
  day,
  value,
  setValue
}:{day:string,
  value:boolean
  setValue:(value:boolean)=>void

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
          {t(day)}
        </Text>
        <SwitchContainer
          toggleDarkSwitch={() => setValue(!value)}
          switchOn={value}
          containerStyle={{ marginTop: 0 }}
        />
      </View>

      
      
    </View>
  
    
  </>
  );
}
