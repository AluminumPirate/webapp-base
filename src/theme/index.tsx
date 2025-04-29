import { createTheme, ThemeProvider as MuiThemeProvider, Theme, ThemeOptions } from '@mui/material/styles';
import { CssBaseline, PaletteMode } from '@mui/material';
import { ReactNode, useMemo, useState, createContext, useContext, useEffect } from 'react';
import { lightPalette, darkPalette } from './palette';
import typography from './typography';
import components from './components';
import breakpoints from './breakpoints';

// Create context for theme mode toggle
interface ThemeContextType {
mode: PaletteMode;
toggleColorMode: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
mode: 'light',
toggleColorMode: () => {},
});

export const useThemeContext = () => useContext(ThemeContext);

// Create theme function
export const createAppTheme = (mode: PaletteMode): Theme => {
const themeOptions: ThemeOptions = {
    palette: mode === 'light' ? lightPalette : darkPalette,
    typography,
    components,
    breakpoints,
    shape: {
    borderRadius: 8,
    },
    zIndex: {
    appBar: 1200,
    drawer: 1100,
    },
};

return createTheme(themeOptions);
};

// Default theme
export const defaultTheme = createAppTheme('light');

// Theme provider with toggle functionality
interface ThemeProviderProps {
children: ReactNode;
}

const THEME_STORAGE_KEY = 'appThemeMode'; // Key for localStorage

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  // Initialize state from localStorage or default to 'light'
  const [mode, setMode] = useState<PaletteMode>(() => {
    try {
      const storedMode = window.localStorage.getItem(THEME_STORAGE_KEY);
      return (storedMode === 'dark' || storedMode === 'light') ? storedMode : 'light';
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

  const colorMode = useMemo(
    () => ({
      mode,
      // Toggle function now implicitly updates localStorage via the useEffect
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [mode]
  );

  const theme = useMemo(() => createAppTheme(mode), [mode]);

  return (
    <ThemeContext.Provider value={colorMode}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export default defaultTheme;

