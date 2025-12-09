import {View, Text, ScrollView, Alert} from 'react-native';
import React from 'react';
import Header from '@commonComponents/header';
import {GlobalStyle} from '@style/styles';
import {styles} from './styles';
import {ServiceDetailView} from '../../packages/packageDetail/serviceDetail';
import {packageServices} from './data';
import {ServiceDescription, CardContainer} from '@otherComponent/index';
import {Description} from './description';
import {customerData} from './data';
import {windowHeight, windowWidth} from '@theme/appConstant';
import {HistoryList} from './historyList';
import {useValues} from '../../../../../../App';
import appColors from '@theme/appColors';
import {ServiceMenDetail} from '@otherComponent/booking/bookingDetail/description/serviceMenDetail';

export function BookingDetails() {
  Alert.alert('Booking details')
  const {isDark,t} = useValues();
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={[
        GlobalStyle.mainView,
        {backgroundColor: isDark ? appColors.darkCard : appColors.white},
      ]}
      contentContainerStyle={styles.contentContainerStyle}>
      <Header showBackArrow={true} title="commissionHistory.bookingDetails" />
      <View
        style={[
          styles.container,
          {
            backgroundColor: isDark ? appColors.darkCard : appColors.boxBg,
            borderColor: isDark ? appColors.darkBorder : appColors.border,
          },
        ]}>
        <ServiceDetailView data={packageServices} />
        <View style={styles.mainContainer}>
          <ServiceDescription />
          <Description />
          <View
            style={[
              GlobalStyle.horizontalLine,
              {
                marginTop: windowWidth(1),
                borderColor: isDark ? appColors.darkBorder : appColors.border,
              },
            ]}
          />
          <Text
            style={[
              styles.title,
              {
                color: isDark ? appColors.white : appColors.darkText,
              },
            ]}>
            {t('bookingDetail.CustomerDetails')}:{' '}
          </Text>

          <CardContainer data={customerData} contactOptions />
          <View style={styles.blankView} />
          <ServiceMenDetail contactOptions={true} />
        </View>
      </View>

      <Text
        style={[
          styles.title,
          {
            marginTop: windowHeight(3),
            marginHorizontal: windowHeight(2),
            color: isDark ? appColors.white : appColors.darkText,
          },
        ]}>
        {t('commissionHistory.title')}:
      </Text>
      <HistoryList />
    </ScrollView>
  );
}
