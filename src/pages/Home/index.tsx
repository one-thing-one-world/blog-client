import React, { useEffect } from 'react'
import styled from 'styled-components'
// import { Button, Typography } from '@mui/material'
// import CenterWrapper from '../../style/common'
// import { useNavigate } from 'react-router-dom'

import HomeCom from './HomeCom'
// import MetaphysicsCom from './MetaphysicsCom/index'
// import ScienceCom from './ScienceCom'
// import TechCom from './TechCom'
// import TrivialCom from './TrivialCom'
// import WriteArticalCom from './WriteArticalCom'

const Wrapper = styled.div`
  font-size: 20px;
`

// const GoldenWrapper = styled.div`
//   background: #fffbf0;
//   width: 100%;
//   height: 700px;
// `
// // const textWrapper = styled.div``
// const WoodWrapper = styled(GoldenWrapper)`
//   background: #e8f5e9;
// `

// const WaterWrapper = styled(GoldenWrapper)`
//   background: #e3f2fd;
// `
// const FlameWrapper = styled(GoldenWrapper)`
//   background: #ffebee;
// `
// const SoilWrapper = styled(GoldenWrapper)`
//   background: #fffde7;
// `
export default function Home() {
  // const navigate = useNavigate()
  useEffect(() => {
    console.log(window.location, 'home')
  }, [])
  return (
    <Wrapper>
      <HomeCom />
      {/* <MetaphysicsCom />
      <ScienceCom />
      <TechCom />
      <TrivialCom />
      <WriteArticalCom /> */}
    </Wrapper>
  )
}
