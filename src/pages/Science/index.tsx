import React from 'react'
import styled from 'styled-components'
import { Typography } from '@mui/material'
import { CenterWrapper } from '../../style/common'

const WatterWrapper = styled.div`
  width: 100%;
  height: 700px;
  background: #e3f2fd;
`

export default function Science() {
  return (
    <WatterWrapper>
      <CenterWrapper>
        <Typography variant="h4" gutterBottom component="div">
          细胞，数学，宇宙。
        </Typography>
      </CenterWrapper>
    </WatterWrapper>
  )
}
