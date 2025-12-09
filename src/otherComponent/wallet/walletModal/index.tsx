import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {GlobalStyle} from '@style/styles';
import CancelHeader from '@commonComponents/cancelHeader';
import RadioButton from '@otherComponent/radioButton';
import {Money, Notes, Identity} from '@utils/icons';
import appColors from '@theme/appColors';
import TextInputComponent from '@otherComponent/auth/textInput';
import {bankData} from './data';
import GridButton from '@commonComponents/gridButton';
import {useValues} from '../../../../App';
import {DropdownWithIcon} from '@commonComponents/dropdownWithIcon';
import {dropDownType} from './data/types';

export default function WalletModal({
  setShowWalletModal,
}: {
  setShowWalletModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [key, setKey] = useState(0);
  const [details, setDetails] = useState('');
  const [amount, setAmount] = useState('');
  const [bankName, setBankName] = useState<dropDownType | undefined>();
  const {isDark,t} = useValues();

  return (
    <View
      style={[
        GlobalStyle.modal,
        {backgroundColor: isDark ? appColors.darkText : appColors.white},
      ]}>
      <CancelHeader
        title="wallet.withdrawMoney"
        gotoScreen={() => setShowWalletModal(false)}
      />
      <View
        style={[
          styles.mainContainer,
          {backgroundColor: isDark ? appColors.darkCard : appColors.boxBg},
        ]}>
        <Text
          style={[
            styles.title,
            {color: isDark ? appColors.white : appColors.darkText},
          ]}>
          {t('wallet.selectType')}
        </Text>
        <View style={styles.container}>
          <RadioButton
            title={'wallet.bankName'}
            setKey={setKey}
            selectCategory={0}
            currentKey={key}
            radioContainerStyle={styles.radioContainerStyle}
          />
          <RadioButton
            title={'wallet.payPal'}
            setKey={setKey}
            selectCategory={1}
            currentKey={key}
            radioContainerStyle={styles.radioContainerStyle}
          />
        </View>
        <Text
          style={[
            styles.title,
            {color: isDark ? appColors.white : appColors.darkText},
          ]}>
          {t('wallet.withdrawTo')}
        </Text>
        <DropdownWithIcon
          icon={<Identity color={appColors.lightText} />}
          label="Select sub category"
          data={bankData}
          onSelect={setBankName}
          dropdownStyle={[
            styles.dropdownStyle,
            {backgroundColor: isDark ? appColors.darkTheme : appColors.white},
          ]}
        />
        <View style={styles.rowContainer}>
          <Text
            style={[
              styles.title,
              {color: isDark ? appColors.white : appColors.darkText},
            ]}>
            {t('wallet.amount')}
          </Text>
          <Text style={[styles.title, {color: appColors.primary}]}>
            {t('wallet.availableBal')}: 25.30
          </Text>
        </View>
        <TextInputComponent
          placeholder={t('addNewService.amount')}
          containerStyle={styles.inputContainer}
          inputStyle={[
            styles.mainView,
            {backgroundColor: isDark ? appColors.darkTheme : appColors.white},
          ]}
          Icon={<Money />}
          value={amount}
          onChangeText={value => {
            setAmount(value);
          }}
          keyboardType={'number-pad'}
        />
        <Text
          style={[
            styles.title,
            {color: isDark ? appColors.white : appColors.darkText},
          ]}>
          {t('wallet.customMessage')}
        </Text>
        <TextInputComponent
          containerStyle={styles.containerStyle}
          placeholder={t('auth.details')}
          inputStyle={[
            styles.inputStyle,
            {backgroundColor: isDark ? appColors.darkTheme : appColors.white},
          ]}
          Icon={<Notes />}
          value={details}
          onChangeText={value => {
            setDetails(value);
          }}
        />
      </View>
      <GridButton
        label1="wallet.cancel"
        onButtonClick={() => setShowWalletModal(false)}
        label="bottomTab.wallet"
        onButton1Click={() => setShowWalletModal(false)}
        button1TextStyle={styles.button1TextStyle}
        buttonStyle={styles.buttonStyle}
        buttonTextStyle={styles.buttonTextStyle}
        buttonContainerStyle={styles.buttonContainerStyle}
        btnColor={isDark ? appColors.darkCard : appColors.border}
      />
    </View>
  );
}
