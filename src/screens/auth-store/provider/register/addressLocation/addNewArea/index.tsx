import {View} from 'react-native';
import React, {useState} from 'react';
import Header from '@commonComponents/header';
import {GlobalStyle} from '@style/styles';
import TextInputField from './textInputField';
import ModalComponent from '@commonComponents/modal';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from 'src/navigation/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useValues} from '../../../../../../../App';
import appColors from '@theme/appColors';

type RouteProps = {
  route?: {
    params?: {
      latitude: string;
      longitude: string;
      screen?: string;
      locationData?: any;
    };
  };
};

type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

const AddNewArea=({route}: RouteProps)=> {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation<NavigationProps>();
  const [addressData, setAddressData] = useState();

  const {latitude, longitude} = route?.params ?? {
    latitude: '',
    longitude: '',
  };
  const screen = route?.params?.screen;
  const locationData = route?.params?.locationData;

  const {isDark} = useValues();

  return (
    <View
      style={[
        GlobalStyle.mainView,
        {backgroundColor: isDark ? appColors.darkCardBg : appColors.white},
      ]}>
      <Header showBackArrow={true} title="location.newArea" />
      <TextInputField
        setModalVisible={setModalVisible}
        latitudeData={latitude}
        longitudeData={longitude}
        setAddressData={setAddressData}
      />

      {/* Area Success Modal */}
      <ModalComponent
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        success={true}
        title="auth.successFullyAdded"
        content="location.addAreaSucessMsg"
        btnTitle="common.okay"
        gotoScreen={() =>
          screen === 'companyDetailPage'
            ? navigation.navigate('CompanyDetail', {data: addressData})
            : navigation.navigate('Register', {
                data: addressData,
              })
        }
      />
    </View>
  );
}
export default AddNewArea;
