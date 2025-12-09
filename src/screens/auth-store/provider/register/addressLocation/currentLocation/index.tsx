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
import {MapContainer} from '@otherComponent/mapViewStore';
import appColors from '@theme/appColors';
import {requestLocationPermission} from '@utils/functions';
import Geolocation from '@react-native-community/geolocation';
import {useValues} from '../../../../../../../App';

import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
 
import Geocoder from 'react-native-geocoding';
import Toast from 'react-native-toast-message';
import { geoCodeApi, getConfigZoneId } from '@src/services/store/settings.service';
import Spinner from 'react-native-loading-spinner-overlay';
import { mapStoreFieldActions } from '@src/store/redux/store/map-address-redux';


interface Response {
  data: any;
  status: number;
  statusText: string;
  headers: any;
  config: any;
  request?: any;
}


 
const AddressCurrentLocation=({route}: any) =>{

  const screen = route?.params?.screen;
  const dispatch = useDispatch()
  const {isDark} = useValues();
  const [mapAddress,setMapAddress] = useState<string>('')
  const [mapLat,setMapLat] = useState<number>(0)
  const [mapLng, setMapLng] = useState<number>(0)
  const navigation =  useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const googlekey = 'AIzaSyDkE91hFqzV-g45mOcBN5-ypHa3TLyfeOs'
  const [processZoneCheckingLoader,setProcessZoneCheckingLoader] =  useState(false)

  //set map address state after checking location is available or not
  const setMapAddressState = async () =>{

    if(mapAddress.trim() === '' || mapLat === 0 || mapLng === 0){
        Toast.show({
            type: 'error',
            text1: 'ERROR',
            text2: 'Unable to fetch address',
        });
        return
    }
    setProcessZoneCheckingLoader(true)
    const response:Response = await getConfigZoneId(mapLat,mapLng)
    
    setProcessZoneCheckingLoader(false)
    if(response?.data?.errors){
      Alert.alert(response?.data?.errors?.[0]?.message || 'Location not available for service')
      return
    }
    //response zone data 
    if(response?.data?.zone_data){
      if(response?.data?.zone_data[0]?.id){
          
          dispatch(mapStoreFieldActions.setData({
            field : 'latitude',
            data  : mapLat,
          }))
           dispatch(mapStoreFieldActions.setData({
              field : 'longitude',
              data  : mapLng,
           }))

          dispatch(mapStoreFieldActions.setData({
              field : 'address',
              data  : mapAddress,
          }))

          dispatch(mapStoreFieldActions.setData({
              field : 'zone_id',
              data  : response?.data?.zone_data[0]?.id,
          }))
         
          navigation.goBack()  
          return
      }
    }
     Alert.alert('Location not available for service')
      return
    

   
    

    

  }
  
  const getGeoLocationAddress = async (lat:number,lng:number) =>{
        // Geocoder.init(googlekey, { language: 'en' });
        // Geocoder.from([lat, lng])
        // .then(json => {
        //     const addressComponent = json.results[0].formatted_address;
        //     setMapAddress(addressComponent)
        // })
        // .catch(error => {
        //   Toast.show({
        //     type: 'error',
        //     text1: 'ERROR',
        //     text2: 'Unable to fetch address',
        //   });
        // });

        try {
          const json:Response = await geoCodeApi(lat, lng);
          const addressComponent = json?.data?.results?.[0].formatted_address;
          setMapAddress(addressComponent)
        } catch (error) {
          Toast.show({
            type: 'error',
            text1: 'ERROR',
            text2: 'Unable to fetch address',
          });
        }
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
      <Spinner
          visible={processZoneCheckingLoader}
          textContent={'checking zone.....'}
          textStyle={{ color: '#000' }}
        />
    </View>
  );
}
export default AddressCurrentLocation;
