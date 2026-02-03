import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ThemeType, ModeType } from "../../../styles/palletes";

interface ThemeState {
  appTheme: ThemeType;
  appMode: ModeType;
}

// Load from localStorage or use defaults
const loadThemeFromStorage = (): ThemeState => {
  try {
    const savedTheme = localStorage.getItem("appTheme") as ThemeType;
    const savedMode = localStorage.getItem("appMode") as ModeType;
    return {
      appTheme: savedTheme || "BLUE_THEME",
      appMode: savedMode || "LIGHT",
    };
  } catch {
    return {
      appTheme: "BLUE_THEME",
      appMode: "LIGHT",
    };
  }
};

const initialState: ThemeState = loadThemeFromStorage();

const themeSlice = createSlice({
  name: "app-theme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<{ theme: ThemeType }>) => {
      state.appTheme = action.payload.theme;
      localStorage.setItem("appTheme", action.payload.theme);
    },
    setMode: (state, action: PayloadAction<{ mode: ModeType }>) => {
      state.appMode = action.payload.mode;
      localStorage.setItem("appMode", action.payload.mode);
    },
    toggleMode: (state) => {
      state.appMode = state.appMode === "LIGHT" ? "DARK" : "LIGHT";
      localStorage.setItem("appMode", state.appMode);
    },
    setThemeAndMode: (
      state,
      action: PayloadAction<{ theme: ThemeType; mode: ModeType }>
    ) => {
      state.appTheme = action.payload.theme;
      state.appMode = action.payload.mode;
      localStorage.setItem("appTheme", action.payload.theme);
      localStorage.setItem("appMode", action.payload.mode);
    },
  },
});

export const { setTheme, setMode, toggleMode, setThemeAndMode } =
  themeSlice.actions;
export const themeSliceReducer = themeSlice.reducer;