import {ScrollView, Text, View} from 'react-native';
import React, {useState} from 'react';
import Header from '@commonComponents/header';
import {GlobalStyle} from '@style/styles';
import {windowHeight, windowWidth} from '@theme/appConstant';
import Detail from './packageDetail';
import appColors from '@theme/appColors';
import {ServiceDetailView} from './serviceDetail';
import Disclaimer from '@otherComponent/disclaimer';
import GradientBtn from '@commonComponents/gradientBtn';
import {RootStackParamList} from 'src/navigation/types';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {styles} from './styles';
import {Delete} from '@utils/icons';
import {PackageSection} from './packageSection';
import ModalComponent from '@commonComponents/modal';
import {useValues} from '../../../../../../App';

type routeProps = NativeStackNavigationProp<RootStackParamList>;

export function PackageDetail() {
  const {navigate} = useNavigation<routeProps>();
  const [showDeleteModal, setModalVisible] = useState(false);
  const {isDark,t} = useValues();
  return (
    <ScrollView
      contentContainerStyle={styles.contentContainerStyle}
      showsVerticalScrollIndicator={false}
      style={[
        GlobalStyle.mainView,
        {backgroundColor: isDark ? appColors.darkCard : appColors.boxBg},
      ]}>
      <View
        style={[
          GlobalStyle.mainView,
          {backgroundColor: isDark ? appColors.darkCard : appColors.boxBg},
        ]}>
        <Header
          containerStyle={styles.containerStyle}
          title={'packages.packageDetails'}
          showBackArrow={true}
          trailIcon={
            <Delete color={isDark ? appColors.error : appColors.darkText} />
          }
          gotoScreen={() => setModalVisible(true)}
        />
        <Detail />
        <PackageSection />
        <Text
          style={[
            GlobalStyle.title,
            styles.titleStyle,
            {
              marginTop: windowWidth(1),
              color: isDark ? appColors.white : appColors.darkText,
            },
          ]}>
          {t('packages.includedService')}
        </Text>
        <ServiceDetailView />
        <View
          style={[
            GlobalStyle.lineContainer,
            {borderColor: isDark ? appColors.darkBorder : appColors.border},
          ]}>
          <View
            style={[
              GlobalStyle.dottedLine,
              {backgroundColor: isDark ? appColors.darkCard : appColors.white},
            ]}></View>
        </View>
        <Disclaimer content="packages.disclaimer" />
        <View
          style={[
            GlobalStyle.horizontalLine,
            {
              marginBottom: 0,
              marginTop: windowHeight(3),
              borderColor: isDark ? appColors.darkBorder : appColors.border,
            },
          ]}
        />
      </View>
      <GradientBtn
        label={'packages.editPackage'}
        onPress={() => navigate('AddPackage', {
          packagesData: {
            title: 'packages.cleaningService',
            startDate: 'bookingStatus.date',
            endDate: 'myWallet.date',
            totalService: 3,
            price: 32.08,
          },
        })}
      />
      <ModalComponent
        icon={<Delete color={appColors.error} height={'60'} width={'60'} />}
        visible={showDeleteModal}
        onClose={() => setModalVisible(false)}
        success={false}
        title="packages.deletePackages"
        content="packages.deleteConfirmation"
        btnTitle="profileSetting.delete"
        gotoScreen={() => setModalVisible(false)}
        showText={t('wallet.cancel')}
        onShowText={() => setModalVisible(false)}
      />
    </ScrollView>
  );
}
