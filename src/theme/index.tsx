import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { ReactNode, useMemo, useState, createContext, useContext, useEffect, useCallback } from 'react';
import { 
  AppThemeMode, 
  createAppTheme,
  getAvailableThemes
} from './config';

// Create context for theme management
interface ThemeContextType {
  mode: AppThemeMode;
  setThemeMode: (mode: AppThemeMode) => void;
  availableThemes: AppThemeMode[];
  cycleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  mode: 'light',
  setThemeMode: () => {},
  availableThemes: [],
  cycleTheme: () => {},
});

// eslint-disable-next-line react-refresh/only-export-components
export const useThemeContext = () => useContext(ThemeContext);

// Theme provider with multi-theme functionality
interface ThemeProviderProps {
  children: ReactNode;
}

const THEME_STORAGE_KEY = 'appThemeMode'; // Key for localStorage

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const availableThemes = getAvailableThemes();

  // Initialize state from localStorage or default to 'light'
  const [mode, setMode] = useState<AppThemeMode>(() => {
    try {
      const storedMode = window.localStorage.getItem(THEME_STORAGE_KEY);
      return availableThemes.includes(storedMode as AppThemeMode) 
        ? (storedMode as AppThemeMode) 
        : 'light';
    } catch (error) {
      console.error("Error reading theme mode from localStorage", error);
      return 'light';
    }
  });

  // Effect to update localStorage when mode changes
  useEffect(() => {
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, mode);
    } catch (error) {
      console.error("Error saving theme mode to localStorage", error);
    }
  }, [mode]);

  // Cycle through themes (for backward compatibility with toggle behavior)
  const cycleTheme = useCallback(() => {
    const currentIndex = availableThemes.indexOf(mode);
    const nextIndex = (currentIndex + 1) % availableThemes.length;
    setMode(availableThemes[nextIndex]);
  }, [mode, availableThemes]);

  const themeMode = useMemo(
    () => ({
      mode,
      setThemeMode: setMode,
      availableThemes,
      cycleTheme,
    }),
    [mode, cycleTheme, availableThemes]
  );

  const theme = useMemo(() => createAppTheme(mode), [mode]);

  return (
    <ThemeContext.Provider value={themeMode}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

