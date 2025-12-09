import {View, Image, TouchableOpacity} from 'react-native';
import React, { useEffect } from 'react';
import { useState } from 'react';
import {styles} from './styles';
import {customer3} from '@utils/images';
import {Edit} from '@utils/icons';
import appColors from '@theme/appColors';
import { useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
import { getMediaUrl } from '@src/config/utility';

export default function UserProfile({
  setShowModal,
}: {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {

  const {  logo } = useSelector((state: RootState) => state['serviceProviderAccountData'])
  const [userProfileLogo,setUserProfileLogo] = useState(`${getMediaUrl()}/provider/logo/${logo}`)
  //console.log(userProfileLogo)

  const {logo:selectedProfileLogo} = useSelector((state: RootState) => state['profileProviderUpdateField'])

  useEffect(()=>{
    if(selectedProfileLogo!=''){
      setUserProfileLogo(selectedProfileLogo)
    }

  },[selectedProfileLogo])


  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: userProfileLogo }} style={styles.image} />
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
