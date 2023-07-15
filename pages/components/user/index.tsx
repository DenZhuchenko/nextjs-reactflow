import React, { ReactElement } from 'react';
import MainLayout from '@/layout/layout';


const UsersProfile = () => {
  return <>User Logic</>;
};

export default UsersProfile;

UsersProfile.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
