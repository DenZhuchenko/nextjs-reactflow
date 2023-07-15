'use client'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import AdbIcon from '@mui/icons-material/Adb';
import HeaderMenu from './HeaderMenu/HeaderMenu';
import Link from 'next/link';
import { sideBarWidth } from '../SideBar/SideBar';
import {Stack} from "@mui/system";
import {useSession} from "next-auth/react";

export const headerHeight = '7vh';

function ResponsiveAppBar() {
  // const pages = ['Products', 'Pricing', 'Blog'];
    const session = useSession()
    const userName = session.data?.user?.name
    // const userEmail = session.data?.user?.email
    // const userImg = session.data?.user?.image


  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - ${sideBarWidth}px)`,
        ml: `${sideBarWidth}px`,
        minHeight: headerHeight
      }}
    >
      <Container >
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

          {/*<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>*/}
          {/*  {pages.map((page) => (*/}
          {/*    <Button*/}
          {/*      key={page}*/}
          {/*      sx={{ my: 2, color: 'white', display: 'block' }}*/}
          {/*    >*/}
          {/*      {page}*/}
          {/*    </Button>*/}
          {/*  ))}*/}
          {/*</Box>*/}
            <Stack sx={{alignItems: 'center'}} direction="row">
                {
                    userName 
                    ? <Box>{userName}</Box>
                        : <Box><Link href={'/api/auth/signin'}>Sign In</Link></Box>
                }
                <HeaderMenu />
            </Stack>
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
