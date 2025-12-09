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
import DatePickerSelector from '@src/commonComponents/dateSelectPicker';
import { bookingReportActions } from '@src/store/redux/booking-reports-redux';
import Toast from "react-native-toast-message";
import { EarningListingInterface } from '@src/interfaces/EarningListInterface';
 
import { businessReportFiltersActions } from '@src/store/redux/business-reports-filter-redux';
 
import { serviceOverviewActions } from '@src/store/redux/service-overview-redux';
import { businessExpenseActions } from '@src/store/redux/business-expenses-redux';
import { businessEarningListingActions } from '@src/store/redux/business-earning-listing-redux';



interface DataItem {
  label: string;
  value: string;
}

// booking report filter
export default function BusinessReportFilter({
  setShowModal,
  reportType
}: { 
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>,
  reportType:string
}) {
  const [showInvalidDateError, setInvalidDateError] = useState(false);
  const [bookingType, setBookingType] = useState<string | any>('');
  const { isDark, t } = useValues();

  const [fromDatePicker, setFromDatePicker] = useState(false)
  const [toDatePicker, setToDatePicker] = useState(false)

  const [dropdownZoneList, setDropdownZoneList] = useState<DataItem[]>([]);
  const [dropDowncategoryList, setCategoryList] = useState<DataItem[]>([]);
  const [dropDownsubCategoryList, setSubCategoryList] = useState<DataItem[]>([]);
  const dispatch = useDispatch()

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

  let stateKey = 'serviceOverview'
  
  if(reportType === 'EarningReports'){
    stateKey = 'businessEarning'
  }else if(reportType === 'ExpenseReports'){
    stateKey = 'businessExpenses'
  }
 
  const {
    zones: zoneList,
    categories: categoryList,
    sub_categories: subCategoryList
  } = useSelector(
    (state: RootState) => state[stateKey  as keyof RootState]) as EarningListingInterface

  const {
    zone: filterZone,
    category: filterCategory,
    subcategory: filterSubCategory, 
    timerange: filtertimeRange,
    fromDate: filterFromDate,
    toDate: filterToDate,
  } = useSelector(
    (state: RootState) => state['businessReportsFilter'])

    
  console.log(filterZone)


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

/** sub categories */
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
              dispatch(businessReportFiltersActions.resetState())
              if(reportType === 'ServiceOverviewReports'){
                   dispatch(serviceOverviewActions.resetState())
              }
              if(reportType === 'EarningReports'){
                  dispatch(businessEarningListingActions.resetState())
              }
              if(reportType === 'ExpenseReports'){
                  dispatch(businessExpenseActions.resetState())
              }
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
        <SelectionDropdown
          data={dropdownZoneList}
          value={filterZone}
          setValue={(value: string) => {
             dispatch(businessReportFiltersActions.setData({ field: 'zone', data: value }))
          }}
          label={t('newDeveloper.ReportFilterZone')}
          error={''}
        />
        <SelectionDropdown
          data={dropDowncategoryList}
          value={filterCategory}
          setValue={(value: string) => {
            console.log(value)
             dispatch(businessReportFiltersActions.setData({ field: 'category', data: value }))
          }}
          label={t('newDeveloper.ReportFilterCategories')}
          error={''}
        />
        <SelectionDropdown
          data={dropDownsubCategoryList}
          value={filterSubCategory}
          setValue={(value: string) => {
            dispatch(businessReportFiltersActions.setData({ field: 'subcategory', data: value }))
          }}
          label={t('newDeveloper.ReportFilterSubcategories')}
          error={''}
        />
       
        
        <SelectionDropdown
          data={dateList}
          value={filtertimeRange}
          setValue={(value: string) => {
            dispatch(businessReportFiltersActions.setData({ field: 'timerange', data: value }))
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
            if(reportType === 'ServiceOverviewReports'){
                dispatch(serviceOverviewActions.resetState())
            }
            if(reportType === 'EarningReports'){
                dispatch(businessEarningListingActions.resetState())
            }
            if(reportType === 'ExpenseReports'){
                dispatch(businessExpenseActions.resetState())
            }
           }}
        />
      </ScrollView>
      {fromDatePicker && filtertimeRange === 'custom_date' && <DatePickerSelector
        setDatePicker={setFromDatePicker}
        setScheduleDate={(value) => {
          dispatch(businessReportFiltersActions.setData({ field: 'fromDate', data: value }))
        }}
      />}
      {toDatePicker && filtertimeRange === 'custom_date' && <DatePickerSelector setDatePicker={setToDatePicker}
        setScheduleDate={(value) => {
          dispatch(businessReportFiltersActions.setData({ field: 'toDate', data: value }))
        }}
      />}
    </>
  );
}
