import { TouchableOpacity, View, Alert } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
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
  Plus

} from '@utils/icons';
import { windowHeight, windowWidth } from '@theme/appConstant';

import { DropdownWithIcon } from '@commonComponents/dropdownWithIcon';
import { dropDownType } from './types';
import { GlobalStyle } from '@style/styles';
import { useValues } from '../../../../App';
import { searchStatusArray, timeformatting2 } from '@src/config/utility';
import { DropdownItem } from '@src/commonComponents/dropdownWithIcon/types';

import { capitalizeFirstLetter } from '@src/config/utility';


export default function InputView(
  {
    bookingStatus,
    setBookingStatus,
  }: {
    bookingStatus: string,
    setBookingStatus: (value: string) => void,
  } 
  ) {
  
  const statusArr = searchStatusArray()
  const statusList: DropdownItem[] = statusArr.map((statusdet: any, statusindex: number) => {
    if (statusdet.value !== 'pending' && statusdet.value !== bookingStatus  && statusdet.value !== 'all') {
       return { label: capitalizeFirstLetter(statusdet.label), value: statusdet.value };
    }
    return undefined;
  })
    .filter((item): item is DropdownItem => item !== undefined);

   

  const handleBookingStatus = useCallback((data:DropdownItem) =>{
       setBookingStatus(data.value)
  },[])

  
 
   
  const { t } = useValues();
  return (
    <View style={{ flex: 1 }}>
      <DropdownWithIcon
        label="newDeveloper.changestatus"
        data={statusList}
        onSelect={handleBookingStatus}
        error={''}
        selectedValue={{ label:capitalizeFirstLetter(bookingStatus), value: bookingStatus }}
      />
     
    </View>
  );
}
