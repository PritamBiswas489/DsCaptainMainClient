import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import {style} from './styles';
import {data} from './data';
import {Arrow} from '@utils/icons';
import {RootStackParamList} from 'src/navigation/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {useValues} from '../../../../../../../App';
import appColors from '@theme/appColors';

type routeProps = NativeStackNavigationProp<RootStackParamList>;

export function CommissionList() {
  const {navigate} = useNavigation<routeProps>();
  const {isDark,t} = useValues();
  return (
    <View style={style.container}>
      <FlatList
        numColumns={2}
        data={data}
        renderItem={({item}) => (
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => navigate('CommissionDetail', {title: item.name})}
            style={[
              style.mainContainer,
              {backgroundColor: isDark ? appColors.darkTheme : appColors.boxBg},
            ]}>
            <View
              style={[
                style.iconStyle,
                {
                  backgroundColor: isDark
                    ? appColors.darkCard
                    : appColors.white,
                  borderColor: isDark ? appColors.darkBorder : appColors.border,
                },
              ]}>
              {item.icon}
            </View>
            <View style={style.mainView}>
              <Text
                style={[
                  style.name,
                  {color: isDark ? appColors.white : appColors.darkText},
                ]}>
                {t(item.name)}
              </Text>
              <Text
                style={[
                  style.commission,
                  {color: isDark ? appColors.lightText : appColors.darkText},
                ]}>
                {item.commission}%
              </Text>
            </View>
            <View style={style.iconContainer}>
              <Arrow height={'8'} width={'14  '} />
            </View>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => <View style={style.separator} />}
      />
    </View>
  );
}
