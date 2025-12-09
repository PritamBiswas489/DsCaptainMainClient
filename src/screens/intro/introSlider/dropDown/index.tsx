import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {styles} from './styles';
import {Dropdown} from '@utils/icons';
import {english} from '@utils/images';
import {windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import {CountryDataItemType, CountryDataProps} from '../data/types';
import {useValues} from '../../../../../App';
import {useTranslation} from 'react-i18next';
import {setValue} from '@utils/localstorage';

export default function CustomDropDown({countryData}: CountryDataProps) {
  const {isDark,t} = useValues();
  const [defaultLang, setDefaultLang] = useState(t('introSlider.english'));
  const [defaultFlag, setDefaultFlag] = useState(english);
  const [showOption, setShowOption] = useState(false);

  const {i18n} = useTranslation();

  const toggleDropDown = () => {
    setShowOption(!showOption);
  };
  const onItem = (item: CountryDataItemType) => {
    setDefaultLang(t(item.name));
    setDefaultFlag(item.country);
    setShowOption(!showOption);
    i18n.changeLanguage(item.code);
    setValue('languageCode', item.code);
  };

  return (
    <View style={styles.topView}>
      <View style={styles.mainRow}>
        <View>
          <TouchableOpacity
            activeOpacity={0.9}
            style={[
              styles.row,
              {
                backgroundColor: isDark ? appColors.darkTheme : appColors.white,
                borderColor: isDark ? appColors.darkBorder : appColors.border,
              },
            ]}
            onPress={toggleDropDown}>
            <Image source={defaultFlag} style={styles.img} />
            <Text
              style={[
                styles.textStyle,
                {color: isDark ? appColors.white : appColors.darkText},
              ]}>
              {defaultLang}
            </Text>
            <View style={styles.dropDownView}>
              <Dropdown color={isDark ? appColors.white : appColors.darkText} />
            </View>
          </TouchableOpacity>
          {showOption && (
            <View>
              {countryData.map((item: CountryDataItemType, key) => {
                return (
                  <View
                    key={key}
                    style={[
                      styles.modalView,
                      {
                        backgroundColor: isDark
                          ? appColors.darkTheme
                          : appColors.white,
                      },
                    ]}>
                    <TouchableOpacity
                      onPress={() => {
                        onItem(item);
                      }}
                      style={[
                        styles.countryView,
                        {
                          backgroundColor: isDark
                            ? appColors.darkTheme
                            : appColors.white,
                        },
                      ]}>
                      <Image
                        source={item.country}
                        style={[styles.img, {right: windowWidth(4)}]}
                      />
                      <Text style={styles.textStyle}>{t(item.name)}</Text>
                    </TouchableOpacity>
                  </View>
                );
              })}
            </View>
          )}
        </View>
      </View>
    </View>
  );
}
