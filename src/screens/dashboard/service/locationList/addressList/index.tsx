import {View, Text, FlatList, TouchableOpacity, ViewStyle} from 'react-native';
import React, {useState, useEffect} from 'react';
import {styles} from './styles';
import {MapLocation} from '@utils/icons';
import {GlobalStyle} from '@style/styles';
import {addressData} from './data';
import appColors from '@theme/appColors';
import {Edit} from '@utils/icons';
import {useValues} from '../../../../../../App';
import {windowWidth} from '@theme/appConstant';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from 'src/navigation/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type routeProps = NativeStackNavigationProp<RootStackParamList>;

export default function AddressList({
  selectedAddress,
  setAddress,
  containerStyle,
  handleSelection,
}: {
  selectedAddress?: any;
  setAddress?: any;
  containerStyle?: ViewStyle;
  handleSelection?: any;
}) {
  const [address, setSelectedAddress] = useState(selectedAddress);
  const [addresses, setAddressData] = useState(addressData);
  const {isDark,t} = useValues();
  const {navigate} = useNavigation<routeProps>();

  useEffect(() => {
    if (selectedAddress) {
      const data = addressData.filter(item =>
        selectedAddress.includes(item.id),
      );
      setSelectedAddress(data);
    }
  }, [selectedAddress]);

  const onDelete = (itemId: any) => {
    setAddressData(currentAddress =>
      currentAddress.filter(address => address.id !== itemId),
    );
  };
  return (
    <View
      style={[
        styles.container,
        containerStyle,
        {
          backgroundColor: isDark ? appColors.darkTheme : appColors.white,
          borderWidth: isDark ? 0.1 : 1,
          borderRadius: isDark ? windowWidth(0.5) : windowWidth(2),
        },
      ]}>
      <FlatList
        data={selectedAddress ? address : addresses}
        renderItem={({index, item}) => (
          <View style={styles.innerContainer}>
            <View style={styles.row}>
              <TouchableOpacity
                onPress={() => handleSelection && handleSelection(index)}
                activeOpacity={0.9}
                style={[
                  styles.mapContainer,
                  {
                    backgroundColor: isDark
                      ? appColors.darkBorder
                      : appColors.border,
                  },
                ]}>
                <MapLocation
                  width={'20'}
                  height={'20'}
                  color={isDark ? appColors.white : appColors.darkText}
                />
              </TouchableOpacity>
              <View style={styles.textContainer}>
                <Text
                  style={[
                    styles.address,
                    {color: isDark ? appColors.white : appColors.darkText},
                  ]}>
                  {t(item.address)}
                </Text>
                <Text style={styles.country}>{t(item.country)}</Text>
                <TouchableOpacity
                  activeOpacity={0.9}
                  onPress={() => onDelete(index)}>
                  <Text style={styles.delete}>{t('common.delete')}</Text>
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => navigate('AddNewArea')}
              activeOpacity={0.9}
              style={[
                GlobalStyle.circleView,
                styles.iconContainer,
                {
                  backgroundColor: isDark
                    ? appColors.darkTheme
                    : appColors.white,
                  borderWidth: isDark ? 0.2 : 1,
                },
              ]}>
              <Edit
                color={isDark ? appColors.white : appColors.darkText}
                height={'15'}
                width={'15'}
                strokeWidth={'1.8'}
              />
            </TouchableOpacity>
          </View>
        )}
        ItemSeparatorComponent={() => (
          <View
            style={[
              GlobalStyle.horizontalLine,
              styles.horizontalView,
              {borderColor: isDark ? appColors.darkBorder : appColors.border},
            ]}
          />
        )}
      />
    </View>
  );
}
