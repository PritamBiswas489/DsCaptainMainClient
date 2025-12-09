import {View, Text, Modal, Image, TouchableOpacity, Alert} from 'react-native';
import React, {useState, useEffect} from 'react';
import {CommonModalProps} from './types';
import {styles} from './styles';
import {Cross} from '@utils/icons';
import {company, freelancer} from '@utils/images';
import GradientBtn from '@commonComponents/gradientBtn';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from 'src/navigation/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useValues} from '../../../../App';
import {clearValue, setValue} from '@utils/localstorage';
import {windowWidth} from '@theme/appConstant';

type routeProps = NativeStackNavigationProp<RootStackParamList>;

export default function OptionalModal({
  visible,
  onClose,
  setOptionModal,
}: CommonModalProps) {
  const {isDark, setIsFreeLancerLogin, t} = useValues();
  const [selectOption, setOption] = useState(0);
  const {navigate} = useNavigation<routeProps>();

  const onFreelancerClick = async () => {
    setOption(1);
    setIsFreeLancerLogin(true);
  };

  const onCompanyOption = async () => {
    try {
      await clearValue('freelancerLogin');
      setOption(0);
      setIsFreeLancerLogin(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    selectOption === 0 && onCompanyOption();
  }, []);
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
              {backgroundColor: isDark ? appColors.darkCard : appColors.white},
            ]}>
            <View style={styles.innerContainer}>
              <View style={styles.rowContainer}>
                <Text
                  style={[
                    styles.title,
                    {
                      color: isDark ? appColors.white : appColors.darkText,
                      width: windowWidth(70),
                    },
                  ]}>
                  {t('auth.optionBelow')}
                </Text>
                <TouchableOpacity activeOpacity={0.9} onPress={onClose}>
                  <Cross />
                </TouchableOpacity>
              </View>
              <Text style={styles.subTitle}>{t('auth.joiningAs')} :</Text>
              <View style={styles.row}>
                <TouchableOpacity
                  activeOpacity={0.9}
                  onPress={() => onCompanyOption()}
                  style={[
                    styles.innerBox,
                    {
                      backgroundColor:
                        selectOption == 0
                          ? appColors.ratingBg
                          : isDark
                          ? appColors.darkText
                          : appColors.boxBg,
                      borderColor:
                        selectOption == 0
                          ? appColors.primary
                          : appColors.border,
                      borderWidth: isDark ? 0.4 : 1,
                    },
                  ]}>
                  <Image source={company} style={styles.imageStyle} />
                  <Text
                    style={[
                      styles.text,
                      {
                        color:
                          selectOption == 0
                            ? appColors.primary
                            : appColors.lightText,
                        fontFamily:
                          selectOption == 0
                            ? appFonts.NunitoBold
                            : appFonts.NunitoRegular,
                      },
                    ]}>
                    {t('newDeveloper.Provider')}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.9}
                  onPress={() => onFreelancerClick()}
                  style={[
                    styles.innerBox,
                    {
                      backgroundColor:
                        selectOption == 1
                          ? appColors.ratingBg
                          : isDark
                          ? appColors.darkText
                          : appColors.boxBg,
                      borderColor:
                        selectOption == 1
                          ? appColors.primary
                          : appColors.border,
                      borderWidth: isDark ? 0.4 : 1,
                      width: windowWidth(37),
                    },
                  ]}>
                  <Image source={freelancer} style={styles.imageStyle} />
                  <Text
                    style={[
                      styles.text,
                      {
                        color:
                          selectOption == 1
                            ? appColors.primary
                            : appColors.lightText,
                        fontFamily:
                          selectOption == 1
                            ? appFonts.NunitoBold
                            : appFonts.NunitoRegular,
                      },
                    ]}>
                    {t('newDeveloper.LoginSeller')}
                  </Text>
                </TouchableOpacity>
              </View>
              <GradientBtn
                additionalStyle={styles.additionalStyle}
                label="auth.continue"
                onPress={() => {
                  setOptionModal(false);
                  if(selectOption === 0){
                    navigate('Register');
                  }else{
                    navigate('StoreRegister');
                  }
                }}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
