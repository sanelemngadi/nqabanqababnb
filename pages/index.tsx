import type { NextPage } from 'next';
import Surroundings from '../src/components/organisms/surroundings';
import Pricing from '../src/components/organisms/pricing';
import ChooseStay from '../src/components/templates/chooseStay';
import Hero from '../src/components/templates/hero';
import Ratings from '../src/components/organisms/reviews';
import MetaData from '../meta';
import FAQs from '../src/components/organisms/faqs';
import Footer from '../hocs/footer';

const Home: NextPage = () => {
  const ts = process.env.NEXT_TEST_VARIABLE;

  console.log("testing: ", ts);


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
      <Footer />
      {/* <FaqsDrawer /> */}
    </>
  )
}

export default Home
