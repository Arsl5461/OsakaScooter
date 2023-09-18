import React from 'react'
import Banner from "./Banner";
import Cards from "./Cards";
import Clip from "./Clip";
import HomeSection from "./HomeSection";
import SecondLastBanner from "./SecondLastBanner";
import Text from "./Text";


function Home() {
  return (
   <>
   <Banner/>
<HomeSection/>
<Clip/>
<Cards/>
{/* <Text/> */}
<SecondLastBanner/>
   </>
  )
}

export default Home