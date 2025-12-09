import { View, Text, Alert, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-virtualized-view';
import React, { useEffect, useState } from 'react';
import { GlobalStyle } from '@style/styles';
import CancelHeader from '@commonComponents/cancelHeader';
import { styles } from './styles';
import { bookingFilterData } from './data/data';
import SelectDateSection from './selectDateSection';
import { windowHeight, windowWidth } from '@theme/appConstant';
import { AddCategory } from '@screens/setting/setting/packages/addPackage/addCategory';
import GradientBtn from '@commonComponents/gradientBtn';
import { filterType } from './selectDateSection/types';
import { useValues } from '../../../../../../../App';
import appColors from '@theme/appColors';
import TextInputComponent from '@otherComponent/auth/textInput';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
import SelectionDropdown from '@src/otherComponent/selectionDropdown';
import { reportFiltersActions } from '@src/store/redux/reports-filter-redux';
import DatePickerSelector from '@src/commonComponents/dateSelectPicker';
import { bookingReportActions } from '@src/store/redux/booking-reports-redux';
import Toast from "react-native-toast-message";
 

interface DataItem {
  label: string;
  value: string;
}

// booking report filter
export default function BookingReportFilter({
  setShowModal,

}: { setShowModal: React.Dispatch<React.SetStateAction<boolean>> }) {
  const [showInvalidDateError, setInvalidDateError] = useState(false);
  const [bookingType, setBookingType] = useState<string | any>('');
  const { isDark, t } = useValues();

  const [fromDatePicker, setFromDatePicker] = useState(false)
  const [toDatePicker, setToDatePicker] = useState(false)

  const [dropdownZoneList, setDropdownZoneList] = useState<DataItem[]>([]);
  const [dropDowncategoryList, setCategoryList] = useState<DataItem[]>([]);
  const [dropDownsubCategoryList, setSubCategoryList] = useState<DataItem[]>([]);
  const dispatch = useDispatch()

  const statusList: DataItem[] = [
    { label: t('newDeveloper.accepted'), value: 'accepted' },
    { label: t('newDeveloper.OnGoingServices'), value: 'ongoing' },
    { label: t('newDeveloper.CanceledServices'), value: 'canceled' },
    { label: t('newDeveloper.CompletedServices'), value: 'completed' }
  ]

  const dateList: DataItem[] = [
    { label: t('newDeveloper.all_time'), value: 'all_time' },
    { label: t('newDeveloper.this_week'), value: 'this_week' },
    { label: t('newDeveloper.last_week'), value: 'last_week' },
    { label: t('newDeveloper.last_15_days'), value: 'last_15_days' },
    { label: t('newDeveloper.this_month'), value: 'this_month' },
    { label: t('newDeveloper.last_month'), value: 'last_month' },
    { label: t('newDeveloper.this_year'), value: 'this_year' },
    { label: t('newDeveloper.last_year'), value: 'last_year' },
    { label: t('newDeveloper.this_year_1st_quarter'), value: 'this_year_1st_quarter' },
    { label: t('newDeveloper.this_year_2nd_quarter'), value: 'this_year_2nd_quarter' },
    { label: t('newDeveloper.this_year_3rd_quarter'), value: 'this_year_3rd_quarter' },
    { label: t('newDeveloper.this_year_4th_quarter'), value: 'this_year_4th_quarter' },
    { label: t('newDeveloper.custom_date'), value: 'custom_date' },
  ];

  const {
    zones: zoneList,
    categories: categoryList,
    sub_categories: subCategoryList
  } = useSelector(
    (state: RootState) => state['bookingReports'])

  const {
    zone: filterZone,
    category: filterCategory,
    subcategory: filterSubCategory,
    status: filterStatus,
    timerange: filtertimeRange,
    fromDate: filterFromDate,
    toDate: filterToDate,
  } = useSelector(
    (state: RootState) => state['reportFilter'])



  /** set zones **/
  useEffect(() => {
    if (zoneList.length > 0) {
      const loopZones: DataItem[] = [];
      zoneList.forEach((arr: { name: string, id: string }, index: number) => {
        loopZones.push({ label: arr.name, value: arr.id });
      })
      setDropdownZoneList(loopZones)
    }

  }, [zoneList])

  /** set categories **/
  useEffect(() => {
    if (categoryList.length > 0) {
      const loopCats: DataItem[] = [];
      categoryList.forEach((arr: { name: string, id: string }, index: number) => {
        loopCats.push({ label: arr.name, value: arr.id });
      })
      setCategoryList(loopCats)
    }
  }, [categoryList])


  useEffect(() => {
    if (subCategoryList.length > 0) {
      const loopSubCats: DataItem[] = [];
      subCategoryList.forEach((arr: { name: string, id: string }, index: number) => {
        loopSubCats.push({ label: arr.name, value: arr.id });
      })
      setSubCategoryList(loopSubCats)
    }
  }, [subCategoryList])

  return (
    <>
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
          onButtonClick={() => {
              setShowModal(false)
              dispatch(reportFiltersActions.resetState())
              dispatch(bookingReportActions.resetState())
            
            }
          }
        />
        <View
          style={[
            GlobalStyle.horizontalLine,
            {
              marginBottom: 20,
              borderColor: isDark ? appColors.darkBorder : appColors.border,
            },
          ]}
        />
        {/* zone dropdown */}
        <SelectionDropdown
          data={dropdownZoneList}
          value={filterZone}
          setValue={(value: string) => {
            dispatch(reportFiltersActions.setData({ field: 'zone', data: value }))
          }}
          label={t('newDeveloper.ReportFilterZone')}
          error={''}
        />
        {/* category dropdown */}
        <SelectionDropdown
          data={dropDowncategoryList}
          value={filterCategory}
          setValue={(value: string) => {
            dispatch(reportFiltersActions.setData({ field: 'category', data: value }))
          }}
          label={t('newDeveloper.ReportFilterCategories')}
          error={''}
        />
        {/* subcategory dropdown */}
        <SelectionDropdown
          data={dropDownsubCategoryList}
          value={filterSubCategory}
          setValue={(value: string) => {
            dispatch(reportFiltersActions.setData({ field: 'subcategory', data: value }))
          }}
          label={t('newDeveloper.ReportFilterSubcategories')}
          error={''}
        />
        {/* status dropdown */}
        <SelectionDropdown
          data={statusList}
          value={filterStatus}
          setValue={(value: string) => {
            dispatch(reportFiltersActions.setData({ field: 'status', data: value }))
          }}
          label={t('home.status')}
          error={''}
        />
        {/* date dropdown */}
        <SelectionDropdown
          data={dateList}
          value={filtertimeRange}
          setValue={(value: string) => {
            dispatch(reportFiltersActions.setData({ field: 'timerange', data: value }))
          }}
          label={t('newDeveloper.TimeRange')}
          error={''}
        />
        {filtertimeRange === 'custom_date' && <TouchableOpacity onPress={() => { setFromDatePicker(true) }}>
          <TextInputComponent
            placeholder={t('newDeveloper.fromDate')}
            value={filterFromDate}
            onChangeText={value => { }}
            editable={false}
            error={''}
            containerStyle={{}}
          />
        </TouchableOpacity>}
        {filtertimeRange === 'custom_date' && <TouchableOpacity onPress={() => { setToDatePicker(true) }}>
          <TextInputComponent
            placeholder={t('newDeveloper.toDate')}
            value={filterToDate}
            onChangeText={value => { }}
            editable={false}
            error={''}
            containerStyle={{}}
          />
        </TouchableOpacity>}
        <View
          style={[
            GlobalStyle.horizontalLine,
            {
              marginTop: windowHeight(3),
              borderColor: isDark ? appColors.darkBorder : appColors.border,
            },
          ]}
        />
        <GradientBtn
          additionalStyle={styles.additionalStyle}
          label="filterModal.apply"
          onPress={() => { 
            if(filtertimeRange === 'custom_date'){
              if(filterFromDate === '' || filterToDate === ''){
                Alert.alert(t("newDeveloper.fromToDateError"));
                return
              } 
            }
            setShowModal(false)
            dispatch(bookingReportActions.resetState())
           }}
        />
      </ScrollView>
      {fromDatePicker && filtertimeRange === 'custom_date' && <DatePickerSelector
        setDatePicker={setFromDatePicker}
        setScheduleDate={(value) => {
          dispatch(reportFiltersActions.setData({ field: 'fromDate', data: value }))
        }}
      />}
      {toDatePicker && filtertimeRange === 'custom_date' && <DatePickerSelector setDatePicker={setToDatePicker}
        setScheduleDate={(value) => {
          dispatch(reportFiltersActions.setData({ field: 'toDate', data: value }))
        }}
      />}
    </>
  );
}
