import {View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {GlobalStyle} from '@style/styles';
import Header from '@commonComponents/header';
import GradientBtn from '@commonComponents/gradientBtn';
import {SelectCurrency} from './selectCurrency';
import {dataType} from './selectCurrency/data/data';
import {useValues} from '../../../../../App';
import appColors from '@theme/appColors';
import {setValue} from '@utils/localstorage';
import {useNavigation} from '@react-navigation/native';
export function ChangeCurrency() {
  const [selectedCurrency, setSelectedCurrency] = useState('$');
  const [item, setItem] = useState<dataType | undefined>(undefined);
  const {setCurrValue, setCurrSymbol} = useValues();
  const {isDark} = useValues();
  const {goBack} = useNavigation();

  const getVal = (item: dataType) => {
    setSelectedCurrency(item.key);
    setItem(item);
  };

  const onUpdateBtn = () => {
    setCurrSymbol(item.key);
    setCurrValue(item.value);
    setValue('currencyVal', item.value.toString());
    setValue('currencySymbol', item.key);
    goBack();
  };

  useEffect(() => {
    getSelectedCurruncy();
  }, []);

  const getSelectedCurruncy = async () => {
    const getCurruncyVal = await getVal('currencySymbol');
    if (getCurruncyVal !== null && getCurruncyVal !== undefined) {
      setSelectedCurrency(getCurruncyVal);
    }
  };

  return (
    <View
      style={[
        GlobalStyle.mainView,
        {backgroundColor: isDark ? appColors.darkTheme : appColors.white},
      ]}>
      <Header showBackArrow={true} title="profileSetting.changeCurrency" />
      <SelectCurrency
        selectedCurrency={selectedCurrency}
        getVal={getVal}
        title={'profileSetting.selectCurrency'}
      />
      <View style={GlobalStyle.bottomContainer}>
        <GradientBtn label={'common.update'} onPress={onUpdateBtn} />
      </View>
    </View>
  );
}
