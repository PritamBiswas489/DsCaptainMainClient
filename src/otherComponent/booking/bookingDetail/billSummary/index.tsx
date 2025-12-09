import React from 'react';
import { View, ImageBackground } from 'react-native';
import { styles } from './styles';
import { billBackground, darkbillBackground } from '@utils/images';
import { BillRow } from './billRow';
import appColors from '@theme/appColors';
import { GlobalStyle } from '@style/styles';
import { windowHeight, windowWidth } from '@theme/appConstant';
import BillTitle from './billTitle';
import { extraChargeType } from './types';
import { useValues } from '../../../../../App';
import appFonts from '@theme/appFonts';
import { BookingDetailsInterface, BookingServiceListInterface } from '@src/interfaces/bookingDetailsInterface';
import { limitWords } from '@src/config/utility';
import TextRow from '@src/otherComponent/home/serviceContent/textRow';
export default function BillSummary({ bookingDetails }: { bookingDetails: BookingDetailsInterface }
) {
  const { isDark, t } = useValues();
//  console.log(bookingDetails.payment_method)
  return (
    <View>
      <BillTitle />
      <ImageBackground
        resizeMode={'stretch'}
        source={isDark ? darkbillBackground : billBackground}
        style={[
          styles.imageStyle,
          {
            height: windowHeight(50),
          },
        ]}>
        {bookingDetails.servicesList.map((serviceDet: BookingServiceListInterface, serviceindex: number) => {
            return <BillRow key={`se${serviceindex}`} title={`${limitWords(serviceDet.variantKey, 3)} X ${serviceDet.serviceQuantity}`} price={serviceDet.serviceTotalCost} />
        })}
        <BillRow
          title="newDeveloper.serviceDiscount"
          key={1}
          price={bookingDetails?.total_discount_amount}
          showMinus={true}
          color={appColors.error}
        />
        <BillRow
          title="newDeveloper.couponDiscount"
          price={bookingDetails?.total_coupon_discount_amount}
          showMinus={true}
          key={2}
          color={appColors.error}
        />
        <BillRow
          title="newDeveloper.serviceTax"
          price={bookingDetails?.total_tax_amount}
          showMinus={false}
          key={3}
          color={appColors.success}
        />

        <>
          <View
            style={[
              GlobalStyle.horizontalLine,
              { marginTop: windowWidth(1), marginBottom: windowWidth(6) },
            ]}
          />
          <BillRow
            title="addExtraCharges.payableAmount"
            price={bookingDetails.total_booking_amount}
            color={appColors.primary}
            titleStyle={styles.amountStyle}
            priceStyle={styles.amountStyle}
          />
          <TextRow
            title={'newDeveloper.PaymentStatus'}
            content={
              bookingDetails?.is_paid === 1 ? t('newDeveloper.PaymentPaid') : t('newDeveloper.PaymentUpaid')
            }
            rowStyle={{ paddingTop: 10, }}
            color={
              bookingDetails?.is_paid === 1 ? appColors.success : appColors.error
            }
            titleStyle={{ fontFamily: appFonts.NunitoExtraBold }}
          />
        <TextRow
            title={'newDeveloper.PaymentMethod'}
            content={
               bookingDetails.payment_method.replace(/_/g, " ").toUpperCase()
            }
            color={
              isDark ? appColors.white : appColors.darkText
            }
            rowStyle={{ paddingTop: 10, paddingBottom:10 }}
            titleStyle={{ fontFamily: appFonts.NunitoExtraBold }}
          />
        </>
      </ImageBackground>
    </View>
  );
}
