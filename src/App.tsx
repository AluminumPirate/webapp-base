import { useState } from 'react'
import './App.css'
import { Box, IconButton } from '@mui/material'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ThemeToggle from './components/ThemeToggle'
import { ThemeProvider } from './theme'
import MenuIcon from '@mui/icons-material/Menu'
import Sidebar from './components/Sidebar/Sidebar'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Settings from './pages/Settings'
import About from './pages/About'

function App() {
const [sidebarOpen, setSidebarOpen] = useState(true)

const handleCloseSidebar = () => {
    setSidebarOpen(false)
}

const handleOpenSidebar = () => {
    setSidebarOpen(true)
}

return (
<BrowserRouter>
<ThemeProvider>
    <Box sx={{ display: 'flex' }}>
    <Sidebar 
    open={sidebarOpen} 
    onClose={handleCloseSidebar} 
    />
    {!sidebarOpen && (
        <IconButton
        color="inherit"
        aria-label="open sidebar"
        onClick={handleOpenSidebar}
        edge="start"
        sx={{ 
            position: 'fixed', 
            top: '1rem', 
            left: '1rem',
            zIndex: 1100 
        }}
        >
        <MenuIcon />
        </IconButton>
    )}
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
    <Box component="main" sx={{ flexGrow: 1, p: 3, ml: sidebarOpen ? '240px' : 0 }}>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/about" element={<About />} />
    </Routes>
    </Box>
    </Box>
</ThemeProvider>
</BrowserRouter>
)
}

export default App
