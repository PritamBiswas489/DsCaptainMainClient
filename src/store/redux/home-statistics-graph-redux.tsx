import { createSlice, PayloadAction } from "@reduxjs/toolkit";

/* home stat grph */
interface HomeStatisticsGraphInterface {
    selectedFilter:number;
    lastFourYears:number[],
    monthList:string[],
    selectedYear:number,
    selectedMonth:string,
    yearStatData:{ //year stat data
        year:string, //year value
        month:{ 
            monthName:string, //month name 
            amount:number //amount value
        }[]
    }[];
    monthStatData:{
        year:string, //year value
        month:{
           monthName:string,
           days:{
               dayNumber:number,
               amount:number
           }[]
        } []
    }[]
     
}

const initialState: HomeStatisticsGraphInterface = {
       selectedFilter:0,
       lastFourYears:[],
       monthList:[],
       selectedYear: new Date().getFullYear(),
       selectedMonth:'January',
       yearStatData:[],
       monthStatData:[]
}
interface SetDataPayload {
    field: keyof HomeStatisticsGraphInterface;
    data: string | boolean | any;
}


const homeStatisticsGraphSlice = createSlice({
    name: "homeStatisticsGraphState",
    initialState: initialState,
    reducers: {
        setData(state: any, action: PayloadAction<SetDataPayload>) {
            state[action.payload.field] = action.payload.data;
        },
        updateMultipleField(state: any,action:PayloadAction<{}>){
              const dd = {...state}
              return {
                ...dd,
                ...action.payload
              }
        },
        resetState(state: HomeStatisticsGraphInterface) {
            return initialState;
        },
    }
})

export const homeStatisticsGraphActions = homeStatisticsGraphSlice.actions;
export default homeStatisticsGraphSlice;

