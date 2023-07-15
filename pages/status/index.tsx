import React from 'react';
import MainLayout from "@/layout/layout";
import Box from "@mui/material/Box";

const Status = () => {
    return (
        <Box>
            444
        </Box>
    );
};

Status.getLayout = (page) => (
    <MainLayout>{page}</MainLayout>
);

export default Status;