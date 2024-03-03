import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import * as React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import LogoutDialog from './LogoutDialog';
import { FaBook } from 'react-icons/fa'; // Import React Icons
import { RiHeart2Line, RiNotification2Line } from 'react-icons/ri'; // Import React Icons for wishlist and notification buttons

const drawerWidth = 240;
const navItems = [
  {
    id: 1,
    name: "Home",
    path: "/home",
  },
  {
    id: 2,
    name: "Books",
    path: "/books",
  },
  {
    id: 3,
    name: "About",
    path: "/about",
  }
];

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2, color: "black" }}>
        Community <br />
        <Typography variant="h6" component="span" color="primary">Book Exchange Platform</Typography>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <Link to={item.path}>{item.name}</Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav"
        sx={{
          background: "#5c5470",
          minHeight: "4rem",
          display: "flex",
        }}
      >
        <Toolbar>
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}
          >
            <FaBook style={{ marginRight: '8px' }} />
            <span style={{ color: 'white' }}>Community Book Exchange Platform</span>
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: { xs: 'none', sm: 'block' }, marginRight: { xs: 0, sm: "5rem" } }}>
  {navItems.map((item) => (
    <Button
      key={item.id}
      sx={{
        color: "#ffffff",
        textDecoration: "none",
        '&:hover': {
          textDecoration: "underline",
        }
      }}
    >
      <NavLink
        to={item.path}
        style={{
          color: '#ffffff',
          textDecoration: 'none',
          borderBottom: location.pathname === item.path ? '2px solid white' : 'none',
          '&:hover': {
            color: '#ffffff',
          }
        }}
      >
        <Typography>{item.name}</Typography>
      </NavLink>
    </Button>
  ))}
</Box>

          <IconButton color="inherit" sx={{ ml: 2 }}>
            <RiHeart2Line style={{ color: 'white' }} />
          </IconButton>
          <IconButton color="inherit">
            <RiNotification2Line style={{ color: 'white' }} />
          </IconButton>
          <Avatar
            sx={{
              width: 45,
              height: 45,
              backgroundColor: "purple",
              marginLeft: '16px'
            }}
          >
            OP
          </Avatar>
          <LogoutDialog />
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

Header.propTypes = {
  window: PropTypes.func,
};

export default Header;
