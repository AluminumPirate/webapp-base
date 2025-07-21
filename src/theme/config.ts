import { createTheme, Theme, ThemeOptions } from '@mui/material/styles';
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

// Function to get available themes (helps with Fast Refresh)
export const getAvailableThemes = (): AppThemeMode[] => Object.keys(themeConfigs) as AppThemeMode[];

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