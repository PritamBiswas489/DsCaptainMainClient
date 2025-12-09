import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, Button, Alert } from 'react-native';
import { useValues } from '../../../../../App';
import appColors from '@src/theme/appColors';
import { windowHeight } from '@src/theme/appConstant';
import Modal from 'react-native-modal';
import SwitchContainer from '@src/otherComponent/switchContainer';
import { AddonInterface } from '@src/interfaces/store/addons.interface';


const AddonCard = ({ item, navigateToEditPage, deleteAddonFromList }: {
    item: AddonInterface,
    navigateToEditPage: (t: string,n:string,p:string) => void,
    deleteAddonFromList: (t: number) => void,

}) => {
    const { isDark, t, currSymbol } = useValues();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
    };

    return (
        <View style={[styles.container,
        {
            backgroundColor: isDark
                ? appColors.darkTheme
                : appColors.white,
            borderColor: appColors.border,
        },

        ]}>

            <View style={styles.detailsContainer}>
                <Text style={[styles.discountText,
                { color: appColors.primary }
                ]}>{item.name}</Text>
                <Text style={[styles.codeText,
                { color: isDark ? appColors.white : appColors.darkText }
                ]}>{currSymbol}{item.price}</Text>

            </View>

            <TouchableOpacity
                style={styles.moreOptions}
                onPress={toggleModal}
            >
                <Text style={styles.moreOptionsText}>⋮</Text>
            </TouchableOpacity>
            <Modal style={styles.bottomModal} isVisible={isModalVisible} onBackdropPress={toggleModal}>
                <View style={styles.modalContent}>
                    <TouchableOpacity
                        style={styles.actionButton}
                        onPress={() => navigateToEditPage(
                            String(item.id),
                            item.name,
                            String(item.price)
                        )}
                    >
                        <Text style={styles.actionButtonText}>{t('newDeveloper.Edit')}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.actionButton2}
                        onPress={() => {
                            deleteAddonFromList(item.id)
                            setIsModalVisible(false)
                        }}
                    >
                        <Text style={styles.actionButtonText}>{t('newDeveloper.Delete')}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionButtonClose} onPress={toggleModal}>
                        <Text style={styles.actionButtonText}>{t('newDeveloper.Close')}</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 16,
        borderRadius: 10,
        elevation: 3,
        alignItems: 'center',
        marginTop: windowHeight(2),
        marginHorizontal: windowHeight(1),
        borderWidth: 1
    },
    iconContainer: {
        backgroundColor: appColors.primary,
        borderRadius: 25,
        padding: 10,
        marginRight: 16,
    },
    icon: {
        fontSize: 24,
        color: appColors.white,
    },
    detailsContainer: {
        flex: 1,
    },
    discountText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    codeText: {
        fontSize: 16,

    },
    usersText: {
        fontSize: 12,

    },
    validityText: {
        fontSize: 12,

    },
    switch: {
        marginRight: 16,
    },
    moreOptions: {
        padding: 8,
        marginLeft: 10
    },
    moreOptionsText: {
        fontSize: 18,
    },
    bottomModal: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    modalText: {
        fontSize: 18,
        marginBottom: 12,
    },
    actionButton: {
        backgroundColor: appColors.success,
        padding: 12,
        marginVertical: 6,
        borderRadius: 10,
        alignItems: 'center',
        width: '100%',
    },
    actionButton2: {
        backgroundColor: appColors.error,
        padding: 12,
        marginVertical: 6,
        borderRadius: 10,
        alignItems: 'center',
        width: '100%',

    },
    actionButtonClose: {
        backgroundColor: appColors.gradientBtn,
        padding: 12,
        marginVertical: 6,
        borderRadius: 10,
        alignItems: 'center',
        width: '100%',

    },
    actionButtonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default AddonCard;
