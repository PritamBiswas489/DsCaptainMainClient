import { View, Text, Alert, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import React, { useState, useEffect } from 'react';
import { styles } from './styles';
import TextInputComponent from '@otherComponent/auth/textInput';
import UploadContainerView from '@src/otherComponent/auth/uploadContainer';
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
import { fontSizes, windowHeight, windowWidth } from '@theme/appConstant';
import { useValues } from '../../../../../../App';
import { ImageLibraryOptions } from 'react-native-image-picker';
import { handleImagePicker, handleImagePickerAllDetails } from '@utils/functions';
import SelectionDropdown from '@src/otherComponent/selectionDropdown';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
import appColors from '@src/theme/appColors';
import { Checkbox } from 'react-native-paper';
import TimepickerSelectTimeTwentyFourHours from '@src/commonComponents/timepickerSelectTimeTwentyFourHours';

import SwitchContainer from '@src/otherComponent/switchContainer';
import { DashLine } from '@src/commonComponents';
import DailyScheduleTime from '../dailyScheduleTime';


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
    storeName,
    setStoreName,
    errorStoreName,
    contactNumber,
    setContactNumber,
    errorContactNumber,
    storeAddress,
    setStoreAddress,
    errorStoreAddress,
    minimumOrderAmount,
    setMinimumOrderAmount,
    errorMinimumOrderAmount,
    metaTitle,
    setMetaTitle,
    errorMetaTitle,
    metaDescription,
    setMetaDescription,
    errorMetaDescription,
    gstStatus,
    setGstStatus,
    gstCode,
    setGstCode,
    errorGstPercentageValue,
    scheduleOrderStatus,
    setScheduleOrderStatus,
    deliveryStatus,
    setDeliveryStatus,
    takeawayStatus,
    setTakewayStatus,
    storeLogo,

    errorStoreLogo,
    setStoreLogo,
    uploadedStoreLogo,
    setUploadedStoreLogo,
    storeCoverPhoto,
    errorStoreCoverPhoto,
    setStoreCoverPhoto,
    uploadedCoverPhoto,
    setUploadedCoverPhoto,
    approxDeliveryMinimumTime,
    setApproxDeliveryMinimumTime,
    approxDeliveryMaximumTime,
    setApproxDeliveryMaximumTime,
    approxDeliveryType,
    setApproxDeliveryType,
    itemType,
    setItemType,
    cutleryStatus,
    setCutleryStatus,
    prescriptionStatus,
    setPrescriptionStatus
  }: {
    storeName: string,
    setStoreName: (value: string) => void,
    errorStoreName: string,
    contactNumber: string,
    setContactNumber: (value: string) => void,
    errorContactNumber: string,
    storeAddress: string,
    setStoreAddress: (value: string) => void,
    errorStoreAddress: string,
    minimumOrderAmount: string,
    setMinimumOrderAmount: (value: string) => void,
    errorMinimumOrderAmount: string,
    metaTitle: string,
    setMetaTitle: (value: string) => void,
    errorMetaTitle: string,
    metaDescription: string,
    setMetaDescription: (value: string) => void,
    errorMetaDescription: string,
    gstStatus: boolean,
    setGstStatus: (value: boolean) => void,
    gstCode: string,
    setGstCode: (value: string) => void,
    errorGstPercentageValue: string,
    scheduleOrderStatus: boolean,
    setScheduleOrderStatus: (value: boolean) => void,
    deliveryStatus: boolean,
    setDeliveryStatus: (value: boolean) => void,
    takeawayStatus: boolean,
    setTakewayStatus: (value: boolean) => void,
    cutleryStatus: boolean,
    setCutleryStatus: (value: boolean) => void,
    prescriptionStatus: boolean,
    setPrescriptionStatus: (value: boolean) => void,
    storeLogo: string,
    errorStoreLogo: string;
    setStoreLogo: (value: string) => void,
    uploadedStoreLogo: string; //uploaded store logo
    setUploadedStoreLogo: (value: string) => void,//set uploaded store logo
    storeCoverPhoto: string,
    errorStoreCoverPhoto: string;
    setStoreCoverPhoto: (value: string) => void,
    uploadedCoverPhoto: string; //uploaded cover photo
    setUploadedCoverPhoto: (value: string) => void, //set uploaded cover photo
    approxDeliveryMinimumTime: string,
    setApproxDeliveryMinimumTime: (value: string) => void,
    approxDeliveryMaximumTime: string,
    setApproxDeliveryMaximumTime: (value: string) => void,
    approxDeliveryType: string,
    setApproxDeliveryType: (value: string) => void,
    itemType: string[],
    setItemType: (value: string[]) => void,
  }
) {
  const { t, isDark } = useValues();
  const { stores: storesList } = useSelector(
    (state: RootState) => state['storeProfileData']
  );
  const { module: storeModuleDetails } = storesList[0]
  const { module_type } = storeModuleDetails


  //handle item type
  const handleItemType = (type: string) => {
    if (itemType.includes(type)) {
      setItemType(itemType.filter((value: string) => type !== value))
    } else {
      setItemType([...itemType, type])
    }
  }
  //=== open cover image ===//
  const openCoverImage = () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    handleImagePickerAllDetails(options, (imageAssets: any) => {
      if (imageAssets?.uri) {
        const fileSizeInMB = imageAssets.fileSize / (1024 * 1024);
        if (fileSizeInMB > 2) {
          Alert.alert(t('newDeveloper.greaterThantwoMbError'))
          return
        }
        setUploadedCoverPhoto(imageAssets.uri)
      }
    });
  };
  //==== open store image ====//
  const openStoreImage = () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    handleImagePickerAllDetails(options, (imageAssets: any) => {
      if (imageAssets?.uri) {
        const fileSizeInMB = imageAssets.fileSize / (1024 * 1024);
        if (fileSizeInMB > 2) {
          Alert.alert(t('newDeveloper.greaterThantwoMbError'))
          return
        }
        setUploadedStoreLogo(imageAssets.uri)
      }
    });
  };

  return (
    <>
     <Text style={[
          styles.inputLabel,
          { color: appColors.primary }
        ]}> {t('newDeveloper.uploadCoverPhoto')}</Text>
        {/* store cover photo */}

        <UploadContainerView
          title={'newDeveloper.uploadStoreCoverPhototwoMb'}
          onPress={openCoverImage}
          image={storeCoverPhoto}
          setImage={setStoreCoverPhoto}
          error={errorStoreCoverPhoto}
          isBanner={true}
        />

       <DashLine />

      <View style={{ flex: 1, marginTop: windowHeight(2) }}>
        {/* Store name */}
        <View style={{ marginTop: 5 }}>
          <Text style={[
            styles.inputLabel,
            { color: isDark ? appColors.white : appColors.darkText }
          ]}> {t('newDeveloper.Store_name_English')}</Text>
          <TextInputComponent
            placeholder={t('newDeveloper.enterStoreName')}
            value={storeName}
            onChangeText={value => {
              setStoreName(value);
            }}
            error={errorStoreName}
            containerStyle={{ marginTop: windowHeight(1) }}
          />
        </View>
        <DashLine />
        {/* Contact number */}
        <View style={{ marginTop: 5 }}>
          <Text style={[
            styles.inputLabel,
            { color: isDark ? appColors.white : appColors.darkText }
          ]}> {t('newDeveloper.Contact_number')}</Text>
          <TextInputComponent
            placeholder={t('newDeveloper.enterContactNumber')}
            value={contactNumber}
            onChangeText={value => {
              setContactNumber(value);
            }}
            error={errorContactNumber}
            containerStyle={{ marginTop: windowHeight(1) }}
          />
        </View>
        <DashLine />

        {/* store address */}
        <View style={{ marginTop: 5 }}>
          <Text style={[
            styles.inputLabel,
            { color: isDark ? appColors.white : appColors.darkText }
          ]}> {t('newDeveloper.Store_address')}</Text>
          <TextInputComponent
            placeholder={t('newDeveloper.enterAddress')}
            value={storeAddress}
            onChangeText={value => {
              setStoreAddress(value);
            }}
            error={errorStoreAddress}
            containerStyle={{ marginTop: windowHeight(1) }}
          />
        </View>
        <DashLine />

        {/* Minimum order amount  */}
        <View style={{ marginTop: 5 }}>
          <Text style={[
            styles.inputLabel,
            { color: isDark ? appColors.white : appColors.darkText }
          ]}> {t('newDeveloper.MinimumOrderAmount')}</Text>
          <TextInputComponent
            keyboardType='number-pad'
            placeholder={t('newDeveloper.EnterAmount')}
            value={minimumOrderAmount.toString()}
            onChangeText={value => {
              setMinimumOrderAmount( (value));
               
            }}
            error={errorMinimumOrderAmount}
            containerStyle={{ marginTop: windowHeight(1) }}
          />
        </View>
        <DashLine />

        {/* Meta title  */}
        <View style={{ marginTop: 5 }}>
          <Text style={[
            styles.inputLabel,
            { color: isDark ? appColors.white : appColors.darkText }
          ]}> {t('newDeveloper.Meta_title')}</Text>
          <TextInputComponent
            placeholder={t('newDeveloper.enterMetaTitle')}
            value={metaTitle}
            onChangeText={value => {
              setMetaTitle(value);
            }}
            error={errorMetaTitle}
            containerStyle={{ marginTop: windowHeight(1) }}
          />
        </View>

        <DashLine />

        {/* Meta description  */}
        <View style={{ marginTop: 5 }}>
          <Text style={[
            styles.inputLabel,
            { color: isDark ? appColors.white : appColors.darkText }
          ]}> {t('newDeveloper.MetaDescriptionEnglish')}</Text>
          <TextInputComponent
            placeholder={t('newDeveloper.enterMetaDescription')}
            value={metaDescription}
            onChangeText={value => {
              setMetaDescription(value);
            }}
            containerStyle={{ marginBottom: windowHeight(0) }}
            multiline={true}
            inputStyle={styles.inputStyle}
            error={errorMetaDescription}
          />
        </View>
        <DashLine />

        {/* gst percentage panel */}
        <View style={{ marginTop: 5 }}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={[
              styles.inputLabel,
              { color: isDark ? appColors.white : appColors.darkText },

            ]}> {t('newDeveloper.StoreGst')}</Text>
            <SwitchContainer
              toggleDarkSwitch={() => { setGstStatus(!gstStatus) }}
              switchOn={gstStatus}
            />
          </View>
          <TextInputComponent
            placeholder={t('newDeveloper.StoreGstCode')}
            value={!gstStatus ? '' : gstCode.toString()}
            onChangeText={value => {
              setGstCode(value);
            }}
            editable={gstStatus}
            error={errorGstPercentageValue}
            containerStyle={{ marginTop: windowHeight(1) }}
          />
        </View>

        <DashLine />

         {/* item type  veg and non veg */}
         {module_type === 'food' && <><Text style={[
          styles.inputLabel,
          { color: appColors.primary }
        ]}> {t('newDeveloper.itemtype')}</Text>
          <SafeAreaView style={styles.container}>
            <View style={styles.checkboxContainer}>
              <Checkbox
                status={itemType.includes('nonveg') ? 'checked' : 'unchecked'}
                onPress={() => { handleItemType('nonveg') }}
              />
              <Text style={[styles.label, { color: isDark ? appColors.white : appColors.darkText },]}>{t('newDeveloper.nonVeg')}</Text>
            </View>

            <View style={styles.checkboxContainer}>
              <Checkbox
                status={itemType.includes('veg') ? 'checked' : 'unchecked'}
                onPress={() => { handleItemType('veg') }}
              />
              <Text style={[styles.label, { color: isDark ? appColors.white : appColors.darkText },]}>{t('newDeveloper.veg')}</Text>
            </View>
          </SafeAreaView>

          <DashLine /></>}


        {/* schedule order status  */}
        <View style={{ marginTop: 15 }}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={[
              styles.inputLabel,
              { color: isDark ? appColors.white : appColors.darkText },

            ]}> {t('newDeveloper.ScheduleOrderStatus')}</Text>
            <SwitchContainer
              toggleDarkSwitch={() => { setScheduleOrderStatus(!scheduleOrderStatus) }}
              switchOn={scheduleOrderStatus}
            />
          </View>
        </View>

        <DashLine />

        {/* delivery status */}
        <View style={{ marginTop: 15 }}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={[
              styles.inputLabel,
              { color: isDark ? appColors.white : appColors.darkText },

            ]}> {t('newDeveloper.deliveryStatus')}</Text>
            <SwitchContainer
              toggleDarkSwitch={() => { setDeliveryStatus(!deliveryStatus) }}
              switchOn={deliveryStatus}
            />
          </View>
        </View>
        <DashLine />

        {/* take away status */}
        <View style={{ marginTop: 15 }}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={[
              styles.inputLabel,
              { color: isDark ? appColors.white : appColors.darkText },

            ]}> {t('newDeveloper.takeAwayStatus')}</Text>
            <SwitchContainer
              toggleDarkSwitch={() => { setTakewayStatus(!takeawayStatus) }}
              switchOn={takeawayStatus}
            />
          </View>
        </View>
        <DashLine />

        {/* cutlery status */}
        {module_type === 'food' && <><View style={{ marginTop: 15 }}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={[
              styles.inputLabel,
              { color: isDark ? appColors.white : appColors.darkText },

            ]}> {t('newDeveloper.cutleryStatus')}</Text>
            <SwitchContainer
              toggleDarkSwitch={() => { setCutleryStatus(!cutleryStatus) }}
              switchOn={cutleryStatus}
            />
          </View>
        </View>
          <DashLine /></>}

        {/* prescription status */}
        {module_type === 'pharmacy' && <><View style={{ marginTop: 15 }}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={[
              styles.inputLabel,
              { color: isDark ? appColors.white : appColors.darkText },

            ]}> {t('newDeveloper.prescriptionStatus')}</Text>
            <SwitchContainer
              toggleDarkSwitch={() => { setPrescriptionStatus(!prescriptionStatus) }}
              switchOn={prescriptionStatus}
            />
          </View>
        </View>
          <DashLine /></>}

        
        {/* Approx delivery time */}
        <Text style={[
          styles.inputLabel,
          { color: appColors.primary }
        ]}> {t('newDeveloper.approxDeliveryTime')}</Text>

        {/* approx delivery time */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: windowWidth(1) }}>
          {/* Minimum approx delivery time */}
          <TextInputComponent
            placeholder={t('newDeveloper.Minimum')}
            value={approxDeliveryMinimumTime.toString()}
            keyboardType='number-pad'

            onChangeText={value => {
              setApproxDeliveryMinimumTime(value);
            }}
            containerStyle={{ flex: 1, marginHorizontal: 0 }}
            error={''}
          />

          <DashLine />

          {/* Maximum approx delivery time */}
          <TextInputComponent
            placeholder={t('newDeveloper.Maximum')}
            value={approxDeliveryMaximumTime.toString()}
            keyboardType='number-pad'
            onChangeText={value => {
              setApproxDeliveryMaximumTime(value);
            }}
            containerStyle={{ flex: 1, marginHorizontal: 0 }}
            error={''}
          />

          {/* approx delivery time type */}
          <View style={{}}>
            <SelectionDropdown
              data={[{ label: t('newDeveloper.Minutes'), value: 'min' }, { label: t('newDeveloper.Hours'), value: 'hours' }, { label: t('newDeveloper.Days'), value: 'days' }]}
              value={approxDeliveryType}
              setValue={(value: string) => {
                setApproxDeliveryType(value)
              }}
              label={''}
              error={''}
            /></View>
        </View>

        <DashLine />

       
        <Text style={[
          styles.inputLabel,
          { color: appColors.primary }
        ]}> {t('newDeveloper.uploadStoreLogo')}</Text>
        {/* store logo */}
        <UploadContainerView
          title={'newDeveloper.uploadStoreLogotwoMb'}
          onPress={openStoreImage}
          image={storeLogo}
          setImage={setStoreLogo}
          error={errorStoreLogo}
        />

        
      </View>

    </>
  );
}
