import { View, Image, Text, Alert } from 'react-native';
import React from 'react';
import { userPlaceHolder } from '@utils/images';
import { styles } from './styles';
import { Email } from '@utils/icons';
import appColors from '@theme/appColors';
import { GlobalStyle } from '@style/styles';
import { AvailableBalance } from './avialableBalance';
import { useValues } from '../../../../../../App';
import { useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
 

export function SettingInfo() {
  
  const { isDark, t } = useValues();
  const {  image_full_url, f_name, l_name } = useSelector((state: RootState) => state['storeProfileData'])

  let storeLogo:string | null = image_full_url, storeName:string | null = `${f_name} ${l_name}`
   
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View
          style={[
            styles.imageView,
            { backgroundColor: isDark ? appColors.darkCardBg : appColors.white },
          ]}>
             {storeLogo ?
          <Image source={{ uri: `${storeLogo}` }} style={styles.imageStyle} />
          : <Image source={userPlaceHolder} style={styles.imageStyle} />}
        </View> 
        <View style={styles.textView}>
          <Text
            style={[
              styles.name,
              { color: isDark ? appColors.white : appColors.darkText },
            ]}>
           {storeName}
          </Text>
        </View>
      </View>
      <View
        style={[
          GlobalStyle.horizontalLine,
          {
            marginTop: 0,
            borderColor: isDark ? appColors.darkBorder : appColors.border,
          },
        ]}></View>
      <AvailableBalance />
    </View>
  );
}
