import {View, Image, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {person} from '@utils/images';
import {GlobalStyle} from '@style/styles';
import {Verify, Star, StarIcon, Location} from '@utils/icons';
import {ExperienceDetail} from '@otherComponent/home';
import {windowWidth} from '@theme/appConstant';
import {useValues} from '../../../../../../../App';
import appColors from '@theme/appColors';
import { ServiceMenDetailsInterface } from '@src/interfaces/serviceMenDetailsInterface';
import { maleDefault, femaleDefault } from '@src/utils/images';
import { getMediaUrl } from '@src/config/utility';

export default function Profile({details}:{details:ServiceMenDetailsInterface}) {
  const {t, isDark} = useValues();
  const defaultImageValue = details.gender !== 'female' ? femaleDefault : maleDefault
  let profilePic = ''
   if(details.profile_image!==''){
    profilePic = `${getMediaUrl()}/serviceman/profile/${details.profile_image}`
   }else{
    profilePic = defaultImageValue
   }
    
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.innerContainer,
          {backgroundColor: isDark ? appColors.darkCard : appColors.ratingBg},
        ]}
      />
      <View style={styles.profileContainer}>
        <Image source={{uri:profilePic}} style={styles.personImg} />
        <View style={[styles.row, {bottom: 10}]}>
          <Text
            style={[
              GlobalStyle.title,
              {color: isDark ? appColors.white : appColors.darkText},
            ]}>
            {`${details.first_name} ${details.last_name}`}
          </Text>
        </View>
      </View>
      <ExperienceDetail
        contentStyle={{width: windowWidth(90), marginTop: 2}}
        providerContent={'serviceManDetails.detail'}
        details={details}
      />
    </View>
  );
}
