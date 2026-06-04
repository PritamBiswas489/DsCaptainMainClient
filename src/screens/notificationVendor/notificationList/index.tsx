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
    <View>
      <FlatList
        data={notificationList}
        showsVerticalScrollIndicator={false}
        // renderItem={({ item }) => (
        //   <View>
        //     <View style={styles.containerStyle}>
        //       <View>
        //         <View style={styles.row}>
        //           <Text
        //             style={[
        //               styles.title,
        //               {
        //                 color: isDark
        //                   ? appColors.white
        //                   : appColors.darkText,
        //                 fontFamily: appFonts.NunitoBold,
        //               },
        //             ]}>
        //             {t(item.title)}
        //           </Text>


        //         </View>
        //         <View style={styles.row}>
        //           <View
        //             style={[
        //               styles.dot,
        //               {
        //                 backgroundColor: isDark
        //                   ? appColors.white
        //                   : appColors.darkText,
        //               },
        //             ]}></View>
        //           <Text
        //             style={[
        //               styles.time,
        //               {
        //                 color: isDark
        //                   ? appColors.white
        //                   : appColors.darkText,
        //               },
        //             ]}>
        //             {(item.date)}   {item.time}
        //           </Text>

        //         </View>

        //         <View>
        //           <Text
        //             style={[
        //               styles.content,
        //               {
        //                 color: isDark
        //                   ? appColors.white
        //                   : appColors.darkText,
        //               },
        //             ]}>
        //             {t(item.description)}
        //           </Text>
        //           {item.image_full_url && (
        //             <Image source={{ uri:`${item.image_full_url}`}} style={styles.image} />
        //           )}
        //         </View>
        //       </View>
        //     </View>
        //   </View>
        // )}
        renderItem={({ item }) => (
  <TouchableOpacity
    activeOpacity={item.order_id ? 0.7 : 1}
    onPress={() => {
      if (item.order_id && item.order_id !== '') {
        navigateToOrderDetailsPage(item.order_id);
      }
    }}
  >
    <View style={styles.containerStyle}>
      <View>
        <View style={styles.row}>
          <Text
            style={[
              styles.title,
              {
                color: isDark ? appColors.white : appColors.darkText,
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
            ]}
          />
          <Text
            style={[
              styles.time,
              {
                color: isDark
                  ? appColors.white
                  : appColors.darkText,
              },
            ]}>
            {item.date} {item.time}
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

          {item.image_full_url && (
            <Image
              source={{ uri: item.image_full_url }}
              style={styles.image}
            />
          )}
        </View>
      </View>
    </View>
  </TouchableOpacity>
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
