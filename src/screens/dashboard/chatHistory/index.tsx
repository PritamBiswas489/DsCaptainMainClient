import {View, Text, Alert} from 'react-native';
import React, {useState} from 'react';
import {GlobalStyle} from '@style/styles';
import Header from '@commonComponents/header';
import {Delete, More} from '@utils/icons';
import {HistoryList} from './historyList';
import {historyOptions} from './data';
import CustomModal from '@otherComponent/customModal';
import Toast from 'react-native-toast-message';
import {styles} from './styles';
import ModalComponent from '@commonComponents/modal';
import appColors from '@theme/appColors';
import {useValues} from '../../../../App';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@src/store'
import { serviceMenChannelActions } from '@src/store/redux/serviceman-channels-redux';
import { customerChannelActions } from '@src/store/redux/customer-channels-redux';
import { adminChannelActions } from '@src/store/redux/admin-channel-redux';

export function ChatHistory() {
  const dispatch = useDispatch()
  const [visible, setVisible] = useState(false);
  const [showDeleteModal, setModalVisible] = useState(false);
  const {isDark,t} = useValues();

  const getSelected = (val: number) => {
    val == 0 ? handleAlertMsg() : setModalVisible(true);
  };

  const handleAlertMsg = () => {
    Toast.show({
      type: 'tomatoToast',
    });
  };
  const successConfig = {
    tomatoToast: () => (
      <View style={styles.mainContainer}>
        <Text style={styles.text}>{t('common.refresh')}</Text>
      </View>
    ),
  };

  return (
    <View
      style={[
        GlobalStyle.mainView,
        {backgroundColor: isDark ? appColors.darkTheme : appColors.white},
      ]}>
      <Header
        showBackArrow={true}
        title={'chat.chatHistory'}
        trailIcon1={
          <Icon name='refresh' size={26} color={isDark ? appColors.white : appColors.darkText} />
        } 
        onTrailIcon={() => {
          dispatch(serviceMenChannelActions.resetState())
          dispatch(customerChannelActions.resetState())
          dispatch(adminChannelActions.resetState())
        }}
      />
      <HistoryList />
      <Toast config={successConfig} />
      <CustomModal
        visible={visible}
        setVisible={setVisible}
        data={historyOptions}
        getSelected={getSelected}
      />
       
    </View>
  );
}
