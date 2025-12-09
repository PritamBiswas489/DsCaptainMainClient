import {View} from 'react-native';
import React, {useState} from 'react';
import {GlobalStyle} from '@style/styles';
import Header from '@commonComponents/header';
import {Notes, Amount} from '@utils/icons';
import TextInputComponent from '@otherComponent/auth/textInput';
import {ExtraService} from './extraService';
import {windowWidth} from '@theme/appConstant';
import GradientBtn from '@commonComponents/gradientBtn';
import {UpdateBill} from './updateBill';
import CommonModal from '@commonComponents/commonModal';
import {useValues} from '../../../../App';
import appColors from '@theme/appColors';

export function AddExtraCharges() {
  const [numberService, setNumberService] = useState(1);
  const [errors, setErrors] = useState({name: '', amount: ''});
  const [form, setForm] = useState({name: '', amount: ''});
  const [showUpdateBillModal, setUpdateBillModal] = useState(false);
  const {isDark,t} = useValues();

  const onChange = ({name, value}: {name: string; value: string}) => {
    setForm({...form, [name]: value});
    if (value !== '') {
      setErrors(prev => {
        return {...prev, [name]: null};
      });
    }
  };

  const onAddCharges = () => {
    if (!form.name) {
      setErrors(prev => {
        return {...prev, name: t('addExtraCharges.enterTitle')};
      });
    }
    if (!form.amount) {
      setErrors(prev => {
        return {...prev, amount: t('addExtraCharges.enterAmount')};
      });
    } else {
      setUpdateBillModal(true);
    }
  };

  return (
    <View
      style={[
        GlobalStyle.mainView,
        {backgroundColor: isDark ? appColors.darkCard : appColors.white},
      ]}>
      <Header title="addExtraCharges.addExtraCharges" showBackArrow={true} />
      <TextInputComponent
        placeholder={form.name ? form.name : t('auth.enterName')}
        Icon={<Notes />}
        containerStyle={{
          marginHorizontal: windowWidth(4),
          marginTop: windowWidth(8),
        }}
        value={form.name}
        onChangeText={value => {
          onChange({name: 'name', value});
        }}
        error={errors.name}
      />
      <TextInputComponent
        placeholder={
          form.amount ? form.amount : t('addExtraCharges.serviceAmount')
        }
        Icon={<Amount />}
        value={form.amount}
        onChangeText={value => {
          onChange({name: 'amount', value});
        }}
        error={errors.amount}
        keyboardType={'number-pad'}
        containerStyle={{marginHorizontal: windowWidth(4)}}
      />
      <ExtraService
        numberService={numberService}
        setNumberService={setNumberService}
      />
      <GradientBtn label="booking.addCharges" onPress={onAddCharges} />
      <CommonModal
        modal={
          <UpdateBill
            setUpdateBillModal={setUpdateBillModal}
            name={form.name}
            amount={form.amount}
            noService={numberService}
          />
        }
        showModal={showUpdateBillModal}
        visibleModal={() => setUpdateBillModal(true)}
      />
    </View>
  );
}
