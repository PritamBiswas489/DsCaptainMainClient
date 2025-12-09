import {View, Image, StyleSheet} from 'react-native';
import React from 'react';
import {windowHeight, windowWidth} from '@theme/appConstant';
import {GlobalStyle} from '@style/styles';
import Header from '@commonComponents/header';
import {useValues} from '../../../../../../../App';
import appColors from '@theme/appColors';

export function DocumentPreview({route}: {route: any}) {
  const {image} = route?.params;
  const {isDark} = useValues();
  return (
    <View
      style={[
        GlobalStyle.mainView,
        {backgroundColor: isDark ? appColors.darkTheme : appColors.white},
      ]}>
      <Header title="idVerification.preview" showBackArrow={true} />
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: windowHeight(50),
    width: windowWidth(85),
    resizeMode: 'contain',
    marginTop: windowHeight(3),
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
