import {View, Text, TouchableOpacity, Alert, Linking} from 'react-native';
import React from 'react';
import {styles} from './styles';
import { LeftArrow} from '@utils/icons';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from 'src/navigation/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { useValues } from '../../../../../App';
type routeProps = NativeStackNavigationProp<RootStackParamList>;

export function ViewLocation({
  latitude,
  longitude
}:{
  latitude:string,
  longitude:string 
}) {
  // console.log({latitude, longitude})
  const {navigate} = useNavigation<routeProps>();
  const {t} = useValues()
  const mapViewRedirect = () =>{
      const url = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}&travelmode=driving`;
      Linking.openURL(url).catch(err => console.error('An error occurred', err)); 
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.9} onPress={mapViewRedirect}>
        <Text style={styles.text}>{t('newDeveloper.viewOnMap')}</Text>
      </TouchableOpacity>
      <View style={styles.iconContainer}>
        <LeftArrow height={'30'} width={'18'} />
      </View>
    </View>
  );
}
