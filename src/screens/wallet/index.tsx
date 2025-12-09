import {View} from 'react-native';
import React, {useState} from 'react';
import {GlobalStyle} from '@style/styles';
import {TotalBalance} from '@otherComponent/home';
import Header from '@commonComponents/header';
import {Notification, Plus} from '@utils/icons';
import appColors from '@theme/appColors';
import HeadingRow from '@commonComponents/headingRow';
import {WalletHistory} from './walletHistory';
import CommonModal from '@commonComponents/commonModal';
import WalletModal from '@otherComponent/wallet/walletModal';
import AddMoney from './addMoneyModal';
import {useValues} from '../../../App';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from 'src/navigation/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type routeProps = NativeStackNavigationProp<RootStackParamList>;

export function Wallet() {
  const [showWalletModal, setShowWalletModal] = useState(false);
  const [showAddMoneyModal, setShowAddMoneyModal] = useState(false);
  const {isDark} = useValues();
  const {navigate} = useNavigation<routeProps>();

  return (
    <View
      style={[
        GlobalStyle.mainView,
        {backgroundColor: isDark ? appColors.darkTheme : appColors.white},
      ]}>
      <Header
        title="bottomTab.wallet"
        trailIcon={
          <Plus
            height={'22'}
            width={'22'}
            color={isDark ? appColors.white : appColors.darkText}
          />
        }
        gotoScreen={() => setShowAddMoneyModal(true)}
        trailIcon1={
          <Notification color={isDark ? appColors.white : appColors.darkText} />
        }
        onTrailIcon={() => navigate('EmptyNotification')}
      />
      <TotalBalance onPress={() => setShowWalletModal(true)} />
      <HeadingRow title="wallet.walletHistory" />
      <WalletHistory />
      <CommonModal
        modal={<WalletModal setShowWalletModal={setShowWalletModal} />}
        showModal={showWalletModal}
        visibleModal={() => setShowWalletModal(true)}
      />
      <CommonModal
        modal={<AddMoney setShowModal={setShowAddMoneyModal} />}
        showModal={showAddMoneyModal}
        visibleModal={() => setShowAddMoneyModal(true)}
      />
    </View>
  );
}
