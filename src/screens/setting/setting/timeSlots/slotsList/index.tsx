import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {styles} from './styles';
import SwitchContainer from '@otherComponent/switchContainer';
import appColors from '@theme/appColors';
import {useValues} from '../../../../../../App';
import {propsType} from './data/types';

export function SlotsList({
  setTimeModal,
  hour,
  minutes,
  data,
  toggleSwitch,
  setId,
  setIndex,
  setIsStart,
}: propsType) {
  const {t, isDark} = useValues();
  const onAddTime = (id: number, isStart: boolean, index: number) => {
    setTimeModal(true);
    setId(id);
    setIsStart(isStart);
    setIndex(index);
  };
  useEffect(() => {}, [hour, minutes]);

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={data}
      renderItem={({item, index}) => (
        <View
          style={[
            styles.container,
            {
              backgroundColor: isDark ? appColors.darkCard : appColors.boxBg,
              borderColor: isDark ? appColors.darkBorder : appColors.border,
            },
          ]}>
          <View style={styles.rowContainer}>
            <Text
              style={[
                styles.day,
                {color: isDark ? appColors.white : appColors.darkText},
              ]}>
              {t(item.day)}
            </Text>
            <SwitchContainer
              toggleDarkSwitch={() => toggleSwitch(index)}
              switchOn={item.status}
              containerStyle={{marginTop: 0}}
            />
          </View>
          <View style={styles.rowContainer}>
            {item.startAt.map(
              (startAt: {hour: string; minutes: string}, index1: number) => (
                <View key={index1}>
                  <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => {
                      index === item.id &&
                        item.status &&
                        onAddTime(item.id, true, index1);
                    }}
                    style={[
                      styles.timeContainer,
                      {
                        backgroundColor:
                          index === item.id && item.status
                            ? isDark
                              ? appColors.darkCard
                              : appColors.white
                            : isDark
                            ? appColors.darkText
                            : appColors.border,
                        borderColor: isDark
                          ? appColors.darkBorder
                          : appColors.border,
                      },
                    ]}>
                    <Text
                      style={[
                        styles.time,
                        {color: isDark ? appColors.white : appColors.darkText},
                      ]}>
                      {index === item.id && item.status
                        ? startAt.hour + ':' + startAt.minutes
                        : ' - '}{' '}
                    </Text>
                  </TouchableOpacity>
                </View>
              ),
            )}

            {item.endAt.map(
              (endAt: {hour: string; minutes: string}, index2: number) => (
                <View key={index2}>
                  <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => {
                      index === item.id &&
                        item.status &&
                        onAddTime(item.id, false, index2);
                    }}
                    style={[
                      styles.timeContainer,
                      {
                        backgroundColor:
                          index === item.id && item.status
                            ? isDark
                              ? appColors.darkCard
                              : appColors.white
                            : isDark
                            ? appColors.darkText
                            : appColors.border,
                        borderColor: isDark
                          ? appColors.darkBorder
                          : appColors.border,
                      },
                    ]}>
                    <Text
                      style={[
                        styles.time,
                        {color: isDark ? appColors.white : appColors.darkText},
                      ]}>
                      {index === item.id && item.status
                        ? endAt.hour + ':' + endAt.minutes
                        : ' - '}{' '}
                    </Text>
                  </TouchableOpacity>
                </View>
              ),
            )}
          </View>
        </View>
      )}
    />
  );
}
