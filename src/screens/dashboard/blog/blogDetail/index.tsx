import React from 'react';
import {View, Image, ScrollView, Text} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RootStackParamList} from 'src/navigation/types';
import Header from '@commonComponents/header';
import {GlobalStyle} from '@style/styles';
import {fontSizes, windowHeight} from '@theme/appConstant';
import appFonts from '@theme/appFonts';
import {styles} from './styles';
import { useValues } from '../../../../../App';
import appColors from '@theme/appColors';

type blogDetailRouteProp = RouteProp<RootStackParamList, 'BlogDetail'>;

export function BlogDetail() {
  const {params} = useRoute<blogDetailRouteProp>();
  var blogData = params?.blogData;
  const {isDark,t} = useValues()
  return (
    <View style={[GlobalStyle.mainView,{ backgroundColor: isDark ? appColors.darkTheme : appColors.white,}]}>
      <Header showBackArrow={true} title="blogArr.blogDetail" />
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View>
            <Image source={blogData.blogImage} style={styles.image} />
            <View style={styles.categoryView}>
              <Text style={styles.category}>{t(blogData.designation)}</Text>
            </View>
          </View>
          <View style={styles.containerView}>
            <Text style={[styles.title,{  color: isDark ? appColors.white : appColors.darkText}]}>
              {t(blogData.title)} <Text> </Text>
              <Text style={[styles.detail, styles.content]}>
                - {t(blogData.author)}
              </Text>
            </Text>
            <View style={[styles.rowContainer, {marginTop: windowHeight(1)}]}>
              <Text style={[styles.detail, styles.content]}>
                {t(blogData.workType)}
              </Text>
              <View style={[styles.verticalLine,{borderColor: isDark ? appColors.darkBorder : appColors.border}]}></View>
              <Text
                style={[
                  styles.detail,
                  {
                    marginTop: 3,
                    fontFamily: appFonts.NunitoRegular,
                    fontSize: fontSizes.FONT3HALF,
                  },
                ]}>
                {t(blogData.date)}
              </Text>
            </View>
            <View style={[GlobalStyle.horizontalLine,{ borderColor: isDark ? appColors.darkBorder : appColors.border}]}></View>
            <View style={styles.containerView}>
              <Text style={[styles.description,{color: isDark ? appColors.white : appColors.darkText}]}>{t('common.description')}</Text>
            </View>
            <View style={styles.containerView}>
              <Text style={[styles.blogContent,{color : isDark ? appColors.lightText : appColors.darkText}]}>{t('blogArr.blogContent')}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
