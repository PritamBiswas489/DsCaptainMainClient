import {View, Image, Animated, Text} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {styles} from './styles';
import {
  darkLeaf,
  darkLeaf1,
  darkVector,
  leaf,
  leaf1,
  slider,
  vector,
  vector5,
} from '@utils/images';
import appColors from '@theme/appColors';
import {useValues} from '../../../../../App';

export default function IntroData() {
  const animated1 = new Animated.Value(0);
  const duration = 2000;
  const logoScaleAnimation = new Animated.Value(0);
  const checkAnimation = new Animated.Value(0);
  const shakeAnimation = useRef(new Animated.Value(0)).current;
  const {isDark,t} = useValues();

  useEffect(() => {
    anim();
  }, [animated1]);

  useEffect(() => {
    setTimeout(() => {
      shake();
    }, 600);
  });

  useEffect(() => {
    Animated.timing(logoScaleAnimation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {});
  }, [logoScaleAnimation]);

  useEffect(() => {}, [checkAnimation]);
  const shake = () => {
    Animated.sequence([
      Animated.timing(shakeAnimation, {
        toValue: -10,
        duration: 180,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: 10,
        duration: 250,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: -5,
        duration: 250,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: 5,
        duration: 250,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: 0,
        duration: 180,
        useNativeDriver: true,
      }),
    ]).start();

    Animated.timing(checkAnimation, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  };

  const anim = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animated1, {
          toValue: 10,
          duration: duration,
          useNativeDriver: true,
        }),
        Animated.timing(animated1, {
          toValue: 0,
          duration: duration,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  };

  return (
    <View style={styles.imageContainer}>
      <View style={styles.marginTop}>
        <Image source={isDark ? darkVector : vector} style={styles.vectorImg} />
        <View style={styles.vectorView}>
          <View style={styles.marginView}></View>
          <View style={styles.marginView}>
            <Animated.Image
              source={isDark ? darkLeaf : leaf}
              style={[styles.leafImg, {transform: [{translateY: animated1}]}]}
            />
          </View>
          <View>
            <Animated.Image
              source={isDark ? darkLeaf1 : leaf1}
              style={[styles.leafImg1, {transform: [{translateY: animated1}]}]}
            />
          </View>
        </View>
        <View style={styles.position}>
          <View style={styles.imageContainer}>
            <Image source={slider} style={styles.image} />
          </View>
        </View>
        <View style={styles.rowContainer}>
          <Image source={vector5} style={styles.vector5} />
        </View>
      </View>
      <View style={styles.container}>
        <Text
          style={[
            styles.title,
            {color: isDark ? appColors.white : appColors.darkText},
          ]}>
          {t('introSlider.title')}
        </Text>
      </View>
    </View>
  );
}
