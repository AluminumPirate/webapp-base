import { createTheme, ThemeProvider as MuiThemeProvider, Theme, ThemeOptions } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { ReactNode, useMemo, useState, createContext, useContext, useEffect } from 'react';
import { 
  lightPalette, 
  darkPalette, 
  summerPalette, 
  oceanPalette, 
  desertPalette, 
  tropicalPalette, 
  carnivalPalette, 
  winterPalette, 
  pastelPalette, 
  chocolatePalette,
  galacticPalette,
  cherryPalette,
  netflixPalette,
  sunsetPalette,
  darknessPalette,
  pantherPalette,
  vomitPalette,
  lightPurpleBloomPalette,
  snotPalette
} from './palette';
import typography from './typography';
import components from './components';
import breakpoints from './breakpoints';

// Define available theme modes
export type AppThemeMode = 'light' | 'dark' | 'summer' | 'ocean' | 'desert' | 'tropical' | 'carnival' | 'winter' | 'pastel' | 'chocolate' | 'galactic' | 'cherry' | 'netflix' | 'sunset' | 'darkness' | 'panther' | 'vomit' | 'lightPurpleBloom' | 'snot';

// Theme configurations - easy to extend with new themes
export const themeConfigs = {
  light: {
    palette: lightPalette,
    name: 'Light',
    icon: '☀️',
  },
  dark: {
    palette: darkPalette,
    name: 'Dark',
    icon: '🌙',
  },
  summer: {
    palette: summerPalette,
    name: 'Summer',
    icon: '🌅',
  },
  ocean: {
    palette: oceanPalette,
    name: 'Ocean',
    icon: '🌊',
  },
  desert: {
    palette: desertPalette,
    name: 'Desert',
    icon: '🏜️',
  },
  tropical: {
    palette: tropicalPalette,
    name: 'Tropical',
    icon: '🌴',
  },
  carnival: {
    palette: carnivalPalette,
    name: 'Carnival',
    icon: '🎭',
  },
  winter: {
    palette: winterPalette,
    name: 'Winter',
    icon: '❄️',
  },
  pastel: {
    palette: pastelPalette,
    name: 'Pastel',
    icon: '🎨',
  },
  chocolate: {
    palette: chocolatePalette,
    name: 'Chocolate',
    icon: '🍫',
  },
  galactic: {
    palette: galacticPalette,
    name: 'Galactic',
    icon: '🌌',
  },
  cherry: {
    palette: cherryPalette,
    name: 'Cherry',
    icon: '🌸',
  },
  netflix: {
    palette: netflixPalette,
    name: 'Netflix',
    icon: '🎬',
  },
  sunset: {
    palette: sunsetPalette,
    name: 'Sunset',
    icon: '🌇',
  },
  darkness: {
    palette: darknessPalette,
    name: 'Darkness',
    icon: '⚫',
  },
  panther: {
    palette: pantherPalette,
    name: 'Panther',
    icon: '🐾',
  },
  vomit: {
    palette: vomitPalette,
    name: 'Vomit',
    icon: '🤢',
  },
  lightPurpleBloom: {
    palette: lightPurpleBloomPalette,
    name: 'Purple Bloom',
    icon: '🌺',
  },
  snot: {
    palette: snotPalette,
    name: 'Snot',
    icon: '🤧',
  },
} as const;

// Get all available theme modes
export const availableThemes = Object.keys(themeConfigs) as AppThemeMode[];

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
  availableThemes,
  cycleTheme: () => {},
});

export const useThemeContext = () => useContext(ThemeContext);

// Create theme function
export const createAppTheme = (mode: AppThemeMode): Theme => {
  const config = themeConfigs[mode];
  
  const themeOptions: ThemeOptions = {
    palette: config.palette,
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

// Theme provider with multi-theme functionality
interface ThemeProviderProps {
  children: ReactNode;
}

const THEME_STORAGE_KEY = 'appThemeMode'; // Key for localStorage

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
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
  const cycleTheme = () => {
    const currentIndex = availableThemes.indexOf(mode);
    const nextIndex = (currentIndex + 1) % availableThemes.length;
    setMode(availableThemes[nextIndex]);
  };

  const themeMode = useMemo(
    () => ({
      mode,
      setThemeMode: setMode,
      availableThemes,
      cycleTheme,
    }),
    [mode]
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

export default defaultTheme;

