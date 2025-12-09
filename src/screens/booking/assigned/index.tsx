import {View, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {GlobalStyle} from '@style/styles';
import {BookingDetail, BookingStatus, Description} from '@otherComponent/index';
import {styles} from './styles';
import CommonModal from '@commonComponents/commonModal';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from 'src/navigation/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import appColors from '@theme/appColors';
import GridButton from '@commonComponents/gridButton';
import ModalComponent from '@commonComponents/modal';
import {Service} from '@utils/icons';
import CancelBooking from '@otherComponent/booking/cancelBooking';
import {windowHeight} from '@theme/appConstant';
import {useValues} from '../../../../App';

type routeProps = NativeStackNavigationProp<RootStackParamList>;

export function AssignedBooking({route}: any) {
  const [bookStatusModal, setBookStatusModal] = useState(false);
  const isAssigned = route?.params?.bookingData?.isAssigned;
  const [startService, setStartService] = useState(false);
  const [cancelService, setCancelService] = useState(false);
  const [cancelBookingModal, setCancelBookingModal] = useState(false);
  const {navigate} = useNavigation<routeProps>();
  const {isDark} = useValues();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: isDark ? appColors.darkTheme : appColors.white,
      }}>
      <ScrollView
        style={[
          GlobalStyle.mainView,
          {backgroundColor: isDark ? appColors.darkTheme : appColors.white},
        ]}
        showsVerticalScrollIndicator={false}>
        <BookingDetail title="booking.assignedBooking" />
        <View
          style={[
            styles.mainContainer,
            {
              backgroundColor: isDark ? appColors.darkCardBg : appColors.boxBg,
              borderBottomColor: isDark
                ? appColors.darkBorder
                : appColors.border,
              borderBottomWidth: isDark ? 0.1 : 1,
            },
          ]}>
          <View
            style={[
              styles.innerContainer,
              {borderColor: isDark ? appColors.darkBorder : appColors.border},
            ]}>
            <Description
              contactOptions={true}
              setBookingStatus={setBookStatusModal}
              item={route?.params?.bookingData}
            />
          </View>
        </View>
        <CommonModal
          modal={<BookingStatus setShowModal={setBookStatusModal} />}
          showModal={bookStatusModal}
          visibleModal={() => setBookStatusModal(true)}
        />
        <ModalComponent
          icon={<Service />}
          visible={startService}
          onClose={() => setStartService(false)}
          title="booking.startService"
          content="booking.serviceConfirmation"
          btnTitle="booking.startService"
          gotoScreen={() => navigate('OngoingBooking')}
          backgroundColor={appColors.serviceBG}
          success={false}
        />
        <ModalComponent
          visible={cancelService}
          onClose={() => setCancelService(false)}
          title="booking.refuseService"
          content="booking.refuseConfirmation"
          btnTitle="booking.cancel"
          gotoScreen={() => {
            setCancelService(false), setCancelBookingModal(true);
          }}
          success={false}
        />
        <CommonModal
          modal={
            <CancelBooking
              placeHolder={'booking.refuseBooking'}
              title={'booking.refuseBookingPlaceholder'}
              setShowModal={setCancelBookingModal}
              textInputContainer={{height: windowHeight(18)}}
              onSubmitClick={() => {
                setCancelBookingModal(false), navigate('CancelledBooking');
              }}
            />
          }
          showModal={cancelBookingModal}
          visibleModal={() => setCancelBookingModal(true)}
        />
      </ScrollView>
      {isAssigned === false && (
        <View style={styles.buttonContainer}>
          <GridButton
            label1="booking.refuse"
            onButtonClick={() => setStartService(true)}
            label="booking.startDriving"
            onButton1Click={() => setCancelService(true)}
            button1TextStyle={styles.button1TextStyle}
            buttonStyle={styles.buttonStyle}
            buttonTextStyle={styles.buttonTextStyle}
            buttonContainerStyle={styles.buttonContainerStyle}
            btnColor={appColors.border}
          />
        </View>
      )}
    </View>
  );
}
