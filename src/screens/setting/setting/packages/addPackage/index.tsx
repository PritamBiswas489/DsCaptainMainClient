import {ScrollView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {GlobalStyle} from '@style/styles';
import Header from '@commonComponents/header';
import TextInputComponent from '@otherComponent/auth/textInput';
import {Notes, PackageIcon, Amount, Calendar, Delete} from '@utils/icons';
import CommonModal from '@commonComponents/commonModal';
import {CategoriesModal} from '@otherComponent/index';
import {AddCategory} from './addCategory';
import {CalenderModal} from '@otherComponent/calenderModal';
import {ActiveStatus} from './addCategory/activeStatus';
import GradientBtn from '@commonComponents/gradientBtn';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from 'src/navigation/types';
import {useNavigation} from '@react-navigation/native';
import appColors from '@theme/appColors';
import ModalComponent from '@commonComponents/modal';
import {useValues} from '../../../../../../App';

export function AddPackage({route}: any) {
  const {isDark, t} = useValues();
  const [packageName, setPackageName] = useState(
    route?.params ? t(route?.params?.packagesData?.title) : '',
  );
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showSearchModal, setSearchModal] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<number[]>([]);
  const [description, setDescription] = useState(
    route?.params ? t('packages.description') : '',
  );
  const [amount, setAmount] = useState(
    route?.params ? t(route?.params?.packagesData?.price) : '',
  );
  const [showDatePicker, setDatePicker] = useState(false);
  const [startDate, setStartDate] = useState(
    route?.params ? t(route?.params?.packagesData?.startDate) : '',
  );
  const [endDate, setEndDate] = useState(
    route?.params ? t(route?.params?.packagesData?.endDate) : '',
  );
  const [isStartDate, setIsStartDate] = useState(true);

  const [customerNote, setCustomerNote] = useState(
    route?.params ? t('packages.packageDisclaimer') : '',
  );

  const [showDeleteModal, setModalVisible] = useState(false);

  const searchModalVisible = () => {
    setSearchModal(true);
  };

  const handleStartDatePress = () => {
    setShowModal(false);
    setDatePicker(true);
    setIsStartDate(true);
  };

  const handleEndDatePress = () => {
    setShowModal(false);
    setDatePicker(true);
    setIsStartDate(false);
  };

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <ScrollView
      contentContainerStyle={styles.contentContainerStyle}
      showsVerticalScrollIndicator={false}
      style={[
        GlobalStyle.mainView,
        {backgroundColor: isDark ? appColors.darkCard : appColors.white},
      ]}>
      <Header
        title={route?.params ? 'packages.editPackage' : 'packages.addPackage'}
        showBackArrow={true}
        trailIcon={route?.params ? <Delete color={appColors.error} /> : ''}
        gotoScreen={() => setModalVisible(true)}
      />
      <TextInputComponent
        containerStyle={styles.containerStyle}
        placeholder={t('packages.packageName')}
        Icon={<PackageIcon />}
        value={packageName}
        onChangeText={value => {
          setPackageName(value);
        }}
      />
      <AddCategory
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        setShowModal={setShowModal}
        setSearchModal={setSearchModal}
      />
      <TextInputComponent
        placeholder={t('packages.packageDescription')}
        Icon={<Notes />}
        value={description}
        onChangeText={value => {
          setDescription(value);
        }}
        multiline={true}
        inputStyle={styles.inputStyle}
      />

      <TextInputComponent
        placeholder={t('packages.amount')}
        Icon={<Amount />}
        value={amount}
        onChangeText={value => {
          setAmount(value);
        }}
        keyboardType={'numeric'}
      />
      <TouchableOpacity activeOpacity={0.9} onPress={handleStartDatePress}>
        <TextInputComponent
          placeholder={t('booking.startDate')}
          Icon={<Calendar color={appColors.lightText} />}
          value={startDate}
          onChangeText={value => {
            setStartDate(value);
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.9} onPress={handleEndDatePress}>
        <TextInputComponent
          placeholder={t('booking.endDate')}
          Icon={<Calendar color={appColors.lightText} />}
          value={endDate}
          onChangeText={value => {
            setEndDate(value);
          }}
        />
      </TouchableOpacity>

      <TextInputComponent
        placeholder={t('packages.customerNote')}
        Icon={<Notes />}
        value={customerNote}
        onChangeText={value => {
          setCustomerNote(value);
        }}
        multiline={true}
        inputStyle={styles.inputStyle}
      />
      <ActiveStatus />
      <GradientBtn
        label={route?.params ? 'packages.updatePackage' : 'packages.addPackage'}
        onPress={() => navigation.goBack()}
      />
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
        icon={<Delete color={appColors.error} height={'60'} width={'60'} />}
        visible={showDeleteModal}
        onClose={() => setModalVisible(false)}
        success={false}
        title="packages.deletePackages"
        content="packages.deleteConfirmation"
        btnTitle="profileSetting.delete"
        gotoScreen={() => navigation.goBack()}
        showText={t('wallet.cancel')}
        onShowText={() => setModalVisible(false)}
      />
    </ScrollView>
  );
}
