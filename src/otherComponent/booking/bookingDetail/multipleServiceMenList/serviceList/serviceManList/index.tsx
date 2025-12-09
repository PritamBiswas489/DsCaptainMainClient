import React from 'react';
import {View, Image, FlatList, Text, TouchableOpacity} from 'react-native';
import {styles} from '../styles';
import {darkServiceManBg, serviceManBg} from '@utils/images';
import {Clock} from '@utils/icons';
import {GlobalStyle} from '@style/styles';
import {windowHeight, windowWidth} from '@theme/appConstant';
import {Star} from '@utils/icons';
import appColors from '@theme/appColors';
import Selection from '../selection';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from 'src/navigation/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {serviceMenData} from './data/index';
import {useValues} from '../../../../../../../App';
type servicemanListProps = NativeStackNavigationProp<RootStackParamList>;
interface props {
  selectedItems: number[];
  setSelectedItems: React.Dispatch<React.SetStateAction<number[]>>;
}

export default function ServiceManList({
  selectedItems,
  setSelectedItems,
}: props) {
  const {navigate} = useNavigation<servicemanListProps>();
  const {isDark,t} = useValues();

  const handleItemPress = (itemId: number) => {
    setSelectedItems(prevSelectedItems => {
      if (prevSelectedItems.includes(itemId)) {
        return prevSelectedItems.filter(id => id !== itemId);
      } else {
        return [...prevSelectedItems, itemId];
      }
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        data={serviceMenData}
        renderItem={({item, index}) => (
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => {}}
            style={styles.listView}>
            <Image source={item.user} style={styles.user} />
            <View>
              <View>
                <Image
                  source={isDark ? darkServiceManBg : serviceManBg}
                  style={styles.image}
                />
                <View style={styles.viewContainer}>
                  <Selection
                    index={index}
                    selectedItems={selectedItems}
                    handleItemPress={handleItemPress}
                  />
                  <Text
                    numberOfLines={1}
                    style={[
                      styles.name,
                      {color: isDark ? appColors.white : appColors.darkText},
                    ]}>
                    {t(item.name)}
                  </Text>
                  <View style={styles.row}>
                    <Clock
                      height={'23'}
                      width={'16'}
                      color={appColors.lightText}
                    />
                    <Text style={styles.experience}>
                      {' '}
                      {item.experience} {t('providerDetail.years')}
                    </Text>
                    <View
                      style={[
                        GlobalStyle.verticalLine,
                        {
                          marginTop: 4,
                          height: windowHeight(2),
                          marginHorizontal: windowHeight(1),
                          borderColor: isDark
                            ? appColors.darkBorder
                            : appColors.border,
                        },
                      ]}></View>
                    <View
                      style={{
                        marginTop: windowWidth(1),
                        right: windowWidth(1),
                      }}>
                      <Star height={'16'} width={'16'} />
                    </View>
                    <Text style={styles.rate}>{item.rate}</Text>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
