import React from 'react'
import styled from 'styled-components'
import { Typography } from '@mui/material'
import CenterWrapper from '../../style/common'

const FlameWrapper = styled.div`
  background: #ffebee;
  width: 100%;
  height: 700px;
`
export default function Tech() {
  return (
    <FlameWrapper>
      <CenterWrapper>
        <Typography variant="h4" gutterBottom component="div">
          前端，后端，网络，系统，web3。
        </Typography>
      </CenterWrapper>
    </FlameWrapper>
  )
}
