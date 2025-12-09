import {View, FlatList, Text, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import {styles} from './styles';
import {MapLocation} from '@utils/icons';
import appColors from '@theme/appColors';
import {GlobalStyle} from '@style/styles';
import NoLocation from '../noLocation';
import {useValues} from '../../../../../../../../App';
import {locationDataType} from './data/types';
export default function AvailableLocation({data}: {data?: locationDataType}) {
  const [locationList, setLocationList] = useState<locationDataType[]>([]);
  const {t} = useValues();
  const onDeleteItem = (id: number) => {
    if (locationList) {
      // const updatedList = locationList.filter(
      //   (item: {id: number}) => item.id !== id,
      // );
      // setLocationList(updatedList);
    }
  };

  useEffect(() => {
    if (data) {
      const newData: locationDataType = data;
      const updatedData: locationDataType[] = [...locationList, newData];
      setLocationList(updatedData);
    }
  }, [data, locationList]);

  return (
    <View>
      {locationList.length > 0 ? (
        <View style={styles.container}>
          <FlatList
            data={locationList}
            renderItem={({item}) => (
              <View style={styles.innerContainer}>
                <View style={styles.row}>
                  <View style={styles.mapContainer}>
                    <MapLocation color={appColors.darkText} />
                  </View>
                  <View style={styles.textContainer}>
                    <Text style={styles.address}>{t(item.address)}</Text>
                    <Text style={styles.country}>{t(item.country)}</Text>
                  </View>
                </View>
                <TouchableOpacity activeOpacity={0.9} onPress={() => {}}>
                  <Text style={styles.delete}>{t('common.delete')}</Text>
                </TouchableOpacity>
              </View>
            )}
            ItemSeparatorComponent={() => (
              <View
                style={[GlobalStyle.horizontalLine, styles.horizontalView]}
              />
            )}
          />
        </View>
      ) : (
        <NoLocation />
      )}
    </View>
  );
}
