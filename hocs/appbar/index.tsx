import React from 'react';
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import AppBarMobile from './AppBarMobile';
import AppBarDesktop from './AppBarDesktop';

const AppBar = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  return matches ? <AppBarMobile /> : <AppBarDesktop />
}

export default AppBar