import React from 'react';
import { Box, IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import AddBoxIcon from '@mui/icons-material/AddBox';
import MovieIcon from '@mui/icons-material/Movie';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const BottomNav = () => {
    return (
        <Box sx={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            height: '50px',
            backgroundColor: 'var(--bg-color)',
            borderTop: '1px solid var(--border-color)',
            display: { xs: 'flex', md: 'none' },
            justifyContent: 'space-around',
            alignItems: 'center',
            zIndex: 1000,
            px: 2
        }}>
            <IconButton sx={{ color: 'var(--text-color)' }}><HomeIcon /></IconButton>
            <IconButton sx={{ color: 'var(--text-color)' }}><SearchIcon /></IconButton>
            <IconButton sx={{ color: 'var(--text-color)' }}><AddBoxIcon /></IconButton>
            <IconButton sx={{ color: 'var(--text-color)' }}><MovieIcon /></IconButton>
            <IconButton sx={{ color: 'var(--text-color)' }}><AccountCircleIcon /></IconButton>
        </Box>
    );
};

export default BottomNav;
