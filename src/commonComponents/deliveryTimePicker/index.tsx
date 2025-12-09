import appColors from '@src/theme/appColors';
import { windowWidth } from '@src/theme/appConstant';
import React, { useState , useEffect} from 'react';
import { View, Text, Button, StyleSheet, Modal, ViewStyle, TextStyle, TouchableOpacity, Alert } from 'react-native';
import { Picker } from 'react-native-wheel-pick';
import { useValues } from '../../../App';
import {  useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
import { storeRegisterFieldActions } from '@src/store/redux/store/register-field-redux';

const DeliveryTimePicker = ({showDeliveryTimeModal,setShowDeliveryTimeModal}:{
    showDeliveryTimeModal:boolean,
    setShowDeliveryTimeModal : React.Dispatch<React.SetStateAction<boolean>>
}) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [minValue, setMinValue] = useState<string>('10');
    const [maxValue, setMaxValue] = useState<string>('12');
    const [unit, setUnit] = useState<string>('Hours');
    const {t} = useValues()
    const dispatch = useDispatch()

    const hideDeliveryPopup = () => {
        setShowDeliveryTimeModal(false);
    };

    const setDeliveryTime =()=>{  
        if(parseInt(maxValue) < parseInt(minValue)){
            Alert.alert(t('newDeveloper.deliveryTimeErrorOne'))
            return;
        }
        dispatch(storeRegisterFieldActions.setData({
            field: 'minimum_delivery_time',
            data: minValue,
        }))
        dispatch(storeRegisterFieldActions.setData({
            field: 'maximum_delivery_time',
            data: maxValue,
        }))
        dispatch(storeRegisterFieldActions.setData({
            field: 'delivery_time_type',
            data: unit,
        }))
        setShowDeliveryTimeModal(false);
    }

    return (
        <View style={styles.container}>
             
            <Modal visible={showDeliveryTimeModal} animationType="slide" transparent={true}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.heading}>{t('newDeveloper.EstimatedDeliveryTime')}</Text>
                        <Text style={styles.subHeading}>{t('newDeveloper.EstimateTimePanelText')}</Text>
                        <View style={styles.pickerContainer}>
                            <View style={styles.pickerColumn}>
                                <Text style={styles.pickerHeading}>{t('newDeveloper.Minimum')}</Text>
                                <Picker
                                    style={{ backgroundColor: appColors.lightOrange, width: 80, height: 150, }}
                                    selectedValue={minValue}
                                    pickerData={[...Array(60).keys()].map(n => n + 1)}
                                    onValueChange={(value: string) => { setMinValue(value) }}
                                    textSize={14}
                                    textColor={'black'}
                                />

                            </View>
                            <View style={styles.pickerColumn}>
                                <Text style={styles.pickerHeading}>{t('newDeveloper.Maximum')}</Text>
                                <Picker
                                    style={{ backgroundColor: appColors.lightOrange, width: 80, height: 150 }}
                                    selectedValue={maxValue}
                                    pickerData={[...Array(60).keys()].map(n => n + 1)}
                                    onValueChange={(value: string) => { setMaxValue(value) }}
                                    textSize={14}
                                    textColor={'black'}
                                />
                            </View>

                            <View style={styles.pickerColumn}>
                                <Text style={styles.pickerHeading}>{t('newDeveloper.Unit')}</Text>
                                <Picker
                                    style={{ backgroundColor: appColors.lightOrange, width: 80, height: 150 }}
                                    selectedValue={unit}
                                    pickerData={['Minute','Hours','Days']}
                                    onValueChange={(value: string) => { setUnit(value) }}
                                    textSize={14}
                                    textColor={'black'}
                                />
                            </View>
                        </View>
                        <View style={styles.pickerContainer}>
                             
                            <TouchableOpacity style={[styles.button,{backgroundColor: appColors.success}]} onPress={setDeliveryTime}>
                              <Text style={styles.buttonText}>{t('newDeveloper.Confirm')}</Text> 
                            </TouchableOpacity>

                            <TouchableOpacity style={[styles.button,{backgroundColor: appColors.error,marginLeft:windowWidth(2)}]} onPress={hideDeliveryPopup}>
                              <Text style={styles.buttonText}>{t('newDeveloper.Cancel')}</Text> 
                            </TouchableOpacity>
                            
                        </View>
                        

                    </View>
                </View>
            </Modal>
        </View>
    );
};

 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '80%',
        backgroundColor: appColors.white,
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color:'black'
    },
    subHeading: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'center',
        color:'black'
    },
    pickerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    pickerColumn: {
        alignItems: 'center',
        marginLeft: windowWidth(2)
    },
    pickerHeading: {
        fontSize: 16,
        marginBottom: 10,
        color:'black'
    },
    picker: {
        width: 80,
        height: 180,
    },
    
    button: {
        
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },
});

export default DeliveryTimePicker;
