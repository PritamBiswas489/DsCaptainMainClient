import appColors from '@src/theme/appColors';
import React, { useState } from 'react';
import {
    Modal,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Alert,
} from 'react-native';
import { useValues } from '../../../../../../../App';
import TimepickerSelectTimeTwentyFourHours from '@src/commonComponents/timepickerSelectTimeTwentyFourHours';

interface ScheduleModalProps {
    visible: boolean;
    onClose: () => void;
    onAdd: (openTime: string, closeTime: string) => void;
    day: string;
}

const ScheduleModal: React.FC<ScheduleModalProps> = ({
    visible,
    onClose,
    onAdd,
    day,
}) => {
    const [openTime, setOpenTime] = useState<string>('');
    const [closeTime, setCloseTime] = useState<string>('');

    const handleAdd = () => {
        onAdd(openTime, closeTime);
        setOpenTime('');
        setCloseTime('');
        onClose();
    };

    const {t} = useValues()

    const [fromTimePicker, setFromTimePicker] = useState(false)
    const [toTimePicker, setToTimePicker] = useState(false)

    return (
          <Modal transparent={true} visible={visible} animationType="fade">
            <View style={styles.modalBackground}>
                <View style={styles.modalContainer}>
                    <Text style={styles.modalTitle}>{t('newDeveloper.Schedulefor')} {day}</Text>
                    <View style={styles.inputRow}>
                        <View style={styles.inputContainer}>
                            <Text style={styles.inputLabel}>{t('newDeveloper.OpenTime')}</Text>
                            <TouchableOpacity style={styles.textInput} onPress={() => { setFromTimePicker(true) }}>
                                <TextInput
                                    style={{ textAlign: 'center', color:appColors.primary }}
                                    placeholder="HH:MM"
                                    placeholderTextColor={appColors.primary}
                                    editable={false}
                                    value={openTime}
                                    onChangeText={setOpenTime}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={styles.inputLabel}>{t('newDeveloper.CloseTime')}</Text>
                            <TouchableOpacity style={styles.textInput} onPress={() => { setToTimePicker(true) }}>
                                <TextInput
                                    style={{ textAlign: 'center', color:appColors.primary }}
                                    placeholder="HH:MM"
                                    placeholderTextColor={appColors.primary}
                                    editable={false}
                                    value={closeTime}
                                    onChangeText={setCloseTime}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.buttonRow}>
                        <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
                            <Text style={styles.cancelButtonText}>{t('newDeveloper.Cancel')}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.addButton} onPress={handleAdd}>
                            <Text style={styles.addButtonText}>{t('newDeveloper.Add')}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            {fromTimePicker && <TimepickerSelectTimeTwentyFourHours setDatePicker={setFromTimePicker} setScheduleDate={setOpenTime} />}
          {toTimePicker && <TimepickerSelectTimeTwentyFourHours setDatePicker={setToTimePicker} setScheduleDate={setCloseTime} />}
        </Modal>
        
          
         
       
    );
};

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContainer: {
        width: '90%',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
        color: appColors.primary
    },
    inputRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 20,
    },
    inputContainer: {
        flex: 1,
        alignItems: 'center',
    },
    inputLabel: {
        fontSize: 14,
        color: '#666',
        marginBottom: 8,
    },
    textInput: {
        width: '80%',
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        textAlign: 'center',
         
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    cancelButton: {
        flex: 1,
        backgroundColor: '#e0e0e0',
        paddingVertical: 10,
        marginRight: 10,
        alignItems: 'center',
        borderRadius: 5,
    },
    cancelButtonText: {
        fontSize: 16,
        color: '#333',
    },
    addButton: {
        flex: 1,
        backgroundColor: '#4caf50',
        paddingVertical: 10,
        marginLeft: 10,
        alignItems: 'center',
        borderRadius: 5,
    },
    addButtonText: {
        fontSize: 16,
        color: '#fff',
    },
});

export default ScheduleModal;
