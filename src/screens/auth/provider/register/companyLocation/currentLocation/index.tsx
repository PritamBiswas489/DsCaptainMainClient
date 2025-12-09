import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, ActivityIndicator, Alert} from 'react-native';
import {GlobalStyle} from '@style/styles';
import {styles} from './styles';
import {BackArrow} from '@utils/icons';
import {RootStackParamList} from 'src/navigation/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import ServiceLocation from './serviceLocation';
import {DirectionGps} from '@assets/icons/auth/gps';
import {MapContainer} from '@otherComponent/mapView';
import appColors from '@theme/appColors';
import {requestLocationPermission} from '@utils/functions';
import Geolocation from '@react-native-community/geolocation';
import {useValues} from '../../../../../../../App';

const CurrentLocation=({route}: any) =>{
  const screen = route?.params?.screen;
  const {isDark} = useValues();

  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const getLocation = () => {
    const result = requestLocationPermission();
    result.then(res => {
      if (res) {
       
        Geolocation.getCurrentPosition(
          position => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
            console.log(position)
          },
          error => {
            console.log(error.code, error.message);
          },
          {enableHighAccuracy: false, timeout: 15000, maximumAge: 10000},
        );
      }
    });
  };

  useEffect(() => {
    getLocation();
  },[]);

  return (
    <View style={GlobalStyle.mainView}>
      {latitude && longitude ? (
        <MapContainer latitude={latitude} longitude={longitude} />
      ) : (
        <View style={styles.centerView}>
          <ActivityIndicator color={appColors.primary} />
        </View>
      )}

      <View style={styles.headerView}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => navigation.goBack()}
          style={[
            styles.circleView,
            {backgroundColor: isDark ? appColors.darkTheme : appColors.white},
          ]}>
          <BackArrow />
        </TouchableOpacity>
      </View>
      <View style={styles.bottomView}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => {}}
          style={styles.directionView}>
          <View
            style={[
              styles.directionContainer,
              {backgroundColor: isDark ? appColors.darkTheme : appColors.white},
            ]}>
            <DirectionGps
              color={isDark ? appColors.white : appColors.darkText}
            />
          </View>
        </TouchableOpacity>
        <ServiceLocation
          screen={screen}
          latitude={latitude}
          longitude={longitude}
        />
      </View>
    </View>
  );
}
export default CurrentLocation;
