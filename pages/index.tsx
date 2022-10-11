import type { NextPage } from 'next';
import Hero from '../src/components/templates/hero';
import MetaData from '../meta';

import dynamic from 'next/dynamic';
import Box from '../src/components/atoms/Box';

const ChooseStay = dynamic(() => import(/* webpackChunkName: 'choseyourstay' */ '../src/components/templates/chooseStay'), {
  suspense: true,
});
const Pricing = dynamic(() => import(/* webpackChunkName: 'pricing' */ '../src/components/organisms/pricing'));

const Home: NextPage = () => {

  // const names = {
  //   names: { xs: "Sanele", sm: "Mngadi" },
  //   grades: { xs: 80, sm: '100%' },
  //   age: 20,
  //   status: "unemployed"
  // }

  // const newObj = Object.entries(names).reduce<any>(({ xs: newObj, sm: newObj2 }: any, [key, val]) => {
  //   if (typeof val === 'object') {
  //     newObj[key] = val.xs;
  //     newObj2[key] = val.sm;
  //   }
  //   else {
  //     newObj[key] = val;
  //   }

  //   return { xs: newObj, sm: newObj2 };

  // }, { xs: {}, sm: {} });

  // console.log("Object: ", newObj);

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
        <Pricing />
        {/* <Box
          sx={{
            height: "500px",
            display: "flex",
            alignItems: 'center',
            justifyContent: 'center',
            background: "blue",
            color: "#fff",
            fontSize: "54px"
          }}
          sm={{ color: "red" }}

          md={{ background: "blueviolet" }}

          ls={{
            color: "black",
            width: { xs: "blue", sm: "black" }
          }}
        >
          heelo
        </Box> */}
      </main>
    </>
  )
}

export default Home;
