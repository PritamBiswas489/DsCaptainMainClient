import { TouchableOpacity, View, Alert, StyleSheet, RefreshControl, ActivityIndicator, FlatList } from 'react-native';
import { ScrollView } from 'react-native-virtualized-view';
import React, { useEffect, useState, useReducer } from 'react';
import { GlobalStyle } from '@style/styles';
import { Notification, Search, BookingFilterIcon, AddItemIcon } from '@utils/icons';
import Header from '@commonComponents/header';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from 'src/navigation/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import appColors from '@theme/appColors';
import { useValues } from '../../../../../App';
import { useSelector, useDispatch } from 'react-redux';
import ExpenseItemCard from './expenseCard';
import SearchExpense from './searchExpense';
import SkeletonLoader from '@src/commonComponents/SkeletonLoader';
import { getExpense } from '@src/services/store/expense.service';
import { ExpenseInterface } from '@src/interfaces/store/expense.interface';
import HomeNoFataFound from '@src/commonComponents/homeNoDataFound';
import DateRangePicker from '@src/commonComponents/dateRangePicker';

interface Response {
    data: any;
    status: number;
    statusText: string;
    headers: any;
    config: any;
    request?: any;
}
const currentDate = new Date();
const previousDate = new Date();
previousDate.setDate(currentDate.getDate() - 30);
const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};
//Expense interface
interface ExpenseState {
    limit: number;
    offset: number;
    from: string;
    to: string;
    search: string,
    expenses: ExpenseInterface[];
}
//Expense state
const initialState: ExpenseState = {
    limit: 30,
    offset: 1,
    from: formatDate(previousDate),
    to: formatDate(currentDate),
    search: '',
    expenses: [],
}

type Action =
    | { type: 'SET_LIMIT'; payload: typeof initialState.limit }
    | { type: 'SET_OFFSET'; payload: typeof initialState.offset }
    | { type: 'SET_FROM'; payload: typeof initialState.from }
    | { type: 'SET_TO'; payload: typeof initialState.to }
    | { type: 'SET_SEARCH'; payload: typeof initialState.search }
    | { type: 'SET_EXPENSES'; payload: typeof initialState.expenses }
    | { type: 'RESET_ALL' };
;

const reducer = (state: ExpenseState, action: Action): ExpenseState => {
    switch (action.type) {
        case 'SET_LIMIT':
            return { ...state, limit: action.payload };
        case 'SET_OFFSET':
            return { ...state, offset: action.payload };
        case 'SET_FROM':
            return { ...state, from: action.payload };
        case 'SET_TO':
            return { ...state, to: action.payload };
        case 'SET_SEARCH':
            return { ...state, search: action.payload };
        case 'SET_EXPENSES':
            return { ...state, expenses: action.payload };
        case 'RESET_ALL':
            return {
                ...initialState
            };
        default:
            return state;
    }
}

type routeProps = NativeStackNavigationProp<RootStackParamList>;
//Store Expense Reports
export default function StoreExpenseReports() {
    const { isDark, t } = useValues();
    const { navigate } = useNavigation<routeProps>();
    const dispatch = useDispatch()
    const [refreshing, setRefreshing] = React.useState(false);
    const [scrollPaging, setScrollPaging] = useState(false)
    const [noMoreData, setNoMoreData] = useState(false)
    const [isFirstTimeLoading, setIsFirstTimeLoading] = useState(true)
    const [dateRangerShow, setDateRangeShow] = useState(false)
    const [EXPENSE_STATE, EXPENSE_DISPATCH] = useReducer(reducer, initialState);

    //drag screen refresh page
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        reset()
        setTimeout(() => {
            setRefreshing(false);
        }, 1000);
    }, []);
    //async expense load for data show
    const loadExpenseDataOnload = async () => {
        const [getExpenses] = await Promise.all([getExpense(EXPENSE_STATE.limit, EXPENSE_STATE.offset, EXPENSE_STATE.from, EXPENSE_STATE.to, EXPENSE_STATE.search)])
        if (getExpenses?.data?.expense && getExpenses?.data?.expense.length > 0) {
            const cloneExpenses = [...EXPENSE_STATE.expenses, ...getExpenses?.data?.expense];
            EXPENSE_DISPATCH({ type: 'SET_EXPENSES', payload: cloneExpenses })
            EXPENSE_DISPATCH({ type: 'SET_OFFSET', payload: EXPENSE_STATE.offset + 1 })
        } else {
            setNoMoreData(true)
        }
        setIsFirstTimeLoading(false)
        setScrollPaging(false);
    }
    //onload expense load 
    useEffect(() => {
        if ((isFirstTimeLoading || scrollPaging) && !noMoreData) {
            loadExpenseDataOnload()
        }
    }, [isFirstTimeLoading, scrollPaging])

    //reset data listing
    const reset = () => {
        setNoMoreData(false)
        setIsFirstTimeLoading(true)
        EXPENSE_DISPATCH({ type: 'SET_EXPENSES', payload: [] });
        EXPENSE_DISPATCH({ type: 'SET_OFFSET', payload: 1 });
    }

    //handle scroll processing
    const handleScrollProcessing = () => {
        if (noMoreData) { return; }
        setScrollPaging(true)
    }
    //change date filter processing
    const changeDateFilter = (fromDate: Date, toDate: Date) => {
        let hasChange = false
        if (formatDate(fromDate) !== EXPENSE_STATE.from) {
            hasChange = true
            EXPENSE_DISPATCH({ type: 'SET_FROM', payload: formatDate(fromDate) })
        }
        if (formatDate(toDate) !== EXPENSE_STATE.to) {
            hasChange = true
            EXPENSE_DISPATCH({ type: 'SET_TO', payload: formatDate(toDate) })
        }
        if (hasChange) {
            reset()
        }

    }
    //execute search filter
    const executeSearchFilter = (search: string) => {
        if (EXPENSE_STATE.search !== search) {
            EXPENSE_DISPATCH({ type: 'SET_SEARCH', payload: search })
            reset()
        }
    }




    return (
        <View style={[styles.container, { backgroundColor: isDark ? appColors.darkCardBg : appColors.white }]}>
            <Header
                showBackArrow={true}
                title={'newDeveloper.ExpenseReports'}
                content={''}
            />
            <View style={{ marginTop: 5 }}>
                <SearchExpense
                    fromDate={EXPENSE_STATE.from}
                    toDate={EXPENSE_STATE.to}
                    search={''}
                    setDateRangeShow={setDateRangeShow}
                    executeSearchFilter={executeSearchFilter}
                />
            </View>
            <ScrollView
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[
                    GlobalStyle.contentContainerStyle,
                ]}
                style={[
                    GlobalStyle.mainView,
                    {
                        backgroundColor: isDark ? appColors.darkTheme : appColors.white,
                        marginTop: 10
                    },
                ]}
            >
                {isFirstTimeLoading && <SkeletonLoader />}
                {!isFirstTimeLoading && EXPENSE_STATE.expenses.length === 0 && <HomeNoFataFound message={t('newDeveloper.Nodatafound')} />}
                {!isFirstTimeLoading && EXPENSE_STATE.expenses.length > 0 &&
                    <FlatList
                        onEndReached={handleScrollProcessing}
                        data={EXPENSE_STATE.expenses}
                        keyExtractor={(item) => 'expense' + item.order_id}
                        renderItem={({ item }) => (
                            <>
                                <ExpenseItemCard
                                    item={item}
                                />

                            </>
                        )} />
                }

                <View style={GlobalStyle.blankView} />
            </ScrollView>
            {dateRangerShow && <DateRangePicker
                fromDate={new Date(EXPENSE_STATE.from)}
                toDate={new Date(EXPENSE_STATE.to)}
                changeDateFilter={changeDateFilter}
                setDatePicker={setDateRangeShow} />}

            {scrollPaging && <ActivityIndicator />}
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
