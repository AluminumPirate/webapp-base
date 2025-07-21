import { useState } from 'react';
import { 
  IconButton, 
  Menu, 
  MenuItem, 
  Box, 
  Typography, 
  Tooltip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider
} from '@mui/material';
import PaletteIcon from '@mui/icons-material/Palette';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useThemeContext, themeConfigs, type AppThemeMode } from '../theme';

// Theme categories for organization
const themeCategories = {
  foundation: {
    label: 'Foundation',
    icon: '🏛️',
    themes: ['light', 'dark'] as AppThemeMode[],
  },
  nature: {
    label: 'Nature & Seasons',
    icon: '🌿',
    themes: ['summer', 'ocean', 'desert', 'tropical', 'winter', 'sunset'] as AppThemeMode[],
  },
  artistic: {
    label: 'Artistic & Moods',
    icon: '🎨',
    themes: ['pastel', 'chocolate', 'cherry', 'carnival', 'lightPurpleBloom'] as AppThemeMode[],
  },
  dramatic: {
    label: 'Epic & Dramatic',
    icon: '⚡',
    themes: ['galactic', 'netflix', 'darkness', 'panther'] as AppThemeMode[],
  },
  wildcards: {
    label: 'Wildcards',
    icon: '🎲',
    themes: ['vomit', 'snot'] as AppThemeMode[],
  },
};

const ThemeToggle = () => {
  const { mode, setThemeMode } = useThemeContext();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [expandedCategory, setExpandedCategory] = useState<string>('foundation');
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    // Auto-expand the category containing current theme
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const currentCategory = Object.entries(themeCategories).find(([_, category]) =>
      category.themes.includes(mode)
    );
    if (currentCategory) {
      setExpandedCategory(currentCategory[0]);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleThemeSelect = (themeName: AppThemeMode) => {
    setThemeMode(themeName);
    handleClose();
  };

  const handleAccordionChange = (category: string) => (
      _event: React.SyntheticEvent,
    isExpanded: boolean
  ) => {
    setExpandedCategory(isExpanded ? category : '');
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
            minWidth: 280,
            maxWidth: 320,
            borderRadius: 2,
            boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
            maxHeight: '70vh',
            overflowY: 'auto',
          }
        }}
      >
        <Box sx={{ p: 1 }}>
          <Typography 
            variant="h6" 
            sx={{ 
              px: 1, 
              py: 0.5, 
              fontSize: '1rem',
              fontWeight: 600,
              color: 'text.primary'
            }}
          >
            Choose Theme
          </Typography>
          <Divider sx={{ my: 1 }} />
          
          {Object.entries(themeCategories).map(([categoryKey, category]) => (
            <Accordion
              key={categoryKey}
              expanded={expandedCategory === categoryKey}
              onChange={handleAccordionChange(categoryKey)}
              elevation={0}
              sx={{
                '&:before': { display: 'none' },
                '&.Mui-expanded': { margin: 0 },
                backgroundColor: 'transparent',
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{
                  minHeight: 36,
                  '&.Mui-expanded': { minHeight: 36 },
                  '& .MuiAccordionSummary-content': {
                    margin: '8px 0',
                    '&.Mui-expanded': { margin: '8px 0' },
                  },
                  px: 1,
                  borderRadius: 1,
                  '&:hover': { backgroundColor: 'action.hover' },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <span style={{ fontSize: '1rem' }}>{category.icon}</span>
                  <Typography 
                    variant="subtitle2" 
                    sx={{ 
                      fontWeight: 500,
                      fontSize: '0.875rem'
                    }}
                  >
                    {category.label}
                  </Typography>
                  <Typography 
                    variant="caption" 
                    sx={{ 
                      color: 'text.secondary',
                      fontSize: '0.75rem'
                    }}
                  >
                    ({category.themes.length})
                  </Typography>
                </Box>
              </AccordionSummary>
              
              <AccordionDetails sx={{ px: 1, py: 0 }}>
                {category.themes.map((themeName) => {
                  const config = themeConfigs[themeName];
                  const colors = getThemeColors(themeName);
                  const isSelected = mode === themeName;
                  
                  return (
                    <MenuItem
                      key={themeName}
                      onClick={() => handleThemeSelect(themeName)}
                      sx={{
                        px: 2,
                        py: 1,
                        borderRadius: 1,
                        mx: 0,
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
                          mb: 0.75,
                          gap: 0.75 
                        }}>
                          <span style={{ fontSize: '0.875rem' }}>{config.icon}</span>
                          <Typography 
                            variant="body2" 
                            sx={{ 
                              fontWeight: isSelected ? 600 : 400,
                              fontSize: '0.8rem'
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
                                width: 18,
                                height: 10,
                                borderRadius: 0.5,
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
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Menu>
    </>
  );
};

export default ThemeToggle;

