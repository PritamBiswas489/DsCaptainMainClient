import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useValues } from '../../../../../../App';
import { styles } from './styles';
import appFonts from '@theme/appFonts';
import { fontSizes, windowWidth } from '@theme/appConstant';
import { Booked } from '@assets/icons/home/booked';
import { Star } from '@utils/icons';
import SwitchContainer from '@otherComponent/switchContainer';
import { popularServiceType } from './types';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from 'src/navigation/types';
import appColors from '@theme/appColors';
import { getMediaUrl, limitWords } from '@src/config/utility';


type routeProps = NativeStackNavigationProp<RootStackParamList>;

export default function RenderItem({
  item,
  index,
  toggleSwitch,
  providerImageStyle,
}: popularServiceType) {
  const { currSymbol, currValue } = useValues();
  const { isDark, t } = useValues();
  const { navigate } = useNavigation<routeProps>();
  
  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => navigate('ServiceDetail', { id: item.id })}
        style={[
          styles.providerBg,
          {
            backgroundColor: isDark ? appColors.darkCardBg : appColors.white,
            borderColor: isDark ? appColors.darkBorder : appColors.border,
          },
        ]}>
        {item.cover_image && (
          <Image
            source={{ uri: `${getMediaUrl()}/service/${item.cover_image}` }}
            style={[styles.providerImg, providerImageStyle]}
          />
        )}
        <View style={styles.providerRow}>
          <Text
            style={[
              styles.textStyle,
              { color: isDark ? appColors.white : appColors.darkText },
            ]}>
            {limitWords(item.name, 3)}
          </Text>
          <Text
            style={[
              styles.textStyle,
              {
                fontFamily: appFonts.NunitoExtraBold,
                fontSize: fontSizes.FONT4HALF,
                color: isDark ? appColors.white : appColors.darkText,
              },
            ]}>
            {' '}
            {currSymbol}
            {currValue * item.min_bidding_price}
          </Text>
        </View>
        <View style={[styles.providerRow, { marginTop: windowWidth(2) }]}>
          <View style={styles.row}>
            <Booked width={'16'} height={'20'} />
            <Text style={styles.totalBooked}>
              {' '}
              {item.order_count}
              {t('home.booked')}
            </Text>
          </View>
          {item.avg_rating > 0 && (
            <View style={styles.row}>
              <Star height={'13'} width={'12'} />
              <Text
                style={[
                  styles.rate,
                  { color: isDark ? appColors.white : appColors.darkText },
                ]}>
                {item.avg_rating.toFixed(1)}
              </Text>
            </View>
          )}
        </View>
        <View
          style={[
            styles.categoryView,
            { backgroundColor: isDark ? appColors.darkTheme : appColors.boxBg },
          ]}>
          <View style={styles.providerRow}>
            <Text style={styles.totalBooked}>{t('home.category')}</Text>
            <Text
              style={[
                styles.textStyle,
                { color: isDark ? appColors.white : appColors.darkText },
              ]}>
              {t(item.category)}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      
    
    </View>
  );
}

 