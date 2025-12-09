import React from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {windowHeight, windowWidth} from '@theme/appConstant';
import {GlobalStyle} from '@style/styles';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from 'src/navigation/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {latestBlogData} from '../data';
import { useValues } from '../../../../../../App';
export type BlogListProps = NativeStackNavigationProp<RootStackParamList>;

export function BlogList() {
  const {navigate} = useNavigation<BlogListProps>();
  const {isDark,t} = useValues()
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.contentContainerStyle}
        data={latestBlogData}
        renderItem={({item}) => (
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => navigate('BlogDetail', {blogData: item})}
            style={[styles.blogContainer,{ backgroundColor: isDark ? appColors.darkText : appColors.boxBg, borderWidth: isDark ? 0 : 1.2}]}>
            <View style={styles.rowContainer}>
              <Image source={item.blogImage} style={styles.blogImg} />
              <View style={styles.textContainer}>
                <Text numberOfLines={1} style={[styles.title,{ color: isDark ? appColors.white : appColors.darkText}]}>
                  {t(item.title)}
                </Text>
                <View style={[styles.rowContainer, {marginTop: 0.7}]}>
                  <View
                    style={[
                      GlobalStyle.dot,
                      {
                        marginTop: windowHeight(1.2),
                        backgroundColor: appColors.primary,
                      },
                    ]}></View>
                  <Text
                    style={[
                      styles.detail,
                      {
                        color: appColors.primary,
                        fontSize: windowWidth(3.7),
                      },
                    ]}>
                    {t(item.designation)}
                  </Text>
                  <View style={styles.verticalLine}></View>
                  <Text
                    style={[
                      styles.detail,
                      {fontFamily: appFonts.NunitoSemiBold},
                    ]}>
                    {t(item.workType)}
                  </Text>
                </View>
                <View style={styles.row}>
                  <View>
                    <Text
                      style={[
                        styles.detail,
                        {
                          fontSize: windowWidth(3.8),
                          fontFamily: appFonts.NunitoMedium,
                        },
                      ]}>
                      {t(item.date)}
                    </Text>
                  </View>
                  <Text
                    style={[
                      styles.detail,
                      {
                        fontSize: windowWidth(3.9),
                      },
                    ]}>
                    {' '}
                    - {t(item.author)}
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => (
          <View style={styles.itemSeparator}></View>
        )}
      />
    </View>
  );
}
