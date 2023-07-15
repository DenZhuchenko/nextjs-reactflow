import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import AdbIcon from '@mui/icons-material/Adb';
import HeaderMenu from './HeaderMenu/HeaderMenu';
import Link from 'next/link';
import { sideBarWidth } from '../SideBar/SideBar';

export const headerHeight = '7vh';

function ResponsiveAppBar() {
  const pages = ['Products', 'Pricing', 'Blog'];
  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - ${sideBarWidth}px)`,
        ml: `${sideBarWidth}px`,
        minHeight: headerHeight
      }}
    >
      <Container>
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            ml={2}
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none'
            }}
          >
            <Link
              style={{
                textDecoration: 'white',
                color: 'white',
                fontSize: '2em'
              }}
              href={'/'}
            >
              Bob Store
            </Link>
          </Typography>

          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none'
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <HeaderMenu />
          {/*  Menu Here  */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
// <AppBar
//     position="fixed"
//     sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
// >
//     <Toolbar>
//         <Typography variant="h6" noWrap component="div">
//             Permanent drawer
//         </Typography>
//     </Toolbar>
// </AppBar>
