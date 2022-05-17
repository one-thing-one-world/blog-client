import React from 'react'
import styled from 'styled-components'
import { Button, Typography } from '@mui/material'
import CenterWrapper from '../../../style/common'
// import { useNavigate } from 'react-router-dom'
const SoilWrapper = styled.div`
  /* background: #fffde7; */
  width: 100%;
  height: 700px;
`
export default function HomeCom() {
  return (
    <SoilWrapper>
      {/* <CenterWrapper>玄之又玄，众妙之门。</CenterWrapper> */}
      {/* 首页 */}
      <CenterWrapper>
        <Typography variant="h4" gutterBottom component="div">
          welcome
        </Typography>
        <Button variant="contained" size="large">
          开始阅读
        </Button>
      </CenterWrapper>
    </SoilWrapper>
  )
}
