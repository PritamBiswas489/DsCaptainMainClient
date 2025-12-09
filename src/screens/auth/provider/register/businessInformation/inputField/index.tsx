import {  View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from './styles';
import UploadContainerView from '@otherComponent/auth/uploadContainer';
import TextInputComponent from '@otherComponent/auth/textInput';
import { windowWidth } from '@theme/appConstant';
import { ImageLibraryOptions } from 'react-native-image-picker';
import { handleImagePicker } from '@utils/functions';
import { useValues } from '../../../../../../../App';
import {  useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
import SelectionDropdown from '@src/otherComponent/selectionDropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { DropdownWithIcon } from '@src/commonComponents';
import { Identity } from '@utils/icons';
import { registerFieldActions } from '@src/store/redux/register-field-redux';
import { registerFieldErrorActions } from '@src/store/redux/register-error-redux';
import { DropdownItem } from '@src/commonComponents/dropdownWithIcon/types';
 
interface DataItem {
  label: string;
  value: string;
}

export default function InputField() {
  const dispatch = useDispatch()

  const { t } = useValues();
   
  const documentImageFront =  useSelector((state: RootState)=>state['registerProviderField'].identity_front_image) 
  const setDocumentImageFront = (value:string)=>{
    dispatch(registerFieldActions.setData({
      field: 'identity_front_image',
      data: value,
     }))
     dispatch(registerFieldErrorActions.setData({
      field: 'identity_front_image',
      data: '',
     }))
  }
  const errorDocumentImageFront = useSelector((state: RootState)=>state['registerProviderErrorField'].identity_front_image)

  const documentImageBack =  useSelector((state: RootState)=>state['registerProviderField'].identity_back_image) 
  const setDocumentImageBack = (value:string)=>{
    dispatch(registerFieldActions.setData({
      field: 'identity_back_image',
      data: value,
     }))
  }


  const zones = useSelector((state: RootState)=>state['zoneList'].zones)
  const [zoneList,setZoneList] = useState<DataItem[]>([]);

  const zone_id = useSelector((state: RootState)=>state['registerProviderField'].zone_id)
  const setZoneId = (value:string)=>{
     dispatch(registerFieldActions.setData({
      field: 'zone_id',
      data: value,
     }))

     dispatch(registerFieldErrorActions.setData({
      field: 'zone_id',
      data: '',
     }))
  }
  const errorZoneId = useSelector((state: RootState)=>state['registerProviderErrorField'].zone_id)

  const identity_type = useSelector((state: RootState)=>state['registerProviderField'].identity_type)
  const setIdentityType = (value:DropdownItem)=>{
    dispatch(registerFieldActions.setData({
     field: 'identity_type',
     data: value,
    }))
    dispatch(registerFieldErrorActions.setData({
      field: 'identity_type',
      data: '',
     }))
   }

  const errorIdentityType = useSelector((state: RootState)=>state['registerProviderErrorField'].identity_type)

  const identity_number = useSelector((state: RootState)=>state['registerProviderField'].identity_number)
  const setIdentityNumber = (value:string)=>{
    dispatch(registerFieldActions.setData({
     field: 'identity_number',
     data: value,
    }))
    dispatch(registerFieldErrorActions.setData({
      field: 'identity_number',
      data: '',
     }))
 }
 const errorIdentityNumber  = useSelector((state: RootState)=>state['registerProviderErrorField'].identity_number)

  useEffect(()=>{
    
    if(zones!==''){
     
      const parseZones = JSON.parse(zones)
      const loopZones: { label: string; value: string }[] = [];
      if(parseZones.length > 0){
         parseZones.forEach((arr:{name:string, id:string},index:number)=>{
            return loopZones.push({ label: arr.name, value: arr.id });
         })
         setZoneList(loopZones)
      }
    }
  },[zones])

  const identityDataItems: DataItem[] = [
    { label: t('identityDetails.driving_license'), value: 'driving_license' },
    { label: t('identityDetails.trade_license'), value: 'trade_license' },
    { label: t('identityDetails.nid'), value: 'nid' },
    { label: t('identityDetails.passport'), value: 'passport' },
  ]

  const openImageFront = () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    handleImagePicker(options, (imageUri: string) => {
      setDocumentImageFront(imageUri);
    });
  };
  const openImageBack = () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    handleImagePicker(options, (imageUri: string) => {
      setDocumentImageBack(imageUri);
    });
  };
  return (
    <View style={styles.container}>
     {/* <DropdownWithIcon
        icon={<Identity />}
        label="newDeveloper.SelectZone"
        data={zoneList}
        onSelect={(value:DropdownItem) => {  
            setZoneId(value)  
        }}
        error={errorZoneId}
        selectedValue={zone_id}
      /> */}

       <SelectionDropdown 
            data={zoneList} 
            value={zone_id} 
            setValue={(value:string)=>{
              setZoneId(value)
            }}
          label={t('newDeveloper.selectZone')} 
          error={errorZoneId}
       />


    <DropdownWithIcon
        icon={<Identity />}
        label="newDeveloper.IndentityDocumentType"
        data={identityDataItems}
        onSelect={(value:DropdownItem) => { 
            setIdentityType(value) 
        }}
        error={errorIdentityType}
        selectedValue={identity_type}
      />
      <TextInputComponent
        placeholder={t('newDeveloper.IndentityNumber')}
        value={identity_number}
        Icon={<Identity />}
        onChangeText={value => {
             setIdentityNumber(value)
        }}
        error={errorIdentityNumber}
        containerStyle={{
          marginBottom: windowWidth(1),
          marginTop: windowWidth(1),
        }}
      />

      <UploadContainerView
        title={'newDeveloper.uploadidentityFrontImage'}
        onPress={() => openImageFront()}
        image={documentImageFront}
        setImage={setDocumentImageFront}
        error={errorDocumentImageFront}
      />

     {documentImageFront && <UploadContainerView
        title={'newDeveloper.uploadidentityBackImage'}
        onPress={() => openImageBack()}
        image={documentImageBack}
        setImage={setDocumentImageBack}
        error={''}
      />} 
    </View>
  );
}
