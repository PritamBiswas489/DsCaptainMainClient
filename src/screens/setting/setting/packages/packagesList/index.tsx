import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {packages} from './data';
import {styles} from './styles';
import {Edit} from '@utils/icons';
import {useValues} from '../../../../../../App';
import {GlobalStyle} from '@style/styles';
import {PackageRow} from './packageRow';
import SwitchContainer from '@otherComponent/switchContainer';
import {RootStackParamList} from 'src/navigation/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import appColors from '@theme/appColors';

export function PackagesList() {
  const {currSymbol, currValue,t} = useValues();

  const toggleSwitch = (index: number) => {
    setPackageData(prevData => {
      const updatedData = [...prevData];
      updatedData[index].status = !updatedData[index].status;
      return updatedData;
    });
  };
  const {isDark} = useValues();

  const [packageData, setPackageData] = useState(packages);

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const onDeleteItem = (id: number) => {
    const deleteItem = packageData.filter(item => item.id !== id);
    setPackageData(deleteItem);
  };

  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
        data={packageData}
        renderItem={({item, index}) => (
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => navigation.navigate('PackageDetail')}
            style={[
              styles.container,
              {borderColor: isDark ? appColors.darkBorder : appColors.border},
            ]}>
            <View style={styles.mainContainer}>
              <View style={styles.rowContainer}>
                <View>
                  <View style={styles.rowContainer}>
                    <Text
                      style={[
                        styles.title,
                        {color: isDark ? appColors.white : appColors.darkText},
                      ]}>
                      {t(item.title)}
                    </Text>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate('AddPackage', {
                          packagesData: {
                            title: item.title,
                            startDate: item.startDate,
                            endDate: item.endDate,
                            totalService: item.totalService,
                            price: item.price,
                          },
                        })
                      }>
                      <Edit />
                    </TouchableOpacity>
                  </View>
                  <Text style={styles.price}>
                    {' '}
                    {currSymbol}
                    {(currValue * item.price).toFixed(2)}
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => onDeleteItem(item.id)}>
                <Text style={styles.delete}>{t('common.delete')}</Text>
              </TouchableOpacity>
            </View>
            <View style={[GlobalStyle.horizontalLine, {height: 0.5}]} />
            <PackageRow title={'dataFilter.startDate'} date={item.startDate} />
            <PackageRow title={'dataFilter.endDate'} date={item.endDate} />
            <PackageRow
              title={'packages.serviceIncluded'}
              totalService={item.totalService}
            />
            <View style={styles.statusView}>
              <Text style={styles.status}>{t('categories.activeStatus')}</Text>
              <SwitchContainer
                toggleDarkSwitch={() => toggleSwitch(index)}
                switchOn={item.status}
              />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
