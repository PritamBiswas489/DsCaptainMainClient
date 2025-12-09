import { View } from 'react-native';
import React, { useState } from 'react';
import { windowHeight } from '@theme/appConstant';
import InputContainer from '../inputContainer';
import GradientBtn from '@commonComponents/gradientBtn';

export default function InputView({
  updateprofile,
}: {
  updateprofile: ()=>void;
}) {

  return (
    <View style={{ marginTop: windowHeight(1) }}>
      <InputContainer />
      <View style={{ height: windowHeight(1) }} />
      <GradientBtn
        additionalStyle={{}}
        label={'profileSetting.updateProfile'}
        onPress={updateprofile}
      />
    </View>
  );
}
