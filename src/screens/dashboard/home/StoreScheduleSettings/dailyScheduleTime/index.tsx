import appColors from '@src/theme/appColors';
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Alert
} from 'react-native';
import { IconButton } from 'react-native-paper';
import ScheduleModal from './ScheduleModal';
import { useValues } from '../../../../../../App';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
import { Schedule as ScheduleInterface } from '@src/interfaces/store/store.profile.interface';
import { compareTimes, convertTo24Hour } from '@src/config/utility';
import { isTimeRangeWithin } from '@src/config/utility';
import { addSchedule, deleteSchedule } from '@src/services/store/schedule.service';
import Toast from 'react-native-toast-message';
import Spinner from 'react-native-loading-spinner-overlay';
import { storeProfileDataActions } from '@src/store/redux/store/store-profile-redux';
import { getAuthUserService as storeAuthService } from '@src/services/store/auth.service';
import { from24To12Hour } from '@src/config/utility';

type FieldsState = {
  [day: string]: { openingTime: string, closingTime: string, scheduleId: number }[];
};

interface Response {
  data: any;
  status: number;
  statusText: string;
  headers: any;
  config: any;
  request?: any;
}

//Daily schedule time
const DailyScheduleTime: React.FC = () => {
  const { stores } = useSelector((state: RootState) => state['storeProfileData'])
  const { schedules } = stores[0]
  const dispatch = useDispatch()
  //days of week
  const daysOfWeek: string[] = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDay, setSelectedDay] = useState('')
  const [processingLoader, setProcessingLoader] = useState(false)

  const { t } = useValues()

  //handle add schedule process
  const handleAddSchedule = async (selectedOpenTime: string, selectedCloseTime: string) => {
    

    const openTime = convertTo24Hour(selectedOpenTime)
    const closeTime = convertTo24Hour(selectedCloseTime)
   
    const resCompareTime = compareTimes(openTime, closeTime)
    if (resCompareTime <= 0) { //compare result two selected
      Alert.alert(t('newDeveloper.invalidTimeRangeSelected'))
      return
    } else {
      //selected range fall into other range 
      const selectedrange = `${openTime}-${closeTime}`
      const ranges = fields[selectedDay].map((d: { openingTime: string, closingTime: string, scheduleId: number }) => `${d.openingTime.slice(0, -3)}-${d.closingTime.slice(0, -3)}`);
      if (isTimeRangeWithin(selectedrange, ranges)) {
        Alert.alert(t('newDeveloper.overlappedError'))
        return
      }
    }
    setProcessingLoader(true)
    const opening_time = `${openTime}:00`
    const closing_time = `${closeTime}:00`
    const formData = new FormData()
    formData.append('opening_time', opening_time)
    formData.append('closing_time', closing_time)
    formData.append('day', daysOfWeek.indexOf(selectedDay))
    const response: Response = await addSchedule(formData)
    if (response?.data?.id) {
      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: response?.data?.message,
      });
      //add new field in current state
      addField(
        selectedDay,
        opening_time,
        closing_time,
        parseInt(response?.data?.id)
      )
      //update profile data
      const responseuser = await storeAuthService()
      if (responseuser?.data?.id) {
        dispatch(storeProfileDataActions.setData(responseuser?.data))
      }
    } else if (response?.data?.errors) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: response?.data?.errors?.[0]?.message,
      });
    } else {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: "Process failed",
      });
    }
    setProcessingLoader(false)
    setModalVisible(false)
  };

  const [fields, setFields] = useState<FieldsState>(
    daysOfWeek.reduce((acc, day) => ({ ...acc, [day]: [] }), {})
  );

  //add field
  const addField = (day: string, openingTime: string, closingTime: string, scheduleId: number): void => {
    setFields((prev) => ({
      ...prev,
      [day]: [...prev[day], { openingTime, closingTime, scheduleId }],
    }));
  };

  //remove schedule
  const removeField = (scheduleId: number, day: string): void => {
    Alert.alert(
      "Confirmation", // Title of the alert
      t('newDeveloper.AreWantToDeleteThisSchedule'), // Message
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"), // Action when Cancel is pressed
          style: "cancel",
        },
        {
          text: "Confirm",
          onPress: () => { //delete schedule
            const cloneFields = { ...fields }
            const updated = cloneFields[day].filter(ele => ele.scheduleId !== scheduleId)
            cloneFields[day] = updated
            setFields(cloneFields)
            deleteSchedule(scheduleId)
            Toast.show({
              type: 'success',
              text1: 'Success',
              text2: t('newDeveloper.successfullyDeleted'),
            });
          },
        },
      ],
      { cancelable: false }
    );
  };

  //handle add schedule time
  const handleAddScheduleTime = (selectedDay: string) => {
    setSelectedDay(selectedDay)
    setModalVisible(true)

  }

  useEffect(() => {
    if (schedules.length > 0) {
      schedules.forEach((scDt: ScheduleInterface, scIndex: number) => {
        const scheduleid = scDt.id
        const openingTime = scDt.opening_time
        const closingTime = scDt.closing_time
        const weekDay = scDt.day
        const checkIndex = fields[daysOfWeek[weekDay]].findIndex(ele => ele.scheduleId === scheduleid)
        if (checkIndex === -1) {
          addField(daysOfWeek[weekDay], openingTime, closingTime, scheduleid)
        }
        //  console.log({scheduleid,openingTime,closingTime,weekDay:daysOfWeek[weekDay]})
      })
    }
  }, [schedules]
  );

  return (
    <>
      <View style={styles.container}>
        {daysOfWeek.map((day) => (
          <View key={day} style={styles.dayContainer}>
            <Text style={styles.dayTitle}>{t(`newDeveloper.${day}`)}</Text>
            {fields[day].map((field, index) => (
              <View key={index} style={styles.fieldRow}>
                <TextInput
                  style={styles.textInput}
                  placeholder={`Select ${day}`}
                  placeholderTextColor={'black'}
                  value={`${from24To12Hour(field.openingTime.slice(0, -3))} - ${from24To12Hour(field.closingTime.slice(0, -3))}`}
                  editable={false}
                />
                <IconButton
                  icon="close"
                  size={20}
                  iconColor="red"
                  onPress={() => removeField(field.scheduleId, day)}
                />
              </View>
            ))}
            <TouchableOpacity style={styles.addButton} onPress={() => handleAddScheduleTime(day)}>
              <Text style={styles.addText}>+ {t('newDeveloper.Add')}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
      <ScheduleModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onAdd={handleAddSchedule}
        day={selectedDay}
      />
      <Spinner
        visible={processingLoader}
        textContent={'Processing.....'}
        textStyle={{ color: '#FFF' }}
      />
    </>

  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  dayContainer: {
    marginBottom: 20,
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 8,
    elevation: 2,
  },
  dayTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  fieldRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  textInput: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
    backgroundColor: '#fff',
    color: appColors.primary
  },
  deleteButton: {
    backgroundColor: '#ff6b6b',
    borderRadius: 5,
    padding: 8,
  },
  deleteText: {
    color: '#fff',
    fontSize: 14,
  },
  addButton: {
    marginTop: 10,
    backgroundColor: appColors.primary,
    borderRadius: 5,
    paddingVertical: 10,
    alignItems: 'center',
  },
  addText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default DailyScheduleTime;

