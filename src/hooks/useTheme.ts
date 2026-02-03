import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../services/redux/store/store";
import { setTheme, setMode, toggleMode, setThemeAndMode } from "../services/redux/slices/themeSlice";
import { updateCSSVariables } from "../utils/themeUtils";
import { ThemeType, ModeType } from "../styles/palletes";

export const useTheme = () => {
  const dispatch = useDispatch();
  const { appTheme, appMode } = useSelector((state: RootState) => state.theme);

  // Sync CSS variables when theme or mode changes
  useEffect(() => {
    updateCSSVariables(appTheme, appMode);
  }, [appTheme, appMode]);

  const changeTheme = (theme: ThemeType) => {
    dispatch(setTheme({ theme }));
  };

  const changeMode = (mode: ModeType) => {
    dispatch(setMode({ mode }));
  };

  const toggleThemeMode = () => {
    dispatch(toggleMode());
  };

  const changeThemeAndMode = (theme: ThemeType, mode: ModeType) => {
    dispatch(setThemeAndMode({ theme, mode }));
  };

  return {
    theme: appTheme,
    mode: appMode,
    changeTheme,
    changeMode,
    toggleMode: toggleThemeMode,
    changeThemeAndMode,
    isDark: appMode === "DARK",
    isLight: appMode === "LIGHT",
  };
};

