import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
  useTheme,
} from '@mui/material';

interface SidebarItemProps {
  open: boolean;
  text: string;
  icon: React.ReactElement;
  to: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ open, text, icon, to }) => {
  const location = useLocation();
  const theme = useTheme();
  
  const isActive = to === '/' ? location.pathname === '/' : location.pathname.startsWith(to);

  return (
    <Tooltip title={!open ? text : ''} placement="right">
      <ListItemButton
        component={Link}
        to={to}
        selected={isActive}
        sx={{
          minHeight: 48,
          justifyContent: open ? 'initial' : 'center',
          px: 2.5,
          ...(isActive && {
            backgroundColor: theme.palette.action.selected,
          }),
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: open ? 3 : 'auto',
            justifyContent: 'center',
          }}
        >
          {icon}
        </ListItemIcon>
        <ListItemText 
          primary={text} 
          sx={{ 
            opacity: open ? 1 : 0, 
          }}
        /> 
      </ListItemButton>
    </Tooltip>
  );
};

export default SidebarItem; 