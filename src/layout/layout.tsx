import React, { FC, ReactNode } from 'react';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import Header, { headerHeight } from '@/layout/Header/Header';
import SideBar, { sideBarWidth } from '@/layout/SideBar/SideBar';
import { Metadata } from 'next';

interface SidebarLayoutProps {
  children?: ReactNode;
}

export const metadata: Metadata = {
  title: 'Blog | Next App',
  description: 'Generated by create next app'
};

const MainLayout: FC<SidebarLayoutProps> = ({ children }) => {
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <Header />
        <SideBar />
        <Box
          component="main"
          sx={{
            mr: sideBarWidth,
            mt: headerHeight,
            flexGrow: 1,
            p: 6
          }}
        >
          {/*<Toolbar />*/}
          {children}
        </Box>
      </Box>
    </>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node
};

export default MainLayout;