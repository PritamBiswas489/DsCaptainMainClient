import React, {useRef, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  GestureResponderEvent,
  Animated,
} from 'react-native';
import {loginLeaf, logo, darkLogo, darkLeaf2} from '@utils/images';
import {styles} from './styles';
import {BackArrow} from '@utils/icons';
import {signUpComponentProps} from './types';
import {RootStackParamList} from 'src/navigation/types';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useValues} from '../../../../App';
import appColors from '@theme/appColors';
import {windowWidth} from '@theme/appConstant';
export default function Header({
  authTitle,
  content,
  showBack,
  gotoScreen,
  containerStyle,
}: signUpComponentProps) {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const shakeAnimation = useRef(new Animated.Value(0)).current;
  const translateXAnimation = useRef(new Animated.Value(0)).current;
  const {isDark, t} = useValues();

  const rotation = shakeAnimation.interpolate({
    inputRange: [-1, 1],
    outputRange: ['-4deg', '4deg'],
  });

  const translateX = shakeAnimation.interpolate({
    inputRange: [-1, 1],
    outputRange: [-1, 1],
  });

  useEffect(() => {
    setTimeout(() => {
      rotateAnimation();
    }, 2000);
  }, []);

  const rotateAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.parallel([
          Animated.timing(shakeAnimation, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true,
          }),
          Animated.timing(translateXAnimation, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true,
          }),
        ]),
        Animated.parallel([
          Animated.timing(shakeAnimation, {
            toValue: -1,
            duration: 2000,
            useNativeDriver: true,
          }),
          Animated.timing(translateXAnimation, {
            toValue: -1,
            duration: 2000,
            useNativeDriver: true,
          }),
        ]),
      ]),
    ).start();
  };

  return (
    <View>
      <View style={styles.headerRow}>
        <View style={[styles.textContainer, containerStyle]}>
          <View style={styles.rowContainer}>
            {showBack && (
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={
                  gotoScreen
                    ? (gotoScreen as unknown as (
                        event: GestureResponderEvent,
                      ) => void)
                    : () => navigation.goBack()
                }
                style={[
                  styles.arrowLeft,
                  {
                    backgroundColor: isDark
                      ? appColors.darkText
                      : appColors.white,
                    borderWidth: isDark ? 0.2 : windowWidth(0.4),
                  },
                ]}>
                <BackArrow />
              </TouchableOpacity>
            )}
            {/* <Image source={isDark ? darkLogo : logo} style={styles.logoStyle} /> */}
          </View>
        </View>
        <View style={styles.row}>
          <Animated.Image
            source={isDark ? darkLeaf2 : loginLeaf}
            style={[
              isDark ? styles.darkLeafStyle : styles.leafStyle,
              {transform: [{rotate: rotation}, {translateX: translateX}]},
            ]}
          />
        </View>
      </View>
      <View style={[styles.textContainer, styles.marginTop]}>
        <Text
          style={[
            styles.heading,
            {color: isDark ? appColors.white : appColors.darkText},
          ]}>
          {t(authTitle)}
        </Text>
        <Text style={styles.content}>{t(content)}</Text>
      </View>
    </View>
  );
}
