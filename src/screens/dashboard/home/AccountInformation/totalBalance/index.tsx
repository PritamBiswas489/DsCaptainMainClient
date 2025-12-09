import {
  View,
  Text,
  Image,
  TouchableOpacity,
  GestureResponderEvent,
  Alert
} from 'react-native';
import React, {FormEvent} from 'react';
import {styles} from './styles';
import {balanceBackground} from '@utils/images';
import {useValues} from '../../../../../../App';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
import { formatNumberWithAbbreviation } from '@src/config/utility';
import { paymentSectionData } from '@src/config/utility';
import { Arrow } from '@src/utils/icons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Tooltip } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from 'src/navigation/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type navigationProp = NativeStackNavigationProp<RootStackParamList>;

export function TotalPayBackBalance({
  onPress,
}: {
  onPress: (props: FormEvent<HTMLFormElement> | undefined) => void;
}) {
  const {currSymbol, currValue,t} = useValues();
  const {owner} = useSelector((state: RootState)=>state['serviceProviderAccountData'])
  const {account} = owner
  const paySectionData:any = paymentSectionData(account.account_receivable,account.account_payable)
  const { navigate } = useNavigation<navigationProp>();
  const goToActionPage = ()=>{ 
    if(paySectionData.action === 'ADJUST_WITHDRAW' || paySectionData.action === 'WITHDRAW'){
      navigate('WithdrawRequest') //withdraw request page
    }

    if(paySectionData.action === 'ADJUST_PAY' || paySectionData.action === 'PAY_NOW'){
      navigate('RazorPay') //razor pay page
    }

    if(paySectionData.action === 'ADJUST'){
        navigate('AdjustBalance') //adjust balance 
    }
  } 
 
  return (
    paySectionData?.action && (account.account_receivable > 0 || account.account_payable > 0) ? 
    <View style={styles.container}>
      
      <View>
        <Image source={balanceBackground} style={styles.imageStyle} />
        <View style={styles.innerContainer}>
          
          
            <View style={{ flexDirection: 'row', alignItems: 'center' }}> 
              <Text style={[styles.textStyle,{marginRight:10}]}>{t(`newDeveloper.${paySectionData.text}`)} :  
              </Text>  
              
                <Tooltip  
                  popover={<Text>{t(`newDeveloper.${paySectionData.desc}`)}</Text>} 
                  height={100} // Tooltip height
                  width={300} // Tooltip width
                  backgroundColor="black" // Tooltip background color
                  withPointer={true}
                  skipAndroidStatusBar // Skip status bar on Android to avoid cut-off
                  overlayColor="transparent"
                
                >
                  {/* Use a vector icon as the icon for the tooltip */}
                  <Icon name="info" size={18} color="#000" />
                </Tooltip>
            </View>
           
          <Text style={styles.price}>
            {currSymbol}
            {paySectionData.amount}
          </Text>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={goToActionPage}
            style={styles.containerView}>
            <Text style={styles.text}>{t(`newDeveloper.${paySectionData.action}`)}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View> :''
  );
}
