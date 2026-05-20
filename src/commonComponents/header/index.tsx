import {
  View,
  Text,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';
import {BackArrow, Search} from '@utils/icons';
import {styles} from './styles';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from 'src/navigation/types';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {headerTypes} from './types';
import {windowWidth} from '@theme/appConstant';
import {useValues} from '../../../App';
import appColors from '@theme/appColors';
import Icon from 'react-native-vector-icons/Feather';
import { NotificationVendor } from '@src/screens/notificationVendor';
 
 
import { SubscribeBtn } from '@src/screens/dashboard/service/serviceList/subscribeBtn';

export default function Header({
  title,
  trailIcon,
  trailIcon1,
  circleStyle,
  gotoScreen,
  showBackArrow,
  onTrailIcon,
  content,
  trail1IconContainer,
  containerStyle,
  showSearchBar,
  searchContainerStyle,
  subscribeServiceBtn
}: headerTypes) {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const {isDark, t} = useValues();

  const goToNotification = () => {
    navigation.navigate('NotificationVendor');
  };

  return (
    <View
      style={[
        styles.container,
        containerStyle,
        {
          backgroundColor: isDark ? '#262935' : appColors.boxBg,
          borderColor: isDark ? appColors.darkBorder : appColors.border,
        },
      ]}>
      <View style={styles.rowContainer}>
        <View style={styles.row}>
          {showBackArrow && (
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => navigation.goBack()}
              style={[
                styles.backArrowStyle,
                {
                  backgroundColor: isDark
                    ? appColors.darkText
                    : appColors.white,
                  borderColor: isDark ? appColors.darkBorder : appColors.border,
                  borderWidth: isDark ? 0.1 : 1,
                },
              ]}>
              <BackArrow
                color={isDark ? appColors.white : appColors.darkText}
              />
            </TouchableOpacity>
          )}
          {showSearchBar ? (
            // <SearchBar
            //   containerStyle={[styles.containerStyle, searchContainerStyle]}
            //   searchIcon={<Search />}
            // />
            ''
          ) : (
            <Text
              style={[
                styles.title,
                {color: isDark ? appColors.white : appColors.darkText},
              ]}>
              {t(title)}
            </Text>
          )}
        </View>
        {/* <View style={styles.rowView}>
          {trailIcon && (
            <TouchableOpacity
              onPress={
                gotoScreen as unknown as (event: GestureResponderEvent) => void
              }
              activeOpacity={0.9}
              style={[
                styles.circleView,

                {
                  right: windowWidth(3),
                  backgroundColor: isDark
                    ? appColors.darkCard
                    : appColors.white,
                  borderWidth: isDark ? 0.1 : 1,
                },
                circleStyle,
              ]}>
              {trailIcon}
            </TouchableOpacity>
          )}
        {subscribeServiceBtn}
          {trailIcon1 && (
            <TouchableOpacity
              onPress={
                onTrailIcon as unknown as (event: GestureResponderEvent) => void
              }
              activeOpacity={0.9}
              style={[
                styles.circleView,
                trail1IconContainer,
                {
                  backgroundColor: isDark
                    ? appColors.darkCard
                    : appColors.white,
                  borderWidth: isDark ? 0.1 : 1,
                },
              ]}>
              {trailIcon1 && trailIcon1}
            </TouchableOpacity>
          )}
         
        </View> */}

        <View style={styles.rowView}>

          {/* Bell Icon */}
          <TouchableOpacity
            onPress={goToNotification}
            activeOpacity={0.9}
            style={[
              styles.circleView,
              {
                backgroundColor: isDark
                  ? appColors.darkCard
                  : appColors.white,
                borderWidth: isDark ? 0.1 : 1,
                marginRight: 10,
              },
            ]}>
            <Icon
              name="bell"
              size={20}
              color={isDark ? appColors.white : appColors.darkText}
            />
          </TouchableOpacity>

          {trailIcon && (
            <TouchableOpacity
              onPress={
                gotoScreen as unknown as (event: GestureResponderEvent) => void
              }
              activeOpacity={0.9}
              style={[
                styles.circleView,
                {
                  right: windowWidth(3),
                  backgroundColor: isDark
                    ? appColors.darkCard
                    : appColors.white,
                  borderWidth: isDark ? 0.1 : 1,
                },
                circleStyle,
              ]}>
              {trailIcon}
            </TouchableOpacity>
          )}

          {subscribeServiceBtn}

          {trailIcon1 && (
            <TouchableOpacity
              onPress={
                onTrailIcon as unknown as (event: GestureResponderEvent) => void
              }
              activeOpacity={0.9}
              style={[
                styles.circleView,
                trail1IconContainer,
                {
                  backgroundColor: isDark
                    ? appColors.darkCard
                    : appColors.white,
                  borderWidth: isDark ? 0.1 : 1,
                },
              ]}>
              {trailIcon1 && trailIcon1}
            </TouchableOpacity>
          )}

        </View>
      </View>
      {content && content}
    </View>
  );
}
