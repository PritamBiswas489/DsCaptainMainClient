import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Rating } from 'react-native-elements';
import appColors from '@src/theme/appColors';
import { useValues } from '../../../../../App';
import SwitchContainer from '@src/otherComponent/switchContainer';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
import { Item } from 'react-native-paper/lib/typescript/components/Drawer/Drawer';
import { storeItemsActions } from '@src/store/redux/store/store-item-redux';
import { updateStatus } from '@src/services/store/item.service';


interface PanelCardProps {
    id: number,
    title: string;
    imageUrl: string;
    price: number;
    originalPrice: number;
    discount: string;
    rating: number;
    reviews: number;
    status: number;
    onEdit: () => void;
    onDelete: () => void;

}

const PanelCard: React.FC<PanelCardProps> = ({
    id,
    title,
    imageUrl,
    price,
    originalPrice,
    discount,
    rating,
    reviews,
    status: ItemStatus,
    onEdit,
    onDelete,

}) => {

    const dispatch = useDispatch()
    const { isDark, t, currSymbol } = useValues();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
    };
    //update item status
    const updateItemStatus = (status: boolean, id: number) => {
        dispatch(storeItemsActions.statusStore({ itemId: id, status }))
        updateStatus(status, id)
    }

    return (
        <View style={[styles.card, {
            backgroundColor: isDark ? appColors.darkCardBg : appColors.white,
            borderColor: isDark ? appColors.darkBorder : appColors.border,
        }]}>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <View style={styles.infoContainer}>
                {discount && <Text style={styles.discount}>{discount}</Text>}
                <Text style={[styles.title, { color: isDark ? appColors.white : appColors.darkText }]}>{title}</Text>
                <View style={[styles.ratingContainer, {
                    backgroundColor: isDark ? appColors.darkCardBg : appColors.white,

                }]}>
                    <Rating
                        imageSize={15}
                        readonly
                        startingValue={rating}
                        style={styles.rating}
                        tintColor={isDark ? appColors.darkCardBg : appColors.white}
                    />
                </View>
                <Text style={[styles.reviews, { color: isDark ? appColors.white : appColors.darkText }]}>({reviews})</Text>
                <View style={styles.priceContainer}>
                    <Text style={[styles.price, { color: appColors.primary }]}>{currSymbol} {price}</Text>
                    {originalPrice > 0 && <Text style={[styles.originalPrice, { color: isDark ? appColors.white : appColors.darkText }]}>{currSymbol} {originalPrice}</Text>}
                </View>
            </View>
            <SwitchContainer toggleDarkSwitch={() => {
                updateItemStatus(!Boolean(ItemStatus),id)
             }} switchOn={Boolean(ItemStatus)} />
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
                        onPress={onEdit}
                    >
                        <Text style={styles.actionButtonText}>{t('newDeveloper.Edit')}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.actionButton2}
                        onPress={onDelete}
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
    card: {
        flexDirection: 'row',
        padding: 10,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 4,
        marginBottom: 15,
        alignItems: 'center',
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 40,
    },
    infoContainer: {
        flex: 1,
        marginLeft: 10,
    },
    discount: {
        backgroundColor: appColors.primary,
        color: 'white',
        padding: 2,
        borderRadius: 3,
        alignSelf: 'flex-start',
        fontSize: 12,
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    rating: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,

    },
    reviews: {
        fontSize: 10,
        marginLeft: 5,
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    price: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    originalPrice: {
        fontSize: 14,
        textDecorationLine: 'line-through',
        color: '#666',
        marginLeft: 5,
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginHorizontal: 5,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 1,
        padding: 1,
        borderRadius: 5,
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

export default PanelCard;