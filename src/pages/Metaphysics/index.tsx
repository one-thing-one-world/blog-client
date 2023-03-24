import React from 'react'
import styled from 'styled-components'
import { Typography } from '@mui/material'
import { BannerWrapper, CenterWrapper } from '../../style/common'
import List from '../../components/List'
// import { useNavigate } from 'react-router-dom'
// import { tabList } from '../../components/Header/tabList'

const SoilWrapper = styled.div`
  /* background: ; */
  width: 100%;
`
let list = [
  {
    title: 'title1',
    content: 'sdf',
    time: '2022',
  },
]
export default function Metaphysics() {
  return (
    <SoilWrapper>
      {/* 玄学 */}
      <CenterWrapper>
        <BannerWrapper bgColor="#e8f5e9">
          <Typography variant="h4" gutterBottom component="div">
            玄之又玄，众妙之门。
          </Typography>
        </BannerWrapper>
        <List list={list} />
      </CenterWrapper>
    </SoilWrapper>
  )
}
