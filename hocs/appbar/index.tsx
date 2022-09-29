import React, { useState } from 'react';
import AppBarDesktop from './AppBarDesktop';
import dynamic from 'next/dynamic';
import Loading from '../../src/components/organisms/loading';

const MenuDrawer = dynamic(() => import(/* webpackChunkName: 'menudrawer' */ '../../src/components/templates/drawers'),
  { loading: () => <Loading /> }
);
const FaqsModal = dynamic(() => import(/* webpackChunkName: 'faqsdrawer' */ '../../src/components/templates/drawers/FaqModal'),
  { loading: () => <Loading /> }
);

const AppBar = () => {
  const [showAppBar, setShowAppBar] = useState<boolean>(false);
  const [showFaqsModal, setShowFaqsModal] = useState<boolean>(false);

  return (
    <>
      <AppBarDesktop setShowAppBar={setShowAppBar} setShowFaqsModal={setShowFaqsModal} />

      <FaqsModal showFaqsModal={showFaqsModal} setShowFaqsModal={setShowFaqsModal} />

      <MenuDrawer state={showAppBar} setState={setShowAppBar} />
    </>
  )
}

export default AppBar