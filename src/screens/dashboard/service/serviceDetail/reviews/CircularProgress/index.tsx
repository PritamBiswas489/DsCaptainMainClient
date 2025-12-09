import {View, Text, FlatList} from 'react-native';
import React from 'react';
import ProgressCircle from 'react-native-progress-circle';
import appColors from '@theme/appColors';
import {reviewRatings} from './data/data';
import {Star} from '@utils/icons';
import {styles} from './styles';
import {GlobalStyle} from '@style/styles';

export default function CircularProgress() {
  const getStarCount = (rating: number) => {
    const starPercentage = (rating / 100) * 5;
    return Math.floor(starPercentage);
  };

  return (
    <View style={[styles.ratingBg, GlobalStyle.mainContainer]}>
      <FlatList
        data={reviewRatings}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <>
            <View>
              <View style={styles.progressView}>
                {/* <ProgressCircle
                  percent={item.rating}
                  radius={25}
                  borderWidth={6}
                  color={appColors.primary}
                  shadowColor={appColors.rating}
                  bgColor={appColors.serviceBG}>
                  <Text style={styles.percentage}>{item.percentage}</Text>
                </ProgressCircle> */}
                <Text style={styles.percentage}>{item.percentage}</Text>
                
              </View>

              {reviewRatings.map((item, index) => (
                <View key={index} style={styles.starView}>
                  {Array(getStarCount(item.rating))
                    .fill(0)
                    .map((_, i) => (
                      <Star height={'14'} width={'14'} />
                    ))}
                </View>
              ))}
            </View>
          </>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator}></View>}
      />
    </View>
  );
}
