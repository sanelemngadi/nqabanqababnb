import React, { useState } from 'react';
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import AppBarMobile from './AppBarMobile';
import AppBarDesktop from './AppBarDesktop';

const AppBar = () => {
  // const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
  const [showAppBar, setShowAppBar] = useState<boolean>(true);

  // const controlAppBar = () => {
  //   const currentScrollPos = window.scrollY;


  //   if (currentScrollPos > 50) {
  //     setShowAppBar(false);
  //   } else {
  //     setShowAppBar(true);
  //   }
  //   if (prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70 || currentScrollPos < 10) {
  //     setShowAppBar(true);
  //   } else {
  //     setShowAppBar(false);
  //   }

  //   setPrevScrollPos(currentScrollPos);


  //   console.count('the appbar mounts')


  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", controlAppBar);

  //   return () => {
  //     window.removeEventListener("scroll", controlAppBar);

  //     console.count('the appbar unmounts');

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