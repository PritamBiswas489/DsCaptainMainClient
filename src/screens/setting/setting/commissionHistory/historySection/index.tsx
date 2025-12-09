import {View, FlatList, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {historyData} from './data';
import {styles} from './styles';
import {GlobalStyle} from '@style/styles';
import {HistoryRow} from './historyRow';
import {Arrow} from '@utils/icons';
import appColors from '@theme/appColors';
import {windowWidth} from '@theme/appConstant';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from 'src/navigation/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useValues} from '../../../../../../App';

type routeProps = NativeStackNavigationProp<RootStackParamList>;

export function HistorySection() {
  const {navigate} = useNavigation<routeProps>();
  const {isDark,t} = useValues();
  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={historyData}
        renderItem={({item, index}) => (
          <TouchableOpacity
            activeOpacity={0.9}
            style={[
              styles.container,
              {borderColor: isDark ? appColors.darkBorder : appColors.border},
            ]}
            onPress={() => navigate('BookingDetails')}>
            <View style={styles.innerContainer}>
              <Text style={styles.title}>{t('bookingStatus.bookingId')}</Text>
              <Text style={styles.title}>{t('commissionHistory.date')}</Text>
            </View>
            <View style={[styles.innerContainer, {marginTop: windowWidth(2)}]}>
              <Text style={[styles.title, {color: appColors.primary}]}>
                {'#' + item.bookingId}
              </Text>
              <Text
                style={[
                  styles.title,
                  {color: isDark ? appColors.white : appColors.darkText},
                ]}>
                {t(item.date)}
              </Text>
            </View>
            <View
              style={[
                GlobalStyle.horizontalLine,
                {borderColor: isDark ? appColors.darkBorder : appColors.border},
              ]}
            />
            <View
              style={[
                styles.innerView,
                {
                  backgroundColor: isDark
                    ? appColors.darkTheme
                    : appColors.boxBg,
                  borderColor: isDark ? appColors.darkBorder : appColors.border,
                },
              ]}>
              <HistoryRow
                title={t('commissionHistory.receivedAmount')}
                price={50.78}
                priceStyle={{
                  color: isDark ? appColors.lightText : appColors.darkText,
                }}
              />
              <HistoryRow
                title={t('commissionHistory.adminCommission')}
                price={10.17}
                priceStyle={{color: appColors.error}}
              />
              <HistoryRow
                title={t('commissionHistory.serviceMenCommission')}
                price={25.39}
                priceStyle={{color: appColors.error}}
              />

              <HistoryRow
                title={t('commissionHistory.platformFees')}
                price={15.23}
                priceStyle={{color: appColors.error}}
              />
              <HistoryRow
                title={t('commissionHistory.commission')}
                price={15.23}
                priceStyle={{color: appColors.success}}
              />
            </View>
            <View style={[styles.innerContainer, styles.mainContainer]}>
              <Text style={styles.viewMore}>
                {t('commissionHistory.viewMore')}
              </Text>
              <Arrow color={appColors.primary} width={'18'} height={'20'} />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
