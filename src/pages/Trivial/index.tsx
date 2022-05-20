import React from 'react'
import styled from 'styled-components'
import { Typography } from '@mui/material'
import CenterWrapper from '../../style/common'

const GoldWrapper = styled.div`
  background: #ffebee;
  width: 100%;
  height: 700px;
`
export default function Trivial() {
  return (
    <GoldWrapper>
      <CenterWrapper>
        <Typography variant="h4" gutterBottom component="div">
          生活酸甜苦辣，生活感悟。
        </Typography>
      </CenterWrapper>
    </GoldWrapper>
  )
}
