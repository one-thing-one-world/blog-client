import React from 'react'
import styled from 'styled-components'
import { Typography } from '@mui/material'
import { BannerWrapper, CenterWrapper } from '../../style/common'

const GoldWrapper = styled.div`
  /* background: #e3f2fd; */
  width: 100%;
  /* height: 320px; */
`
export default function Trivial() {
  return (
    <GoldWrapper>
      <CenterWrapper>
        <BannerWrapper bgColor="#e3f2fd">
          <Typography variant="h4" gutterBottom component="div">
            人是一根能思想的苇草。
          </Typography>
        </BannerWrapper>
      </CenterWrapper>
    </GoldWrapper>
  )
}
