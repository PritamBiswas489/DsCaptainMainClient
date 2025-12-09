import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';
import { GlobalStyle } from '@style/styles';
import { categoriesData } from './data/data';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from 'src/navigation/types';
import { RightArrow } from '@utils/icons';
import { styles } from './styles';
import { useValues } from '../../../../../../App';
import appColors from '@theme/appColors';
import { useDispatch } from 'react-redux';
import { serviceProviderAccountDataActions } from '@src/store/redux/service-provider-account-data.redux';
import { deleteAuthTokens } from '@src/config/auth';
type ItemsProps = NativeStackNavigationProp<RootStackParamList>;
import { logoutClearReduxState } from '@src/services/logout.service';
import { clearValue } from '@src/utils/localstorage';

export default function ItemsList({ isGrid }: { isGrid: boolean }) {
  const { navigate, replace } = useNavigation<ItemsProps>();
  const { isDark, t } = useValues();
  const dispatch = useDispatch()
  const handleNavigation = async (
    screen: string,

  ) => {
    if (screen === 'logoutProcess') {
      clearValue('loggedInUserType')
      const response = await deleteAuthTokens();
      logoutClearReduxState(dispatch)
      replace('AuthNavigation');
    } else if (screen === 'about_us') {
      navigate('ContentPages', { content_key: 'about_us' });
    } else if (screen === 'privacy_policy') {
      navigate('ContentPages', { content_key: 'privacy_policy' });
    } else if (screen === 'terms_and_conditions') {
      navigate('ContentPages', { content_key: 'terms_and_conditions' });
    } else if (screen === 'refund_policy') {
      navigate('ContentPages', { content_key: 'refund_policy' });
    } else {
      // @ts-ignore
      navigate(screen);
    }

  };
  return (
    <View style={[styles.container, isGrid && styles.mainVIew]}>
      <FlatList
        showsVerticalScrollIndicator={!isGrid && false}
        contentContainerStyle={!isGrid && styles.containerStyle}
        data={categoriesData}
        key={isGrid ? 'h' : 'v'}
        numColumns={isGrid ? 4 : 0}
        renderItem={({ item }) =>
          isGrid ? (
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => (item?.goToScreen ? handleNavigation(item?.goToScreen as keyof RootStackParamList) : Alert.alert('Not Working now'))}
              style={[
                !isGrid ? GlobalStyle.mainContainer : null,
                styles.gridStyle,
              ]}>
              <>
                <View
                  style={[
                    styles.iconContainer,
                    {
                      backgroundColor: isDark
                        ? appColors.darkCard
                        : appColors.boxBg,
                    },
                  ]}>
                  {item.icon}
                </View>
                <Text style={[GlobalStyle.title, styles.textStyle]}>
                  {t(item.title)}
                </Text>
              </>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => (item?.goToScreen ? handleNavigation(item?.goToScreen) : Alert.alert('Not Working now'))}>
              <View style={styles.rowContainer}>
                <View style={[styles.row, { alignItems: 'center' }]}>
                  <View
                    style={[
                      styles.iconView,
                      {
                        backgroundColor: isDark
                          ? appColors.darkCard
                          : appColors.boxBg,
                      },
                    ]}>
                    {item.icon}
                  </View>
                  <Text
                    style={[
                      styles.titleStyle,
                      { color: isDark ? appColors.white : appColors.darkText },
                    ]}>
                    {t(item.title)}
                  </Text>
                </View>
                <View>
                  <RightArrow />
                </View>
              </View>
            </TouchableOpacity>
          )
        }
        ItemSeparatorComponent={() =>
          !isGrid && (
            <View
              style={[
                GlobalStyle.horizontalLine,
                styles.separator,
                { borderColor: isDark ? appColors.darkBorder : appColors.border },
              ]}></View>
          )
        }
      />
    </View>
  );
}
