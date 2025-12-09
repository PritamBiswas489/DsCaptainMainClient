import appColors from '@src/theme/appColors';
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Alert
} from 'react-native';
import {  IconButton } from 'react-native-paper';
import ScheduleModal from './ScheduleModal';

import { useValues } from '../../../../../../App';


type FieldsState = {
  [day: string]: string[];
};

const DailyScheduleTime: React.FC = () => {
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
  const [selectedDay,setSelectedDay] =  useState('')

  const {t} = useValues()

  const handleAddSchedule = (openTime: string, closeTime: string) => {
     
     addField(selectedDay,`${openTime} - ${closeTime}`)
  };

  const [fields, setFields] = useState<FieldsState>(
    daysOfWeek.reduce((acc, day) => ({ ...acc, [day]: [] }), {})
  );

  const addField = (day: string,value:string): void => {
    setFields((prev) => ({
      ...prev,
      [day]: [...prev[day], value],
    }));
  };

  const updateField = (day: string, index: number, value: string): void => {
    const updatedFields = [...fields[day]];
    updatedFields[index] = value;
    setFields((prev) => ({
      ...prev,
      [day]: updatedFields,
    }));
  };

  const removeField = (day: string, index: number): void => {
    const updatedFields = fields[day].filter((_, i) => i !== index);
    setFields((prev) => ({
      ...prev,
      [day]: updatedFields,
    }));
  };

   //handle add schedule time
  const handleAddScheduleTime = (selectedDay:string)=>{
      setSelectedDay(selectedDay)
      setModalVisible(true)
  }

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
                value={field}
                editable={false}
                onChangeText={(value) => updateField(day, index, value)}
              />
              <IconButton
                            icon="close"
                            size={20}
                            iconColor="red"
                            onPress={() => removeField(day, index)}
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
    color:appColors.primary
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
