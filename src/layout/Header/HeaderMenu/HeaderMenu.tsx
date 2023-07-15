"use client"
import React from 'react';
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {useSession, signOut} from "next-auth/react";

const HeaderMenu = () => {
    // const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
    const settings = ['Logout'];
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const [anchorElUser, setAnchorElUser] = React.useState<HTMLElement | null | undefined>(null);

    const session = useSession()
    // const userName = session.data?.user?.name
    // const userEmail = session.data?.user?.email
    const userImg: any = session.data?.user?.image


    return (
        <Box sx={{ flexGrow: 0 }}>
    <Tooltip title="Open settings">
    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
    <Avatar src={userImg} alt="Remy Sharp"/>
        </IconButton>
        </Tooltip>
        <Menu
    sx={{ mt: '45px' }}
    id="menu-appbar"
    anchorEl={anchorElUser}
    anchorOrigin={{
        vertical: 'top',
            horizontal: 'right',
    }}
    keepMounted
    transformOrigin={{
        vertical: 'top',
            horizontal: 'right',
    }}
    open={Boolean(anchorElUser)}
    onClose={handleCloseUserMenu}
        >
        {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
            <Typography onClick={() => signOut({callbackUrl: '/'})} textAlign="center">{setting}</Typography>
                </MenuItem>
))}
    </Menu>
    </Box>
);
};

export default HeaderMenu;