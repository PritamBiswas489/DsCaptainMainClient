import React, {useState} from 'react';
import {View, Image, FlatList, Text} from 'react-native';
import {styles} from './styles';
import {serviceManBg} from '@utils/images';
import {serviceMenData} from './serviceManList/data';
import {Clock} from '@utils/icons';
import {GlobalStyle} from '@style/styles';
import {windowHeight, windowWidth} from '@theme/appConstant';
import {Star} from '@utils/icons';
import appColors from '@theme/appColors';
import Selection from './selection';
import { useValues } from '../../../../../../App';

interface props {
  numServiceMan: number;
}

export default function ServiceList({numServiceMan}: props) {
  const [selectedServiceMan, setSelectedServiceMan] = useState(0);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const {t} = useValues()

  const handleItemPress = (itemId: number) => {
    setSelectedServiceMan(itemId);
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
          <View style={styles.listView}>
            <Image source={item.user} style={styles.user} />
            <View>
              <View>
                <Image source={serviceManBg} style={styles.image} />
                <View style={styles.viewContainer}>
                  <Selection
                    index={index}
                    selectedItems={selectedItems}
                    handleItemPress={handleItemPress}
                  />
                  <Text numberOfLines={1} style={styles.name}>
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
          </View>
        )}
      />
    </View>
  );
}
