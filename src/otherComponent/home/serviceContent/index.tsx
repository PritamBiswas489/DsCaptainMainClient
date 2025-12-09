import { View } from 'react-native';
import React from 'react';
import BookingServiceContentView from './bookingServiceContentView';
import { GlobalStyle } from '@style/styles';
import TextRow from './textRow';
import appColors from '@theme/appColors';
import { Clock, Location, Booked } from '@utils/icons';
import { windowWidth } from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import { ViewLocation } from './viewLocation';
import { useValues } from '../../../../App';
import { BookingDetailsInterface, BookingServiceListInterface } from '@src/interfaces/bookingDetailsInterface';
import { timeformatting, timeformatting2 } from '@src/config/utility';
const statusColor: Record<'pending' | 'accepted' | 'ongoing' | 'completed' | 'canceled', string> = {
  pending: appColors.pending,
  accepted: appColors.accepted,
  ongoing: appColors.primary,
  completed: appColors.success,
  canceled: appColors.error,
};

function isValidBookingStatus(status: string): status is keyof typeof statusColor {
  return status in statusColor;
}
export function ServiceContent({
  item: bookingDetails,
  bookingStatus
}: {
  item: BookingDetailsInterface,
  bookingStatus?: string
}) {
  const { isDark, t } = useValues();
   let serviceAddress = bookingDetails?.serviceAddress?.address 
   if(!serviceAddress){
      serviceAddress = `${bookingDetails?.serviceAddress?.city}, ${bookingDetails?.serviceAddress?.zip_code}`
   }
   const latitude = bookingDetails?.serviceAddress?.lat //latitude
   const longitude = bookingDetails?.serviceAddress?.lon //longitude

    let statusBackgroundColor  = isDark ? appColors.lightText : appColors.darkText

    if (isValidBookingStatus(bookingDetails.booking_status)) {
       statusBackgroundColor = statusColor[bookingDetails.booking_status];
    }
    
  return (
    <View>
      {bookingDetails.servicesList.map((service:BookingServiceListInterface,serviceIndex:number)=>{
       return <BookingServiceContentView key={`content${serviceIndex}`} serviceName={service.serviceName} isShowPrice={true} />
      })}

      <View style={[GlobalStyle.mainContainer, { marginTop: windowWidth(0) }]}>
      <TextRow
          title={'newDeveloper.bookingStatus'}
          content={
            bookingDetails?.booking_status.toUpperCase()
          }
          color={statusBackgroundColor}
          icon={
            <Booked
              height={'24'}
              color={isDark ? appColors.lightText : appColors.darkText}
            />
          }
          rowStyle={{ paddingTop: 10, }}
          titleStyle={{ fontFamily: appFonts.NunitoBold }}
        />
       
       
        {/* Booking Date Panel */}
        <TextRow
          title={'newDeveloper.bookingDate'}
          content={
            timeformatting(bookingDetails?.created_at)
          }
          color={appColors.success}
          icon={
            <Clock
              height={'24'}
              color={isDark ? appColors.lightText : appColors.darkText}
            />
          }
          rowStyle={{ paddingTop: 10 }}
          titleStyle={{ fontFamily: appFonts.NunitoSemiBold }}
        />
        <TextRow
          title={'newDeveloper.scheduleDate'}
          content={
            timeformatting2(bookingDetails?.service_schedule)
          }
          color={appColors.success}
          icon={
            <Clock
              height={'24'}
              color={isDark ? appColors.lightText : appColors.darkText}
            />
          }
          rowStyle={{ paddingTop: 10 }}
          titleStyle={{ fontFamily: appFonts.NunitoSemiBold }}
        />
        <TextRow
          title={'newDeveloper.serviceAddress'}
          content={serviceAddress}
          color={isDark ? appColors.lightText : appColors.darkText}
          icon={
            <Location
              color={isDark ? appColors.lightText : appColors.darkText}
            />
          }
          titleStyle={{
            fontFamily: appFonts.NunitoSemiBold,
            width: windowWidth(60),
          }}
        />
       {latitude && longitude && <ViewLocation latitude={latitude} longitude={longitude} />} 
      </View>
    </View>
  );
}
