import { View, StyleSheet } from 'react-native';
import React, { useEffect, useRef } from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import appColors from '@theme/appColors';
import { propsType } from './types';
import { useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
 

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import { GooglePlaceData, GooglePlaceDetail } from 'react-native-google-places-autocomplete';


export function MapContainer({ latitude, longitude, setCoordinatesValue, company_address }: propsType) {
  const onMarkerDragEnd = (e: any) => {
    const { latitude, longitude } = e.nativeEvent.coordinate;
    setCoordinatesValue(latitude, longitude)
  };
  const ref = useRef<any>(null);
  useEffect(() => {
    ref.current?.setAddressText('');
  }, []);

  const { googlekey } = useSelector((state: RootState) => state['providerAppConfig'])
 
 
  return (
    <View style={{ flex: 1 }}>
      <MapView
        //style={{flex: 1}}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        onPress={onMarkerDragEnd}
        initialRegion={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker
          coordinate={{
            latitude: latitude,
            longitude: longitude,
          }}
          title="Coordinates"
          description={`${latitude},${longitude}`}
          calloutAnchor={{ x: 0.5, y: 2 }}
          pinColor={appColors.primary}
        />
      </MapView>

      <GooglePlacesAutocomplete
        ref={ref} 
        placeholder={'Search location here .....'}
        minLength={2} // minimum length of text to search
        fetchDetails={true}
        styles={{
          textInputContainer: searchLocation.textInputContainer,
          textInput: searchLocation.textInput,
          predefinedPlacesDescription: searchLocation.predefinedPlacesDescription,
          description: searchLocation.description,
          listView: searchLocation.listView,
          poweredContainer: searchLocation.poweredContainer,
          powered: searchLocation.powered,
          
        }}
        textInputProps={{
          placeholderTextColor: '#000', // Set your desired placeholder color here
        }}
        onPress={(data, details = null) => {
          if(details){
            const {lat, lng} = details.geometry.location
            setCoordinatesValue(lat, lng)
          }
        }}
        query={{
          key: googlekey,
          language: 'en',
        }}
        nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
        debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  coordinates: {
    position: 'absolute',
    bottom: 50,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
  },
});

const searchLocation = StyleSheet.create({

  textInputContainer: {
    position: 'absolute',
    top: 10,
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 5,
    elevation: 1,
    zIndex: 1, // Ensures the autocomplete is above the map
    paddingStart: 40

  },
  textInput: {
    height: 38,
    color: '#000',
    fontSize: 16,
  },
  predefinedPlacesDescription: {
    color: '#000',
    height: 38
  },
  description: {
    color: '#000', // Change this to your desired color

  },
  listView: {
    backgroundColor: 'white',
    maxHeight: 300,

  },
  poweredContainer: {
    display: 'none', // Attempt to hide, not recommended as per terms
  },
  powered: {
    display: 'none', // Attempt to hide, not recommended as per terms
  },
});

