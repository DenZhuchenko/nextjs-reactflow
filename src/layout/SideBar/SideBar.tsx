import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import {headerHeight} from '@/layout/Header/Header';
import {SideBarLink} from '@/layout/SideBar/SideBarComponents/SideBarLink';

export const sideBarWidth = '15vw';


export default function SideBar() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer
        sx={{
          minWidth: sideBarWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: sideBarWidth,
            boxSizing: 'border-box'
          }
        }}
        variant="permanent"
        anchor="left"
      >
        <Box
          sx={{
            minWidth: `calc(100% - ${sideBarWidth}px)`,
            minHeight: headerHeight,
            ml: `${sideBarWidth}px`
          }}
        >
          Some info
        </Box>
        <Divider />
        <List>
          <SideBarLink href={`/components/currency`} text={'Currency'} />
          <SideBarLink href={`/components/user`} text={'User'} />
          <SideBarLink href={`/components/info`} text={'Info'} />
        </List>
        <Divider />
      </Drawer>
    </Box>
  );
}
