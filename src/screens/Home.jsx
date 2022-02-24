import React from 'react'
import HeaderTabs from '../components/HeaderTabs'
import HeroSec from '../components/herosec/HeroSec'
import { ProductsData } from '../components/herosec/Data'
import BuildSec from '../components/herosec/BuildSec'

export default function Home() {

  return (
      <>
        <HeaderTabs/>
        <HeroSec/>
        <BuildSec data={ProductsData}/>
      </>
    
  )
}
