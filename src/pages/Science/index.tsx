import React from 'react'
import styled from 'styled-components'
import { Typography } from '@mui/material'
import { BannerWrapper, CenterWrapper } from '../../style/common'

const WatterWrapper = styled.div`
  width: 100%;
  /* height: 320px; */
  /* background: #fffde7; */
`

export default function Science() {
  return (
    <WatterWrapper>
      <CenterWrapper>
        <BannerWrapper bgColor="#fffde7">
          <Typography variant="h4" gutterBottom component="div">
            细胞，数学，宇宙。
          </Typography>
        </BannerWrapper>
      </CenterWrapper>
    </WatterWrapper>
  )
}
