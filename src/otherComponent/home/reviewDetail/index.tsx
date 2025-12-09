import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { styles } from './styles';
import { Star } from '@utils/icons';
import { reviewData } from './data';
import { ReviewType } from './data/types';
import { useValues } from '../../../../App';
import appColors from '@theme/appColors';
import { windowHeight } from '@theme/appConstant';
import { Item } from 'react-native-paper/lib/typescript/components/Drawer/Drawer';
import { maleDefault, femaleDefault } from '@src/utils/images';


export function ReviewDetail({ data }: { data?: ReviewType[] }) {
  const { isDark, t } = useValues();
  return (
    <View
      style={[
        styles.reviewsBg,
        {
          backgroundColor: isDark ? appColors.darkTheme : appColors.white,
          borderWidth: isDark ? 0.1 : 1,
          borderRadius: isDark ? windowHeight(0.2) : windowHeight(1.8),
        },
      ]}>
      <FlatList
        data={data ? data : reviewData}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          const defaultImageValue = item.gender !== 'female' ? femaleDefault : maleDefault

          return <View>
            <View style={styles.providerContainer}>
              <View style={[styles.row]}>
                {item.userImage ? <Image source={{ uri: item.userImage }} style={styles.userImg} /> : <Image source={defaultImageValue} style={styles.userImg} />}
                <View style={styles.textContainer}>
                  <Text
                    style={[
                      styles.textStyle,
                      { color: isDark ? appColors.white : appColors.darkText },
                    ]}>
                    {t(item.userName)}
                  </Text>
                  <Text style={styles.content}>
                    {item.timing}
                  </Text>
                </View>
              </View>
              <View style={styles.ratingView}>
                <Star height={'20'} width={'14'} />
                <Text
                  style={[
                    styles.providerRating,
                    { color: isDark ? appColors.white : appColors.darkText },
                  ]}>
                  {item.rating}
                </Text>
              </View>
            </View>
            <Text
              style={[
                styles.review,
                { color: isDark ? appColors.lightText : appColors.darkText },
              ]}>
              {t(item.reviewText)}
            </Text>
            {item.servicename && (
              <View style={styles.row}>
                <Text style={styles.service}>{t('packages.service')}:</Text>
                <Text style={styles.name}>{t(item.servicename)}</Text>
              </View>
            )}
          </View>
        }}
        ItemSeparatorComponent={() => (
          <View
            style={[
              styles.horizontalLine,
              { borderColor: isDark ? appColors.darkBorder : appColors.border },
            ]}></View>
        )}
      />
    </View>
  );
}
