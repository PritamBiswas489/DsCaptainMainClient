import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {subscriptionBg} from '@utils/images';
import {Cross} from '@utils/icons';
import appColors from '@theme/appColors';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from 'src/navigation/types';
import {useNavigation} from '@react-navigation/native';
import {useValues} from '../../../../../App';

export default function ImageBackground() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const {isDark,t} = useValues();
  return (
    <View>
      <Image source={subscriptionBg} style={styles.imageStyle} />
      <View style={styles.innerContainer}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => navigation.goBack()}
          style={styles.crossContainer}>
          <Cross
            strokeWidth={'1.2'}
            height={'20'}
            width={'20'}
            color={appColors.white}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.mainContainer}>
        <Text
          style={[
            styles.title,
            {color: isDark ? appColors.white : appColors.darkText},
          ]}>
          {t('subscription.title')}
        </Text>
        <Text style={styles.content}>{t('subscription.content')}</Text>
      </View>
    </View>
  );
}
