import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, Button, Alert } from 'react-native';
import { useValues } from '../../../../../App';
import appColors from '@src/theme/appColors';
import { windowHeight } from '@src/theme/appConstant';
import Modal from 'react-native-modal';
import SwitchContainer from '@src/otherComponent/switchContainer';
import { CouponInterface } from '@src/interfaces/store/coupon.interface';

const CouponCard = ({ item, navigateToEditPage, deleteCouponFromList, updateCouponStatus }: { 
    item: CouponInterface,
    navigateToEditPage: (t: string) => void ,
    deleteCouponFromList:(t: number) => void ,
    updateCouponStatus:(status:boolean,id:number)=>void
}) => {
    const { isDark, t } = useValues();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
    };
    const [status,setStatus] = useState(Boolean(item.status))

    useEffect(()=>{
        if(Boolean(item.status)!==status){
            updateCouponStatus(status,item.id)
        }
    },[status,item])
    return (
        <View style={[styles.container,
        {
            backgroundColor: isDark
                ? appColors.darkTheme
                : appColors.white,
            borderColor: appColors.border,
        },

        ]}>
            <View style={styles.iconContainer}>
                <Text style={styles.icon}>{item.discount_type === 'percent' ? '%' : '$'}</Text>
            </View>
            <View style={styles.detailsContainer}>
                <Text style={[styles.discountText,
                { color: isDark ? appColors.white : appColors.darkText }
                ]}>{item.discount}{item.discount_type === 'percent' ? '%' : '$'} {t('newDeveloper.OFF')}</Text>
                <Text style={[styles.codeText,
                { color: isDark ? appColors.darkSubText : appColors.darkText }
                ]}>Code: {item.code}</Text>
                <Text style={[styles.usersText, { color: isDark ? appColors.darkSubText : appColors.darkText }]}>{t('newDeveloper.Totalusers')}: {item.total_uses}</Text>
                <Text style={[styles.validityText, { color: isDark ? appColors.darkSubText : appColors.darkText }]}>{t('newDeveloper.Validuntil')} {item.start_date} {t('newDeveloper.To')} {item.expire_date}</Text>
            </View>
            <SwitchContainer toggleDarkSwitch={() => { setStatus(!status) }} switchOn={status} />
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
                        onPress={() => navigateToEditPage(item.id.toString())}
                    >
                        <Text style={styles.actionButtonText}>{t('newDeveloper.Edit')}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.actionButton2}
                        onPress={() =>{ 
                            deleteCouponFromList(item.id) 
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

export default CouponCard;
