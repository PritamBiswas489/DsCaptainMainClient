import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {ReviewDetail} from '@otherComponent/home';
import {reviewData} from './data';
import { useValues } from '../../../../../../App';

export function ReviewsSection() {
  const {t} = useValues()
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('reviews.reviews')}</Text>
      <ReviewDetail data={reviewData} />
    </View>
  );
}
