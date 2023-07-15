import Link from 'next/link';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ListItemText from '@mui/material/ListItemText';
import * as React from 'react';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import InfoIcon from '@mui/icons-material/Info';

interface SideBarLinkProps {
  href: string;
  text: string;
}

export const SideBarLink = ({ href, text }: SideBarLinkProps) => {
  return (
    <Link href={href}>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            {text === 'User' ? (  //Oh god, why
              <AccountBoxIcon />
            ) : text === 'Currency' ? (
              <CreditCardIcon />
            ) : text === 'Info' ? (
              <InfoIcon />
            ) : null}
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItemButton>
      </ListItem>
    </Link>
  );
};
