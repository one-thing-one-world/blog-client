import React from 'react'
import styled from 'styled-components'
import { Button, Typography } from '@mui/material'
import CenterWrapper from '../../../style/common'
// import { useNavigate } from 'react-router-dom'
const WoodWrapper = styled.div`
  /* background: #e8f5e9; */
  width: 100%;
  height: 700px;
`
export default function MetaphysicsCom() {
  return (
    <WoodWrapper>
      {/* <CenterWrapper>玄之又玄，众妙之门。</CenterWrapper> */}
      {/* 玄学 */}
      <CenterWrapper>
        <Typography variant="h4" gutterBottom component="div">
          木
        </Typography>
        <Button variant="contained" size="large">
          开始阅读
        </Button>
      </CenterWrapper>
    </WoodWrapper>
  )
}
