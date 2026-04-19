import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Menu from './Menu';
import logo from '../../assets/Icon.avif'
import { useState } from 'react';
import ShortMenu from './ShortMenu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';


const drawerWidth = 240;
const shortDrawerWidth = 80

export default function Navbar({content}) {
 
   const [isBigMenu, setIsBigMenu] = useState(false);

   const changeMenu = () => {
      setIsBigMenu(!isBigMenu)
   }
 
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
           <IconButton onClick={changeMenu} sx={{marginRight:'30px', color:'white'}}>
              {isBigMenu ? <MenuOpenIcon/> : <MenuIcon/>}
           </IconButton>
           <img width='10%' src={logo} />
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth ? drawerWidth : shortDrawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth ? drawerWidth : shortDrawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
           {isBigMenu ? <Menu /> : <ShortMenu />}
            
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
           {content}
      </Box>
    </Box>
  );
}
