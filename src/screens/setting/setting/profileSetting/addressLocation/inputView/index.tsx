import {View} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import TextInputComponent from '@otherComponent/auth/textInput';
import {Street, Location, State, ZipCode} from '@utils/icons';
import {windowHeight, windowWidth} from '@theme/appConstant';
import {useValues} from '../../../../../../../App';
export default function InputView() {
  const [streetAddress, setStreetAddress] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const {t} = useValues();
  return (
    <View>
      <TextInputComponent
        placeholder={t('auth.streetAddress')}
        Icon={<Street />}
        value={streetAddress}
        onChangeText={value => {
          setStreetAddress(value);
        }}
        containerStyle={{
          marginBottom: windowHeight(1),
        }}
      />

      <View style={styles.row}>
        <TextInputComponent
          inputStyle={styles.inputStyle}
          placeholder={t('location.latitude')}
          Icon={<Location />}
          value={latitude}
          onChangeText={value => {
            setLatitude(value);
          }}
          textContainerStyle={styles.textContainerStyle}
          containerStyle={{marginTop: windowWidth(2)}}
        />

        <TextInputComponent
          containerStyle={{
            marginHorizontal: windowWidth(0),
            marginTop: windowWidth(2),
          }}
          inputStyle={styles.inputStyle}
          placeholder={t('location.longitude')}
          Icon={<ZipCode width={'21'} />}
          value={longitude}
          onChangeText={value => {
            setLongitude(value);
          }}
          textContainerStyle={styles.textContainerView}
        />
      </View>

      <View style={styles.container}>
        <TextInputComponent
          inputStyle={styles.inputStyle}
          placeholder={t('auth.enterCity')}
          Icon={<Location />}
          value={city}
          onChangeText={value => {
            setCity(value);
          }}
          textContainerStyle={styles.textContainerStyle}
          containerStyle={{marginTop: windowWidth(2)}}
        />
        <TextInputComponent
          containerStyle={{
            marginHorizontal: windowWidth(0),
            marginTop: windowWidth(2),
          }}
          inputStyle={styles.inputStyle}
          placeholder={t('auth.zipCode')}
          Icon={<ZipCode />}
          value={zipCode}
          onChangeText={value => {
            setZipCode(value);
          }}
          textContainerStyle={styles.textContainerStyle}
        />
      </View>
      <View style={styles.row}>
        <TextInputComponent
          inputStyle={styles.inputStyle}
          placeholder={t('auth.state')}
          Icon={<State />}
          value={state}
          onChangeText={value => {
            setState(value);
          }}
          textContainerStyle={styles.textContainerStyle}
        />
        <TextInputComponent
          containerStyle={{marginHorizontal: windowWidth(0)}}
          inputStyle={styles.inputStyle}
          placeholder={t('auth.country')}
          Icon={<State />}
          value={country}
          onChangeText={value => {
            setCountry(value);
          }}
          textContainerStyle={styles.textContainerStyle}
        />
      </View>
    </View>
  );
}
