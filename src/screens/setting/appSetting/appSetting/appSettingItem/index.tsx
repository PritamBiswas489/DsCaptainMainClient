import {View, FlatList, Text, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import {styles} from './styles';
import {profileSettingData} from './data/data';
import {RightArrow} from '@utils/icons';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from 'src/navigation/types';
import SwitchContainer from '@otherComponent/switchContainer';
import {useValues} from '../../../../../../App';
import appColors from '@theme/appColors';
import {getValue, setValue} from '@utils/localstorage';

type routeProps = NativeStackNavigationProp<RootStackParamList>;

export function AppSettingItem() {
  const {navigate} = useNavigation<routeProps>();
  const {isDark, setIsDark,t,notificationSound,setNotificationSound} = useValues();
  

  const changeTheme = () => {
    const val = !isDark;
    setIsDark(val);
    setValue('darkTheme', val.toString());
  };

  const changeNotificationSound = () =>{
    const val = !notificationSound;
    setNotificationSound(val)
    setValue('notificationSound', val.toString());
  }

  useEffect(() => {
    getTheme();
    getNotitifcationSound();
  }, []);

  const getTheme = async () => {
    getValue('darkTheme')
      .then(res => {
        if (res !== null) {
          return JSON.parse(res);
        } else {
          return false;
        }
      })
      .then(val => {
        setIsDark(val); 
      });
  };

  const getNotitifcationSound = async () =>{
    getValue('notificationSound').then(res => {
        if (res !== null) {
          return JSON.parse(res);
        } else {
          return true;
        }
    })
    .then(val => {
        setNotificationSound(val);
    });

  }

  return (
    <View style={styles.container}>
      <FlatList
        data={profileSettingData}
        renderItem={({item, index}) => (
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => item.gotoScreen && navigate(item.gotoScreen)}>
            <View style={styles.rowContainer}>
              <View style={styles.row}>
                <View
                  style={[
                    styles.iconContainer,
                    {
                      backgroundColor: isDark
                        ? appColors.darkCardBg
                        : appColors.boxBg,
                      borderColor: isDark
                        ? appColors.darkBorder
                        : appColors.border,
                    },
                  ]}>
                  {isDark ? item.darkIcon : item.icon}
                </View>
                <View>
                  <Text
                    style={[
                      styles.name,
                      {color: isDark ? appColors.white : appColors.darkText},
                    ]}>
                    {t(item.name)}
                  </Text>
                  {item.subTitle && (
                    <Text
                      style={[
                        styles.subText,
                        {
                          color: isDark
                            ? appColors.darkSubText
                            : appColors.lightText,
                        },
                      ]}>
                      {t(item.subTitle)}
                    </Text>
                  )}
                </View>
              </View>
              {item.showArrowIcon ? (
                <RightArrow />
              ) : (
                <SwitchContainer
                  toggleDarkSwitch={() =>
                    index == 0 ? changeTheme() : changeNotificationSound()
                  }
                  switchOn={index == 0 ? isDark : notificationSound}
                />
              )}
            </View>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => (
          <View
            style={[
              styles.separator,
              {borderColor: isDark ? appColors.darkBorder : appColors.boxBg},
            ]}></View>
        )}
      />
    </View>
  );
}
