// Notifications data
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NotificationsInterface } from "@src/interfaces/notificationsInterface";

//notification data interface
interface notificationDataInterface {
    data: NotificationsInterface[],
    offsetPageUrl: string;
    limit: number;
    isFirstTimeLoading: boolean;
    isNoMoreData: boolean;
}
//initial state
const initialState: notificationDataInterface = {
    data: [],
    limit :10,
    offsetPageUrl: '?offset=1',
    isFirstTimeLoading: true,
    isNoMoreData: true,
};
interface SetDataPayload {
    field: keyof notificationDataInterface;
    data: string | boolean | any;
}
//notification list slice
const notificationListSlice = createSlice({
    name: "notificationList",
    initialState: initialState,
    reducers: {
        //set data
        setData(state: any, action: PayloadAction<SetDataPayload>) {
            state[action.payload.field] = action.payload.data;
        },
        //reset state
        resetState(state: notificationDataInterface) {
            return initialState;
        },  
        addNotificationsArr(state, action: PayloadAction<NotificationsInterface[]>) {
            state.data.push(...action.payload);
        },
    },
})

export const notificationsAction = notificationListSlice.actions;
export default notificationListSlice