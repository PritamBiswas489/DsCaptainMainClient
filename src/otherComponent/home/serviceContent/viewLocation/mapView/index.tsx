import {View, ActivityIndicator, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import Geolocation from 'react-native-geolocation-service';
import {GlobalStyle} from '@style/styles';
import {MapContainer} from '@otherComponent/mapView';
import appColors from '@theme/appColors';
import {requestLocationPermission} from '@utils/functions';

export function MapView() {
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);

  const getLocation = () => {
    const result = requestLocationPermission();
    result.then(res => {
      if (res) {
        Geolocation.getCurrentPosition(
          position => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
          },
          error => {
            console.log(error.code, error.message);
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
      }
    });
  };

  useEffect(() => {
    getLocation();
  });

  return (
    <View style={GlobalStyle.mainView}>
      {latitude && longitude ? (
        <MapContainer latitude={latitude} longitude={longitude} />
      ) : (
        <View style={styles.centerView}>
          <ActivityIndicator color={appColors.primary} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  centerView: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
