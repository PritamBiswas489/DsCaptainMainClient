import {View} from 'react-native';
import React, {useState} from 'react';
import {windowHeight, windowWidth} from '@theme/appConstant';
import TextInputComponent from '@otherComponent/auth/textInput';
import {Street, ZipCode, State, Location} from '@utils/icons';
import {styles} from './styles';
import GradientBtn from '@commonComponents/gradientBtn';
import {useValues} from '../../../../../../../../App';
export default function TextInputField({
  latitudeData,
  longitudeData,
  setModalVisible,
  setAddressData,
}: any) {
  const [errors, setErrors] = useState({
    area: '',
    zipCode: '',
    address: '',
    city: '',
    state: '',
    country: '',
  });
  const [form, setForm] = useState({
    area: '',
    zipCode: '',
    address: '',
    city: '',
    state: '',
    country: '',
  });
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const {t} = useValues();
  const onChange = ({name, value}: {name: string; value: string}) => {
    setForm({...form, [name]: value});
    if (value !== '') {
      setErrors(prev => {
        return {...prev, [name]: null};
      });
    }
  };

  const onSubmit = () => {
    if (!form.area) {
      setErrors(prev => {
        return {...prev, area: t('error.enterValue')};
      });
    }
    if (!form.zipCode) {
      setErrors(prev => {
        return {...prev, zipCode: t('error.enterValue')};
      });
    }
    if (!form.address) {
      setErrors(prev => {
        return {...prev, address: t('error.enterValue')};
      });
    }
    if (!form.city) {
      setErrors(prev => {
        return {...prev, city: t('error.enterValue')};
      });
    }
    if (!form.state) {
      setErrors(prev => {
        return {...prev, state: t('error.enterValue')};
      });
    }
    if (!form.country) {
      setErrors(prev => {
        return {...prev, country: t('error.enterValue')};
      });
    } else {
      setModalVisible(true);
      setAddressData(form);
    }
  };

  return (
    <>
      <View style={{marginTop: windowHeight(2)}}>
        <TextInputComponent
          placeholder={t('location.selectArea')}
          Icon={<Street />}
          value={form.area}
          onChangeText={value => {
            onChange({name: 'area', value});
          }}
          error={errors.area}
          containerStyle={{marginBottom: windowHeight(1)}}
        />
        <View style={styles.row}>
          <TextInputComponent
            inputStyle={styles.inputStyle}
            placeholder={t('location.latitude')}
            Icon={<Location />}
            value={latitudeData ? latitudeData.toString() : ''}
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
            inputStyle={styles.inputContainer}
            placeholder={t('location.longitude')}
            Icon={<ZipCode width={'21'} />}
            value={longitudeData ? longitudeData.toString() : ''}
            onChangeText={value => {
              setLongitude(value);
            }}
          />
        </View>
        <View style={styles.row}>
          <TextInputComponent
            inputStyle={styles.inputStyle}
            placeholder={t('auth.enterCity')}
            Icon={<Location />}
            value={form.city}
            onChangeText={value => {
              onChange({name: 'city', value});
            }}
            error={errors.city}
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
            value={form.zipCode}
            onChangeText={value => {
              onChange({name: 'zipCode', value});
            }}
            error={errors.zipCode}
            textContainerStyle={styles.textContainerStyle}
            keyboardType={'number-pad'}
          />
        </View>
        <View style={styles.row}>
          <TextInputComponent
            inputStyle={styles.inputStyle}
            placeholder={t('auth.state')}
            Icon={<State />}
            value={form.state}
            onChangeText={value => {
              onChange({name: 'state', value});
            }}
            error={errors.state}
            textContainerStyle={styles.textContainerStyle}
          />
          <TextInputComponent
            containerStyle={{marginHorizontal: windowWidth(0)}}
            inputStyle={styles.inputStyle}
            placeholder={t('auth.country')}
            Icon={<State />}
            value={form.country}
            onChangeText={value => {
              onChange({name: 'country', value});
            }}
            error={errors.country}
            textContainerStyle={styles.textContainerStyle}
          />
        </View>
        <TextInputComponent
          placeholder={t('location.address')}
          Icon={<Street />}
          value={form.address}
          onChangeText={value => {
            onChange({name: 'address', value});
          }}
          error={errors.address}
          containerStyle={{marginBottom: windowHeight(1)}}
        />
      </View>
      <GradientBtn label="auth.addArea" onPress={onSubmit} />
    </>
  );
}
