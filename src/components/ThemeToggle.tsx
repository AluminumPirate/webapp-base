import { IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useThemeContext } from '../theme';

const ThemeToggle = () => {
const { mode, toggleColorMode } = useThemeContext();

return (
    <IconButton
    onClick={toggleColorMode}
    color="inherit"
    aria-label="toggle theme"
    >
    {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
);
};

export default ThemeToggle;

