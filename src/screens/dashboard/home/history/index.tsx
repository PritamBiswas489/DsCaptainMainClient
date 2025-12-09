import {View, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {GlobalStyle} from '@style/styles';
import Header from '@commonComponents/header';
import {Filter, Calendar} from '@utils/icons';
import RenderItem from '../dashBoard/earnings/walletHistory/renderItem';
import CustomModal from '@otherComponent/customModal';
import {Options} from './data';
import DateFilter from './dateFilter';
import {DatePickerModal} from '@otherComponent/datePickerModal';
import {useValues} from '../../../../../App';
import appColors from '@theme/appColors';

export function History() {
  const [visible, setVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const {isDark} = useValues();
  const getSelected = (val: number) => {};

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={[
        GlobalStyle.mainView,
        {backgroundColor: isDark ? appColors.darkTheme : appColors.white},
      ]}>
      <Header
        showBackArrow={true}
        title={'common.history'}
        trailIcon={
          <Filter color={isDark ? appColors.white : appColors.darkText} />
        }
        gotoScreen={() => {
          setVisible(true);
        }}
        trailIcon1={
          <Calendar color={isDark ? appColors.white : appColors.darkText} />
        }
        onTrailIcon={() => setShowModal(true)}
      />
      <View style={styles.container}>
        <RenderItem />
      </View>
      <CustomModal
        visible={visible}
        setVisible={setVisible}
        data={Options}
        getSelected={getSelected}
      />
      <DatePickerModal
        showModal={showModal}
        setShowModal={setShowModal}
        content={
          <DateFilter showModal={showModal} setShowModal={setShowModal} />
        }
      />
    </ScrollView>
  );
}
