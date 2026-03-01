import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import MovieIcon from '@mui/icons-material/Movie';
import SendIcon from '@mui/icons-material/Send';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddBoxIcon from '@mui/icons-material/AddBox';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import InstagramIcon from '@mui/icons-material/Instagram';
const Sidebar = () => {
  const { dark } = useContext(ThemeContext);
  const menuItems = [
    { text: 'Home', icon: <HomeIcon /> },
    { text: 'Search', icon: <SearchIcon /> },
    { text: 'Explore', icon: <ExploreIcon /> },
    { text: 'Reels', icon: <MovieIcon /> },
    { text: 'Messages', icon: <SendIcon /> },
    { text: 'Notifications', icon: <FavoriteBorderIcon /> },
    { text: 'Create', icon: <AddBoxIcon /> },
    { text: 'Profile', icon: <AccountCircleIcon /> },
  ];

  return (
    <Box sx={{
      width: { xs: '72px', lg: '245px' },
      height: '100vh',
      borderRight: '1px solid var(--border-color)',
      position: 'fixed',
      left: 0,
      top: 0,
      padding: '20px 12px',
      display: 'flex',
      flexDirection: 'column',
      transition: 'width 0.3s ease',
      zIndex: 100,
      overflow: 'hidden'
    }}>
      <Box sx={{ mb: 4, px: 2, display: 'flex', justifyContent: { xs: 'center', lg: 'flex-start' } }}>
        <img
          src="https://www.logo.wine/a/logo/Instagram/Instagram-Wordmark-Logo.wine.svg"
          alt="Instagram"
          style={{
            width: '103px',
            filter: dark ? 'brightness(0) invert(1)' : 'none',
            cursor: 'pointer',
            display: { xs: 'none', lg: 'block' }
          }}
        />
        <InstagramIcon sx={{
          display: { xs: 'block', lg: 'none' },
          fontSize: '28px',
          color: 'var(--text-color)'
        }} />
      </Box>

      <List sx={{ flexGrow: 1 }}>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ mb: 1 }}>
            <ListItemButton sx={{
              borderRadius: '8px',
              justifyContent: { xs: 'center', lg: 'flex-start' },
              px: { xs: 1, lg: 2 },
              '&:hover': {
                backgroundColor: 'var(--button-hover)'
              }
            }}>
              <ListItemIcon sx={{
                color: 'var(--text-color)',
                minWidth: { xs: 'unset', lg: '40px' }
              }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{ display: { xs: 'none', lg: 'block' } }}
                primaryTypographyProps={{ fontSize: '16px', fontWeight: item.text === 'Home' ? 'bold' : 'normal' }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Box>
        <ListItemButton sx={{ borderRadius: '8px' }}>
          <ListItemIcon sx={{ color: 'var(--text-color)', minWidth: '40px' }}>
            <MenuIcon />
          </ListItemIcon>
          <ListItemText primary="More" />
        </ListItemButton>
      </Box>
    </Box>
  );
};

export default Sidebar;
