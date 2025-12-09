import {View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';
import {GlobalStyle} from '@style/styles';
import CancelHeader from '@commonComponents/cancelHeader';
import {paymentOptions} from './data';
import {styles} from './styles';
import {Amount} from '@utils/icons';
import GridButton from '@commonComponents/gridButton';
import {Wallet} from '@utils/icons';
import appColors from '@theme/appColors';
import {useValues} from '../../../../App';
import {DropdownWithIcon} from '@commonComponents/dropdownWithIcon';
import {dropDownType} from './data/types';

export default function AddMoney({
  setShowModal,
}: {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [payment, setPayment] = useState<dropDownType | undefined>();
  const {isDark,t} = useValues();

  return (
    <View
      style={[
        GlobalStyle.modal,
        {backgroundColor: isDark ? appColors.darkCard : appColors.white},
      ]}>
      <CancelHeader
        title={'wallet.addMoney'}
        gotoScreen={() => {
          setShowModal(false);
        }}
      />
      <Text style={styles.title}>{t('wallet.addFrom')}</Text>

      <DropdownWithIcon
        icon={<Wallet />}
        label="wallet.paymentGateWay"
        data={paymentOptions}
        onSelect={setPayment}
        dropdownStyle={{marginHorizontal: 0}}
      />

      <Text style={styles.title}>{t('wallet.amount')}</Text>
      <View style={styles.inputContainer}>
        <Amount />
        <TextInput
          keyboardType="numeric"
          style={styles.inputStyle}
          placeholder={t('addNewService.amount')}
          placeholderTextColor={appColors.lightText}
        />
      </View>
      <GridButton
        label1="wallet.cancel"
        onButtonClick={() => setShowModal(false)}
        label="wallet.addMoney"
        onButton1Click={() => setShowModal(false)}
        button1TextStyle={styles.button1TextStyle}
        buttonStyle={styles.buttonStyle}
        buttonTextStyle={styles.buttonTextStyle}
        buttonContainerStyle={styles.buttonContainerStyle}
        btnColor={appColors.border}
      />
    </View>
  );
}
