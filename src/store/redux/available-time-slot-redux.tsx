import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TimeSchedule {
    start_time: string; // Format: "HH:MM"
    end_time: string;   // Format: "HH:MM"
}

export interface ServiceAvailabilityType {
    service_availability: number;
    time_schedule: TimeSchedule;
    weekends: string[];  
    isFirstTimeLoading: boolean;
}

const initialState: ServiceAvailabilityType = {
    service_availability: 0,
    time_schedule: {start_time:'00:00:00',end_time:'00:00:00'},
    weekends:[],
    isFirstTimeLoading:true
}

interface SetDataPayload {
    field: keyof ServiceAvailabilityType;
    data: string | number | boolean;
}

const availableTimeSlotSlice = createSlice({
    name: "availableTimeSlot",
    initialState: initialState,
    reducers: {
      setData(state:any, action: PayloadAction<SetDataPayload>) {
        state[action.payload.field] = action.payload.data;
      },
      resetState(state: ServiceAvailabilityType) {
        return initialState;
      },
    },
});

export const availableTimeSlotActions = availableTimeSlotSlice.actions;
export default availableTimeSlotSlice;