import React, {useState, ReactNode} from 'react';
import {View, Text, ViewStyle, TouchableOpacity} from 'react-native';

import {Dropdown} from '@utils/icons';
import {windowWidth} from '@theme/appConstant';
import {styles} from './styles';
// import {Country, CountryCode} from './types/countryTypes';
import {useValues} from '../../../../App';
import appColors from '@theme/appColors';
interface phoneComponentProps {
  phoneCountryCode:string;
  setPhoneCountryCode:(value:string)=>void;
  phoneDialCode:string;
  setPhoneDialCode:(value:string)=>void;
  phoneContent: ReactNode;
  countyContainer?: ViewStyle;
}
import CountryListModal from '@src/commonComponents/countryListModal';
import { getFlagEmoji } from '@src/commonComponents/countryListModal';

export default function phoneTextInput({
  phoneCountryCode:countryCode,
  setPhoneCountryCode,
  phoneDialCode:countryCallingCode,
  setPhoneDialCode,
  phoneContent,
  countyContainer,
}: phoneComponentProps) {
    
   

  const [isCountryModalVisible,setCountryModalVisible] = useState<boolean>(false);
  const {isDark,t} = useValues();

  const onCloseCountryModal = () =>{
       setCountryModalVisible(false)
  }
  const openCountryCodeModal = ()=>{
       setCountryModalVisible(true)
  }
  const onSelectCountry = (item:{name: string, code: string, dial_code: string})=>{
    if(item?.code){
      setPhoneCountryCode(item?.code)
      setPhoneDialCode(item?.dial_code.replace("+", ""))
    }
    setCountryModalVisible(false)
  }
  return (
    <View style={styles.rowContainer}>
      <View
        style={[
          styles.countryView,
          countyContainer,
          {backgroundColor: isDark ? appColors.darkText : appColors.textInput},
        ]}>
        <CountryListModal visible={isCountryModalVisible} onSelectCountry={onSelectCountry}
onClose={onCloseCountryModal}/>
         <TouchableOpacity onPress={openCountryCodeModal} >
         <Text
            style={[
              styles.countryCode,
              {color: isDark ? appColors.white : appColors.darkText},
            ]}>
            {getFlagEmoji(countryCode)}+{t(countryCallingCode)}
          </Text>
         </TouchableOpacity>
         <TouchableOpacity onPress={openCountryCodeModal} >
          <View style={styles.dropdown}>
            <Dropdown color={isDark ? appColors.white : appColors.darkText} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={{right: windowWidth(3)}}>{phoneContent}</View>
    </View>
  );
}
