import React, { useState } from 'react';
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
import { useValues } from '../../../../App';
import { maleDefault, femaleDefault } from '@src/utils/images';

import { serviceMenDataAction } from '@src/store/redux/servicemen-list';
import { useDispatch } from 'react-redux';
import { deleteServiceMenRequest, changeStatusServiceMen } from '@src/services/profile.service';
import { getMediaUrl } from '@src/config/utility';
import SwitchContainer from '@src/otherComponent/switchContainer';
export function DetailsServiceMen({ data, setServiceMan,setServiceMenModal }: {
  data?: serviceMenType[],
  setServiceMan: (value: { serviceManid: string; serviceManName: string }) => void,
  setServiceMenModal:(value:boolean)=>void

}) {
  const { isDark, t } = useValues();
  const dispatch = useDispatch()
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleSetServiceMen = (item: serviceMenType) => {
    Alert.alert(
      "Confirmation", // Title of the alert
      t('newDeveloper.AssignServicemanConfirmMsg'), // Message
      [
        {
          text: "Cancel",  
          onPress: () => console.log("Cancel Pressed"), // Action when Cancel is pressed
          style: "cancel", 
        },
        {
          text: "Confirm",  
          onPress: () => {
            setServiceMan({serviceManid:item.id,serviceManName:`${item.first_name} ${item.last_name}`})
            setServiceMenModal(false)
          },  
        },
      ],
      { cancelable: false } 
    );
  }

  return (
    <View>
      <FlatList
        contentContainerStyle={{ paddingBottom: windowHeight(2) }}
        data={data ? data : serviceMenListData}
        renderItem={({ item }) => {
          const defaultImageValue = item.gender !== 'female' ? femaleDefault : maleDefault
          return <TouchableOpacity onPress={() => handleSetServiceMen(item)}

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
          </TouchableOpacity>
        }}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
}
