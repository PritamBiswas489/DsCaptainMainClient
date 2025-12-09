// components/Banner.js
import { BannerInterface } from '@src/interfaces/store/banner.interface';
import appColors from '@src/theme/appColors';
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const BannerCard = ({banner, navigateToEditPage, deleteBannerFromList}:{banner:BannerInterface
    navigateToEditPage:(d:BannerInterface)=>void
    deleteBannerFromList:(id:number)=>void
}) => {
    return (
        <View style={styles.bannerContainer}>
            <TouchableOpacity style={styles.banner}>
                {banner.image_full_url && <Image source={{ uri: banner.image_full_url }} style={styles.bannerImage} />}
                <Text style={styles.bannerTitle}>{banner.title}</Text>
                {banner.default_link && <Text style={styles.bannerLink}>{banner.default_link}</Text>}
            </TouchableOpacity>
            <View style={styles.iconContainer}>
                <TouchableOpacity onPress={()=>navigateToEditPage(banner)}>
                    <Icon name="edit" size={24} color={appColors.success} style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() =>deleteBannerFromList(banner.id)}>
                    <Icon name="delete" size={24} color={appColors.error} style={styles.icon} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    bannerContainer: {
        marginBottom: 20,
        position: 'relative',
        marginTop: 20
    },
    banner: {
        borderRadius: 10,
        overflow: 'hidden',
        borderColor: appColors.primary,
        borderWidth: 1,
    },
    bannerImage: {
        width: '100%',
        height: 200,
    },
    bannerTitle: {
        padding: 10,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: appColors.primary,
    },
    bannerLink:{
        padding: 10,
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: appColors.lightGreen,
        color:appColors.black
    },
    iconContainer: {
        position: 'absolute',
        top: 10,
        right: 10,
        flexDirection: 'row',
    },
    icon: {
        marginLeft: 10,
    },
});

export default BannerCard;
