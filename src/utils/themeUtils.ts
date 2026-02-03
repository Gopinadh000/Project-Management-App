import { getPalette, ThemeType, ModeType } from "../styles/palletes";

/**
 * Updates CSS variables based on theme and mode
 */
export const updateCSSVariables = (theme: ThemeType, mode: ModeType) => {
  const palette = getPalette(theme, mode);
  const root = document.documentElement;

  // Primary colors
  root.style.setProperty("--app-primary-50", palette.primary[50]);
  root.style.setProperty("--app-primary-100", palette.primary[100]);
  root.style.setProperty("--app-primary-500", palette.primary[500]);
  root.style.setProperty("--app-primary-600", palette.primary[600]);
  root.style.setProperty("--app-primary-800", palette.primary[800]);
  root.style.setProperty("--app-primary-900", palette.primary[900]);
  root.style.setProperty("--app-primary-text", palette.primary.text);

  // Secondary colors
  root.style.setProperty("--app-secondary-50", palette.secondary[50]);
  root.style.setProperty("--app-secondary-100", palette.secondary[100]);
  root.style.setProperty("--app-secondary-200", palette.secondary[200]);
  root.style.setProperty("--app-secondary-300", palette.secondary[300]);
  root.style.setProperty("--app-secondary-400", palette.secondary[400]);
  root.style.setProperty("--app-secondary-500", palette.secondary[500]);
  root.style.setProperty("--app-secondary-800", palette.secondary[800]);
  root.style.setProperty("--app-secondary-900", palette.secondary[900]);
  root.style.setProperty("--app-secondary-text", palette.secondary.text);

  // Background colors
  root.style.setProperty("--app-bg-primary", palette.background.primary);
  root.style.setProperty("--app-bg-secondary", palette.background.secondary);

  // Text colors
  root.style.setProperty("--app-text-primary", palette.text.primary);
  root.style.setProperty("--app-text-secondary", palette.text.secondary);

  // Common colors (consistent across themes)
  if (mode === "LIGHT") {
    root.style.setProperty("--app-white", "#ffffff");
    root.style.setProperty("--app-black", "#000000");
    root.style.setProperty("--app-success", "#10b981");
    root.style.setProperty("--app-warning", "#f59e0b");
    root.style.setProperty("--app-error", "#ef4444");
  } else {
    root.style.setProperty("--app-white", "#1f2937");
    root.style.setProperty("--app-black", "#f9fafb");
    root.style.setProperty("--app-success", "#34d399");
    root.style.setProperty("--app-warning", "#fbbf24");
    root.style.setProperty("--app-error", "#f87171");
  }

  // Update dark class on root
  if (mode === "DARK") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }
};

