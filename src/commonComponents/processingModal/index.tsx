import React, { useState } from 'react';
import appColors from '@src/theme/appColors';
import {
    View,
    Text,
    TextInput,
    Modal,
    StyleSheet,
    TouchableOpacity,
    GestureResponderEvent,
} from 'react-native';
import { useValues } from '../../../App';

const ProcessingModal: React.FC<{
    modalVisible:boolean,
    setModalVisible:(status:boolean)=>void,
    processingTime:string,
    setProcessingTime:(value:string)=>void ,
    processingStatusChange:()=>void
}> = ({
    modalVisible,
    setModalVisible,
    processingTime,
    setProcessingTime,
    processingStatusChange}) => {
   
 const { isDark, t, currSymbol } = useValues();
    

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)} // Handles back button behavior
        >
            <View style={styles.modalOverlay}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalTitle}>{t('newDeveloper.Confirmation')}</Text>
                    {/* TextArea for cancellation reason */}
                    <TextInput
                            style={[styles.textarea,{color: '#888',}]}
                            placeholder={t('newDeveloper.EnterProcessingTime')}
                            placeholderTextColor="#888"
                            value={(processingTime)}
                            keyboardType='number-pad'
                            onChangeText={(text: string) => setProcessingTime(text)}
                    />

                    {/* Submit Button */}
                    <TouchableOpacity
                        style={styles.submitButton}
                        onPress={processingStatusChange}
                    >
                        <Text style={styles.buttonText}>{t('newDeveloper.Submit')}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.cancelButton]}
                        onPress={() => setModalVisible(false)}
                         
                    >
                        <Text style={styles.buttonText}>{t('newDeveloper.Close')}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    openButton: {
        backgroundColor: '#007bff',
        padding: 15,
        borderRadius: 5,
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        width: '90%',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        elevation: 5, // Shadow for Android
        shadowColor: '#000', // Shadow for iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    textarea: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        padding: 10,
        marginBottom: 15,
        textAlignVertical: 'top', // Ensures placeholder text is at the top
    },
    submitButton: {
        backgroundColor: appColors.primary,
        padding: 15,
        borderRadius: 5,
        width: '100%',
        alignItems: 'center',
    },
    cancelButton:{
        backgroundColor: appColors.error,
        padding: 15,
        borderRadius: 5,
        width: '100%',
        marginTop:10,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default ProcessingModal;
