import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, ActivityIndicator, Alert} from 'react-native';
import {GlobalStyle} from '@style/styles';
import {styles  } from './styles';
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

import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
import { mapFieldActions } from '@src/store/redux/map-address-redux';
import { registerFieldErrorActions } from '@src/store/redux/register-error-redux';
import Geocoder from 'react-native-geocoding';
import Toast from 'react-native-toast-message';

 


const AddressCurrentLocation=({route}: any) =>{
  
  const screen = route?.params?.screen;
  const dispatch = useDispatch()
  const {isDark} = useValues();
  const [mapAddress,setMapAddress] = useState<string>('')
  const [mapLat,setMapLat] = useState<number>(0)
  const [mapLng, setMapLng] = useState<number>(0)
  const navigation =  useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { googlekey } = useSelector((state: RootState) => state['providerAppConfig'])

  // console.log({googlekey})


  const setMapAddressState = () =>{

    if(mapAddress.trim() === '' || mapLat === 0 || mapLng === 0){
        Toast.show({
            type: 'error',
            text1: 'ERROR',
            text2: 'Unable to fetch address',
        });
        return
    }

    dispatch(mapFieldActions.setData({
        field : 'latitude',
        data  : mapLat,
    }))

    dispatch(mapFieldActions.setData({
      field : 'longitude',
      data  : mapLng,
     }))

     dispatch(mapFieldActions.setData({
      field : 'address',
      data  : mapAddress,
    }))

    navigation.goBack()

  }
  

  const getGeoLocationAddress = (lat:number,lng:number) =>{
    Geocoder.init(googlekey, { language: 'en' });
    console.log("=============== getAddress ========================")
    console.log(lat)
    console.log(lng)
    Geocoder.from([lat, lng])
    .then(json => {
        const addressComponent = json.results[0].formatted_address;
        setMapAddress(addressComponent)
    })
    .catch(error => {
      console.error(error);
      Toast.show({
        type: 'error',
        text1: 'ERROR',
        text2: 'Unable to fetch address',
      });
    });
     
  }

  const setCoordinatesValue = (lat:number,lng:number) =>{
   
    setMapLat(lat)
    setMapLng(lng)
    getGeoLocationAddress(lat,lng);
  }
  

   
  const getLocation = () => {
    const result = requestLocationPermission();
    result.then(res => {
      if (res) {
       
        Geolocation.getCurrentPosition(
          position => {
            setMapLat(position.coords.latitude);
            setMapLng(position.coords.longitude);
            getGeoLocationAddress(position.coords.latitude,position.coords.longitude);
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

   
      {mapLat && mapLng ? (
        <MapContainer company_address={mapAddress} setCoordinatesValue={setCoordinatesValue} latitude={mapLat} longitude={mapLng} />
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
          latitude={mapLat}
          longitude={mapLng}
          company_address={mapAddress}
          set_map_address={setMapAddressState}
        />
      </View>
    </View>
  );
}
export default AddressCurrentLocation;
