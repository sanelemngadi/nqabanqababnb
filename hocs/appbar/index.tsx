import React, { useState } from 'react';
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import AppBarMobile from './AppBarMobile';
import AppBarDesktop from './AppBarDesktop';
// import FaqsDrawer from '../../src/components/templates/faqsDrawer';
import dynamic from 'next/dynamic';

const FaqsDrawer = dynamic(() => import(/* webpackChunkName: 'faqsdrawer' */ '../../src/components/templates/faqsDrawer'));

const AppBar = () => {
  // const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
  const [showAppBar, setShowAppBar] = useState<boolean>(true);
  const [state, setState] = useState(false);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <>
      {showAppBar &&
        <>
          {matches ? <AppBarMobile setState={setState} /> : <AppBarDesktop />}
        </>
      }

      <FaqsDrawer state={state} setState={setState} />
    </>
  )
}

export default AppBar