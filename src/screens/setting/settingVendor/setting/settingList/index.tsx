import {View, FlatList} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {settingData} from './data/data';
import RenderItem from './renderItem';
import {useValues} from '../../../../../../App';

export function SettingList({setModalVisible,setCommissionModal,showPromotionalModal}: {setModalVisible: any,setCommissionModal:any,showPromotionalModal:any}) {
  const {isServiceManLogin} = useValues();
  return (
    <View style={[styles.container]}>
      <FlatList
       
        data={settingData}
        renderItem={({item,index}) => (
          <RenderItem key={index}  setModalVisible={setModalVisible} showPromotionalModal={showPromotionalModal} setCommissionModal={setCommissionModal} item={item} />
        )}
      />
    </View>
  );
}
