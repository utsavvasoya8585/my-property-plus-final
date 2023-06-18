import React from 'react'
import CommonHero from '../common/CommonHero'
import TeamSection from "./TeamSection"

function Team() {
  return (
    <div>
      <CommonHero subTitle={"Home / Our Team"} title={"Our Team"} />
      <TeamSection />
    </div>
  )
}

export default Team