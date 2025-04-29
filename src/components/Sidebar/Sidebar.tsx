import React from 'react';
import { Link } from 'react-router-dom';
import {
Drawer,
List,
ListItem,
ListItemIcon,
ListItemText,
Divider,
IconButton,
Box,
Typography,
useTheme
} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InfoIcon from '@mui/icons-material/Info';

interface SidebarProps {
open: boolean;
onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ open, onClose }) => {
const theme = useTheme();

return (
    <Drawer
    sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
        width: 240,
        boxSizing: 'border-box',
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        },
    }}
    variant="persistent"
    anchor="left"
    open={open}
    >
    <Box sx={{ 
    display: 'flex', 
    alignItems: 'center', 
    padding: 1, 
    justifyContent: 'space-between',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText
    }}>
    <Typography variant="h6" sx={{ ml: 2 }}>
        Dashboard
    </Typography>
    <IconButton onClick={onClose} sx={{ color: 'inherit' }}>
        <ChevronLeftIcon />
    </IconButton>
    </Box>
    <Divider />
    <List>
    <Link to="/" style={{ textDecoration: 'none', color: 'inherit', display: 'block', width: '100%' }}>
    <ListItem sx={{ 
        '&:hover': { 
        backgroundColor: theme.palette.action.hover 
        },
        transition: theme.transitions.create('background-color', {
        duration: theme.transitions.duration.shorter
        })
    }}>
        <ListItemIcon>
        <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
    </ListItem>
    </Link>
    
    <Link to="/dashboard" style={{ textDecoration: 'none', color: 'inherit', display: 'block', width: '100%' }}>
    <ListItem sx={{ 
        '&:hover': { 
        backgroundColor: theme.palette.action.hover 
        },
        transition: theme.transitions.create('background-color', {
        duration: theme.transitions.duration.shorter
        })
    }}>
        <ListItemIcon>
        <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
    </ListItem>
    </Link>
    
    <Link to="/settings" style={{ textDecoration: 'none', color: 'inherit', display: 'block', width: '100%' }}>
    <ListItem sx={{ 
        '&:hover': { 
        backgroundColor: theme.palette.action.hover 
        },
        transition: theme.transitions.create('background-color', {
        duration: theme.transitions.duration.shorter
        })
    }}>
        <ListItemIcon>
        <SettingsIcon />
        </ListItemIcon>
        <ListItemText primary="Settings" />
    </ListItem>
    </Link>
    
    <Link to="/about" style={{ textDecoration: 'none', color: 'inherit', display: 'block', width: '100%' }}>
    <ListItem sx={{ 
        '&:hover': { 
        backgroundColor: theme.palette.action.hover 
        },
        transition: theme.transitions.create('background-color', {
        duration: theme.transitions.duration.shorter
        })
    }}>
        <ListItemIcon>
        <InfoIcon />
        </ListItemIcon>
        <ListItemText primary="About" />
    </ListItem>
    </Link>
    </List>

    <Divider />
    </Drawer>
);
};

export default Sidebar;

