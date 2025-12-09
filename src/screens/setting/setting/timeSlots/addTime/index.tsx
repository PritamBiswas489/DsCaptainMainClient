import {View, Text, Modal, ScrollView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import CancelHeader from '@commonComponents/cancelHeader';
import {styles} from './styles';
import {t} from 'i18next';
import {windowHeight} from '@theme/appConstant';
import GradientBtn from '@commonComponents/gradientBtn';
import {useValues} from '../../../../../../App';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';
import {modalProps} from './types';

export function AddTime(props: modalProps) {
  const hours = Array.from({length: 11}, (_, index) => index + 1);
  const minutes = Array.from({length: 59}, (_, index) =>
    (index + 1).toString().padStart(2, '0')
);
  const timeLabels = ['timeSlots.am', 'timeSlots.pm'];
  const {isDark} = useValues();
  const [selectedHour, setSelectedHour] = useState(1);
  const [selectedMinute, setSelectedMinute] = useState(1);
  const [selectedTimeLabels, setSelectedTimeLabels] = useState(
    t('timeSlots.am'),
  );
  return (
    props.showModal && (
      <Modal
        onRequestClose={props.visibleModal}
        visible={true}
        transparent={true}>
        <View style={styles.modalContainer}>
          <View
            style={[
              styles.modalContent,
              {backgroundColor: isDark ? appColors.darkCard : appColors.white},
            ]}>
            <CancelHeader
              gotoScreen={() => props.setTimeModal(false)}
              title="timeSlots.addTime"
            />
            <View style={styles.mainView}>
              <ScrollView
                style={styles.scrollView}
                showsVerticalScrollIndicator={false}>
                {hours.map((hour, index) => (
                  <TouchableOpacity
                    style={styles.textContainer}
                    key={index}
                    activeOpacity={1}
                    onPress={() => {
                      props.setHour(index + 1);
                      setSelectedHour(index + 1);
                    }}>
                    <Text
                      style={[
                        styles.titleStyle,
                        {
                          color:
                            selectedHour == index + 1
                              ? appColors.primary
                              : isDark
                              ? appColors.lightText
                              : appColors.darkText,

                          fontFamily:
                            selectedHour == index + 1
                              ? appFonts.NunitoBold
                              : appFonts.NunitoMedium,
                        },
                      ]}>
                      {hour}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
              <ScrollView
                style={[
                  styles.scrollView,
                  {marginHorizontal: windowHeight(10)},
                ]}
                showsVerticalScrollIndicator={false}>
                {minutes.map((minute, index) => (
                  <TouchableOpacity
                    style={styles.textContainer}
                    key={index}
                    activeOpacity={1}
                    onPress={() => {
                      props.setMinutes(index + 1);
                      setSelectedMinute(index + 1);
                    }}>
                    <Text
                      style={[
                        styles.titleStyle,
                        {
                          color:
                            selectedMinute == index + 1
                              ? appColors.primary
                              : isDark
                              ? appColors.lightText
                              : appColors.darkText,
                          fontFamily:
                            selectedMinute == index + 1
                              ? appFonts.NunitoBold
                              : appFonts.NunitoMedium,
                        },
                      ]}>
                      {minute}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
              <ScrollView
                style={styles.scrollView}
                showsVerticalScrollIndicator={false}>
                {timeLabels.map((time, index) => (
                  <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => setSelectedTimeLabels(t(time))}>
                    <Text
                      key={index}
                      style={[
                        styles.titleStyle,
                        {
                          color:
                            t(time) == selectedTimeLabels
                              ? appColors.primary
                              : isDark
                              ? appColors.lightText
                              : appColors.darkText,
                          fontFamily:
                            t(time) == selectedTimeLabels
                              ? appFonts.NunitoBold
                              : appFonts.NunitoMedium,
                        },
                      ]}>
                      {t(time)}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
            <View style={styles.buttonContainer}>
              <GradientBtn
                additionalStyle={styles.additionalStyle}
                label={'timeSlots.addTime'}
                onPress={() => {
                  props.setTimeModal(false);
                  props.onAddTime();
                }}
              />
            </View>
          </View>
        </View>
      </Modal>
    )
  );
}
