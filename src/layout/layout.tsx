import React from 'react';
import {Box} from '@mui/material';
import PropTypes from 'prop-types';
import Header, {headerHeight} from '@/layout/Header/Header';
import SideBar, {sideBarWidth} from '@/layout/SideBar/SideBar';
import Toolbar from '@mui/material/Toolbar';
import {Providers} from "@/Providers/Providers";

const MainLayout = ({ children }) => {
  return (
    <Providers>
      <Box sx={{ display: 'flex' }}>
        <Header />
        <SideBar />
        <Box
          component="main"
          sx={{
            mr: sideBarWidth,
            mt: headerHeight,
            flexGrow: 1,
            p: 3
          }}
        >
          <Toolbar />
          {children}
        </Box>
      </Box>
    </Providers>
  );
};


MainLayout.propTypes = {
  children: PropTypes.node
};

export default MainLayout;
