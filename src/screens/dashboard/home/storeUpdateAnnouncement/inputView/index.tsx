import { View, Text, Alert, Image, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { styles } from './styles';
import TextInputComponent from '@otherComponent/auth/textInput';

import {
  ServiceName,
  HomeIcon,
  SubCategory,
  Notes,
  Location,
  Experience,
  ServiceMen,
  Amount,
  Discount,
  ReceiptDiscount,
} from '@utils/icons';
import { useValues } from '../../../../../../App';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
import { windowHeight } from '@src/theme/appConstant';
import SwitchContainer from '@src/otherComponent/switchContainer';
import appColors from '@src/theme/appColors';

interface DataItem {
  label: string;
  value: string;
}
interface Combination {
  type: string;
  stock: number;
  price: number;
}

export default function InputView(
  {
    status,
    setStatus,
    message,
    setMessage
  }: {
    status: number,
    setStatus: (value: number) => void,
    message: string | null,
    setMessage: (value: string | null) => void,
  }
) {
  const { t, isDark } = useValues();

  const { stores: storesList } = useSelector(
    (state: RootState) => state['storeProfileData']
  );
  const { module: storeModuleDetails } = storesList[0]
  const { module_type } = storeModuleDetails

  return (
    <>
      <View style={{ flex: 1 }}>
        <TextInputComponent
          placeholder={t('newDeveloper.AnnouncementMessage')}
          value={message ?? ''}
          onChangeText={value => {
            setMessage(value);
          }}
          containerStyle={{ marginBottom: windowHeight(0) }}
          multiline={true}
          inputStyle={styles.inputStyle}
          error={''}
        />
      </View>

      <View style={{ marginTop: 15 }}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={[
              styles.inputLabel,
              { color: isDark ? appColors.white : appColors.darkText },

            ]}> {t('newDeveloper.AccouncementStatus')}</Text>
            <SwitchContainer
              toggleDarkSwitch={() => { setStatus(status ? 0 : 1) }}
              switchOn={status  ? true : false}
            />
          </View>
        </View>
    </>
  );
}
