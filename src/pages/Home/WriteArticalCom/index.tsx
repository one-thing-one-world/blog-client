import React from 'react'
import styled from 'styled-components'
import { Button, Typography } from '@mui/material'
import CenterWrapper from '../../../style/common'
// import { useNavigate } from 'react-router-dom'
const GoldenWrapper = styled.div`
  /* background: #fffbf0; */
  width: 100%;
  height: 700px;
`
export default function WriteArticalCom() {
  return (
    <GoldenWrapper>
      {/* <CenterWrapper>玄之又玄，众妙之门。</CenterWrapper> */}
      {/* 玄学 */}
      <CenterWrapper>
        <Typography variant="h4" gutterBottom component="div">
          金
        </Typography>
        <Button variant="contained" size="large">
          开始阅读
        </Button>
      </CenterWrapper>
    </GoldenWrapper>
  )
}
