import React, {ReactElement} from 'react';
import MainLayout from '@/layout/layout';


const Currency = () => {
    return <>Currency Logic</>;
};

export default Currency;

Currency.getLayout = function getLayout(page: ReactElement) {
    return (
        <MainLayout>{page}</MainLayout>
    )
}
