import React from 'react';
import {View, FlatList, Image, Text} from 'react-native';
import {styles} from './styles';
import HeadingRow from '@commonComponents/headingRow';
import {blogsList} from './data/data';
import {Message} from '@utils/icons';
import {windowWidth} from '@theme/appConstant';
import {RootStackParamList} from 'src/navigation/types';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import appColors from '@theme/appColors';
import {useValues} from '../../../../../App';

type BlogRouteProps = NativeStackNavigationProp<RootStackParamList>;
export default function BlogView() {
  const {navigate} = useNavigation<BlogRouteProps>();
  const {isDark,t} = useValues();
  return (
    <View
      style={[
        styles.couponsView,
        {backgroundColor: isDark ? appColors.darkTheme : appColors.boxBg},
      ]}>
      <HeadingRow
        title="home.blogList"
        content={'home.viewAll'}
        gotoScreen={() => navigate('LatestBlog')}
        rowStyle={styles.rowStyle}
      />
      <FlatList
        data={blogsList}
        renderItem={({item}) => (
          <View
            style={[
              styles.blogContainer,
              {
                backgroundColor: isDark ? appColors.darkTheme : appColors.white,
                borderColor: isDark ? appColors.darkBorder : appColors.border,
              },
            ]}>
            <View style={[styles.rowContainer, {alignItems: 'flex-start'}]}>
              <Image source={item.blogImage} style={styles.blogImg} />
              <View style={styles.container}>
                <Text
                  style={[
                    styles.title,
                    {color: isDark ? appColors.white : appColors.darkText},
                  ]}>
                  {t(item.title)}
                </Text>
                <View style={[styles.rowContainer, {alignItems: 'flex-start'}]}>
                  <Text style={styles.detail}>{t(item.detail)}</Text>
                  <View style={styles.verticalLine}></View>
                  <Text style={styles.detail}>{t(item.date)}</Text>
                </View>
                <View style={styles.row}>
                  <View style={styles.rowContainer}>
                    <Message />
                    <Text style={styles.message}> {item.totalPost}</Text>
                  </View>
                  <Text style={[styles.detail, {fontSize: windowWidth(3.9)}]}>
                    {' '}
                    - {t(item.author)}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        )}
        ItemSeparatorComponent={() => (
          <View style={styles.itemSeperator}></View>
        )}
      />
    </View>
  );
}
