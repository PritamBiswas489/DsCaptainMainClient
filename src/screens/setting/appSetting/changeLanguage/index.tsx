import {View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {GlobalStyle} from '@style/styles';
import Header from '@commonComponents/header';
import GradientBtn from '@commonComponents/gradientBtn';
import {SelectLanguage} from './SelectLanguage';
import {dataType} from './SelectLanguage/data/data';
import {useTranslation} from 'react-i18next';
import {setValue, getValue} from '@utils/localstorage';
import {useValues} from '../../../../../App';
import appColors from '@theme/appColors';
import { useNavigation } from '@react-navigation/native';
import { updatelanguage } from '@src/services/profile.service';

export function ChangeLanguage() {
  const [selectedLang, setSelectedLang] = useState('');
  const {i18n} = useTranslation();
  const {isDark} = useValues();
  const getVal = (item: dataType) => {
    setSelectedLang(item.code);
  };
  const onUpdateBtn = () => {
    i18n.changeLanguage(selectedLang);
    setValue('languageCode', selectedLang);
    updatelanguage()
  };

  useEffect(() => {
    getSelectedLanguage();
  }, []);

  const getSelectedLanguage = async () => {
    const getLanguageCode = await getValue('languageCode');
    if (getLanguageCode !== null) {
      setSelectedLang(getLanguageCode);
    }
  };

  return (
    <View
      style={[
        GlobalStyle.mainView,
        {backgroundColor: isDark ? appColors.darkTheme : appColors.white},
      ]}>
      <Header showBackArrow={true} title="profileSetting.changeLanguage" />
      <SelectLanguage
        getVal={getVal}
        selectedLang={selectedLang}
        title={'auth.selectLanguage'}
      />
      <View style={GlobalStyle.bottomContainer}>
        <GradientBtn label={'common.update'} onPress={onUpdateBtn} />
      </View>
    </View>
  );
}
