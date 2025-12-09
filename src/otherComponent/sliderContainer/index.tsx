import React, {useState} from 'react';
import {View, FlatList, Image, Dimensions} from 'react-native';
import {styles} from './styles';
import PaginationContainer from './paginationContainer';
import {windowHeight, windowWidth} from '@theme/appConstant';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
import { getMediaUrl } from '@src/config/utility';
var currentIndex: number = 0;

export default function SliderContainer({data}: {data: any}) {
  const [currentIndexx, setCurrentIndex] = useState<null | number>(0);
  const getIndex = (index: any) => {
    currentIndex = index;
    setCurrentIndex(index);
  };
  const width = Dimensions.get('screen').width;

  const {
    selected:selectedDetailsData
  } = useSelector((state: RootState) => state['serviceDetailsData'])
   const images = [];
  if(selectedDetailsData?.cover_image!=''){
       images.push(`${getMediaUrl()}/service/${selectedDetailsData.cover_image}`)
  }

  return (
    images.length > 0 && (
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.contentContainerStyle}
          data={images}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <View>
              <Image source={{uri: item}} style={styles.bannerBg} />
            </View>
          )}
          onScroll={e => {
            setCurrentIndex(null);
            const x = e.nativeEvent.contentOffset.x;
            const val = (x / width).toFixed(0);
            const current = val == '-0' ? 0 : (x / width).toFixed(0);
            getIndex(current);
          }}
        />
        {/* <PaginationContainer
          activeDotStyle={styles.activeDotStyle}
          borderStyle={{borderWidth: 0}}
          inActiveDotStyle={styles.inActiveDotStyle}
          currentIndex={currentIndex}
          data={data}
          containerStyle={{marginTop: windowHeight(2)}}
        /> */}
      </View>
    )
  );
}
