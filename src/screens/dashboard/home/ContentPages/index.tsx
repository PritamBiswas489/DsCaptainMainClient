import React from 'react';
import { View, Text, ScrollView, StyleSheet, ActivityIndicator } from 'react-native';
import appColors from '@src/theme/appColors';
import { useValues } from '../../../../../App';
import Header from '@src/commonComponents/header';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
import { ContentPageDataInterface } from '@src/store/redux/content-pages-redux';
import { decode } from 'html-entities';

const stripHtmlTagsAndDecodeEntities = (html: string) => {
  const decodedHtml = decode(html);
  return decodedHtml.replace(/<\/?[^>]+>/gi, '');
};
export default function ContentPages({ route }: any) {
  const contentKey: keyof ContentPageDataInterface = route?.params?.content_key;
  const { isDark } = useValues()
  const contentArr = useSelector((state: RootState) => state['contentPages'])

  return (
    <ScrollView style={[styles.container, { backgroundColor: isDark ? appColors.darkTheme : appColors.white }]}>
      <Header
        title={`newDeveloper.${contentKey}`}
        showBackArrow={true}
      />
      <View style={{ padding: 16 }}>
        <Text style={[styles.content, { color: isDark ? appColors.white : appColors.darkText }]}>{stripHtmlTagsAndDecodeEntities(contentArr[contentKey])}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,

  },
  content: {
    fontSize: 18,
    lineHeight: 24,
  },
});


