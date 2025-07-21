import { PaletteOptions } from '@mui/material/styles';

// Light mode palette
export const lightPalette: PaletteOptions = {
mode: 'light',
primary: {
    main: '#1976d2',
    light: '#42a5f5',
    dark: '#1565c0',
    contrastText: '#ffffff',
},
secondary: {
    main: '#9c27b0',
    light: '#ba68c8',
    dark: '#7b1fa2',
    contrastText: '#ffffff',
},
error: {
    main: '#d32f2f',
    light: '#ef5350',
    dark: '#c62828',
    contrastText: '#ffffff',
},
warning: {
    main: '#ed6c02',
    light: '#ff9800',
    dark: '#e65100',
    contrastText: '#ffffff',
},
info: {
    main: '#0288d1',
    light: '#03a9f4',
    dark: '#01579b',
    contrastText: '#ffffff',
},
success: {
    main: '#2e7d32',
    light: '#4caf50',
    dark: '#1b5e20',
    contrastText: '#ffffff',
},
grey: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
},
background: {
    default: '#ffffff',
    paper: '#ffffff',
},
text: {
    primary: 'rgba(0, 0, 0, 0.87)',
    secondary: 'rgba(0, 0, 0, 0.6)',
    disabled: 'rgba(0, 0, 0, 0.38)',
},
divider: 'rgba(0, 0, 0, 0.12)',
};

// Dark mode palette
export const darkPalette: PaletteOptions = {
mode: 'dark',
primary: {
    main: '#90caf9',
    light: '#e3f2fd',
    dark: '#42a5f5',
    contrastText: 'rgba(0, 0, 0, 0.87)',
},
secondary: {
    main: '#ce93d8',
    light: '#f3e5f5',
    dark: '#ab47bc',
    contrastText: 'rgba(0, 0, 0, 0.87)',
},
error: {
    main: '#f44336',
    light: '#e57373',
    dark: '#d32f2f',
    contrastText: '#ffffff',
},
warning: {
    main: '#ffa726',
    light: '#ffb74d',
    dark: '#f57c00',
    contrastText: 'rgba(0, 0, 0, 0.87)',
},
info: {
    main: '#29b6f6',
    light: '#4fc3f7',
    dark: '#0288d1',
    contrastText: 'rgba(0, 0, 0, 0.87)',
},
success: {
    main: '#66bb6a',
    light: '#81c784',
    dark: '#388e3c',
    contrastText: 'rgba(0, 0, 0, 0.87)',
},
grey: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
},
background: {
    default: '#121212',
    paper: '#1e1e1e',
},
text: {
    primary: '#ffffff',
    secondary: 'rgba(255, 255, 255, 0.7)',
    disabled: 'rgba(255, 255, 255, 0.5)',
},
divider: 'rgba(255, 255, 255, 0.12)',
};

// Summer theme palette - warm, vibrant colors
export const summerPalette: PaletteOptions = {
mode: 'light',
primary: {
    main: '#FF6B35', // Sunset orange
    light: '#FF8F65',
    dark: '#E55A2B',
    contrastText: '#ffffff',
},
secondary: {
    main: '#FF7F7F', // Coral pink
    light: '#FFB3B3',
    dark: '#E55C5C',
    contrastText: '#ffffff',
},
error: {
    main: '#FF4757', // Vibrant red
    light: '#FF6B7A',
    dark: '#E8334A',
    contrastText: '#ffffff',
},
warning: {
    main: '#FFA726', // Tropical yellow
    light: '#FFCC80',
    dark: '#FF8F00',
    contrastText: 'rgba(0, 0, 0, 0.87)',
},
info: {
    main: '#00D4FF', // Tropical turquoise
    light: '#4DDDFF',
    dark: '#00BFFF',
    contrastText: 'rgba(0, 0, 0, 0.87)',
},
success: {
    main: '#06D6A0', // Mint green
    light: '#4DE5BC',
    dark: '#05C195',
    contrastText: '#ffffff',
},
grey: {
    50: '#FFF8F5', // Warm whites
    100: '#FFF0E6',
    200: '#FFE6D9',
    300: '#FFDBCC',
    400: '#E8C4A0',
    500: '#C49A6B',
    600: '#A67C52',
    700: '#8B6539',
    800: '#704F26',
    900: '#543A1A',
},
background: {
    default: '#FFF8F5', // Warm cream
    paper: '#FFFFFF',
},
text: {
    primary: '#543A1A', // Warm dark brown
    secondary: '#8B6539',
    disabled: '#C49A6B',
},
divider: '#FFE6D9',
};

// Ocean theme palette - deep blues and teals
export const oceanPalette: PaletteOptions = {
mode: 'light',
primary: {
    main: '#006B96', // Deep ocean blue
    light: '#4A90A4',
    dark: '#004F73',
    contrastText: '#ffffff',
},
secondary: {
    main: '#52B69A', // Seafoam green
    light: '#76C7B0',
    dark: '#3A8B72',
    contrastText: '#ffffff',
},
error: {
    main: '#E63946', // Coral red
    light: '#FF6B73',
    dark: '#C5282F',
    contrastText: '#ffffff',
},
warning: {
    main: '#F77F00', // Sunset orange
    light: '#FF9F40',
    dark: '#E56C00',
    contrastText: '#ffffff',
},
info: {
    main: '#219EBC', // Bright ocean blue
    light: '#4FB3D3',
    dark: '#1A7C95',
    contrastText: '#ffffff',
},
success: {
    main: '#8ECAE6', // Light blue
    light: '#B8D8E9',
    dark: '#6BA6CD',
    contrastText: 'rgba(0, 0, 0, 0.87)',
},
grey: {
    50: '#F8FFFE',
    100: '#E8F4F8',
    200: '#D6EBF0',
    300: '#B8D4D9',
    400: '#8FB8C0',
    500: '#6B9CA6',
    600: '#4A7C87',
    700: '#2F5D66',
    800: '#1A3E44',
    900: '#0A1F22',
},
background: {
    default: '#F8FFFE', // Ocean mist
    paper: '#ffffff',
},
text: {
    primary: '#0A1F22', // Deep ocean
    secondary: '#2F5D66',
    disabled: '#8FB8C0',
},
divider: '#D6EBF0',
};

// Desert theme palette - warm earth tones
export const desertPalette: PaletteOptions = {
mode: 'light',
primary: {
    main: '#D2691E', // Sandstone
    light: '#E89858',
    dark: '#B8541A',
    contrastText: '#ffffff',
},
secondary: {
    main: '#CD853F', // Peru
    light: '#D4A574',
    dark: '#A66A32',
    contrastText: '#ffffff',
},
error: {
    main: '#A0522D', // Sienna
    light: '#C17A5C',
    dark: '#7A3F23',
    contrastText: '#ffffff',
},
warning: {
    main: '#DAA520', // Goldenrod
    light: '#E8C547',
    dark: '#B8891A',
    contrastText: 'rgba(0, 0, 0, 0.87)',
},
info: {
    main: '#4682B4', // Steel blue (desert sky)
    light: '#7BA3C7',
    dark: '#366491',
    contrastText: '#ffffff',
},
success: {
    main: '#9ACD32', // Yellow green (cactus)
    light: '#B8DB5E',
    dark: '#7BA428',
    contrastText: 'rgba(0, 0, 0, 0.87)',
},
grey: {
    50: '#FBF8F3',
    100: '#F5EFE7',
    200: '#EDE4D3',
    300: '#DFD0B8',
    400: '#C8B99C',
    500: '#B8A082',
    600: '#A0896B',
    700: '#8B7355',
    800: '#6B5940',
    900: '#4A3E2A',
},
background: {
    default: '#FBF8F3', // Sand
    paper: '#ffffff',
},
text: {
    primary: '#4A3E2A', // Dark brown
    secondary: '#6B5940',
    disabled: '#A0896B',
},
divider: '#EDE4D3',
};

// Tropical theme palette - vibrant jungle colors
export const tropicalPalette: PaletteOptions = {
mode: 'light',
primary: {
    main: '#00A86B', // Jade green
    light: '#4DBB84',
    dark: '#008454',
    contrastText: '#ffffff',
},
secondary: {
    main: '#FF1493', // Deep pink
    light: '#FF69B4',
    dark: '#E1127A',
    contrastText: '#ffffff',
},
error: {
    main: '#FF4500', // Orange red
    light: '#FF7F50',
    dark: '#E63E00',
    contrastText: '#ffffff',
},
warning: {
    main: '#FFD700', // Gold
    light: '#FFE55C',
    dark: '#E6C200',
    contrastText: 'rgba(0, 0, 0, 0.87)',
},
info: {
    main: '#00CED1', // Dark turquoise
    light: '#4FD6D8',
    dark: '#00A8AA',
    contrastText: '#ffffff',
},
success: {
    main: '#32CD32', // Lime green
    light: '#66D866',
    dark: '#28A428',
    contrastText: 'rgba(0, 0, 0, 0.87)',
},
grey: {
    50: '#F0FFF0',
    100: '#E6FFE6',
    200: '#D3FFD3',
    300: '#B8FFB8',
    400: '#99CC99',
    500: '#7A997A',
    600: '#5C7A5C',
    700: '#405C40',
    800: '#263D26',
    900: '#0D1F0D',
},
background: {
    default: '#F0FFF0', // Honeydew
    paper: '#ffffff',
},
text: {
    primary: '#0D1F0D', // Forest green
    secondary: '#263D26',
    disabled: '#7A997A',
},
divider: '#D3FFD3',
};

// Carnival theme palette - festive and bold
export const carnivalPalette: PaletteOptions = {
mode: 'light',
primary: {
    main: '#8A2BE2', // Blue violet
    light: '#A555ED',
    dark: '#6B21B8',
    contrastText: '#ffffff',
},
secondary: {
    main: '#FFD700', // Gold
    light: '#FFE55C',
    dark: '#E6C200',
    contrastText: 'rgba(0, 0, 0, 0.87)',
},
error: {
    main: '#DC143C', // Crimson
    light: '#E8476F',
    dark: '#C21130',
    contrastText: '#ffffff',
},
warning: {
    main: '#FF8C00', // Dark orange
    light: '#FFB84D',
    dark: '#E67E00',
    contrastText: '#ffffff',
},
info: {
    main: '#1E90FF', // Dodger blue
    light: '#5CAEFF',
    dark: '#1A7DE6',
    contrastText: '#ffffff',
},
success: {
    main: '#00FF7F', // Spring green
    light: '#4DFFAC',
    dark: '#00E671',
    contrastText: 'rgba(0, 0, 0, 0.87)',
},
grey: {
    50: '#FDF7FF',
    100: '#F9EEFF',
    200: '#F2E0FF',
    300: '#E6CCFF',
    400: '#D4B3FF',
    500: '#C299FF',
    600: '#A066CC',
    700: '#7D4D99',
    800: '#5C3566',
    900: '#3B1F33',
},
background: {
    default: '#FDF7FF', // Lavender blush
    paper: '#ffffff',
},
text: {
    primary: '#3B1F33', // Dark purple
    secondary: '#5C3566',
    disabled: '#A066CC',
},
divider: '#F2E0FF',
};

// Winter theme palette - cool and crisp
export const winterPalette: PaletteOptions = {
mode: 'light',
primary: {
    main: '#4169E1', // Royal blue
    light: '#6A85E8',
    dark: '#2E4BC7',
    contrastText: '#ffffff',
},
secondary: {
    main: '#B0C4DE', // Light steel blue
    light: '#CDD9E8',
    dark: '#8FA3C7',
    contrastText: 'rgba(0, 0, 0, 0.87)',
},
error: {
    main: '#B22222', // Fire brick
    light: '#D15C5C',
    dark: '#921B1B',
    contrastText: '#ffffff',
},
warning: {
    main: '#4682B4', // Steel blue
    light: '#7BA3C7',
    dark: '#366491',
    contrastText: '#ffffff',
},
info: {
    main: '#87CEEB', // Sky blue
    light: '#ADE1F0',
    dark: '#6AB5D4',
    contrastText: 'rgba(0, 0, 0, 0.87)',
},
success: {
    main: '#2E8B57', // Sea green
    light: '#5CA87A',
    dark: '#236F45',
    contrastText: '#ffffff',
},
grey: {
    50: '#F8FAFC',
    100: '#F1F5F9',
    200: '#E2E8F0',
    300: '#CBD5E1',
    400: '#94A3B8',
    500: '#64748B',
    600: '#475569',
    700: '#334155',
    800: '#1E293B',
    900: '#0F172A',
},
background: {
    default: '#F8FAFC', // Slate 50
    paper: '#ffffff',
},
text: {
    primary: '#0F172A', // Slate 900
    secondary: '#334155',
    disabled: '#94A3B8',
},
divider: '#E2E8F0',
};

// Pastel theme palette - soft and dreamy
export const pastelPalette: PaletteOptions = {
mode: 'light',
primary: {
    main: '#DDA0DD', // Plum
    light: '#E8BBE8',
    dark: '#C583C5',
    contrastText: 'rgba(0, 0, 0, 0.87)',
},
secondary: {
    main: '#98FB98', // Pale green
    light: '#B8FBB8',
    dark: '#7DD17D',
    contrastText: 'rgba(0, 0, 0, 0.87)',
},
error: {
    main: '#F08080', // Light coral
    light: '#F5A8A8',
    dark: '#E55C5C',
    contrastText: 'rgba(0, 0, 0, 0.87)',
},
warning: {
    main: '#F0E68C', // Khaki
    light: '#F5ECA8',
    dark: '#E6D66F',
    contrastText: 'rgba(0, 0, 0, 0.87)',
},
info: {
    main: '#87CEFA', // Light sky blue
    light: '#B1DBFB',
    dark: '#5FB9F7',
    contrastText: 'rgba(0, 0, 0, 0.87)',
},
success: {
    main: '#90EE90', // Light green
    light: '#B5F2B5',
    dark: '#6BE26B',
    contrastText: 'rgba(0, 0, 0, 0.87)',
},
grey: {
    50: '#FEFEFE',
    100: '#FDFDFD',
    200: '#F9F9F9',
    300: '#F0F0F0',
    400: '#E0E0E0',
    500: '#C0C0C0',
    600: '#A0A0A0',
    700: '#808080',
    800: '#606060',
    900: '#404040',
},
background: {
    default: '#FEFEFE', // Almost white
    paper: '#ffffff',
},
text: {
    primary: '#404040', // Soft black
    secondary: '#606060',
    disabled: '#A0A0A0',
},
divider: '#F0F0F0',
};

// Chocolate theme palette - rich browns and creams
export const chocolatePalette: PaletteOptions = {
mode: 'light',
primary: {
    main: '#8B4513', // Saddle brown
    light: '#A66D42',
    dark: '#6B350F',
    contrastText: '#ffffff',
},
secondary: {
    main: '#D2691E', // Chocolate
    light: '#E89858',
    dark: '#B8541A',
    contrastText: '#ffffff',
},
error: {
    main: '#A0522D', // Sienna
    light: '#C17A5C',
    dark: '#7A3F23',
    contrastText: '#ffffff',
},
warning: {
    main: '#CD853F', // Peru
    light: '#D4A574',
    dark: '#A66A32',
    contrastText: 'rgba(0, 0, 0, 0.87)',
},
info: {
    main: '#DEB887', // Burlywood
    light: '#E8CCA3',
    dark: '#C49A6B',
    contrastText: 'rgba(0, 0, 0, 0.87)',
},
success: {
    main: '#F4A460', // Sandy brown
    light: '#F7BD85',
    dark: '#E8924A',
    contrastText: 'rgba(0, 0, 0, 0.87)',
},
grey: {
    50: '#FBF8F3',
    100: '#F5EFE7',
    200: '#EDE4D3',
    300: '#DFD0B8',
    400: '#C8B99C',
    500: '#B8A082',
    600: '#A0896B',
    700: '#8B7355',
    800: '#6B5940',
    900: '#4A3E2A',
},
background: {
    default: '#FBF8F3', // Cream
    paper: '#ffffff',
},
text: {
    primary: '#4A3E2A', // Dark brown
    secondary: '#6B5940',
    disabled: '#A0896B',
},
divider: '#EDE4D3',
};

// Galactic theme palette - cosmic space colors
export const galacticPalette: PaletteOptions = {
mode: 'dark',
primary: {
    main: '#9C27B0', // Deep purple
    light: '#BA68C8',
    dark: '#7B1FA2',
    contrastText: '#ffffff',
},
secondary: {
    main: '#3F51B5', // Indigo
    light: '#7986CB',
    dark: '#303F9F',
    contrastText: '#ffffff',
},
error: {
    main: '#E91E63', // Pink
    light: '#F06292',
    dark: '#C2185B',
    contrastText: '#ffffff',
},
warning: {
    main: '#FF9800', // Orange
    light: '#FFB74D',
    dark: '#F57C00',
    contrastText: 'rgba(0, 0, 0, 0.87)',
},
info: {
    main: '#00BCD4', // Cyan
    light: '#4DD0E1',
    dark: '#0097A7',
    contrastText: '#ffffff',
},
success: {
    main: '#4CAF50', // Green
    light: '#81C784',
    dark: '#388E3C',
    contrastText: 'rgba(0, 0, 0, 0.87)',
},
grey: {
    50: '#1A0A2E', // Deep space
    100: '#16213E',
    200: '#0F0F23',
    300: '#16171A',
    400: '#2A2D3E',
    500: '#3D4466',
    600: '#515B87',
    700: '#6573A8',
    800: '#7A8BC9',
    900: '#8FA3EA',
},
background: {
    default: '#0A0A0A', // Deep space black
    paper: '#1A0A2E',
},
text: {
    primary: '#E0E6FF', // Starlight
    secondary: '#B3C1FF',
    disabled: '#6573A8',
},
divider: '#2A2D3E',
};

// Cherry theme palette - cherry blossom inspired
export const cherryPalette: PaletteOptions = {
mode: 'light',
primary: {
    main: '#E91E63', // Deep pink
    light: '#F06292',
    dark: '#C2185B',
    contrastText: '#ffffff',
},
secondary: {
    main: '#FF8A95', // Light pink
    light: '#FFBDC4',
    dark: '#E57373',
    contrastText: 'rgba(0, 0, 0, 0.87)',
},
error: {
    main: '#D32F2F', // Red
    light: '#EF5350',
    dark: '#C62828',
    contrastText: '#ffffff',
},
warning: {
    main: '#FF5722', // Deep orange
    light: '#FF8A65',
    dark: '#E64A19',
    contrastText: '#ffffff',
},
info: {
    main: '#2196F3', // Blue
    light: '#64B5F6',
    dark: '#1976D2',
    contrastText: '#ffffff',
},
success: {
    main: '#4CAF50', // Green
    light: '#81C784',
    dark: '#388E3C',
    contrastText: 'rgba(0, 0, 0, 0.87)',
},
grey: {
    50: '#FFF8F8',
    100: '#FFF0F0',
    200: '#FFE6E6',
    300: '#FFD6D6',
    400: '#FFB3B3',
    500: '#FF9999',
    600: '#E57F7F',
    700: '#CC6666',
    800: '#B24C4C',
    900: '#993333',
},
background: {
    default: '#FFF8F8', // Cherry blossom white
    paper: '#ffffff',
},
text: {
    primary: '#4A1A1A', // Dark cherry
    secondary: '#7A2A2A',
    disabled: '#B24C4C',
},
divider: '#FFE6E6',
};

// Netflix theme palette - inspired by Netflix branding
export const netflixPalette: PaletteOptions = {
mode: 'dark',
primary: {
    main: '#E50914', // Netflix red
    light: '#F44336',
    dark: '#C62828',
    contrastText: '#ffffff',
},
secondary: {
    main: '#B71C1C', // Dark red
    light: '#E53935',
    dark: '#8E0000',
    contrastText: '#ffffff',
},
error: {
    main: '#FF1744', // Bright red
    light: '#FF5983',
    dark: '#D50000',
    contrastText: '#ffffff',
},
warning: {
    main: '#FF9800', // Orange
    light: '#FFB74D',
    dark: '#F57C00',
    contrastText: 'rgba(0, 0, 0, 0.87)',
},
info: {
    main: '#2196F3', // Blue
    light: '#64B5F6',
    dark: '#1976D2',
    contrastText: '#ffffff',
},
success: {
    main: '#4CAF50', // Green
    light: '#81C784',
    dark: '#388E3C',
    contrastText: 'rgba(0, 0, 0, 0.87)',
},
grey: {
    50: '#000000',
    100: '#111111',
    200: '#1A1A1A',
    300: '#2A2A2A',
    400: '#3A3A3A',
    500: '#4A4A4A',
    600: '#6A6A6A',
    700: '#8A8A8A',
    800: '#AAAAAA',
    900: '#CCCCCC',
},
background: {
    default: '#000000', // Netflix black
    paper: '#111111',
},
text: {
    primary: '#FFFFFF',
    secondary: '#CCCCCC',
    disabled: '#6A6A6A',
},
divider: '#2A2A2A',
};

// Sunset theme palette - warm sunset gradients
export const sunsetPalette: PaletteOptions = {
mode: 'light',
primary: {
    main: '#FF6B35', // Sunset orange
    light: '#FF9966',
    dark: '#E55A2B',
    contrastText: '#ffffff',
},
secondary: {
    main: '#F7931E', // Golden orange
    light: '#FFB74D',
    dark: '#E65100',
    contrastText: '#ffffff',
},
error: {
    main: '#E91E63', // Pink
    light: '#F06292',
    dark: '#C2185B',
    contrastText: '#ffffff',
},
warning: {
    main: '#FFC107', // Amber
    light: '#FFD54F',
    dark: '#FFA000',
    contrastText: 'rgba(0, 0, 0, 0.87)',
},
info: {
    main: '#673AB7', // Deep purple
    light: '#9575CD',
    dark: '#512DA8',
    contrastText: '#ffffff',
},
success: {
    main: '#4CAF50', // Green
    light: '#81C784',
    dark: '#388E3C',
    contrastText: 'rgba(0, 0, 0, 0.87)',
},
grey: {
    50: '#FFF8F0',
    100: '#FFF3E0',
    200: '#FFECB3',
    300: '#FFE082',
    400: '#FFD54F',
    500: '#FFCA28',
    600: '#FFB300',
    700: '#FF8F00',
    800: '#FF6F00',
    900: '#E65100',
},
background: {
    default: '#FFF8F0', // Sunset cream
    paper: '#ffffff',
},
text: {
    primary: '#3E2723', // Dark brown
    secondary: '#5D4037',
    disabled: '#8D6E63',
},
divider: '#FFECB3',
};

// Darkness theme palette - ultra dark theme
export const darknessPalette: PaletteOptions = {
mode: 'dark',
primary: {
    main: '#BB86FC', // Light purple
    light: '#E1BEE7',
    dark: '#985EFF',
    contrastText: 'rgba(0, 0, 0, 0.87)',
},
secondary: {
    main: '#03DAC6', // Teal
    light: '#66FFF9',
    dark: '#00A896',
    contrastText: 'rgba(0, 0, 0, 0.87)',
},
error: {
    main: '#CF6679', // Error red
    light: '#F2B8C6',
    dark: '#B00020',
    contrastText: '#ffffff',
},
warning: {
    main: '#F1C232', // Warning yellow
    light: '#F6D55C',
    dark: '#E8B000',
    contrastText: 'rgba(0, 0, 0, 0.87)',
},
info: {
    main: '#2196F3', // Info blue
    light: '#6EC6FF',
    dark: '#0069C0',
    contrastText: '#ffffff',
},
success: {
    main: '#4CAF50', // Success green
    light: '#80E27E',
    dark: '#087F23',
    contrastText: 'rgba(0, 0, 0, 0.87)',
},
grey: {
    50: '#000000',
    100: '#0A0A0A',
    200: '#121212',
    300: '#1E1E1E',
    400: '#2A2A2A',
    500: '#3A3A3A',
    600: '#4A4A4A',
    700: '#6A6A6A',
    800: '#8A8A8A',
    900: '#AAAAAA',
},
background: {
    default: '#000000', // Pure black
    paper: '#0A0A0A',
},
text: {
    primary: '#FFFFFF',
    secondary: 'rgba(255, 255, 255, 0.7)',
    disabled: 'rgba(255, 255, 255, 0.5)',
},
divider: 'rgba(255, 255, 255, 0.12)',
};

// Panther theme palette - sleek black with metallic accents
export const pantherPalette: PaletteOptions = {
mode: 'dark',
primary: {
    main: '#C0C0C0', // Silver
    light: '#E8E8E8',
    dark: '#A0A0A0',
    contrastText: 'rgba(0, 0, 0, 0.87)',
},
secondary: {
    main: '#FFD700', // Gold
    light: '#FFE55C',
    dark: '#FFC107',
    contrastText: 'rgba(0, 0, 0, 0.87)',
},
error: {
    main: '#FF1744', // Bright red
    light: '#FF5983',
    dark: '#D50000',
    contrastText: '#ffffff',
},
warning: {
    main: '#FF9800', // Orange
    light: '#FFB74D',
    dark: '#F57C00',
    contrastText: 'rgba(0, 0, 0, 0.87)',
},
info: {
    main: '#00BCD4', // Cyan
    light: '#4DD0E1',
    dark: '#0097A7',
    contrastText: '#ffffff',
},
success: {
    main: '#4CAF50', // Green
    light: '#81C784',
    dark: '#388E3C',
    contrastText: 'rgba(0, 0, 0, 0.87)',
},
grey: {
    50: '#000000',
    100: '#0D0D0D',
    200: '#1A1A1A',
    300: '#262626',
    400: '#333333',
    500: '#404040',
    600: '#595959',
    700: '#737373',
    800: '#8C8C8C',
    900: '#A6A6A6',
},
background: {
    default: '#000000', // Pure black
    paper: '#0D0D0D',
},
text: {
    primary: '#F5F5F5', // Light silver
    secondary: '#C0C0C0',
    disabled: '#737373',
},
divider: '#333333',
};

// Vomit theme palette - sickly but surprisingly elegant yellow-green
export const vomitPalette: PaletteOptions = {
mode: 'light',
primary: {
    main: '#9ACD32', // Yellow green
    light: '#B8DB5E',
    dark: '#7BA428',
    contrastText: 'rgba(0, 0, 0, 0.87)',
},
secondary: {
    main: '#DAA520', // Goldenrod
    light: '#E8C547',
    dark: '#B8891A',
    contrastText: 'rgba(0, 0, 0, 0.87)',
},
error: {
    main: '#FF6347', // Tomato
    light: '#FF8E7B',
    dark: '#E8553C',
    contrastText: '#ffffff',
},
warning: {
    main: '#ADFF2F', // Green yellow
    light: '#C6FF65',
    dark: '#9AE625',
    contrastText: 'rgba(0, 0, 0, 0.87)',
},
info: {
    main: '#32CD32', // Lime green
    light: '#66D866',
    dark: '#28A428',
    contrastText: 'rgba(0, 0, 0, 0.87)',
},
success: {
    main: '#228B22', // Forest green
    light: '#5CB85C',
    dark: '#1B6B1B',
    contrastText: '#ffffff',
},
grey: {
    50: '#F9FFF4', // Very light green tint
    100: '#F0F8E6',
    200: '#E6F2D3',
    300: '#D9EBBF',
    400: '#C4D39B',
    500: '#A8B86B',
    600: '#8B9A52',
    700: '#6E7A39',
    800: '#515A26',
    900: '#3A4119',
},
background: {
    default: '#F9FFF4', // Pale lime
    paper: '#ffffff',
},
text: {
    primary: '#3A4119', // Dark olive
    secondary: '#515A26',
    disabled: '#8B9A52',
},
divider: '#E6F2D3',
};

// Light Purple Bloom theme palette - soft lavender floral
export const lightPurpleBloomPalette: PaletteOptions = {
mode: 'light',
primary: {
    main: '#E6E6FA', // Lavender
    light: '#F0F0FF',
    dark: '#D8BFD8',
    contrastText: 'rgba(0, 0, 0, 0.87)',
},
secondary: {
    main: '#DDA0DD', // Plum
    light: '#E8BBE8',
    dark: '#C583C5',
    contrastText: 'rgba(0, 0, 0, 0.87)',
},
error: {
    main: '#DA70D6', // Orchid
    light: '#E8A5E8',
    dark: '#C25CC2',
    contrastText: 'rgba(0, 0, 0, 0.87)',
},
warning: {
    main: '#BA55D3', // Medium orchid
    light: '#D085E8',
    dark: '#A347C2',
    contrastText: '#ffffff',
},
info: {
    main: '#9370DB', // Medium slate blue
    light: '#B59DE8',
    dark: '#7A5BC2',
    contrastText: '#ffffff',
},
success: {
    main: '#8A2BE2', // Blue violet
    light: '#A555ED',
    dark: '#6B21B8',
    contrastText: '#ffffff',
},
grey: {
    50: '#FEFAFF', // Very light purple tint
    100: '#FBF5FF',
    200: '#F5EBFF',
    300: '#EEDBFF',
    400: '#E0C4FF',
    500: '#D1A3FF',
    600: '#B885E8',
    700: '#9966CC',
    800: '#7A47B3',
    900: '#5B2999',
},
background: {
    default: '#FEFAFF', // Lavender blush
    paper: '#ffffff',
},
text: {
    primary: '#4A2C59', // Dark purple
    secondary: '#663366',
    disabled: '#9966CC',
},
divider: '#F5EBFF',
};

// Snot theme palette - mucus green-yellow (surprisingly refined)
export const snotPalette: PaletteOptions = {
mode: 'light',
primary: {
    main: '#C7CD22', // Acid green
    light: '#D6E048',
    dark: '#A8B01B',
    contrastText: 'rgba(0, 0, 0, 0.87)',
},
secondary: {
    main: '#BDB76B', // Dark khaki
    light: '#CCC78F',
    dark: '#A39B5A',
    contrastText: 'rgba(0, 0, 0, 0.87)',
},
error: {
    main: '#CD853F', // Peru
    light: '#D4A574',
    dark: '#A66A32',
    contrastText: 'rgba(0, 0, 0, 0.87)',
},
warning: {
    main: '#CCCC00', // Yellow
    light: '#E6E64D',
    dark: '#B3B300',
    contrastText: 'rgba(0, 0, 0, 0.87)',
},
info: {
    main: '#9ACD32', // Yellow green
    light: '#B8DB5E',
    dark: '#7BA428',
    contrastText: 'rgba(0, 0, 0, 0.87)',
},
success: {
    main: '#6B8E23', // Olive drab
    light: '#8FAA4F',
    dark: '#56711C',
    contrastText: '#ffffff',
},
grey: {
    50: '#FCFDF7', // Very light yellow-green
    100: '#F8FAE6',
    200: '#F2F5D3',
    300: '#EAEFBF',
    400: '#D9E0A0',
    500: '#C4CC7D',
    600: '#AAB366',
    700: '#8F9951',
    800: '#747F3B',
    900: '#596625',
},
background: {
    default: '#FCFDF7', // Pale lime wash
    paper: '#ffffff',
},
text: {
    primary: '#3D4D1A', // Dark olive green
    secondary: '#596625',
    disabled: '#8F9951',
},
divider: '#F2F5D3',
};

// Export all palettes
export default lightPalette;

