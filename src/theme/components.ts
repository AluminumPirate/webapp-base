import { Components } from '@mui/material/styles';

const components: Components = {
MuiButton: {
    styleOverrides: {
    root: {
        borderRadius: 4,
        textTransform: 'none',
        fontWeight: 500,
    },
    contained: {
        boxShadow: 'none',
        '&:hover': {
        boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
        },
    },
    outlined: {
        borderWidth: 1,
        '&:hover': {
        borderWidth: 1,
        },
    },
    },
    defaultProps: {
    disableElevation: true,
    },
},
MuiTextField: {
    styleOverrides: {
    root: {
        '& .MuiOutlinedInput-root': {
        borderRadius: 4,
        },
    },
    },
    defaultProps: {
    variant: 'outlined',
    fullWidth: true,
    },
},
MuiCard: {
    styleOverrides: {
    root: {
        borderRadius: 8,
        boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.1), 0px 4px 5px 0px rgba(0,0,0,0.07), 0px 1px 10px 0px rgba(0,0,0,0.06)',
    },
    },
},
MuiCardHeader: {
    styleOverrides: {
    root: {
        padding: '16px 24px',
    },
    },
},
MuiCardContent: {
    styleOverrides: {
    root: {
        padding: '24px',
        '&:last-child': {
        paddingBottom: '24px',
        },
    },
    },
},
MuiCardActions: {
    styleOverrides: {
    root: {
        padding: '16px 24px',
    },
    },
},
MuiFormLabel: {
    styleOverrides: {
    root: {
        fontSize: '0.875rem',
    },
    },
},
MuiInputBase: {
    styleOverrides: {
    root: {
        fontSize: '0.875rem',
    },
    },
},
MuiTableCell: {
    styleOverrides: {
    root: {
        padding: '12px 16px',
    },
    head: {
        fontWeight: 600,
    },
    },
},
MuiChip: {
    styleOverrides: {
    root: {
        borderRadius: 16,
    },
    },
},
MuiSwitch: {
    styleOverrides: {
    root: {
        width: 42,
        height: 26,
        padding: 0,
    },
    switchBase: {
        padding: 1,
        '&.Mui-checked': {
        transform: 'translateX(16px)',
        },
    },
    thumb: {
        width: 24,
        height: 24,
    },
    track: {
        borderRadius: 13,
    },
    },
},
};

export default components;

