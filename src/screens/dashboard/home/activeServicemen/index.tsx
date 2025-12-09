import React, {useState} from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, Alert } from 'react-native';
import { styles } from './styles';
import { serviceMenListData } from './data';
import { Call, Email } from '@utils/icons';
import appColors from '@theme/appColors';
import { windowHeight } from '@theme/appConstant';
import { serviceMenType } from './data/types';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from 'src/navigation/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useValues } from '../../../../../App';
import { maleDefault, femaleDefault } from '@src/utils/images';
import ActionMenuServiceMen from '../../service/actionMenuServiceMen';
import { serviceMenDataAction } from '@src/store/redux/servicemen-list';
import { useDispatch } from 'react-redux';
import { deleteServiceMenRequest, changeStatusServiceMen } from '@src/services/profile.service';
import { getMediaUrl } from '@src/config/utility';
import SwitchContainer from '@src/otherComponent/switchContainer';


export function ActiveServiceMen({ data }: { data?: serviceMenType[] }) {
 
  const { isDark, t } = useValues();
  const dispatch = useDispatch()
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleNavigateToDetailsPage = (serviceMenId: string) => {
    navigation.navigate('ServiceMenDetail', {
      id: serviceMenId
    })
  }
  const deleteServiceMen = (serviceMenId: string) => {
    dispatch(serviceMenDataAction.deleteServiceMenById(serviceMenId))
    deleteServiceMenRequest(serviceMenId)
  }
  const editServiceMen = (serviceMenId: string) => {
    navigation.navigate('EditServiceMen', {
      id: serviceMenId
    })
  }
  const toggleSwitch = (serviceMenId:string,status:number)=>{
    Alert.alert(
      'Confirmation',
      t('newDeveloper.ChangeServiceAlert'),
      [
          {
              text: 'Cancel',
              style: 'cancel',
          },
          {
              text: 'OK',
              onPress: () => {
                dispatch(serviceMenDataAction.changeStatusServiceMenDetails({
                  id:serviceMenId,
                  status:status === 1 ? 0 : 1
                }))
                const formData  =  new FormData()
                formData.append('serviceman_id[]',serviceMenId)
                changeStatusServiceMen(formData)
              },
          },
      ],
      { cancelable: false }
  );
    
  }

  return (
    <View>
    
      {data && <FlatList
        contentContainerStyle={{ paddingBottom: windowHeight(2) }}
        data={data}
        renderItem={({ item }) => {
          const defaultImageValue = item.gender !== 'female' ? femaleDefault : maleDefault
          return <View

            style={[
              styles.container,
              {
                backgroundColor: isDark ? appColors.darkTheme : appColors.white,
                borderColor: isDark ? appColors.darkBorder : appColors.border,
              },
            ]}>
            <View style={styles.rowContainer}>
              {item.profile_image ? <Image source={{
                uri: `${getMediaUrl()}/serviceman/profile/${item.profile_image}`
              }} style={styles.image} /> : <Image source={defaultImageValue} style={styles.image} />}
              <View style={styles.textContainer}>
                <Text
                  style={[
                    styles.name,
                    { color: isDark ? appColors.white : appColors.darkText },
                  ]}>
                  {item.first_name + ' ' + item.last_name}

                </Text>

                <Text style={styles.member}>
                  <Text>{item.phone}</Text>
                </Text>

              </View>
            </View>
            <View>
              <View style={styles.containerView}>

                <ActionMenuServiceMen editServiceMen={editServiceMen} deleteServiceMen={deleteServiceMen} handleNavigateToDetailsPage={handleNavigateToDetailsPage} item={item} />
                <SwitchContainer
                  toggleDarkSwitch={() => { toggleSwitch(item.id,item.is_active) }}
                  switchOn={item.is_active === 1 ? true : false}
                />
              </View>
            </View>
          </View>
        }}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />}
    </View>
  );
}
