import {View, Image, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {serviceMen} from '@utils/images';
import {RightArrow} from '@utils/icons';
import {RootStackParamList} from 'src/navigation/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {useValues} from '../../../../../../App';
import appColors from '@theme/appColors';

type navigationProp = NativeStackNavigationProp<RootStackParamList>;

export function Provider() {
  const {navigate} = useNavigation<navigationProp>();
  const {isDark,t} = useValues();
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => navigate('ProviderInfo')}>
      <View style={styles.providerContainer}>
        <View style={styles.container}>
          <Image source={serviceMen} style={styles.imageStyle} />
          <View>
            <Text
              style={[
                styles.textStyle,
                {color: isDark ? appColors.white : appColors.lightText},
              ]}>
              {t('serviceMenLogin.providerDetail')}
            </Text>
            <Text
              style={[
                styles.name,
                {color: isDark ? appColors.lightText : appColors.darkText},
              ]}>
              {t('serviceMenLogin.name')}
            </Text>
          </View>
        </View>
        <RightArrow
          color={isDark ? appColors.white : appColors.lightText}
          height={'20'}
          width={'20'}
        />
      </View>
      <View
        style={[
          styles.lineView,
          {borderColor: isDark ? appColors.darkBorder : appColors.border},
        ]}
      />
    </TouchableOpacity>
  );
}
