import React from 'react'
import styled from 'styled-components'
import { Button, Typography } from '@mui/material'
import CenterWrapper from '../../../style/common'
// import { useNavigate } from 'react-router-dom'
const WaterWrapper = styled.div`
  /* background: #e3f2fd; */
  width: 100%;
  height: 700px;
`
export default function ScienceCom() {
  return (
    <WaterWrapper>
      {/* 科学 */}
      <CenterWrapper>
        <Typography variant="h4" gutterBottom component="div">
          水
        </Typography>
        <Button variant="contained" size="large">
          开始阅读
        </Button>
      </CenterWrapper>
    </WaterWrapper>
  )
}
