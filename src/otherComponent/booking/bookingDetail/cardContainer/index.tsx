import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { Star, LeftArrow } from '@utils/icons';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from 'src/navigation/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SocialView } from '../socialView';
import { cardType } from './types';
import appColors from '@theme/appColors';
import { useValues } from '../../../../../App';

type routeProps = NativeStackNavigationProp<RootStackParamList>;

export function CardContainer({
  data,
  contactOptions,
  containerStyle,
}: cardType) {
  const { navigate } = useNavigation<routeProps>();
  const { isDark, t } = useValues();
  return (
    <View>
      {data && (
        <View style={styles.containerStyle}>
          <FlatList
            data={data}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => { }}
                style={[
                  styles.container,
                  containerStyle,
                  {
                    backgroundColor: isDark
                      ? appColors.darkText
                      : appColors.white,
                    borderColor: isDark
                      ? appColors.darkBorder
                      : appColors.border,
                  },
                ]}>
                <View style={styles.providerContainer}>
                  <View style={styles.row}>
                    {item?.image && (
                      <Image source={{ uri: item?.image }} style={styles.userImg} />
                    )}

                    {!item?.image && item.defaultImageValue && (
                      <Image source={item.defaultImageValue} style={styles.userImg} />
                    )}

                    <View style={styles.containerView}>
                      <View style={{ flexDirection: 'row' }}>
                        <Text
                          style={[
                            styles.textStyle,
                            {
                              color: isDark
                                ? appColors.white
                                : isDark
                                  ? appColors.white
                                  : appColors.darkText,
                            },
                          ]}>
                          {t(item.name)}
                        </Text>
                        {item?.rating && (
                          <View style={styles.rating}>
                            <Star height={'23'} width={'14'} />
                            <Text
                              style={[
                                styles.providerRating,
                                {
                                  color: isDark
                                    ? appColors.white
                                    : appColors.darkText,
                                },
                              ]}>
                              {item.rating}
                            </Text>
                          </View>
                        )}
                      </View>
                      {item?.experience && (
                        <Text style={styles.content}>
                          + {item.experience} {t('providerDetail.experience')}
                        </Text>
                      )}
                    </View>
                  </View>
                  {item?.showArrow && (
                    <TouchableOpacity
                      activeOpacity={0.9}
                      onPress={() => { }}>
                      <LeftArrow strokeWidth={'1.4'} />
                    </TouchableOpacity>
                  )}
                </View>
                {contactOptions && <SocialView />}
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  );
}
