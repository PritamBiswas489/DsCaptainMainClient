import appColors from '@src/theme/appColors';
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useValues } from '../../../../../../App';
import { CampaignInterface } from '@src/interfaces/store/campaign.interface';
import { datetimeArr } from '@src/config/utility';
import { windowHeight, windowWidth } from '@src/theme/appConstant';

const CampaignCard = ({
    item,
    leaveCampaignProcessing,
    joinCampaignProcessing
}:
    {
        item: CampaignInterface,
        leaveCampaignProcessing: (campaign_id: number) => void,
        joinCampaignProcessing: (campaign_id: number) => void
    }) => {
    const { isDark, t } = useValues();
    const { day, month, year } = datetimeArr(item?.created_at);
    return (
        <View style={[styles.cardContainer, { backgroundColor: isDark ? appColors.darkCardBg : appColors.white }]}>
            {/* Header section */}
            <View style={styles.headerContainer}>
                {item?.image_full_url ? <Image
                    source={{ uri: item?.image_full_url }} // Replace with your actual image URL or local image source
                    style={styles.headerImage}
                /> : <Image
                    source={{ uri: 'https://via.placeholder.com/50' }} // Replace with your actual image URL or local image source
                    style={styles.headerImage}
                />}

            </View>
            <View>
                <Text style={[styles.headerText, { color: isDark ? appColors.white : appColors.darkText, }]}>{item?.title}</Text>
                <Text style={[styles.description, { color: isDark ? appColors.darkSubText : appColors.darkText, }]}>{item?.description}</Text>
            </View>
            {/* Footer section */}
            <View style={styles.footerContainer}>
                {item.is_joined ? (
                    <TouchableOpacity
                        onPress={() => {
                            if (item.id) {
                                leaveCampaignProcessing(item.id);
                            } else {
                                console.error("Item ID is undefined");
                            }
                        }}
                        style={styles.statusButton}
                    >
                        <Text style={styles.statusText}>{t('newDeveloper.LeaveNow')}</Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity
                        onPress={() => {
                            if (item.id) {
                                joinCampaignProcessing(item.id);
                            } else {
                                console.error("Item ID is undefined");
                            }
                        }}
                        style={styles.joinButton}
                    >
                        <Text style={styles.joinNowText}>{t('newDeveloper.JoinNow')}</Text>
                    </TouchableOpacity>
                )}

                <View style={styles.dateContainer}>
                    <Icon name="calendar-month-outline" size={16} color="#888" style={styles.icon} />
                    <View>
                        <Text style={[styles.dateText, { color: isDark ? appColors.darkSubText : appColors.darkText }]}>
                            {t('newDeveloper.Date')} : {day} {month} {year}
                        </Text>
                        <Text style={[styles.timeText, { color: isDark ? appColors.darkSubText : appColors.darkText }]}>
                            {t('newDeveloper.Daily')} : {item?.start_time} - {item?.end_time}
                        </Text>
                    </View>
                </View>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        width: '90%',
        borderRadius: 10,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
        alignSelf: 'center',
        marginVertical: 10,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    headerImage: {
        height: 150,
        width: '100%',
        borderRadius: windowWidth(2),
    },

    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 14,
        marginTop: 4, // Adds some spacing below the header text
    },
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: windowHeight(1),
    },

    dateContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start', // Ensures vertical stacking inside the container
    },

    timeText: {
        fontSize: 12,
        marginTop: 2, // Adds spacing below the date text
        lineHeight: 16, // Optional for better spacing in smaller text
    },
    statusButton: {
        backgroundColor: appColors.primary,
        borderRadius: 20,
        paddingVertical: 8,
        paddingHorizontal: 15,
    },
    statusText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
    },

    joinButton: {
        backgroundColor: appColors.success,
        borderRadius: 20,
        paddingVertical: 8,
        paddingHorizontal: 15,
    },
    joinNowText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
    },


    icon: {
        marginRight: 5,
    },
    dateText: {
        fontSize: 12,
    },
});

export default CampaignCard;
