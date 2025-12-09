import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import {styles} from './styles';
import {MapLocation} from '@utils/icons';
import appColors from '@theme/appColors';
import {GlobalStyle} from '@style/styles';
import {windowHeight} from '@theme/appConstant';
import SwitchContainer from '@otherComponent/switchContainer';
import {locationType} from 'src/navigation/types';
import {RootStackParamList} from 'src/navigation/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {useValues} from '../../../../../../App';

type routeProps = NativeStackNavigationProp<RootStackParamList>;

export function LocationList({data}: {data: locationType[]}) {
  const {navigate} = useNavigation<routeProps>();
  const [locationData, setLocationData] = useState(data);
  const {isDark, t} = useValues();
  const toggleSwitch = (index: number) => {
    const updatedData = locationData.map((item, i) =>
      i === index ? {...item, status: !item.status} : item,
    );
    setLocationData(updatedData);
  };

  const onDelete = (item: number) => {
    if (locationData) {
      const deleteItem = locationData.filter(
        deleteItem => deleteItem.id !== item,
      );
      setLocationData(deleteItem);
    }
  };

  useEffect(() => {
    setLocationData(data);
  }, [data]);

  return (
    locationData &&
    locationData.length > 0 && (
      <View style={styles.container}>
        <Text style={styles.textStyle}>{t('auth.locationList')}:</Text>
        <View
          style={[
            styles.mainContainer,
            {borderColor: isDark ? appColors.darkBorder : appColors.border},
          ]}>
          <FlatList
            data={locationData}
            renderItem={({item, index}) => (
              <View style={styles.rowContainer}>
                <View style={{flexDirection: 'row'}}>
                  <View
                    style={[
                      styles.locationContainer,
                      {
                        backgroundColor: isDark
                          ? appColors.darkBorder
                          : appColors.border,
                      },
                    ]}>
                    <MapLocation
                      color={isDark ? appColors.white : appColors.darkText}
                    />
                  </View>
                  <View>
                    <Text
                      style={[
                        styles.address,
                        {color: isDark ? appColors.white : appColors.darkText},
                      ]}>
                      {t(item.address)}
                    </Text>
                    <Text style={styles.country}>{t(item.country)}</Text>
                    <View style={styles.rowView}>
                      <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() =>
                          navigate('AddNewArea', {
                            locationData: {
                              id: item.id,
                              address: item.address,
                              country: item.country,
                            },
                          })
                        }>
                        <Text style={styles.text}>
                          {t('companyDetails.edit')}
                        </Text>
                      </TouchableOpacity>
                      <Text
                        style={[
                          GlobalStyle.verticalLine,
                          {
                            height: windowHeight(2),
                            borderColor: appColors.primary,
                          },
                        ]}></Text>
                      <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => onDelete(index)}>
                        <Text style={styles.text}>{t('common.delete')}</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <SwitchContainer
                  toggleDarkSwitch={() => toggleSwitch(index)}
                  switchOn={item.status}
                />
              </View>
            )}
            ItemSeparatorComponent={() => <View style={styles.seperator} />}
          />
        </View>
      </View>
    )
  );
}
