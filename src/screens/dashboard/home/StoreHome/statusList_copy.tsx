import appColors from "@src/theme/appColors";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";

import { useValues } from '../../../../../App';
interface Tab {
    tabid: string;
    label: string;
    count: number;
    active: boolean;
}

const OrderStatusList = ({ statusMenuList, setTabStatus }: { statusMenuList: Tab[], setTabStatus: (value: string) => void }) => {
    const { isDark, t } = useValues();


    return (
        <View style={styles.container}>
            <FlatList
                data={statusMenuList}
                renderItem={({ item }) => {
                    return <TouchableOpacity
                        onPress={() => setTabStatus(item.tabid)}
                        style={[styles.menuItem, { backgroundColor: isDark ? appColors.darkCardBg : appColors.white, borderColor: isDark ? appColors.darkBorder : appColors.border }, item.active && styles.activeItem]}
                    >
                        <Text
                            style={[
                                styles.menuText,
                                { color: isDark ? appColors.white : appColors.darkText, },
                                item.active && styles.activeText,
                            ]}
                        >
                            {item.label} ({item.count})
                        </Text>
                    </TouchableOpacity>
                }}
                keyExtractor={(item) => item.tabid}
                horizontal // This makes the FlatList horizontal
                showsHorizontalScrollIndicator={false} // Hides the scroll bar
            />


        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        paddingVertical: 10,
    },
    scrollContainer: {
        alignItems: "center",
        paddingHorizontal: 10,
    },
    menuItem: {
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 20,
        marginHorizontal: 5,
        borderColor: "#ddd",
        borderWidth: 1,
    },
    activeItem: {
        backgroundColor: appColors.primary,
        borderColor: appColors.primary,

    },
    menuText: {
        fontSize: 14,
        color: "#555",
    },
    activeText: {
        color: appColors.white
    },
});

export default OrderStatusList;
