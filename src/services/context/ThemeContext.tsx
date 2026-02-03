import React, { useEffect, ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store/store';
import { updateCSSVariables } from '../../utils/themeUtils';

interface ThemeProviderProps {
  children: ReactNode;
}

/**
 * ThemeProvider that syncs Redux theme state with CSS variables
 * This component should wrap the app to ensure theme is applied on mount
 */
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const { appTheme, appMode } = useSelector((state: RootState) => state.theme);

  // Initialize CSS variables on mount and when theme/mode changes
  useEffect(() => {
    updateCSSVariables(appTheme, appMode);
  }, [appTheme, appMode]);

  return <>{children}</>;
};

