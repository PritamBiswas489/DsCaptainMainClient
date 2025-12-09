import {StatusBar, Text, View, TouchableOpacity} from 'react-native';
import {MultiSelect} from 'react-native-element-dropdown';
import React, {useState} from 'react';
import {Cross, State} from '@utils/icons';
import {styles} from './styles';
import {languageData} from './data/data';
import {useValues} from '../../../App';
import appColors from '@theme/appColors';

export default function MultiSelectionDrodpwn() {
  const [selected, setSelected] = useState<any>([]);
  const {isDark,t} = useValues();
  const renderDataItem = (item: any) => {
    return (
      <View
        style={[
          styles.item,
          {backgroundColor: isDark ? appColors.darkCard : appColors.white},
        ]}>
        <Text style={styles.selectedTextStyle}>{t(item.label)}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <MultiSelect
        style={[
          styles.dropdown,
          {backgroundColor: isDark ? appColors.darkText : appColors.boxBg},
        ]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={[
          styles.inputSearchStyle,
          {backgroundColor: isDark ? appColors.darkCard : appColors.white},
        ]}
        iconStyle={styles.iconStyle}
        data={languageData}
        labelField="label"
        valueField="value"
        placeholder={t('auth.selectLanguage')}
        value={selected}
        search
        searchPlaceholder="Search..."
        onChange={item => {
          setSelected(item);
        }}
        renderLeftIcon={() => (
          <View style={styles.iconView}>
            <State width={'29'} />
          </View>
        )}
        renderItem={renderDataItem}
        renderSelectedItem={(item, unSelect) => (
          <TouchableOpacity
            style={styles.innerContainer}
            activeOpacity={0.9}
            onPress={() => unSelect && unSelect(item)}>
            <View
              style={[
                styles.selectedStyle,
                {
                  backgroundColor: isDark
                    ? appColors.darkText
                    : appColors.white,
                },
              ]}>
              <Text
                style={[
                  styles.textSelectedStyle,
                  {color: isDark ? appColors.white : appColors.lightText},
                ]}>
                {t(item.label)}
              </Text>
              <Cross height={'15'} width={'15'} />
            </View>
          </TouchableOpacity>
        )}
      />
      <StatusBar />
    </View>
  );
}
