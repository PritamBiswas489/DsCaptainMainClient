import {View} from 'react-native';
import React from 'react';
import {GlobalStyle} from '@style/styles';
import Header from '@commonComponents/header';
import {BlogList} from './blogLIst/blogList';
import { useValues } from '../../../../../App';
import appColors from '@theme/appColors';

export function LatestBlog() {
  const {isDark} = useValues()
  return (
    <View style={[GlobalStyle.mainView,{backgroundColor : isDark ? appColors.darkCard : appColors.white}]}>
      <Header showBackArrow={true} title="blogArr.latestBlog" />
      <BlogList />
    </View>
  );
}
