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
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';


export default function PromotionalCostModal({
  visible,
  onClose,
  success,
  btnTitle,
  gotoScreen,
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
  const { 
    discount,
    campaign,
    coupon 
  } = useSelector((state: RootState) => state['serviceProviderPomotionalCost'])



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
                {t('newDeveloper.PromotionalCostheading')}
              </Text>
              <Text style={styles.content}>{t('newDeveloper.PromotionalContent')}</Text>

              <Text
                style={[
                  styles.point,
                  {color: isDark ? appColors.white : appColors.darkText},
                ]}>
                {t('newDeveloper.DiscountCostpercentage')+' :'} <Text style={{color:appColors.gradientColor}}>{`${discount}%`}</Text>
              </Text>
              <Text
                style={[
                  styles.point,
                  {color: isDark ? appColors.white : appColors.darkText},
                  {marginTop:10}
                ]}>
                
                {t('newDeveloper.CampaignCostpercentage')+' :'} <Text style={{color:appColors.gradientColor}}>{`${campaign}%`}</Text>
              </Text>
              <Text
                style={[
                  styles.point,
                  {color: isDark ? appColors.white : appColors.darkText},
                  {marginTop:10}
                ]}>
               
                {t('newDeveloper.CouponCostpercentage')+' :'} <Text style={{color:appColors.gradientColor}}>{`${coupon}%`}</Text>
              </Text>
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
