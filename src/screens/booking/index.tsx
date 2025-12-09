import { TouchableOpacity, View, Alert, StyleSheet, RefreshControl } from 'react-native';
import { ScrollView } from 'react-native-virtualized-view';
import React, { useEffect, useState } from 'react';
import { GlobalStyle } from '@style/styles';
import { Notification, Search, BookingFilterIcon } from '@utils/icons';
import Header from '@commonComponents/header';
import BookingList from './allBooking/bookingList';
import { allBookingsData, BookingData } from './data/data';
 
import CommonModal from '@commonComponents/commonModal';
import CancelBooking from '@otherComponent/booking/cancelBooking';
import { windowHeight } from '@theme/appConstant';
import ModalComponent from '@commonComponents/modal';
import { acceptBooking } from '@utils/images';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from 'src/navigation/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import BookingFilter from './bookingFilter';
import { CalenderModal } from '@otherComponent/calenderModal';
import { CategoriesModal } from '@otherComponent/index';
import appColors from '@theme/appColors';
import { useValues } from '../../../App';
 
import StatusFilter from './statusFilter';
import { NativeSyntheticEvent, NativeScrollEvent } from 'react-native';
import { bookingSearchFieldActions } from '@src/store/redux/booking-search-field';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
import Icon from 'react-native-vector-icons/FontAwesome';
import { searchStatusArray } from '@src/config/utility';

type routeProps = NativeStackNavigationProp<RootStackParamList>;


export function Booking() {
  const dispatch = useDispatch()
  const [cancelBookingModal, setCancelBookingModal] = useState(false);
  const [acceptBookingModal, setAcceptBookingModal] = useState(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showSearchModal, setSearchModal] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<number[]>([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [isStartDate, setIsStartDate] = useState(true);
  const [showDatePicker, setDatePicker] = useState(false);
  const { isDark, isServiceManLogin } = useValues();

  const [refreshing, setRefreshing] = React.useState(false);

   
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    dispatch(bookingSearchFieldActions.setData({field:'refreshData',data:true}))
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

  const filterModalVisible = () => {
    setShowModal(true);
  };
  const searchModalVisible = () => {
    setSearchModal(true);
  };

  //handle scroll function 
  const handleScrollProcessing = (event: NativeSyntheticEvent<NativeScrollEvent>) =>{
    const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;
    if (layoutMeasurement.height + contentOffset.y >= contentSize.height - 20) {
     // dispatch(bookingSearchFieldActions.setData({field:'offset',data:offsetData+1}))
     
    }
  }
  const { navigate } = useNavigation<routeProps>();
  return (
    <View style={[styles.container,{backgroundColor:isDark ? appColors.darkCardBg : appColors.white  }]}>
      <Header
        showBackArrow={false}
        title={'booking.booking'}
        // trailIcon={
        //   <BookingFilterIcon
        //     color={isDark ? appColors.white : appColors.darkText}
        //   />
        // }
        trailIcon1={
          <Icon name='refresh' size={26} color={isDark ? appColors.white : appColors.darkText} />
        }
        gotoScreen={() => setShowModal(true)}
        onTrailIcon={() => dispatch(bookingSearchFieldActions.setData({field:'refreshData',data:true}))}
        content={''}
      />
      <View style={[styles.fixedFilter,{backgroundColor:isDark ? appColors.darkCardBg : appColors.white  }]}>
        <StatusFilter />
      </View>
      <ScrollView
      refreshControl={ <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          GlobalStyle.contentContainerStyle,

        ]}
        style={[
          GlobalStyle.mainView,
          {
            backgroundColor: isDark ? appColors.darkTheme : appColors.white,
          },
        ]}
         
      >
        {/* Booking list and other components */}
        <View style={GlobalStyle.blankView} />
        <BookingList
          setAcceptBookingModal={setAcceptBookingModal}
          setCancelBookingModal={setCancelBookingModal}
          containerStyle={{ marginVertical: 0 }}
          data={isServiceManLogin ? allBookingsData : BookingData}
        />
        <View style={GlobalStyle.blankView} />
      </ScrollView>

      {showModal && (
        <CommonModal
          modal={
            <BookingFilter
              setSearchModal={setSearchModal}
              setShowModal={setShowModal}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              setDatePicker={setDatePicker}
              setIsStartDate={setIsStartDate}
              startDate={startDate}
              endDate={endDate}
            />
          }
          showModal={showModal}
          visibleModal={filterModalVisible}
        />
      )}
      {showSearchModal && (
        <CommonModal
          modal={
            <CategoriesModal
              setSearchModal={setSearchModal}
              setShowModal={setShowModal}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          }
          showModal={showSearchModal}
          visibleModal={searchModalVisible}
        />
      )}
      <CommonModal
        modal={
          <CalenderModal
            setDatePicker={setDatePicker}
            setShowModal={setShowModal}
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}
            isStartDate={isStartDate}
          />
        }
        showModal={showDatePicker}
        visibleModal={() => setDatePicker(true)}
      />
      <ModalComponent
        showImage={true}
        image={acceptBooking}
        visible={acceptBookingModal}
        onClose={() => setAcceptBookingModal(false)}
        success={false}
        title="booking.acceptBooking"
        content="booking.acceptBookingContent"
        showGridButton={true}
        buttonLabel={'booking.doLater'}
        button1Label={'booking.yes'}
        onButtonClick={() => {
          setAcceptBookingModal(false);
        
        }}
        onButton1Click={() => setAcceptBookingModal(false)}
      />
      <CommonModal
        modal={
          <CancelBooking
            placeHolder={'booking.refuseBooking'}
            title={'booking.refuseBookingPlaceholder'}
            setShowModal={setCancelBookingModal}
            textInputContainer={{ height: windowHeight(18) }}
            onSubmitClick={() => setCancelBookingModal(false)}
          />
        }
        showModal={cancelBookingModal}
        visibleModal={() => setCancelBookingModal(true)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fixedFilter: {
    top: 0,
    width: '100%',
    zIndex: 1,
    
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3
  },
});
