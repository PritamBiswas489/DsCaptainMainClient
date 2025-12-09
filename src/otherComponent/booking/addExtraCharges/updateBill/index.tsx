import {View, ImageBackground, TextStyle} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {GlobalStyle} from '@style/styles';
import {propsType} from './types';
import CancelHeader from '@commonComponents/cancelHeader';
import {billBackground, darkbillBackground} from '@utils/images';
import {BillRow} from '@otherComponent/booking/bookingDetail/billSummary/billRow';
import {windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import GradientBtn from '@commonComponents/gradientBtn';
import {RootStackParamList} from 'src/navigation/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {useValues} from '../../../../../App';

type routeProps = NativeStackNavigationProp<RootStackParamList>;

export function UpdateBill({
  name,
  amount,
  setUpdateBillModal,
  noService,
}: propsType) {
  const {navigate} = useNavigation<routeProps>();
  const {isDark} = useValues();
  return (
    <View
      style={[
        GlobalStyle.modal,
        {
          paddingHorizontal: 0,
          backgroundColor: isDark ? appColors.darkCard : appColors.white,
        },
      ]}>
      <View style={styles.headerContainer}>
        <CancelHeader
          gotoScreen={() => setUpdateBillModal(false)}
          title="addExtraCharges.updateBillSummary"
        />
      </View>
      <ImageBackground
        resizeMode={'stretch'}
        source={isDark ? darkbillBackground : billBackground}
        style={styles.imageStyle}>
        <BillRow title="addExtraCharges.addedServiceName" subTitle={name} />
        <BillRow title="wallet.amount" subTitle={amount} />
        <BillRow title="addExtraCharges.NoService" subTitle={noService} />
        <View
          style={[
            GlobalStyle.horizontalLine,
            {
              marginTop: windowWidth(1),
              marginBottom: windowWidth(6),
              borderColor: isDark ? appColors.darkBorder : appColors.border,
            },
          ]}
        />
        <BillRow
          title="billSummary.totalAmount"
          price={33.03}
          color={appColors.primary}
          titleStyle={[
            styles.titleStyle as TextStyle,
            {color: isDark ? appColors.white : appColors.darkText},
          ]}
          priceStyle={styles.priceStyle as TextStyle}
        />
      </ImageBackground>
      <GradientBtn
        label="addExtraCharges.updateBill"
        onPress={() =>
          navigate('OngoingBooking', {
            extraCharges: {
              name: name,
              amount: amount,
              noService: noService,
            },
          })
        }
      />
    </View>
  );
}
