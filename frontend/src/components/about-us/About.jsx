import React from 'react'
import CommonHero from '../common/CommonHero'
import ChooseSection from "../home/ChooseSection"
import AboutSection from './AboutSection'

function About() {
  return (
    <div>
      <CommonHero subTitle={"Home / About Us"} title={"About Us"} />
      <AboutSection />
      <ChooseSection />
    </div>
  )
}

export default About