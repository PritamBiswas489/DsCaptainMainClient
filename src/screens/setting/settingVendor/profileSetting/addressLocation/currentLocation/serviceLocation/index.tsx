import React from 'react';
import {View, Text,TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {GlobalStyle} from '@style/styles';
import {MapLocation} from '@utils/icons';
import GradientBtn from '@commonComponents/gradientBtn';
import {RootStackParamList} from 'src/navigation/types';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {locationType} from './types';
import {useValues} from '../../../../../../../../App';
import appColors from '@theme/appColors';


export default function ServiceLocation({
  latitude,
  longitude,
  screen,
  company_address
}: locationType) {
  const {isDark,t} = useValues();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View
      style={[
        styles.boxView,
        {backgroundColor: isDark ? appColors.darkTheme : appColors.white},
      ]}>
      <Text
        style={[
          styles.title,
          {color: isDark ? appColors.white : appColors.darkText},
        ]}>
        {t('newDeveloper.selectServiceLocation')}
      </Text>
      <View style={GlobalStyle.horizontalLine}></View>
      {company_address && 
     
      <View style={styles.containerStyle}>
          <View style={styles.locationView}>
            <MapLocation />
          </View>
          <View style={styles.addressView}>
            <Text style={styles.content}>{company_address}</Text>
          </View>
        </View>
      }
      
      <GradientBtn
        additionalStyle={styles.additionalStyle}
        label={'location.confirmLocation'}
        onPress={() =>{
          navigation.goBack()
          }
        }
        labelTextStyle={styles.labelText}
      />
    </View>
  );
}
