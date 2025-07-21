import { useState, useEffect } from 'react'
import './App.css'
import { Box, useTheme } from '@mui/material'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ThemeToggle from './components/ThemeToggle'
import { ThemeProvider } from './theme'
import Sidebar from './components/Sidebar/Sidebar'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Settings from './pages/Settings'
import About from './pages/About'
import ComponentsPage from './pages/Components'

// Define constants outside component (can be imported from Sidebar if preferred)
const drawerWidth = 30;
const collapsedWidth = 10;
const SIDEBAR_STORAGE_KEY = 'appSidebarOpen';

function App() {
  // Initialize state from localStorage or default to true (open)
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(() => {
    try {
      const storedValue = window.localStorage.getItem(SIDEBAR_STORAGE_KEY);
      // Default to true (open) if nothing stored or invalid value
      return storedValue !== null ? JSON.parse(storedValue) : true; 
    } catch (error) {
      console.error("Error reading sidebar state from localStorage", error);
      return true; // Default to open on error
    }
  });
  const theme = useTheme()

  // Effect to update localStorage when sidebarOpen changes
  useEffect(() => {
    try {
      window.localStorage.setItem(SIDEBAR_STORAGE_KEY, JSON.stringify(sidebarOpen));
    } catch (error) {
      console.error("Error saving sidebar state to localStorage", error);
    }
  }, [sidebarOpen]);

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  return (
  <BrowserRouter>
  <ThemeProvider>
      <Box sx={{ display: 'flex' }}>
      <Sidebar 
      open={sidebarOpen} 
      onClose={handleToggleSidebar}
      />
      <Box
          sx={{
          position: 'fixed',
          top: '1rem',
          right: '1rem',
          zIndex: 1100
          }}
      >
          <ThemeToggle />
      </Box>
      <Box 
          component="main" 
          sx={{
          flexGrow: 1, 
          p: 3, 
          transition: theme.transitions.create('margin', {
              easing: theme.transitions.easing.sharp,
              duration: sidebarOpen ? theme.transitions.duration.enteringScreen : theme.transitions.duration.leavingScreen,
          }),
          marginLeft: `${sidebarOpen ? drawerWidth : collapsedWidth}px`, 
          }}
      >
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/about" element={<About />} />
          <Route path="/components" element={<ComponentsPage />} />
      </Routes>
      </Box>
      </Box>
  </ThemeProvider>
  </BrowserRouter>
  )
}

export default App
