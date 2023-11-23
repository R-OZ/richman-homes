import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PropertyData, dataList } from "@/dummyData/data";

type InitialState ={
    value: PropertiesState
}
type PropertiesState = [] | PropertyData[];

const initialState: InitialState = {
    value: []
}

export const compareSlice = createSlice({
    name: 'compare',
    initialState,
    reducers:{
        addProperty: (state, action: PayloadAction<PropertyData>)=>{
            const ifExists = state.value.findIndex((item)=> item.id === action.payload.id);
            if (ifExists === -1){
                state.value = [...state.value, action.payload]
            }
        },
        removeProperty: (state, action: PayloadAction<PropertyData['id']>)=>{
            state.value = state.value.filter((item)=> item.id !== action.payload)
        }

    }

})

export const {addProperty, removeProperty} = compareSlice.actions
export default compareSlice.reducer