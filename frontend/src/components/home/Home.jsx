import React from 'react'
import Hero from './Hero'
import FeatureSection from './FeatureSection'
import ChooseSection from "./ChooseSection"
import BlogSection from './BlogSection'

function Home() {
  return (
    <div>
      <Hero />
      <FeatureSection />
      <ChooseSection />
      <BlogSection />

    </div>
  )
}

export default Home