import React, { useState } from 'react';
import { View, Text } from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import { orderTrackerData } from './data';
import { labels } from './data';
import { styles } from './styles';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import { useValues } from '../../../../../../App';
import { BookingDetailsInterface } from '@src/interfaces/bookingDetailsInterface';
import { timeformatting } from '@src/config/utility';

export default function StepIndicatorComponent({ bookingDetails }: { bookingDetails: BookingDetailsInterface }) {

  const [currentPage, setCurrentPage] = useState(0);
  const icons = [''];
  const { isDark, t } = useValues();

  const statusArray: any = []
  const labelData = [];
  let id = 0

  if (bookingDetails.statusHistories.length > 0) {
    const r_status = [...bookingDetails.statusHistories].reverse()

    r_status.forEach((arrValue, arrIndex) => {

      if (arrValue.booking_status === 'ongoing') {
        statusArray.push({
          id: id,
          label: timeformatting(arrValue.created_at),
          status: t('newDeveloper.BookingOngoingBy') + ' ' + bookingDetails.providerInfo.companyName
        })
        labelData.push('ongoing status')

      }
      if (arrValue.booking_status === 'accepted') {
        statusArray.push({
          id: id,
          label: timeformatting(arrValue.created_at),
          status: t('newDeveloper.BookingAcceptedBy') + ' ' + bookingDetails.providerInfo.companyName
        })
        labelData.push('accepted status')

      }
      if (arrValue.booking_status === 'completed') {
        statusArray.push({
          id: id,
          label: timeformatting(arrValue.created_at),
          status: t('newDeveloper.BookingCompletedBy') + ' ' + bookingDetails.providerInfo.companyName
        })
        labelData.push('completed status')
      }
      if (arrValue.booking_status === 'canceled') {
        statusArray.push({
          id: id,
          label: timeformatting(arrValue.created_at),
          status: t('newDeveloper.BookingCanceledBy') + ' ' + bookingDetails.providerInfo.companyName
        })
        labelData.push('canceled status')
      }
      id++

    })

  }

  statusArray.push({
    id: id,
    label: timeformatting(bookingDetails.created_at),
    status: t('newDeveloper.BookingPlacedBy') + ' ' + bookingDetails.customerInfo.firstName ?? ' ' + ' ' + bookingDetails.customerInfo.lastName ?? ''
  })
  labelData.push('created status')

  return (
    <View>
      <View style={styles.container}>
        <View>
          <StepIndicator
            customStyles={stepIndicatorStyles}
            stepCount={labelData.length}
            direction="vertical"
            currentPosition={currentPage}
            labels={labelData}
            renderStepIndicator={({ position }) => icons[position]}
            renderLabel={({ position }) => {
              const isActive = position === currentPage;
              const labelColor = isActive
                ? isDark
                  ? appColors.white
                  : appColors.darkText
                : appColors.lightText;

              return (
                <View style={styles.labelContainer}>
                  <Text
                    style={[
                      styles.labelText,
                      {
                        color: labelColor,
                        fontFamily: isActive
                          ? appFonts.NunitoMedium
                          : appFonts.NunitoRegular,
                      },
                    ]}>
                    {t(statusArray[position].label)}
                  </Text>
                  <Text
                    style={[
                      styles.status,
                      {
                        color: isDark ? appColors.white : labelColor,
                        fontFamily: isActive
                          ? appFonts.NunitoMedium
                          : appFonts.NunitoRegular,
                      },
                    ]}>
                    {t(statusArray[position].status)}
                  </Text>
                </View>
              );
            }}
          />
        </View>
      </View>
    </View>
  );
}

const stepIndicatorStyles = {
  stepIndicatorSize: 10,
  currentStepIndicatorSize: 10,
  separatorStrokeWidth: 1.08,
  currentStepStrokeWidth: 5,
  stepStrokeCurrentColor: appColors.primary,
  stepStrokeWidth: 5,
  stepStrokeUnFinishedColor: appColors.border,
  separatorStrokeColor: appColors.border,
  separatorUnFinishedColor: appColors.border,
};
