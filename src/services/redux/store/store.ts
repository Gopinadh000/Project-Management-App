import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "../slices/themeSlice";
import dataTableSlice from "../../../components/app-table/slices/tablePluginSlice";

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    dataTable: dataTableSlice,
  },
});