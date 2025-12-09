import React from 'react';
import {
  View,
  Modal,
  Text,
  TouchableOpacity,
  GestureResponderEvent,
  Image,
} from 'react-native';
import GradientBtn from '@commonComponents/gradientBtn';
import {Cross} from '../../assets/icons/auth/cross';
import {windowHeight} from '../../theme/appConstant';
import {Success} from '@utils/icons';
import {Failed} from '@utils/icons';
import appColors from '../../theme/appColors';
import {CommonModalProps} from './data/data';
import {GlobalStyle} from '@style/styles';
import GridButton from '@commonComponents/gridButton';
import {useValues} from '../../../App';

import {styles} from './styles';
export default function ModalComponent({
  visible,
  onClose,
  success,
  title,
  content,
  btnTitle,
  gotoScreen,
  icon,
  showText,
  onShowText,
  backgroundColor,
  showImage,
  image,
  showGridButton,
  buttonLabel,
  button1Label,
  onButtonClick,
  onButton1Click,
}: CommonModalProps) {
  const {isDark,t} = useValues();

  return (
    <View>
      <Modal
        animationType="none"
        transparent={true}
        visible={visible}
        onRequestClose={onClose}>
        <View style={styles.container}>
          <View
            style={[
              styles.containerView,
              {
                backgroundColor: isDark
                  ? appColors.darkCardBg
                  : appColors.white,
              },
            ]}>
            <View style={styles.center}>
              <View style={{position: 'absolute'}}>
                <View
                  style={[
                    styles.circleView,
                    {
                      backgroundColor: isDark
                        ? appColors.darkCardBg
                        : appColors.white,
                    },
                  ]}>
                  <View style={[styles.center, {marginTop: windowHeight(7.2)}]}>
                    <View
                      style={[
                        styles.circle,
                        {
                          backgroundColor: backgroundColor
                            ? backgroundColor
                            : success
                            ? appColors.lightGreen
                            : appColors.lightRed,
                        },
                      ]}>
                      {showImage && image ? (
                        <Image source={image} style={styles.imageStyle} />
                      ) : success ? (
                        <Success />
                      ) : icon ? (
                        icon
                      ) : (
                        <Failed />
                      )}
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.rowContainer}>
              <TouchableOpacity activeOpacity={0.9} onPress={onClose}>
                <Cross color={isDark ? appColors.white : appColors.darkText} />
              </TouchableOpacity>
            </View>
            <View
              style={[
                styles.center,
                {marginTop: windowHeight(3), marginHorizontal: windowHeight(3)},
              ]}>
              <Text
                style={[
                  styles.title,
                  {color: isDark ? appColors.white : appColors.darkText},
                ]}>
                {t(title)}
              </Text>
              <Text style={styles.content}>{t(content)}</Text>
            </View>

            {showGridButton ? (
              <View style={styles.buttonContainer}>
                <GridButton
                  label1={buttonLabel || ''}
                  onButtonClick={onButtonClick || (() => {})}
                  label={button1Label ?? ''}
                  onButton1Click={onButton1Click || (() => {})}
                  button1TextStyle={styles.button1TextStyle}
                  buttonStyle={styles.buttonStyle}
                  buttonTextStyle={styles.buttonTextStyle}
                  buttonContainerStyle={styles.buttonContainerStyle}
                  btnColor={appColors.border}
                />
              </View>
            ) : (
             gotoScreen &&  <GradientBtn label={btnTitle || ''} onPress={gotoScreen} />
            )}

            {showText && (
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={
                  onShowText as unknown as (
                    event: GestureResponderEvent,
                  ) => void
                }
                style={GlobalStyle.center}>
                <Text style={styles.textStyle}>{showText}</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
}
