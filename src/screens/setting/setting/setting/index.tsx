import React, {useState} from 'react';
import { ScrollView } from 'react-native-virtualized-view';
import {GlobalStyle} from '@style/styles';
import Header from '@commonComponents/header';
import {windowHeight} from '@theme/appConstant';
import {AppSetting, Delete} from '@utils/icons';
import ModalComponent from '@commonComponents/modal';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from 'src/navigation/types';
import {useNavigation} from '@react-navigation/native';
import {useValues} from '../../../../../App';
import appColors from '@theme/appColors';
import {SettingList} from './settingList';
import {SettingInfo} from './settingInfo';
import { CommissionBig } from '@utils/icons';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
import {Alert} from 'react-native';
import { deleteAuthTokens } from '@src/config/auth';
import { serviceProviderAccountDataActions } from '@src/store/redux/service-provider-account-data.redux';
import { deleteProviderOwnAccount } from '@src/services/auth.service';
import Spinner from 'react-native-loading-spinner-overlay';
import { logoutClearReduxState } from '@src/services/logout.service';
import PromotionalCostModal from '@src/commonComponents/promotionalCostModal';
 
interface Response {
  data: any;
  status: number;
  statusText: string;
  headers: any;
  config: any;
  request?: any;
}

type routeProps = NativeStackNavigationProp<RootStackParamList>;
export function Setting() {
  
  const {isDark, t} = useValues();
  const {navigate, replace} = useNavigation<routeProps>();
  const [showDeleteModal, setModalVisible] = useState(false);
  const [showCommissionModal,setCommissionModal] =  useState(false)
  const [promotionalModal,showPromotionalModal] =  useState(false)

  const { default_commission } = useSelector((state: RootState) => state['providerAppConfig'])
  const [processingSpinner,setProcessingSpinner] =  useState(false)
  const dispatch = useDispatch()

  const handleDeleteProviderOwnAccount = async () =>{
    setProcessingSpinner(true)
    const response:Response = await deleteProviderOwnAccount()
    console.log(response?.data) //default_delete_200
    if(response?.data?.response_code === 'default_delete_200'){
        const response = await deleteAuthTokens(); 
        setProcessingSpinner(false)
        setModalVisible(false)
        logoutClearReduxState(dispatch)
        replace('AuthNavigation');
    }else{
      setProcessingSpinner(false)
        setModalVisible(false)
      Alert.alert('Failed to remove')
    }
    
  } 
  return (
    <ScrollView
      contentContainerStyle={{paddingBottom: windowHeight(3)}}
      style={[
        GlobalStyle.mainView,
        {backgroundColor: isDark ? appColors.darkTheme : appColors.white},
      ]}
      showsVerticalScrollIndicator={false}>
      <Header
        title="profileSetting.profileSetting"
        // trailIcon={<AppSetting />}
        showBackArrow={true}
        // gotoScreen={() => navigate('AppSetting')}
        containerStyle={{
          paddingVertical: windowHeight(4),
        }}
      />
      <SettingInfo />
      <SettingList setModalVisible={setModalVisible}  setCommissionModal={setCommissionModal} showPromotionalModal={showPromotionalModal} />
      <ModalComponent
        icon={<Delete color={appColors.error} height={'60'} width={'60'} />}
        visible={showDeleteModal}
        onClose={() => setModalVisible(false)}
        success={false}
        title="profileSetting.deleteAccount"
        content="profileSetting.deleteConfirmation"
        btnTitle="profileSetting.delete"
        gotoScreen={handleDeleteProviderOwnAccount}
        showText={t('wallet.cancel')}
        onShowText={() => setModalVisible(false)}
      />

    <ModalComponent
        visible={showCommissionModal}
        onClose={() => setCommissionModal(false)}
        success={false}
        icon={<CommissionBig/>}
        title={`${t('newDeveloper.PercentageText')}: ${default_commission}%`}
        content={`${t('newDeveloper.PercentageContent')}`}
        btnTitle="common.okay"
        gotoScreen={()=>setCommissionModal(false)}
      /> 

<PromotionalCostModal
        visible={promotionalModal}
        onClose={() => showPromotionalModal(false)}
        success={false}
         
         
        btnTitle="common.okay"
        gotoScreen={()=>showPromotionalModal(false)}
      /> 
      <Spinner
          visible={processingSpinner}
          textContent={'Processing.....'}
          textStyle={{ color: '#FFF' }}
        />
    </ScrollView>
  );
}
