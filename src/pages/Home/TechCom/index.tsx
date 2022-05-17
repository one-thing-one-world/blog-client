import React from 'react'
import styled from 'styled-components'
import { Button, Typography } from '@mui/material'
import CenterWrapper from '../../../style/common'
// import { useNavigate } from 'react-router-dom'
const FlameWrapper = styled.div`
  /* background: #ffebee; */
  width: 100%;
  height: 700px;
`
export default function TechCom() {
  return (
    <FlameWrapper>
      {/* <CenterWrapper>玄之又玄，众妙之门。</CenterWrapper> */}
      {/* 计算机 */}
      <CenterWrapper>
        <Typography variant="h4" gutterBottom component="div">
          火
        </Typography>
        <Button variant="contained" size="large">
          开始阅读
        </Button>
      </CenterWrapper>
    </FlameWrapper>
  )
}
