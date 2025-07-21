import React, { useState } from 'react';
import {
Drawer,
List,
ListItemButton,
ListItemText,
Divider,
Box,
Typography,
useTheme,
Collapse
} from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InfoIcon from '@mui/icons-material/Info';
import PaletteIcon from '@mui/icons-material/Palette';
import SidebarItem from './SidebarItem';
import { AnimatedIconButton } from '../../components';

interface SidebarProps {
open: boolean;
onClose: () => void;
}

interface NavItem {
text: string;
icon: React.ReactElement;
to: string;
}

interface NavSection {
id: string;
text: string;
items: NavItem[];
}

const drawerWidth = 240;
const collapsedWidth = 60;

const Sidebar: React.FC<SidebarProps> = ({ open, onClose }) => {
const theme = useTheme();

const [openSections, setOpenSections] = useState<Record<string, boolean>>({ 'main': true, 'other': true });

const handleToggleSection = (sectionId: string) => {
    setOpenSections(prev => ({ ...prev, [sectionId]: !prev[sectionId] }));
};

const navigationStructure: NavSection[] = [
    {
        id: 'main',
        text: 'Main Area',
        items: [
            { text: 'Home', icon: <HomeIcon />, to: '/' },
            { text: 'Dashboard', icon: <DashboardIcon />, to: '/dashboard' },
        ]
    },
    {
        id: 'other',
        text: 'Other',
        items: [
            { text: 'Settings', icon: <SettingsIcon />, to: '/settings' },
            { text: 'Components', icon: <PaletteIcon />, to: '/components' },
        ]
    }
];

const aboutNavItem = { text: 'About', icon: <InfoIcon />, to: '/about' };

return (
    <Drawer
    sx={{
        width: open ? drawerWidth : collapsedWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: open ? theme.transitions.duration.enteringScreen : theme.transitions.duration.leavingScreen,
        }),
        '& .MuiDrawer-paper': {
        display: 'flex',
        flexDirection: 'column',
        width: open ? drawerWidth : collapsedWidth,
        overflowX: 'hidden',
        boxSizing: 'border-box',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: open ? theme.transitions.duration.enteringScreen : theme.transitions.duration.leavingScreen,

        }),
        },
    }}
    variant="persistent"
    anchor="left"
    open={true}
    >
    <Box sx={{ 
    display: 'flex', 
    alignItems: 'center', 
    p: 1, 
    justifyContent: 'space-between',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    minHeight: '64px',
    }}>
    {open && (
        <Typography variant="h6" sx={{ flexGrow: 1, ml: 1 }}>
        Base
        </Typography>
    )}
    <AnimatedIconButton 
        isActive={open} 
        onClick={onClose} 
        color="inherit"
        sx={{ mr: open ? 0 : 'auto', ml: open ? 0: 'auto' }}
    />
    </Box>
    <Divider />
    <List sx={{ pt: open ? 1 : 0, flexGrow: 1 }}>
    {navigationStructure.map((section) => (
        <React.Fragment key={section.id}>
        {open && (
            <ListItemButton onClick={() => handleToggleSection(section.id)} sx={{ minHeight: 48 }}>
            <ListItemText primary={section.text} sx={{ opacity: open ? 1 : 0 }} />
            {openSections[section.id] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
        )}
        <Collapse in={open ? openSections[section.id] : true} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
            {section.items.map((item) => (
                <SidebarItem 
                    key={item.text} 
                    open={open} 
                    text={item.text} 
                    icon={item.icon} 
                    to={item.to} 
                />
            ))}
            </List>
        </Collapse>
        {open && <Divider sx={{ my: 1 }} />}
        </React.Fragment>
    ))}
    </List>
    <Box sx={{ mt: 'auto' }}>
    <Divider />
    <List sx={{ py: 0 }}>
        <SidebarItem 
            key={aboutNavItem.text} 
            open={open} 
            text={aboutNavItem.text} 
            icon={aboutNavItem.icon} 
            to={aboutNavItem.to} 
        />
    </List>
    </Box>
    </Drawer>
);
};

export default Sidebar;

