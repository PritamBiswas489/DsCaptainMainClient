import {Alert, TouchableOpacity, View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import {styles} from './styles';
import UploadContainerView from '@otherComponent/auth/uploadContainer';
import TextInputComponent from '@otherComponent/auth/textInput';
import {Company, Experience, Call} from '@utils/icons';
import PhoneTextInput from '@otherComponent/auth/phoneTextInput';
import {windowHeight, windowWidth} from '@theme/appConstant';
import {Notes, Email, Location} from '@utils/icons';
import {experienceData} from '../data/data';
import {ImageLibraryOptions} from 'react-native-image-picker';
import {handleImagePicker} from '@utils/functions';
import {DropdownWithIcon} from '@commonComponents/dropdownWithIcon';
import {GlobalStyle} from '@style/styles';
import {dropDownType} from './types';
import {useValues} from '../../../../../../../App';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
 
import { Identity } from '@utils/icons';
import { useNavigation } from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from 'src/navigation/types';
import { DropdownItem } from '@src/commonComponents/dropdownWithIcon/types';
import { profileUpdateFieldActions } from '@src/store/redux/profile-field-redux';
import SelectionDropdown from '@src/otherComponent/selectionDropdown';

interface DataItem {
  label: string;
  value: string;
}

type props = NativeStackNavigationProp<RootStackParamList>;
export default function InputField() {
  const dispatch = useDispatch()
  const {navigate} = useNavigation<props>();
  const company = useSelector((state: RootState)=>state['serviceProviderAccountData'].company_name)
  const [companyName,setCompanyName] = useState<string>(company)
  const setCompany = (value:string)=>{
      setCompanyName(value)
  }
  const email = useSelector((state: RootState)=>state['serviceProviderAccountData'].company_email)
  const [companyEmail,setCompanyEmail] = useState<string>(email)
  const setEmail = (value:string)=> {
      setCompanyEmail(value)
  }
  const phoneNo = useSelector((state: RootState)=>state['serviceProviderAccountData'].company_phone)
  const [companyPhone,setCompanyPhone] = useState<string>(phoneNo)
  const setPhoneNumber = (value:string)=> {
      setCompanyPhone(value)
  }
  const companyAddr = useSelector((state: RootState)=>state['serviceProviderAccountData'].company_address)
  const companyLat = useSelector((state: RootState)=>state['serviceProviderAccountData']?.coordinates?.latitude)
  const companyLng = useSelector((state: RootState)=>state['serviceProviderAccountData']?.coordinates?.longitude)
  const [companyAddress,setCompanyAddress] = useState<string>(companyAddr)

  const zoneID = useSelector((state: RootState)=>state['serviceProviderAccountData'].zone_id)
  

  //=====================  changing company address  ================================================//
  const re_company_address =  useSelector((state: RootState)=>state['mapField'].address) 
  const re_latitude =  useSelector((state: RootState)=>state['mapField'].latitude) 
  const re_longitude =  useSelector((state: RootState)=>state['mapField'].longitude) 

  useEffect(()=>{
    if(re_company_address.trim()!=='' && companyAddr!==re_company_address){
      dispatch(profileUpdateFieldActions.setData(
        {
              field   :'company_address',
              data    : re_company_address
        }
      ))
      setCompanyAddress(re_company_address)
      dispatch(profileUpdateFieldActions.setData({
            field  :'latitude',
            data   : re_latitude
      }))
      dispatch(profileUpdateFieldActions.setData({
            field :'longitude',
            data  : re_longitude
      }))
    }else{
      dispatch(profileUpdateFieldActions.setData(
        {
              field   :'company_address',
              data    : companyAddr
        }
      ))
      dispatch(profileUpdateFieldActions.setData({
              field  :'latitude',
              data   : companyLat
      }))
      dispatch(profileUpdateFieldActions.setData({
              field  :'longitude',
              data   : companyLng
      }))
           
    }
  },[re_company_address,re_latitude,re_longitude])
  


  //company name
  const dispatchCompanyName = ()=>{
    dispatch(profileUpdateFieldActions.setData(
      {
        field:'company_name',
        data:companyName
      }
    ))
  }
  //company email
  const dispatchCompanyEmail = ()=>{
    dispatch(profileUpdateFieldActions.setData(
      {
        field:'company_email',
        data:companyEmail
      }
    ))
  }
  //company phone
  const dispatchCompanyPhone = () =>{
    dispatch(profileUpdateFieldActions.setData(
      {
        field:'company_phone',
        data:companyPhone
      }
    ))
  }
  

  useEffect(()=>{
      dispatchCompanyName()  
  },[companyName])

  useEffect(()=>{
      dispatchCompanyEmail()
  },[companyEmail])

  useEffect(()=>{
      dispatchCompanyPhone()  
  },[companyPhone])

 

  const errorCompany        = useSelector((state: RootState)=>state['profileUpdateErrorField'].company_name) //company name
  const errorPhoneNo        = useSelector((state: RootState)=>state['profileUpdateErrorField'].company_phone) //company phone
  const errorCompanyAddress = useSelector((state: RootState)=>state['profileUpdateErrorField'].company_address)//company address
  const errorZoneId         = useSelector((state: RootState)=>state['profileUpdateErrorField'].zone_id) //zone id
  const errorEmail          = useSelector((state: RootState)=>state['profileUpdateErrorField'].company_email) //company email
  
  const {t} = useValues();

  const zones = useSelector((state: RootState)=>state['zoneList'].zones)
  const [zoneList,setZoneList] = useState<DataItem[]>([]);
  const [selectedZone,setSelectedZone] = useState<string>(zoneID);

  //company zone
  const dispatchCompanyZone = () =>{
      
    dispatch(profileUpdateFieldActions.setData(
      {
        field:'zone_id',
        data:selectedZone
      }
    ))
  }

  useEffect(()=>{
    dispatchCompanyZone()
},[selectedZone])
   
  useEffect(()=>{
    if(zones!==''){
      const parseZones = JSON.parse(zones)
      const loopZones: { label: string; value: string }[] = [];
      if(parseZones.length > 0){
         parseZones.forEach((arr:{name:string, id:string},index:number)=>{
              loopZones.push({ label: arr.name, value: arr.id });
         })
         setZoneList(loopZones)
      }
    }
  },[zones])
   
  return ( 
    <View style={styles.container}>
     {/*************  Company/Individual Name **********************/}
     <TextInputComponent
              placeholder={t('newDeveloper.CompanyIndividualName')}
              Icon={<Company />}
              error={errorCompany}
              value={companyName}
              onChangeText={value => { setCompany(value)  }}
              containerStyle={{marginBottom: windowHeight(1)}}
      />
    {/************  Company phone number *****************/}
    <TextInputComponent
                  containerStyle={{marginTop: windowWidth(3)}}
                  textContainerStyle={{width: windowWidth(45)}}
                  placeholder={t('auth.phoneNumber')}
                  keyboardType="number-pad"
                  value={companyPhone}
                  Icon={<Call />}
                  error={errorPhoneNo}
                  onChangeText={value => { setPhoneNumber(value)  }}
      />
     {/*************  Company address **********/}
      <TouchableOpacity onPress={()=>navigate('AddressCurrentLocation')}>
        <TextInputComponent
            placeholder={t('newDeveloper.AddYourAddress')}
            Icon={<Location />}
            error={errorCompanyAddress}
            value={companyAddress}
            editable={false}
            onFocus={()=>navigate('AddressCurrentLocation')}
            onChangeText={value => {  }}
            containerStyle={{
              marginBottom: windowWidth(1),
              marginTop: windowWidth(1),
            }}
          />
          </TouchableOpacity>
      {/**********************  Company email *********************/}
      <TextInputComponent
        placeholder={t('auth.companyMail')}
        error={errorEmail}
        Icon={<Email />}
        value={companyEmail}
        onChangeText={value => { setEmail(value) }}
        containerStyle={{
          marginBottom: windowWidth(1),
          marginTop: windowWidth(1),
        }}
      />
      <SelectionDropdown 
        data={zoneList} 
        value={selectedZone} 
        setValue={(value:string)=>{
          setSelectedZone(value)
        }}
       label={t('newDeveloper.selectZone')}
       error={errorZoneId}
       />
       
      {/* <DropdownWithIcon
        icon={<Identity />}
        label="newDeveloper.SelectZone"
        data={zoneList}
        onSelect={(value:DropdownItem) => { setCompanyZoneId(value) }}
        error={errorZoneId}
        selectedValue={selectedZone}
      /> */}
    </View>

    
  );
}
