// ThreeDotDropdown.js

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, FlatList, StyleSheet, Alert, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // You can choose any other icon set
import { useValues } from '../../../../../App';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@src/store'
import { serviceMenType } from '../../home/activeServicemen/data/types';
import Spinner from 'react-native-loading-spinner-overlay';
import { RootStackParamList } from 'src/navigation/types';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { createChatChannel } from '@src/services/chat.service';
import { chatMessagesActions } from '@src/store/redux/chat-messages-redux';
import { serviceMenChannelActions } from '@src/store/redux/serviceman-channels-redux';
interface Response {
	data: any;
	status: number;
	statusText: string;
	headers: any;
	config: any;
	request?: any;
}
const ActionMenuServiceMen = ({ 
    item, 
    handleNavigateToDetailsPage, 
    deleteServiceMen,
    editServiceMen 
}: {
    item: serviceMenType,
    handleNavigateToDetailsPage: (value:string) => void,
    deleteServiceMen:(value:string) => void,
    editServiceMen:(value:string) => void
}) => {
    const dispatch = useDispatch()
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [checking,setChecking] = useState(false)
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    let options = [];
    const { t } = useValues()

    options = [
        { id: 1, label: t('newDeveloper.PreviewServicemenDetails'), onPress: () => handleOptionPress('PREVIEW') },
        { id: 2, label: t('newDeveloper.DeleteServiceDetails'), onPress: () => handleOptionPress('DELETE') },
        { id: 3, label: t('newDeveloper.EditServicemenDetails'), onPress: () => handleOptionPress('EDIT') },
        { id: 4, label: t('newDeveloper.CallServicemen'), onPress: () => handleOptionPress('CALL') },
        // { id: 5, label: t('newDeveloper.EmailServicemen'), onPress: () => handleOptionPress('EMAIL') },
        { id: 6, label: t('newDeveloper.ChatwithServicemen'), onPress: () => handleOptionPress('CHAT') },
    ];

    const handleThreeDotPress = () => {
        setDropdownVisible(!isDropdownVisible);
    };
    const sendEmail = async (emailAddress:string) => {
        const mailtoLink = `mailto:${emailAddress}`;
        try {
          const supported = await Linking.canOpenURL(mailtoLink);
          if (!supported) {
            Alert.alert('Error', 'Email client is not supported on this device');
          } else {
            await Linking.openURL(mailtoLink);
          }
        } catch (err) {
          console.error('An error occurred', err);
          Alert.alert('Error', 'An unexpected error occurred');
        }
      };

    const handleOptionPress = async (option: string) => {
        console.log(`Selected option: ${option}`);
        
        if (option === 'EDIT') {
            //editAnnouncementPageRedirect(item)
        }
        if (option === 'DELETE') {

            Alert.alert(
                'Confirmation',
                t('newDeveloper.DeleteServiceMen'),
                [
                    {
                        text: 'Cancel',
                        style: 'cancel',
                    },
                    {
                        text: 'OK',
                        onPress: () => {
                           deleteServiceMen(item.id)
                        },
                    },
                ],
                { cancelable: false }
            );
            setDropdownVisible(false);
        }

        if (option === 'PREVIEW') {
            handleNavigateToDetailsPage(item.id)
            setDropdownVisible(false);
        }
        if (option === 'CALL') {
            let phoneNumber = `tel:${item.phone}`;
            Linking.canOpenURL(phoneNumber)
                .then((supported) => {
                    if (!supported) {
                        Alert.alert('Phone number is not available');
                    } else {
                        return Linking.openURL(phoneNumber);
                    }
                })
                .catch((err) => console.log(err));
                setDropdownVisible(false);
        }
        if (option === 'EMAIL') {
            sendEmail(item.email)
            setDropdownVisible(false);
        }
        if (option === 'EDIT') {
            editServiceMen(item.id)
            setDropdownVisible(false);
        }
        if (option === 'CHAT') {
            
            setChecking(true)
            const {user_id,first_name,last_name} = item
            const formData = new FormData()
            formData.append('reference_id','')
            formData.append('reference_type','booking_id')
            formData.append('to_user',user_id)
            const response:Response = await createChatChannel(formData)
             
            if(response?.data?.content?.id){
                
                dispatch(serviceMenChannelActions.resetState())
                dispatch(chatMessagesActions.initChannel({
                    channel_id:response?.data?.content?.id,
                    isFirstTimeLoading: true,
                    isNoMoreData: true,
                    offset:1,
                    limit:6,
                    dateMessages:[]
                }))
                navigation.navigate('Chat',{id:response?.data?.content?.id,toUserName:`${first_name} ${last_name}`})
            }else{
                Alert.alert(response?.data?.message)
            }
            setChecking(false)
            setDropdownVisible(false);
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleThreeDotPress} style={styles.iconContainer}>
                <Icon name="ellipsis-h" size={24} color="grey" />
            </TouchableOpacity>

            <Modal
                animationType="slide"
                transparent={true}
                visible={isDropdownVisible}
                onRequestClose={() => setDropdownVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <TouchableOpacity
                        style={styles.overlay}
                        onPress={() => setDropdownVisible(false)}
                    />
                    <View style={styles.dropdown}>
                        <FlatList
                            data={options}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({ item }) => (
                                <TouchableOpacity onPress={item.onPress} style={styles.option}>
                                    <Text style={styles.optionText}>{item.label}</Text>
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                </View>
                <Spinner
          visible={checking}
          textContent={'checking.....'}
          textStyle={{ color: '#FFF' }}
        />
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'relative',
    },
    iconContainer: {
        padding: 10,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    dropdown: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        elevation: 10,
    },
    option: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    optionText: {
        fontSize: 16,
        color: '#333',
    },
});

export default ActionMenuServiceMen;
