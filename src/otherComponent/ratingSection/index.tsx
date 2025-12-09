import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {ratings} from './data';
import {Ratings, SelectedRating} from '@utils/icons';
import {styles} from './styles';
import appColors from '@theme/appColors';
import {useValues} from '../../../App';

interface ratingProps {
  selectedRating: number;
  setSelectedRating: React.Dispatch<React.SetStateAction<number>>;
}

export function RatingSection({
  selectedRating,
  setSelectedRating,
}: ratingProps) {
  const onRating = (rating: number) => {
    setSelectedRating(rating);
  };
  const {isDark} = useValues();
  return (
    <View>
      <FlatList
        data={ratings}
        renderItem={({index, item}) => {
          return (
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => onRating(index)}
              style={[
                styles.row,
                {
                  backgroundColor:
                    selectedRating === index
                      ? appColors.primary
                      : isDark
                      ? appColors.darkTheme
                      : appColors.boxBg,
                },
              ]}>
              {selectedRating === index ? <SelectedRating /> : <Ratings />}
              <Text
                style={[
                  styles.rating,
                  {
                    color:
                      selectedRating === index
                        ? appColors.white
                        : appColors.lightText,
                  },
                ]}>
                {item.rating}
              </Text>
            </TouchableOpacity>
          );
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
