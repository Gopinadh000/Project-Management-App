import { createSlice } from "@reduxjs/toolkit";
import { TableState } from "../types/table.types";

const initialState: Record<string, TableState> = {};


const dataTableSlice = createSlice({
    name :  "dataTable",
    initialState,
    reducers : {   
        initializeTableState : (state, action)  => {
            const { tableId, initialState } = action.payload;
            if (!state[tableId]) {
               state[tableId] = initialState;
            }
        },
        setLoading(state, action) {
           const { tableId, loading } = action.payload;
           state[tableId].ui.loading = loading;
        },
        setResponse(state, action) {
           const { tableId, response } = action.payload;
           state[tableId].response = response;
           state[tableId].ui.loading = false;
       },
    }
})



export const {
    initializeTableState,
    setLoading,
    setResponse,
} = dataTableSlice.actions;


export default dataTableSlice.reducer;
