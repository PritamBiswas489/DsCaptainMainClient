import { TouchableOpacity, View, Alert, StyleSheet, RefreshControl } from 'react-native';
import { ScrollView } from 'react-native-virtualized-view';
import React, { useEffect, useState } from 'react';
import { GlobalStyle } from '@style/styles';
import { Notification, Search, BookingFilterIcon } from '@utils/icons';
import Header from '@commonComponents/header';
import Payments from './payments';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from 'src/navigation/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import appColors from '@theme/appColors';
import { useValues } from '../../../../../App';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
import Icon from 'react-native-vector-icons/FontAwesome';
import { paymentListingActions } from '@src/store/redux/payment-list-redux';
type routeProps = NativeStackNavigationProp<RootStackParamList>;


export default function PaymentList() {
    const dispatch = useDispatch()
    const { isDark, isServiceManLogin } = useValues();
    const [refreshing, setRefreshing] = React.useState(false);
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        dispatch(paymentListingActions.resetState())
        setTimeout(() => {
            setRefreshing(false);
        }, 1000);
    }, []);


    const { navigate } = useNavigation<routeProps>();
    return (
        <View style={[styles.container, { backgroundColor: isDark ? appColors.darkCardBg : appColors.white }]}>
            <Header
                showBackArrow={true}
                title={'newDeveloper.PaymentList'}
                onTrailIcon={() => dispatch(paymentListingActions.resetState())}
                content={''}
            />
            <ScrollView
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[  GlobalStyle.contentContainerStyle ]}
                style={[
                    GlobalStyle.mainView,
                    {
                        backgroundColor: isDark ? appColors.darkTheme : appColors.white,
                    },
                ]}
            >
                <View style={GlobalStyle.blankView} />
                <Payments />
                <View style={GlobalStyle.blankView} />
            </ScrollView>






        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    fixedFilter: {
        top: 0,
        width: '100%',
        zIndex: 1,

        paddingVertical: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 3
    },
});
