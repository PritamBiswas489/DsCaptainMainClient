// Notifications data
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NotificationsInterface } from "@src/interfaces/store/notifications.interface";

//notification data interface
interface notificationDataInterface {
    data: NotificationsInterface[],
    isFirstTimeLoading: boolean;
}
//initial state
const initialState: notificationDataInterface = {
    data: [],    
    isFirstTimeLoading: true,
};
interface SetDataPayload {
    field: keyof notificationDataInterface;
    data: string | boolean | any;
}
//notification list slice
const vendorNotificationListSlice = createSlice({
    name: "vendorNotificationList",
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

export const vendorNotificationsActions = vendorNotificationListSlice.actions;
export default vendorNotificationListSlice