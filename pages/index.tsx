import type { NextPage } from 'next';
import Hero from '../src/components/templates/hero';
import MetaData from '../meta';

import dynamic from 'next/dynamic';
import Carousel from 'src/components/molecules/Carousel';

const ChooseStay = dynamic(() => import(/* webpackChunkName: 'choseyourstay' */ '../src/components/templates/chooseStay'), {
  suspense: true,
});
const Pricing = dynamic(() => import(/* webpackChunkName: 'pricing' */ '../src/components/organisms/pricing'));

const Home: NextPage = () => {

  return (
    <>
      <MetaData
        title='Nqabanqaba B&B | The guesthouse at Richards Bay Meerensee'
        subtitle='We are situated 2.7 km from Alkantstrand Beach, Nqabanqaba features accommodation with a shared lounge, a casino and room service for your convenience. Guests can spend time in the water park or enjoy the outdoor swimming pool and garden at Nqabanqaba.'
        path={`/`}
        image='https://nqabanqaba.netlify.app/images/im300.jpg'

      />
      <main>
        <Hero />
        <ChooseStay />
        <Carousel />
        {/* <Pricing /> */}
      </main>
    </>
  )
}

export default Home;
