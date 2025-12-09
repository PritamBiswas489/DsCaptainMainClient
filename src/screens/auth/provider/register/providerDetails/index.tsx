import {Text, ScrollView, View} from 'react-native';
import React from 'react';
import {GlobalStyle} from '@style/styles';
import {styles} from './styles';
import InputView from './inputView';
import {useValues} from '../../../../../../App';
import appColors from '@theme/appColors';

export default function ProviderDetails() {
  const {isDark,t} = useValues();
  return (
    <ScrollView
      style={[
        GlobalStyle.mainView,
        {backgroundColor: isDark ? appColors.darkCardBg : appColors.white},
      ]}
      showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.textStyle}>3. {t('newDeveloper.providerLoginDetails')}</Text>
        <InputView />
        <View style={styles.innerView}>
          <View
            style={[
              GlobalStyle.dashLine,
              {borderColor: isDark ? appColors.darkBorder : appColors.border},
            ]}
          />
          <Text style={styles.notesText}>{t('auth.locationNotes')}</Text>
        </View>
      </View>
    </ScrollView>
  );
}
