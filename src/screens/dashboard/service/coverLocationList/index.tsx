import {View, Text, TouchableOpacity, Alert} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {BackArrow, Plus} from '@utils/icons';
import {windowWidth} from '@theme/appConstant';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from 'src/navigation/types';
import {useNavigation} from '@react-navigation/native';
import AddressList from './addressList';
import {GlobalStyle} from '@style/styles';
import appColors from '@theme/appColors';
import {useValues} from '../../../../../App';

export function CoverLocationList({route}: {route: any}) {
  const {zone} = route.params;
  const {isDark, t} = useValues();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [address, setAddress] = useState<number[]>([]);

  const handleGoBack = () => {
    // onGoBack(address);
    navigation.goBack();
  };

  const handleSelection = (item: number) => {
    setAddress(prevAddress => {
      if (prevAddress.includes(item)) {
        return prevAddress.filter(selectedItem => selectedItem !== item);
      } else {
        return [...prevAddress, item];
      }
    });
  };

  return (
    <View
      style={[
        GlobalStyle.mainView,
        {backgroundColor: isDark ? appColors.darkTheme : appColors.white},
      ]}>
      <View
        style={[
          styles.container,
          {
            backgroundColor: isDark ? appColors.darkTheme : appColors.boxBg,
            borderColor: isDark ? appColors.darkBorder : appColors.border,
          },
        ]}>
        <View style={styles.rowContainer}>
          <View style={styles.row}>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => handleGoBack()}
              style={[
                styles.circleView,
                {
                  backgroundColor: isDark
                    ? appColors.darkCard
                    : appColors.white,
                  borderWidth: isDark ? 0.1 : 1,
                },
              ]}>
              <BackArrow />
            </TouchableOpacity>
            <Text
              style={[
                styles.title,
                {color: isDark ? appColors.white : appColors.darkText},
              ]}>
              {t('serviceDetail.locationList')}
            </Text>
          </View>
          {/* <TouchableOpacity
            onPress={() => navigation.navigate('CurrentLocation')}
            activeOpacity={0.9}
            style={[
              styles.circleView,
              {
                right: windowWidth(3),
                backgroundColor: isDark ? appColors.darkCard : appColors.white,
                borderWidth: isDark ? 0.1 : 1,
              },
            ]}>
            <Plus
              color={isDark ? appColors.white : appColors.darkText}
              height={'22'}
              width={'22'}
            />
          </TouchableOpacity> */}
        </View>
      </View>
      <AddressList zone={zone} handleSelection={handleSelection} setAddress={setAddress} />
    </View>
  );
}
