import { LIGHT_PALLETE } from "./light-pallete";
import { DARK_PALLETE } from "./dark-pallete";

export type ThemeType = "BLUE_THEME" | "YELLOW_THEME";
export type ModeType = "LIGHT" | "DARK";

export interface Palette {
  primary: {
    50: string;
    100: string;
    500: string;
    600: string;
    800: string;
    900: string;
    text: string;
  };
  secondary: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    800: string;
    900: string;
    text: string;
  };
  background: {
    primary: string;
    secondary: string;
  };
  text: {
    primary: string;
    secondary: string;
  };
}

export const PALETTES = {
  LIGHT: LIGHT_PALLETE,
  DARK: DARK_PALLETE,
};

export const getPalette = (theme: ThemeType, mode: ModeType): Palette => {
  return PALETTES[mode][theme];
};

