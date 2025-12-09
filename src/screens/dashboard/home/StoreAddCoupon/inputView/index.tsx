import { View, Text, Alert, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import React, { useState, useEffect } from 'react';
import { styles } from './styles';
import TextInputComponent from '@otherComponent/auth/textInput';
import { fontSizes, windowHeight, windowWidth } from '@theme/appConstant';
import { useValues } from '../../../../../../App';
import SelectionDropdown from '@src/otherComponent/selectionDropdown';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
import appColors from '@src/theme/appColors';
import { DashLine } from '@src/commonComponents';
import DatePickerSelector from '@src/commonComponents/dateSelectPicker';


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
    couponTitle,
    setCouponTitle,
    errorCoupontitle,
    couponCode,
    setCouponCode,
    errorCouponCode,
    limitSameUser,
    setLimitSameUser,
    errorLimitSameUser,
    minPurchase,
    setMinPurchase,
    errorMinPurchase,
    startDate,
    setStartDate,
    errorStartDate,
    expireDate,
    setExpireDate,
    errorExpireDate,
    discount,
    setDiscount,
    errorDiscount,
    discountType,
    setDiscounType,
    maxDiscount,
    setMaxDiscount,
    errorMaxDiscount,
  }: {
    couponTitle: string,
    setCouponTitle: (value: string) => void,
    errorCoupontitle: string,
    couponCode: string,
    setCouponCode: (value: string) => void,
    errorCouponCode: string,
    limitSameUser: number,
    setLimitSameUser: (value: number) => void,
    errorLimitSameUser: string,
    minPurchase: number,
    setMinPurchase: (value: number) => void,
    errorMinPurchase: string,
    startDate: string,
    setStartDate: (value: string) => void,
    errorStartDate: string,
    expireDate: string,
    setExpireDate: (value: string) => void,
    errorExpireDate: string,
    discount: number,
    setDiscount: (value: number) => void,
    errorDiscount: string,
    discountType: string,
    setDiscounType: (value: string) => void,
    maxDiscount: number,
    setMaxDiscount: (value: number) => void,
    errorMaxDiscount: string,
  }
) {
  const { t, isDark } = useValues();
  const { stores: storesList } = useSelector(
    (state: RootState) => state['storeProfileData']
  );
  const { module: storeModuleDetails } = storesList[0]
  const { module_type } = storeModuleDetails

  const [startDatepicker, setStartDatepicker] = useState(false)
  const [endDatepicker, setEndDatepicker] = useState(false)



  return (
    <>
      <View style={{ flex: 1, marginTop: windowHeight(2) }}>
        {/* Coupon title */}
        <View style={{ marginTop: 5 }}>
          <Text style={[
            styles.inputLabel,
            { color: isDark ? appColors.white : appColors.darkText }
          ]}> {t('newDeveloper.CouponTitle')} <Text style={{color:'red'}}>*</Text></Text>
          <TextInputComponent
            placeholder={t('newDeveloper.CouponTitle')}
            value={couponTitle}
            onChangeText={value => {
              setCouponTitle(value);
            }}
            error={errorCoupontitle}
            containerStyle={{ marginTop: windowHeight(1) }}
          />
        </View>
        <DashLine />
        {/* Coupon code */}
        <View style={{ marginTop: 5 }}>
          <Text style={[
            styles.inputLabel,
            { color: isDark ? appColors.white : appColors.darkText }
          ]}> {t('newDeveloper.CouponCode')} <Text style={{color:'red'}}>*</Text></Text>
          <TextInputComponent
            placeholder={t('newDeveloper.CouponCode')}
            value={couponCode}
            onChangeText={value => {
              setCouponCode(value);
            }}
            error={errorCouponCode}
            containerStyle={{ marginTop: windowHeight(1) }}
          />
        </View>
        <DashLine />
        <View style={{ flexDirection: "row" }}>
          {/* Limit for same user */}
          <View style={{ flex: 1 }}>
            <Text style={[
              styles.inputLabel,
              { color: isDark ? appColors.white : appColors.darkText }
            ]}> {t('newDeveloper.LimitForSameUser')}</Text>
            <TextInputComponent
              placeholder={t('newDeveloper.LimitForSameUser')}
              value={!isNaN(limitSameUser)  ? limitSameUser.toString() : ''}
              onChangeText={value => {
                setLimitSameUser(parseInt(value));
              }}
              keyboardType='number-pad'
              error={errorLimitSameUser}
              containerStyle={{ marginTop: windowHeight(1) }}
            />
          </View>
          {/* Minimum puschase */}
          <View style={{ flex: 1 }}>
            <Text style={[
              styles.inputLabel,
              { color: isDark ? appColors.white : appColors.darkText }
            ]}> {t('newDeveloper.MinPurchase')}</Text>
            <TextInputComponent
              placeholder={t('newDeveloper.MinPurchase')}
              value={!isNaN(minPurchase) ? minPurchase.toString() : ''}
              onChangeText={value => {
                setMinPurchase(parseInt(value));
              }}
              keyboardType='number-pad'
              error={errorMinPurchase}
              containerStyle={{ marginTop: windowHeight(1) }}
            />
          </View>
        </View>
        <DashLine />
        <View style={{ flexDirection: "row" }}>
          {/* Start Date */}
          <TouchableOpacity style={{ flex: 1 }} onPress={() => { setStartDatepicker(true) }}>
            <View>
              <Text style={[
                styles.inputLabel,
                { color: isDark ? appColors.white : appColors.darkText }
              ]}> {t('newDeveloper.StartDate')} <Text style={{color:'red'}}>*</Text></Text>
              <TextInputComponent
                placeholder={t('newDeveloper.StartDate')}
                value={startDate}
                onChangeText={value => {

                }}
                editable={false}
                error={errorStartDate}
                containerStyle={{ marginTop: windowHeight(1) }}
              />
            </View>
          </TouchableOpacity>

          {/* Expire Date */}
          <TouchableOpacity style={{ flex: 1 }} onPress={() => { setEndDatepicker(true) }}>
            <View style={{ flex: 1 }}>
              <Text style={[
                styles.inputLabel,
                { color: isDark ? appColors.white : appColors.darkText }
              ]}> {t('newDeveloper.ExpireDate')} <Text style={{color:'red'}}>*</Text></Text>
              <TextInputComponent
                placeholder={t('newDeveloper.ExpireDate')}
                value={expireDate}
                onChangeText={value => {

                }}
                editable={false}
                error={errorExpireDate}
                containerStyle={{ marginTop: windowHeight(1) }}
              />
            </View>
          </TouchableOpacity>
        </View>
        <DashLine />
        {/* Discount value */}
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <Text style={[
              styles.inputLabel,
              { color: isDark ? appColors.white : appColors.darkText }
            ]}> {t('newDeveloper.Discount')} <Text style={{color:'red'}}>*</Text></Text>
            <TextInputComponent
              placeholder={t('newDeveloper.Discount')}
              value={!isNaN(discount) ? discount.toString() : ''}
              onChangeText={value => {
                setDiscount(parseFloat(value))
              }}
              keyboardType='number-pad'
              error={errorDiscount}
              containerStyle={{ marginTop: windowHeight(1) }}
            />
          </View>
          {/* Discount type */}
          <View style={{ flex: 1 }}>
            <Text style={[
              styles.inputLabel,
              { color: isDark ? appColors.white : appColors.darkText }
            ]}> {t('newDeveloper.Discounttype')} <Text style={{color:'red'}}>*</Text></Text>
            <SelectionDropdown
              data={[
                { label: t('newDeveloper.percent'), value: 'percent' },
                { label: t('newDeveloper.amount'), value: 'amount' }
              ]}
              value={discountType}
              setValue={(value: string) => {
                setDiscounType(value)
              }}
              label={''}
              error={''}
            />
          </View>
        </View>

        {/* Max Discount when discount type percent */}
        {discountType === 'percent' && <><DashLine /><View style={{ marginTop: 5 }}>
          <Text style={[
            styles.inputLabel,
            { color: isDark ? appColors.white : appColors.darkText }
          ]}> {t('newDeveloper.MaxDiscount')}</Text>
          <TextInputComponent
            placeholder={t('newDeveloper.MaxDiscount')}
            value={!isNaN(maxDiscount) ? maxDiscount.toString() : ''}
            onChangeText={value => {
              setMaxDiscount(parseFloat(value));
            }}
            keyboardType='number-pad'
            error={errorMaxDiscount}
            containerStyle={{ marginTop: windowHeight(1) }}
          />
        </View></>}
      </View>
      {startDatepicker && <DatePickerSelector setDatePicker={setStartDatepicker} setScheduleDate={setStartDate} />}
      {endDatepicker && <DatePickerSelector setDatePicker={setEndDatepicker} setScheduleDate={setExpireDate} />}
    </>
  );
}
