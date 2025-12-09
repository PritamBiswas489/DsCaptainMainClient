import {View, TextInput, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import appColors from '@theme/appColors';
import {GlobalStyle} from '@style/styles';
import CancelHeader from '@commonComponents/cancelHeader';
import {propsType} from './types';
import {useValues} from '../../../../App';
export default function ReasonBooingModal({
  setShowModal,
  showExtraNotes,
  title,
  placeHolder,
  textInputContainer,
  onChangeText,
}: propsType) {
  const {isDark,t} = useValues();
  return (
    <View>
      <CancelHeader
        gotoScreen={() => {
          setShowModal(false);
        }}
        title={title}
      />
      <View style={styles.container}>
        <TextInput
          multiline
          placeholder={t(placeHolder)}
          style={[
            styles.textInputStyle,
            textInputContainer,
            {
              backgroundColor: isDark
                ? appColors.darkTheme
                : appColors.textInput,
              color: isDark ? appColors.white : appColors.darkText,
            },
          ]}
          placeholderTextColor={appColors.lightText}
          onChangeText={text => onChangeText(text)}
        />
        {showExtraNotes && (
          <View style={styles.row}>
            <View style={[GlobalStyle.dot, styles.dotStyle]}></View>
            <Text style={styles.textStyle}>
              {t('cancelBooking.note')}
              <Text style={styles.text}>
                {' '}
                {t('cancelBooking.cancelPolicy')}
              </Text>
            </Text>
          </View>
        )}
      </View>
    </View>
  );
}
