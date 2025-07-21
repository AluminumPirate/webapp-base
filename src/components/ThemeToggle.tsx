import { useState } from 'react';
import { 
  IconButton, 
  Menu, 
  MenuItem, 
  Box, 
  Typography, 
  Tooltip 
} from '@mui/material';
import PaletteIcon from '@mui/icons-material/Palette';
import { useThemeContext, themeConfigs, type AppThemeMode } from '../theme';

const ThemeToggle = () => {
  const { mode, setThemeMode } = useThemeContext();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleThemeSelect = (themeName: AppThemeMode) => {
    setThemeMode(themeName);
    handleClose();
  };

  // Extract key colors from each theme palette for visual preview
  const getThemeColors = (themeName: AppThemeMode) => {
    const palette = themeConfigs[themeName].palette;
    return [
      (palette.primary as any)?.main || '#1976d2',
      (palette.secondary as any)?.main || '#9c27b0', 
      (palette.info as any)?.main || '#0288d1',
      (palette.success as any)?.main || '#2e7d32',
      (palette.background as any)?.default || '#ffffff',
    ];
  };

  return (
    <>
      <Tooltip title="Choose theme">
        <IconButton
          onClick={handleClick}
          color="inherit"
          aria-label="theme selector"
          aria-controls={open ? 'theme-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          sx={{
            '&:hover': {
              transform: 'scale(1.1)',
            },
            transition: 'transform 0.2s ease-in-out',
          }}
        >
          <PaletteIcon />
        </IconButton>
      </Tooltip>

      <Menu
        id="theme-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        PaperProps={{
          sx: {
            mt: 1,
            minWidth: 200,
            borderRadius: 2,
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          }
        }}
      >
        {Object.entries(themeConfigs).map(([themeName, config]) => {
          const colors = getThemeColors(themeName as AppThemeMode);
          const isSelected = mode === themeName;
          
          return (
            <MenuItem
              key={themeName}
              onClick={() => handleThemeSelect(themeName as AppThemeMode)}
              sx={{
                px: 2,
                py: 1.5,
                borderRadius: 1,
                mx: 0.5,
                my: 0.25,
                backgroundColor: isSelected ? 'action.selected' : 'transparent',
                '&:hover': {
                  backgroundColor: isSelected ? 'action.selected' : 'action.hover',
                },
              }}
            >
              <Box sx={{ width: '100%' }}>
                {/* Theme name with icon */}
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  mb: 1,
                  gap: 0.5 
                }}>
                  <span style={{ fontSize: '0.875rem' }}>{config.icon}</span>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      fontWeight: isSelected ? 600 : 400,
                      fontSize: '0.875rem'
                    }}
                  >
                    {config.name}
                  </Typography>
                </Box>
                
                {/* Color palette preview */}
                <Box sx={{ 
                  display: 'flex', 
                  gap: 0.5,
                  alignItems: 'center'
                }}>
                  {colors.map((color, index) => (
                    <Box
                      key={index}
                      sx={{
                        width: 20,
                        height: 12,
                        borderRadius: 1,
                        backgroundColor: color,
                        border: '1px solid',
                        borderColor: 'divider',
                        flexShrink: 0,
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};

export default ThemeToggle;

