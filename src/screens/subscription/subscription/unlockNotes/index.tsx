import {View, Text, TouchableOpacity, Animated, Easing} from 'react-native';
import React, {useRef, useEffect} from 'react';
import {DoubleArrow} from '@utils/icons';
import {GlobalStyle} from '@style/styles';
import {styles} from './styles';
import {RootStackParamList} from 'src/navigation/types';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useValues} from '../../../../../App';
type routeProps = NativeStackNavigationProp<RootStackParamList>;

export default function UnLockNotes() {
  const {navigate} = useNavigation<routeProps>();
  const {t} = useValues();

  const animatedValue = useRef(new Animated.Value(0)).current;

  const startAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animatedValue, {
          toValue: 1, // Move the icon to the right
          duration: 2000, // Animation duration
          easing: Easing.linear, // Easing function
          useNativeDriver: true, // Use native driver for better performance
        }),
        Animated.timing(animatedValue, {
          toValue: 0, // Move the icon to the left
          duration: 2000, // Animation duration
          easing: Easing.linear, // Easing function
          useNativeDriver: true, // Use native driver for better performance
        }),
      ]),
    ).start();
  };

  useEffect(() => {
    startAnimation();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.title}>{t('subscription.unlockPlan')}</Text>
        <TouchableOpacity
          onPress={() => navigate('SubscriptionPlan')}
          activeOpacity={0.9}
          style={GlobalStyle.circleView}>
          <Animated.View
            style={[
              {
                transform: [
                  {
                    translateX: animatedValue.interpolate({
                      inputRange: [0, 1],
                      outputRange: [-5, 5],
                    }),
                  },
                ],
              },
            ]}>
            <DoubleArrow />
          </Animated.View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
