import {View, Text, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {GlobalStyle} from '@style/styles';
import CancelHeader from '@commonComponents/cancelHeader';
import {styles} from './styles';
import {bookingFilterData} from './data/data';
import SelectDateSection from './selectDateSection';
import {windowHeight} from '@theme/appConstant';
import {AddCategory} from '@screens/setting/setting/packages/addPackage/addCategory';
import GradientBtn from '@commonComponents/gradientBtn';
import {filterType} from './selectDateSection/types';
import {useValues} from '../../../../App';
import appColors from '@theme/appColors';
import {DropdownWithIcon} from '@commonComponents/dropdownWithIcon';

export default function BookingFilter({
  setShowModal,
  setSearchModal,
  selectedCategory,
  setSelectedCategory,
  setDatePicker,
  setIsStartDate,
  startDate,
  endDate,
}: filterType) {
  const [showInvalidDateError, setInvalidDateError] = useState(false);
  const [bookingType, setBookingType] = useState<string | any>('');
  const {isDark,t} = useValues();

  const onApplyBtn = () => {
    if (startDate > endDate) {
      setInvalidDateError(true);
    } else {
      setShowModal(false);
    }
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={[
        GlobalStyle.modal,
        {
          borderTopLeftRadius: windowHeight(3),
          borderTopRightRadius: windowHeight(3),
          backgroundColor: isDark ? appColors.darkCard : appColors.white,
        },
      ]}>
      <CancelHeader
        title={'servicemen.filterBy'}
        leftTitle={'filterModal.clearAll'}
        gotoScreen={() => setShowModal(false)}
        onButtonClick={() => setShowModal(false)}
      />
      <Text style={[styles.textStyle, {marginTop: windowHeight(3)}]}>
        {t('bookingDetail.status')}
      </Text>
      <DropdownWithIcon
        label="booking.allBooking"
        data={bookingFilterData}
        onSelect={setBookingType}
        dropdownStyle={styles.dropDownContainerStyle}
        iconStyle={styles.iconStyle}
      />
      <View
        style={[
          GlobalStyle.horizontalLine,
          {
            marginBottom: 0,
            borderColor: isDark ? appColors.darkBorder : appColors.border,
          },
        ]}
      />
      <Text style={styles.textStyle}>{t('dataFilter.selectDate')}</Text>
      <SelectDateSection
        setShowModal={setShowModal}
        setDatePicker={setDatePicker}
        setIsStartDate={setIsStartDate}
        startDate={startDate}
        endDate={endDate}
        showInvalidDateError={showInvalidDateError}
      />
      <View
        style={[
          GlobalStyle.horizontalLine,
          {
            marginTop: windowHeight(3),
            borderColor: isDark ? appColors.darkBorder : appColors.border,
          },
        ]}
      />
      <Text style={styles.textStyle}>{t('addNewService.category')}</Text>
      <AddCategory
        containerStyle={{marginHorizontal: 0}}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        setShowModal={setShowModal}
        setSearchModal={setSearchModal}
      />
      <GradientBtn
        additionalStyle={styles.additionalStyle}
        label="filterModal.apply"
        onPress={() => onApplyBtn()}
      />
    </ScrollView>
  );
}
