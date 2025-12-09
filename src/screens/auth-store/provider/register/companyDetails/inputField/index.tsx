import { Alert, TouchableOpacity, View, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import { styles } from './styles';
import UploadContainerView from '@otherComponent/auth-store/uploadContainer';
import TextInputComponent from '@otherComponent/auth-store/textInput';
import { Company, Experience } from '@utils/icons';
 
import { windowHeight, windowWidth } from '@theme/appConstant';
import { Notes, Email, Location, Amount, Clock } from '@utils/icons';

import { ImageLibraryOptions } from 'react-native-image-picker';
import { handleImagePicker } from '@utils/functions';

import { useValues } from '../../../../../../../App';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
 

import { storeRegisterFieldActions } from '@src/store/redux/store/register-field-redux';
import { storeRegisterFieldErrorActions } from '@src/store/redux/store/register-error-redux';


import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from 'src/navigation/types';
import SelectionDropdown from '@src/otherComponent/selectionDropdown';
import DeliveryTimePicker from '@commonComponents/deliveryTimePicker';
import { ModuleInterface } from '@src/interfaces/store/modules.interface';
import { Image as RNImage } from 'react-native';

interface DataItem {
  label: string;
  value: string;
}

type props = NativeStackNavigationProp<RootStackParamList>;
export default function InputField() {
  const dispatch = useDispatch()
  const { navigate } = useNavigation<props>();
  const { t } = useValues();
  const [showDeliveryTimeModal, setShowDeliveryTimeModal] = useState<boolean>(false)
  const modules = useSelector((state: RootState) => state['storeModules'])
  const [moduleList, setModulelist] = useState<DataItem[]>([]);
  const module_id = useSelector((state: RootState) => state['storeRegisterField'].module_id)

  useEffect(()=>{
    if(modules.length > 0){
      const loopZones: { label: string; value: string }[] = [];
         modules.forEach((arr:ModuleInterface,index:number)=>{
            return loopZones.push({ label: arr.module_name, value: arr.id.toString() });
         })

         setModulelist(loopZones)
       
    }
  },[modules])



  const setModuleId = (value: string) => {
    dispatch(storeRegisterFieldActions.setData({
      field: 'module_id',
      data: value,
    }))

    dispatch(storeRegisterFieldErrorActions.setData({
      field: 'module_id',
      data: '',
    }))
  }

  const moduleIdError = useSelector((state: RootState) => state['storeRegisterFieldError'].module_id)

  const logo = useSelector((state: RootState) => state['storeRegisterField'].logo)
  const setLogo = (value: string) => {
      dispatch(storeRegisterFieldActions.setData({
        field: 'logo',
        data: value,
      }))

      dispatch(storeRegisterFieldErrorActions.setData({
        field: 'logo',
        data: '',
      }))
  }

  const logoError = useSelector((state: RootState) => state['storeRegisterFieldError'].logo)

  const coverPhoto = useSelector((state: RootState) => state['storeRegisterField'].cover_photo)
  const setCoverPhoto = (value: string) => {
      dispatch(storeRegisterFieldActions.setData({
        field: 'cover_photo',
        data: value,
      }))

      dispatch(storeRegisterFieldErrorActions.setData({
        field: 'cover_photo',
        data: '',
      }))
  }
  const coverPhotoError = useSelector((state: RootState) => state['storeRegisterFieldError'].cover_photo)

  const openImage = () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    handleImagePicker(options, (imageUri: string) => {
      setLogo(imageUri);
    });
  };

  const openCoverPhoto = () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    handleImagePicker(options, (imageUri: string) => {
       
      setCoverPhoto(imageUri);
    });
  };

  const storeName = useSelector((state: RootState) => state['storeRegisterField'].store_name)

  const setStoreName = (value: string) => {
      dispatch(storeRegisterFieldActions.setData({
        field: 'store_name',
        data: value,
      }))

      dispatch(storeRegisterFieldErrorActions.setData({
        field: 'store_name',
        data: '',
      }))
  }
  
  const storeNameError = useSelector((state: RootState) => state['storeRegisterFieldError'].store_name)

  const storeAddress = useSelector((state: RootState) => state['storeMapField'].address)

  const errorStoreAddress = useSelector((state: RootState) => state['storeRegisterFieldError'].store_address)
  
   

  const tax = useSelector((state: RootState) => state['storeRegisterField'].tax)

  const setTax = (value: string) => {
    dispatch(storeRegisterFieldActions.setData({
      field: 'tax',
      data: value,
    }))

    dispatch(storeRegisterFieldErrorActions.setData({
      field: 'tax',
      data: '',
    }))
   }
   const taxError = useSelector((state: RootState) => state['storeRegisterFieldError'].tax)


   const [deliveryTimeValue,setDeliveryTimeValue] = useState('')
   const minimum_delivery_time = useSelector((state: RootState) => state['storeRegisterField'].minimum_delivery_time)
   const maximum_delivery_time = useSelector((state: RootState) => state['storeRegisterField'].maximum_delivery_time)
   const delivery_time_type = useSelector((state: RootState) => state['storeRegisterField'].delivery_time_type)

   useEffect(()=>{
    if(minimum_delivery_time && maximum_delivery_time && delivery_time_type){
        setDeliveryTimeValue(minimum_delivery_time+'-'+maximum_delivery_time+' '+delivery_time_type)
    }
   },[minimum_delivery_time,maximum_delivery_time,delivery_time_type])

   const deliveryTimeError = useSelector((state: RootState) => state['storeRegisterFieldError'].delivery_time)

  return (
     
    <View style={styles.container}>
      {/* Upload store logo  */}
      <UploadContainerView
        title={t('newDeveloper.UploadStorelogo')}
        onPress={() => openImage()}
        image={logo}
        setImage={setLogo}
        error={logoError}
      />
      {/* Upload store cover photo */}
      <UploadContainerView
        title={t('newDeveloper.Uploadstorecoverphoto')}
        onPress={() => openCoverPhoto()}
        image={coverPhoto}
        setImage={setCoverPhoto}
        error={coverPhotoError}
      />
      {/* Store name */}
      <TextInputComponent
        placeholder={t('newDeveloper.Enterstorename')}
        Icon={<Company />}
        error={storeNameError}
        value={storeName}
        onChangeText={value => {
          setStoreName(value);
        }}
        containerStyle={{ marginBottom: windowHeight(1) }}
      />

      <SelectionDropdown
        data={moduleList}
        value={module_id}
        setValue={(value: string) => {
          setModuleId(value)
        }}
        label={t('newDeveloper.Selectmodule')}
        error={moduleIdError}
      />
      {/* Company address */}
      <TouchableOpacity onPress={() => navigate('StoreAddressCurrentLocation')}>
        <TextInputComponent
          placeholder={t('newDeveloper.Selectstoreaddress')}
          Icon={<Location />}
          error={errorStoreAddress}
          value={storeAddress}
          editable={false}
          onFocus={() => navigate('StoreAddressCurrentLocation')}
          onChangeText={value => {
          }}
          containerStyle={{
            marginBottom: windowWidth(1),
            marginTop: windowWidth(1),
          }}
        />
      </TouchableOpacity>

      {/* tax vat value */}
      <TextInputComponent
        placeholder={t('Vat/tax')}
        Icon={<Amount />}
        error={taxError}
        keyboardType='number-pad'
        value={tax}
        onChangeText={value => {
          setTax(value);
        }}
        containerStyle={{ marginBottom: windowHeight(1) }}
      />


       {/* set delivery time */}
      <TouchableOpacity onPress={() => setShowDeliveryTimeModal(true)}>
        <TextInputComponent
          placeholder={t('newDeveloper.Selectdeliverytime')}
          Icon={<Clock />}
          error={deliveryTimeError}
          value={deliveryTimeValue}
          editable={false}
          onFocus={() => setShowDeliveryTimeModal(true)}
          onChangeText={value => {
          }}
          containerStyle={{
            marginBottom: windowWidth(1),
            marginTop: windowWidth(1),
          }}
        />
      </TouchableOpacity>

      {showDeliveryTimeModal && <DeliveryTimePicker showDeliveryTimeModal={showDeliveryTimeModal} setShowDeliveryTimeModal={setShowDeliveryTimeModal} />}

    </View>
  );
}
