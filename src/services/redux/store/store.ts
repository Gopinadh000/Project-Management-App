import { configureStore } from "@reduxjs/toolkit";
import { themeSliceReducer } from "../slices/themeSlice";
import dataTableSlice from "../../../components/app-table/slices/tablePluginSlice";

export const store = configureStore({
  reducer: {
    theme: themeSliceReducer,
    dataTable: dataTableSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;