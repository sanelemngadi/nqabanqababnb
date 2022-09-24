import React, { useEffect, useState } from 'react';
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import AppBarMobile from './AppBarMobile';
import AppBarDesktop from './AppBarDesktop';

const AppBar = () => {
  const [showAppBar, setShowAppBar] = useState<boolean>(true);

  // const controlAppBar = () => {
  //   if (window.scrollY > 100) {
  //     setShowAppBar(false);
  //   } else {
  //     setShowAppBar(true);
  //   }

  //   console.log("scroll: ", window.scrollY);

  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", controlAppBar);

  //   return () => {
  //     window.removeEventListener("scroll", controlAppBar);
  //   }
  // }, []);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <>
      {showAppBar &&
        <>
          {matches ? <AppBarMobile /> : <AppBarDesktop />}
        </>
      }
    </>
  )
}

export default AppBar