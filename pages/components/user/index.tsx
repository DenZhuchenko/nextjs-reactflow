import React from 'react';
import MainLayout from "@/layout/layout";

const UsersProfile = () => {

  return (

    <div>
        Some user profile info
    </div>

  );
};

UsersProfile.getLayout = (page) => (
    <MainLayout>{page}</MainLayout>
);


export default UsersProfile;
