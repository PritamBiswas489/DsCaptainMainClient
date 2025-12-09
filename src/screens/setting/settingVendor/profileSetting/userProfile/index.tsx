import {View, Image, TouchableOpacity,Alert} from 'react-native';
import React, { useEffect } from 'react';
import { useState } from 'react';
import {styles} from './styles';
import {Edit} from '@utils/icons';
import appColors from '@theme/appColors';
import { useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
import { userPlaceHolder } from '@src/utils/images';
 

export default function UserProfile({
  setShowModal,
}: {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  
  const {  stores, image_full_url } = useSelector((state: RootState) => state['storeProfileData'])
  let profileImage = image_full_url
  
  

  const [userProfileLogo,setUserProfileLogo] = useState(profileImage)

  const {logo:selectedProfileLogo} = useSelector((state: RootState) => state['vendorProfileUpdateField'])

  useEffect(()=>{
    if(selectedProfileLogo!=''){
      setUserProfileLogo(selectedProfileLogo)
    }
  },[selectedProfileLogo])


  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {userProfileLogo ? <Image source={{ uri: userProfileLogo }} style={styles.image} /> : <Image source={userPlaceHolder} style={styles.image} />}
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => setShowModal(true)}
          style={styles.iconView}>
          <Edit color={appColors.primary} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
