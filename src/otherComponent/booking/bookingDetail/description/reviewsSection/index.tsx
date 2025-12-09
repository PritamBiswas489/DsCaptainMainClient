import {View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import HeadingRow from '@commonComponents/headingRow';
import {ReviewDetail} from '@otherComponent/home';
import {windowWidth} from '@theme/appConstant';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from 'src/navigation/types';

type ReviewRouteProps = NativeStackNavigationProp<RootStackParamList>;

export function ReviewsSection() {
  const {navigate} = useNavigation<ReviewRouteProps>();
  return (
    <View>
      <View style={styles.container}>
        <HeadingRow
          rowStyle={{marginTop: windowWidth(6), marginHorizontal: 0}}
          title={'reviews.reviews'}
          content={'reviews.seeAll'}
          gotoScreen={() => navigate('Reviews')}
          titleStyle={styles.reviewTextStyle}
        />
        <ReviewDetail />
      </View>
    </View>
  );
}
