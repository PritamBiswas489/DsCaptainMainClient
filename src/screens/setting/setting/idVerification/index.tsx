import React from 'react';
import {View, Text} from 'react-native';
import Header from '@commonComponents/header';
import {GlobalStyle} from '@style/styles';
import {SubmittedDocument} from './submittedDocument';
import {PendingDocument} from './pendingDocument';
import {useValues} from '../../../../../App';
import appColors from '@theme/appColors';

export function IdVerification() {
  const {isDark} = useValues();
  return (
    <View
      style={[
        GlobalStyle.mainView,
        {backgroundColor: isDark ? appColors.darkCard : appColors.white},
      ]}>
      <Header showBackArrow={true} title="profileSetting.idVerification" />
      <SubmittedDocument />
      <PendingDocument />
    </View>
  );
}
