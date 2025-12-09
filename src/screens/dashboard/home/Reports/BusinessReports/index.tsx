import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { GlobalStyle } from '@style/styles';
import Header from '@commonComponents/header';
import { GridIcon, Listviewicon, Search } from '@utils/icons';
import { useValues } from '../../../../../../App';
import appColors from '@theme/appColors';
import Spinner from 'react-native-loading-spinner-overlay';
import { ServiceOverviewReports } from '../ServiceOverviewReports';
import { EarningReports } from '../EarningReports';
import { ExpenseReports } from '../ExpenseReports';
import BusinessReportFilter from './bookingFilter';
import CommonModal from '@src/commonComponents/commonModal';
import { BookingFilterIcon } from '@utils/icons';
import { businessReportFiltersActions } from '@src/store/redux/business-reports-filter-redux';
import {   useDispatch } from 'react-redux';

// Business report screen
export function BusinessReports() {
  const { isDark, t } = useValues();
  const [loadSpinner, setLoadSpinner] = useState(false)
  const [activeTab, setActiveTab] = useState('Tab1');
  const [spinnertext, setSpinnerText] = useState(t('newDeveloper.SpinnerLoader'))
  const [showModal, setShowModal] = useState<boolean>(false);
  const [reportType,setReportType] = useState('ExpenseReports')
  const dispatch = useDispatch()


  useEffect(()=>{
    if(activeTab === 'Tab1'){ //active tab1
       setReportType('ServiceOverviewReports') // Service  Overview reports
    }else if(activeTab === 'Tab2'){ //active tab2
       setReportType('EarningReports') //earning reports
    }else{
       setReportType('ExpenseReports') //expense reports
    }
    dispatch(businessReportFiltersActions.resetState()) //business report filter actions
  },[activeTab])
  

  const filterModalVisible = () => {
    setShowModal(true);
  };
  return (
    <View
      style={[
        GlobalStyle.mainView,
        { backgroundColor: isDark ? appColors.darkTheme : appColors.white },
      ]}>
      <Header
        showBackArrow={true}
        title={'newDeveloper.BusinessReport'}
        trailIcon={
          <BookingFilterIcon
            color={isDark ? appColors.white : appColors.darkText}
          />
        }
        gotoScreen={() => setShowModal(true)}
        showSearchBar={false}
      />
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tabButton, { borderBottomColor: isDark ? appColors.white : appColors.darkText, }, activeTab === 'Tab1' && styles.activeTabButton]}
          onPress={() => setActiveTab('Tab1')}
        >
          <Text style={[styles.tabText, , { color: isDark ? appColors.white : appColors.darkText, }, activeTab === 'Tab1' && styles.activeTabText]}>{t('newDeveloper.ServiceOverview')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, { borderBottomColor: isDark ? appColors.white : appColors.darkText, }, activeTab === 'Tab2' && styles.activeTabButton]}
          onPress={() => setActiveTab('Tab2')}
        >
          <Text style={[styles.tabText, , { color: isDark ? appColors.white : appColors.darkText, }, activeTab === 'Tab2' && styles.activeTabText]}>{t('newDeveloper.EarningReport')}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tabButton, { borderBottomColor: isDark ? appColors.white : appColors.darkText, }, activeTab === 'Tab3' && styles.activeTabButton]}
          onPress={() => setActiveTab('Tab3')}
        >
          <Text style={[styles.tabText, , { color: isDark ? appColors.white : appColors.darkText, }, activeTab === 'Tab3' && styles.activeTabText]}>{t('newDeveloper.ExpenseReport')}</Text>
        </TouchableOpacity>
      </View>
      {activeTab === 'Tab1' ? (
         <ServiceOverviewReports/>
      )  : activeTab === 'Tab2' ? (
         <EarningReports/>
      )  : (
         <ExpenseReports/>
      )}

{showModal && (
        <CommonModal
          modal={
            <BusinessReportFilter
                reportType={reportType}
                setShowModal={setShowModal}
            />
          }
          showModal={showModal}
          visibleModal={filterModalVisible}
        />
      )}

      <Spinner
        visible={loadSpinner}
        // overlayColor={isDark ? appColors.darkTheme : appColors.white}
        textContent={spinnertext}
        textStyle={{ color: '#FFF' }}

      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 5,
    marginTop: 5
  },
  tabButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderBottomWidth: 2


  },
  activeTabButton: {
    borderColor: appColors.primary
  },
  tabText: {
    fontSize: 14,
  },
  activeTabText: {
    color: appColors.primary,
    fontWeight: 'bold',
  },
  contentContainer: {
    padding: 20,
  },
  contentText: {
    fontSize: 18,
    color: '#333',
    marginBottom: 10,
  },
});