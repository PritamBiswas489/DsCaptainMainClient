import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ModuleInterface } from "@src/interfaces/store/modules.interface";

const initialState: ModuleInterface[] = [];

const modulesSlice = createSlice({
    name: "zone",
    initialState: initialState,
    reducers: {
      setData(state:any, action: PayloadAction<ModuleInterface[]>) {
        return action.payload
      },
      resetState(state: ModuleInterface[]) {
        return initialState;
      },
    },
  });

export const modulesAction = modulesSlice.actions;
export default modulesSlice;