import type { NextPage } from 'next';
import Hero from '../src/components/templates/hero';
import MetaData from '../meta';

import dynamic from 'next/dynamic';

const ChooseStay = dynamic(() => import(/* webpackChunkName: 'choseyourstay' */ '../src/components/templates/chooseStay'), {
  suspense: true,
});
const Pricing = dynamic(() => import(/* webpackChunkName: 'pricing' */ '../src/components/organisms/pricing'));
const Surroundings = dynamic(() => import(/* webpackChunkName: 'surroundings' */ '../src/components/organisms/surroundings'));
const Ratings = dynamic(() => import(/* webpackChunkName: 'rating' */ '../src/components/organisms/reviews'));
const FAQs = dynamic(() => import(/* webpackChunkName: 'faqs' */ '../src/components/organisms/faqs'));

const Home: NextPage = () => {
  return (
    <>

      <MetaData
        title='nqabanqaba | homepage'
        subtitle='The best guesthouse in Richards Bay that offers more than quality sleep'
        image='https://nqabanqaba.netlify.app/images/im300.jpg' />
      <main>
        <Hero />
        <ChooseStay />
        <Pricing />
        <Surroundings />
        <Ratings />
        <FAQs />
      </main>
    </>
  )
}

export default Home
