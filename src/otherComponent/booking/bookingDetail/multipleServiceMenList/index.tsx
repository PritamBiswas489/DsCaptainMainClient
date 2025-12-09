import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import {GlobalStyle} from '@style/styles';
import Header from '@commonComponents/header';
import {Search, SettingFilter} from '@utils/icons';
import ServiceList from './serviceList/serviceManList';
import GradientBtn from '@commonComponents/gradientBtn';
import {RootStackParamList} from 'src/navigation/types';
import {useNavigation} from '@react-navigation/native';
import CommonModal from '@commonComponents/commonModal';
import ExperienceFilter from './filter';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import appColors from '@theme/appColors';
import {styles} from './styles';
import {useValues} from '../../../../../App';

export function MultipleServiceMenList({route}: {route: any}) {
  const [showModal, setShowModal] = useState<boolean>(false);
  const {isDark,t} = useValues();
  const handleModal = () => {
    setShowModal(true);
  };
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [updatedSelectedItems, setSelectedItems] = useState<number[]>([]);

  const handleGoBack = () => {
    navigation.navigate('AssignedBooking');
  };
  const [showSearchBar, setSearchBar] = useState<boolean>();

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: isDark ? appColors.darkTheme : appColors.white},
      ]}>
      <ScrollView
        style={[
          GlobalStyle.mainView,
          {backgroundColor: isDark ? appColors.darkCard : appColors.white},
        ]}
        showsVerticalScrollIndicator={false}>
        <Header
          showBackArrow={true}
          title="servicemen.servicemenList"
          trailIcon={
            <SettingFilter
              width={'16'}
              height={'16'}
              color={isDark ? appColors.white : appColors.darkText}
            />
          }
          trailIcon1={
            <Search
              color={isDark ? appColors.white : appColors.lightText}
              width={'18'}
              height={'18'}
            />
          }
          gotoScreen={() => setShowModal(true)}
          onTrailIcon={() => setSearchBar(!showSearchBar)}
          showSearchBar={showSearchBar}
          searchContainerStyle={styles.serachContainer}
        />
        <ServiceList
          selectedItems={updatedSelectedItems}
          setSelectedItems={setSelectedItems}
        />

        <CommonModal
          modal={<ExperienceFilter setShowModal={setShowModal} />}
          showModal={showModal}
          visibleModal={handleModal}
        />
      </ScrollView>
      <View style={styles.buttonContainer}>
        <GradientBtn
          label={t('booking.assignedBookingBtn')}
          onPress={() => handleGoBack()}
        />
      </View>
    </View>
  );
}
