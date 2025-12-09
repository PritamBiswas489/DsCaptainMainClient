import {View, Image, Text} from 'react-native';
import React from 'react';
import {GlobalStyle} from '@style/styles';
import CancelHeader from '@commonComponents/cancelHeader';
import {styles} from './styles';
import GridButton from '@commonComponents/gridButton';
import appColors from '@theme/appColors';
import {propsType} from './types';
import {useValues} from '../../../../App';

export function ServiceMenModal({
  headerTitle,
  content,
  onButton1Click,
  onButtonClick,
  image,

  setSelectServiceMenModal,
}: propsType) {
  const {isDark, t} = useValues();
  return (
    <View
      style={[
        GlobalStyle.modal,
        {backgroundColor: isDark ? appColors.darkCard : appColors.white},
      ]}>
      <CancelHeader
        gotoScreen={() => setSelectServiceMenModal(false)}
        title={headerTitle}
      />
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
        <Text style={styles.title}>{t(content)}</Text>
        <GridButton
          label1={'wallet.cancel'}
          onButtonClick={onButtonClick}
          label={'booking.yes'}
          onButton1Click={onButton1Click}
          button1TextStyle={styles.button1TextStyle}
          buttonStyle={styles.buttonStyle}
          buttonTextStyle={styles.buttonTextStyle}
          buttonContainerStyle={styles.buttonContainerStyle}
          btnColor={appColors.border}
        />
      </View>
    </View>
  );
}
