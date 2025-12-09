import {View, Text, TouchableOpacity,Alert} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from 'src/navigation/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { useValues } from '../../../../App';
import appColors from '@theme/appColors';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
type navigation = NativeStackNavigationProp<RootStackParamList>;

export default function ServiceArea({setAddress}: any) {
  const {navigate} = useNavigation<navigation>();
  const {isDark,t} = useValues()

 

  const {
    selected:selectedDetailsData
  } = useSelector((state: RootState) => state['serviceDetailsData'])


  console.log('================= Zone ====================');
   console.log(selectedDetailsData?.zone)


  const handleGoToAddNewAddress = () => {
    // Alert.alert('Go to Address list page')
    navigate('CoverLocationList',{zone:selectedDetailsData?.zone} );
    
  };

  return (
    <View style={styles.row}>
      <Text style={[styles.textStyle,{color: isDark ? appColors.white : appColors.darkText,}]}>{t('reviews.serviceArea')}</Text>
      <TouchableOpacity onPress={handleGoToAddNewAddress} activeOpacity={0.9}>
        <Text style={styles.address}>{t('newDeveloper.clickHere')}</Text>
      </TouchableOpacity>
    </View>
  );
}
