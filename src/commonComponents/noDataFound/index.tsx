import React, {useEffect, useRef} from 'react';
import {View, Text, Image, Animated, ImageStyle} from 'react-native';
import Header from '../header';
import {GlobalStyle} from '@style/styles';
import {styles} from './styles';
import {NodataProps} from './types';
import {windowHeight} from '@theme/appConstant';
import {noValue} from '@utils/images';
import {useValues} from '../../../App';
import appColors from '@theme/appColors';
export default function NoDataFound({
  headerTitle,
  image,
  title,
  content,
  gradiantBtn,
  infoImage,
  showheader,
  imageStyle,
}: NodataProps) {
  const shakeAnimation = useRef(new Animated.Value(0)).current;
  const {isDark,t} = useValues();
  const rotation = shakeAnimation.interpolate({
    inputRange: [-1, 1],
    outputRange: ['-1deg', '-28deg'],
  });

  useEffect(() => {
    setTimeout(() => {
      rotateAnimation();
    }, 600);
  });

  const rotateAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(shakeAnimation, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(shakeAnimation, {
          toValue: -1,
          duration: 500,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  };

  return (
    <View
      style={[
        GlobalStyle.mainView,
        {backgroundColor: isDark ? appColors.darkTheme : appColors.white},
      ]}>
      {showheader && <Header title={headerTitle} />}
      <View style={styles.container}>
        <View style={styles.blankView}></View>
        <View>
          <Image source={image} style={styles.image} />
          {infoImage && <View style={styles.imageContainer}>
            <View style={styles.innerImageContainer}>
              <Animated.Image
                source={infoImage}
                style={[
                  styles.innerImage,
                  {transform: [{rotate: rotation}]},
                  imageStyle as ImageStyle,
                ]}
              />
            </View>
            <Image
              tintColor={isDark ? appColors.darkBorder : appColors.darkText}
              source={noValue}
              style={styles.imageStyle}
            />
          </View>}
          
        </View>
        <View style={{height: windowHeight(2)}}></View>
        <Text
          style={[
            styles.title,
            {color: isDark ? appColors.white : appColors.darkText},
          ]}>
          {t(title)}
        </Text>
        <Text style={styles.content}>{t(content)}</Text>
      </View>
      {gradiantBtn}
    </View>
  );
}
