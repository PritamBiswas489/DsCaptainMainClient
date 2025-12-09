import {View, Text} from 'react-native';
import React from 'react';
import {GlobalStyle} from '@style/styles';
import {styles} from './styles';
import GradientBtn from '@commonComponents/gradientBtn';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from 'src/navigation/types';
import {useNavigation} from '@react-navigation/native';
import {useValues} from '../../../../../App';
import appColors from '@theme/appColors';

type routeProps = NativeStackNavigationProp<RootStackParamList>;
export default function ContentView() {
  const {navigate} = useNavigation<routeProps>();
  const {isDark,t} = useValues();
  return (
    <View>
      <View
        style={[
          GlobalStyle.dashLine,
          styles.dashLine,
          {borderColor: isDark ? appColors.darkBorder : appColors.border},
        ]}
      />
      <View style={styles.center}>
        <Text style={styles.textStyle}>{t('subscription.detail')}</Text>
      </View>
      <GradientBtn
        label={'subscription.selectPlan'}
        onPress={() => navigate('Subscription')}
      />
    </View>
  );
}
