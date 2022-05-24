import React, { useEffect } from 'react'
import styled from 'styled-components'
// import { useNavigate } from 'react-router-dom'

import HomeCom from './HomeCom'
import MetaphysicsCom from './MetaphysicsCom/index'
import ScienceCom from './ScienceCom'
import TechCom from './TechCom'
import TrivialCom from './TrivialCom'
import WriteArticalCom from './WriteArticalCom'

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
      <HomeCom />
      <MetaphysicsCom />
      <ScienceCom />
      <TechCom />
      <TrivialCom />
      <WriteArticalCom />
    </Wrapper>
  )
}
