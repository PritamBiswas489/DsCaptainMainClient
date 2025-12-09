import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {Email, Call} from '@utils/icons';
import appColors from '@theme/appColors';
import {windowWidth} from '@theme/appConstant';
import {PersonalInfo} from '@otherComponent/personalInfo';
import { useValues } from '../../../../../../../../App';
export function Info() {
const {t} = useValues()
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{t('providerDetail.personalInfo')} :</Text>
      <PersonalInfo
        icon={
          <Email strokeWidth={'1.4'} height={'20'} color={appColors.darkText} />
        }
        name={'providerDetail.mail'}
        containerStyle={{right: windowWidth(2)}}
        detail={'serviceManDetails.email'}
      />
      <PersonalInfo
        icon={<Call height={'20'} width={'19'} color={appColors.darkText} />}
        name={'providerDetail.call'}
        detail={'+1 236 236 5653'}
      />
    </View>
  );
}
