import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { styles } from '../styles';
import { notificationList } from './data';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import { GlobalStyle } from '@style/styles';
import { useValues } from '../../../../App';
import { NotificationsInterface } from '@src/interfaces/notificationsInterface';
import { getMediaUrl } from '@src/config/utility';


export default function NotificationList({ listing: notificationList }: { listing: NotificationsInterface[] }) {
  const { isDark, t } = useValues();
  return (
    <View>
      <FlatList
        data={notificationList}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View>
            <View style={styles.containerStyle}>
              <View>
                <View style={styles.row}>
                  <Text
                    style={[
                      styles.title,
                      {
                        color: isDark
                          ? appColors.white
                          : appColors.darkText,
                        fontFamily: appFonts.NunitoBold,
                      },
                    ]}>
                    {t(item.title)}
                  </Text>


                </View>
                <View style={styles.row}>
                  <View
                    style={[
                      styles.dot,
                      {
                        backgroundColor: isDark
                          ? appColors.white
                          : appColors.darkText,
                      },
                    ]}></View>
                  <Text
                    style={[
                      styles.time,
                      {
                        color: isDark
                          ? appColors.white
                          : appColors.darkText,
                      },
                    ]}>
                    {(item.date)}   {item.time}
                  </Text>

                </View>

                <View>
                  <Text
                    style={[
                      styles.content,
                      {
                        color: isDark
                          ? appColors.white
                          : appColors.darkText,
                      },
                    ]}>
                    {t(item.description)}
                  </Text>
                  {item.cover_image && (
                    <Image source={{ uri: `${getMediaUrl()}/push-notification/${item.cover_image}` }} style={styles.image} />
                  )}
                </View>
              </View>
            </View>
          </View>
        )}
        ItemSeparatorComponent={() => (
          <View
            style={[
              GlobalStyle.horizontalLine,
              { borderColor: isDark ? appColors.darkBorder : appColors.border },
            ]}></View>
        )}
      />
    </View>
  );
}
