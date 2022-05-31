import React, { useEffect } from 'react'
import styled from 'styled-components'
// import { useNavigate } from 'react-router-dom'

import HomeBanner from './HomeBanner'
import HomeIntro from './HomeIntro'
import HomeSponsor from './HomeSponsor'
import HomeEmail from './HomeEmail'

const Wrapper = styled.div`
  /* font-size: 2000rw !important; */
`
export default function Home() {
  // const navigate = useNavigate()
  useEffect(() => {
    console.log(window.location, 'home')
  }, [])
  return (
    <Wrapper>
      <HomeBanner />
      <HomeIntro />
      <HomeSponsor />
      <HomeEmail />
    </Wrapper>
  )
}
