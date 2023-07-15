import React, { ReactElement } from 'react';
import MainLayout from '@/layout/layout';
import { NextPageWithLayout } from '../../_app';



const Info: NextPageWithLayout = () => {
  return<>
   User Info
  </>;
};
export default Info;

Info.getLayout = function getLayout(page: ReactElement) {
    return (
        <MainLayout>{page}</MainLayout>
    )
}
