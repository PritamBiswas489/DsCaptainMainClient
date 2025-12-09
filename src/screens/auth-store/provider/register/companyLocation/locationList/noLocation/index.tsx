import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {companyLocation} from '@utils/images';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from 'src/navigation/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useValues} from '../../../../../../../../App';
import appColors from '@theme/appColors';

type props = NativeStackNavigationProp<RootStackParamList>;
export default function NoLocation() {
  const {navigate} = useNavigation<props>();
  const {isDark,t} = useValues();
  return (
    <View style={styles.innerContainer}>
      <Image source={companyLocation} style={styles.imageStyle} />
      <Text
        style={[
          styles.content,
          {color: isDark ? appColors.white : appColors.darkText},
        ]}>
        {t('auth.locationContent')}
      </Text>
      <TouchableOpacity
        onPress={() => navigate('CurrentLocation')}
        activeOpacity={0.9}>
        <Text style={styles.textStyle}>+ {t('auth.addArea')}</Text>
      </TouchableOpacity>
    </View>
  );
}
