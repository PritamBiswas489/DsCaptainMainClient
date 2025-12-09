import React from 'react';
import {View, Text, FlatList, TouchableOpacity, TextInput} from 'react-native';
import {styles} from '../styles';
import {GlobalStyle} from '@style/styles';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {Person} from '@utils/icons';
import {useValues} from '../../../../../App';

interface props {
  numberService: number;
  setNumberService: React.Dispatch<React.SetStateAction<number>>;
}
export function ExtraService({numberService, setNumberService}: props) {
  const handleNumPerson = (itemId: number) => {
    setNumberService(itemId);
  };
  const persons = Array.from({length: 7}, (_, index) => {
    if (index < 6) {
      return index + 1;
    } else {
      return `${'6+'}`;
    }
  });
  const {isDark,t} = useValues();
  return (
    <View style={styles.mainContainer}>
      <Text
        style={[
          styles.title,
          {color: isDark ? appColors.white : appColors.black},
        ]}>
        {t('addExtraCharges.extraServiceDone')}
      </Text>
      <FlatList
        data={persons}
        horizontal
        renderItem={({item, index}) => (
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => handleNumPerson(index + 1)}
            style={styles.container}>
            <View
              style={[
                GlobalStyle.circleView,
                {
                  backgroundColor:
                    index + 1 == numberService
                      ? appColors.primary
                      : isDark
                      ? appColors.darkTheme
                      : appColors.boxBg,
                  borderColor: isDark ? appColors.darkBorder : appColors.border,
                  borderWidth: 1,
                },
              ]}>
              <Text
                style={[
                  GlobalStyle.title,
                  {
                    fontFamily: appFonts.NunitoMedium,
                    color:
                      index + 1 === numberService
                        ? appColors.white
                        : isDark
                        ? appColors.white
                        : appColors.darkText,
                  },
                ]}>
                {item}
              </Text>
            </View>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator}></View>}
      />
      {numberService === 7 && (
        <View style={styles.inputContainer}>
          <Person width={'17'} height={'17'} color={appColors.lightText} />
          <TextInput
            keyboardType={'numeric'}
            style={styles.textInput}
            placeholder={t('addExtraCharges.extraServiceDone')}
            placeholderTextColor={appColors.darkText}
          />
        </View>
      )}
    </View>
  );
}
