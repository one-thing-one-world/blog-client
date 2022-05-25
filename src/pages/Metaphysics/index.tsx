// import React from 'react'
// import styled from 'styled-components'

// const Wrapper = styled.div`
//   /* background: #fffbf0; */
//   width: 100%;
//   height: 700px;
// `

// export default function Metaphysics() {
//   return <Wrapper>Metaphysics</Wrapper>
// }
import React from 'react'
import styled from 'styled-components'
import { Typography } from '@mui/material'
import { CenterWrapper } from '../../style/common'
// import { useNavigate } from 'react-router-dom'
const SoilWrapper = styled.div`
  /* background: #fffde7; */
  width: 100%;
  height: 700px;
`
export default function Metaphysics() {
  return (
    <SoilWrapper>
      {/* <CenterWrapper>玄之又玄，众妙之门。</CenterWrapper> */}
      {/* 玄学 */}
      <CenterWrapper>
        <Typography variant="h4" gutterBottom component="div">
          玄之又玄，众妙之门。
        </Typography>
      </CenterWrapper>
    </SoilWrapper>
  )
}
