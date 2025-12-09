import { View, Image, Text } from 'react-native';
import React from 'react';
import { customer1 } from '@utils/images';
import { styles } from './styles';
import { Email } from '@utils/icons';
import appColors from '@theme/appColors';
import { GlobalStyle } from '@style/styles';
import { AvailableBalance } from './avialableBalance';
import { useValues } from '../../../../../../App';
import { useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
import { getMediaUrl } from '@src/config/utility';

export function SettingInfo() {
  const { isDark, t } = useValues();
  const { company_name, company_email, logo } = useSelector((state: RootState) => state['serviceProviderAccountData'])
  //console.log("================= Hello One ======================")
  //console.log(getMediaUrl())
  //console.log("================= Hello Two ======================")
  //console.log(logo)
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {logo && <View
          style={[
            styles.imageView,
            { backgroundColor: isDark ? appColors.darkCardBg : appColors.white },
          ]}>
          <Image source={{ uri: `${getMediaUrl()}/provider/logo/${logo}` }} style={styles.imageStyle} />
        </View>}
        <View style={styles.textView}>
          <Text
            style={[
              styles.name,
              { color: isDark ? appColors.white : appColors.darkText },
            ]}>
            {company_name}
          </Text>
          <View style={[styles.row, { marginTop: 6 }]}>
            <Email width={'20'} height={'20'} color={appColors.lightText} />
            <Text style={styles.email}>{company_email}</Text>
          </View>
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
