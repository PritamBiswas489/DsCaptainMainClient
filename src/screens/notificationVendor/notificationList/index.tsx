import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { styles } from '../styles';
import { notificationList } from './data';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import { GlobalStyle } from '@style/styles';
import { useValues } from '../../../../App';
import { NotificationsInterface } from '@src/interfaces/store/notifications.interface';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@src/navigation/types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { windowHeight, windowWidth } from '@theme/appConstant';

type routeProps = NativeStackNavigationProp<RootStackParamList>;
export default function NotificationList({ listing: notificationList }: { listing: NotificationsInterface[] }) {
  const { isDark, t } = useValues();
  const { navigate } = useNavigation<routeProps>();

  const navigateToOrderDetailsPage = (OrderId: number | string) => {
    navigate('StoreOrderDetails', {
      OrderId: String(OrderId),
    });
  };
  
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={notificationList}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={item.order_id ? 0.7 : 1}
            onPress={() => {
              if (item.order_id && item.order_id !== '') {
                navigateToOrderDetailsPage(item.order_id);
              }
            }}
          >
            <View style={[styles.notificationCard, isDark && styles.notificationCardDark]}>
              {/* Card Header */}
              <View 
                style={[
                  styles.cardHeader,
                  { borderBottomColor: isDark ? appColors.darkBorder : appColors.border }
                ]}
              >
                <View style={styles.headerLeft}>
                  <Text
                    style={[
                      styles.notificationTitle,
                      {
                        color: isDark ? appColors.white : appColors.darkText,
                      },
                    ]}
                    numberOfLines={1}
                  >
                    {t(item.title)}
                  </Text>
                  <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: windowHeight(0.4) }}>
                    <Icon 
                      name="clock-outline" 
                      size={14} 
                      color={isDark ? appColors.darkBorder : appColors.darkBorder}
                      style={{ marginRight: windowWidth(1) }}
                    />
                    <Text
                      style={[
                        styles.notificationTime,
                        {
                          color: isDark ? appColors.darkBorder : appColors.darkBorder,
                        },
                      ]}
                    >
                      {item.date} • {item.time}
                    </Text>
                  </View>
                </View>
                
                {/* Status Badge */}
                {/* <View 
                  style={[
                    styles.statusBadge,
                    { backgroundColor: appColors.primary }
                  ]}
                >
                  <Text style={styles.statusBadgeText}>NEW</Text>
                </View> */}
              </View>

              {/* Card Body */}
              <View style={styles.cardBody}>
                <Text
                  style={[
                    styles.notificationDescription,
                    {
                      color: isDark ? appColors.white : appColors.darkText,
                    },
                  ]}
                  numberOfLines={3}
                >
                  {t(item.description)}
                </Text>

                {/* Professional Image Display */}
                {item.image_full_url && (
                  <View style={[
                    styles.imageContainer,
                    { borderColor: isDark ? appColors.darkBorder : appColors.border }
                  ]}>
                    <Image
                      source={{ uri: item.image_full_url }}
                      style={styles.notificationImage}
                    />
                  </View>
                )}
              </View>
            </View>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => (
          <View style={{ height: windowHeight(0.3), backgroundColor: 'transparent' }} />
        )}
        contentContainerStyle={{ paddingVertical: windowHeight(1) }}
        scrollEnabled
      />
    </View>
  );
}
