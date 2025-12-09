import {View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {GlobalStyle} from '@style/styles';
import ReasonBooking from '../reasonBooking';
import GradientBtn from '@commonComponents/gradientBtn';
import {propsType} from './types';
import appColors from '@theme/appColors';
import {useValues} from '../../../../App';

export default function CancelBooking({
  setShowModal,
  showExtraNotes,
  title,
  placeHolder,
  textInputContainer,
  onSubmitClick,
}: propsType) {
  const [value, onChangeText] = useState('');
  const [disabledButton, setDisabledButton] = useState<boolean>(true);
  const {isDark} = useValues();
  useEffect(() => {
    value.length > 0 ? setDisabledButton(false) : setDisabledButton(true);
  }, [value]);

  return (
    <View
      style={[
        GlobalStyle.modal,
        {backgroundColor: isDark ? appColors.darkCard : appColors.white},
      ]}>
      <ReasonBooking
        title={title}
        showExtraNotes={showExtraNotes}
        setShowModal={setShowModal}
        placeHolder={placeHolder}
        textInputContainer={textInputContainer}
        onChangeText={onChangeText}
      />
      <GradientBtn
        additionalStyle={{marginHorizontal: 0}}
        label={'common.submit'}
        onPress={onSubmitClick}
        color={disabledButton ? appColors.disable : appColors.primary}
        labelColor={disabledButton ? appColors.lightText : appColors.white}
      />
    </View>
  );
}
