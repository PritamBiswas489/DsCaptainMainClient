import {View, Text, TouchableOpacity, ViewStyle, Linking} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {Call, Chat, Whatsapp} from '@utils/icons';
import appColors from '@theme/appColors';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from 'src/navigation/types';
import { useValues } from '../../../../../App';
type routeProps = NativeStackNavigationProp<RootStackParamList>;
export function SocialView({containerStyle}: {containerStyle?: ViewStyle}) {
  const {navigate} = useNavigation<routeProps>();
  const {t} = useValues()
  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => Linking.openURL('tel:987323131')}
        style={styles.row}>
        <Call height={'24'} width={'20'} color={appColors.primary} />
        <Text style={styles.title}>{t('providerDetail.call')}</Text>
        <View style={styles.verticalLine}></View>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => navigate('Chat')}
        style={styles.row}>
        <Chat color={appColors.primary} height={'22'} width={'19'} />
        <Text style={styles.title}>{t('chat.chat')}</Text>
        <View style={styles.verticalLine}></View>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => {}}
        style={styles.row}>
        <Whatsapp height={'22'} width={'26'} />
        <Text style={styles.title}>{t('chat.wp')}</Text>
      </TouchableOpacity>
    </View>
  );
}
