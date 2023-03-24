import React from 'react'
import styled from 'styled-components'
import { Typography } from '@mui/material'
import { BannerWrapper, CenterWrapper } from '../../style/common'

const FlameWrapper = styled.div`
  /* background: #ffebee; */
  width: 100%;
  /* height: 320px; */
`
export default function Tech() {
  return (
    <FlameWrapper>
      <CenterWrapper>
        <BannerWrapper bgColor="#ffebee">
          <Typography variant="h4" gutterBottom component="div">
            前端，后端，网络，系统，web3。
          </Typography>
        </BannerWrapper>
      </CenterWrapper>
    </FlameWrapper>
  )
}
