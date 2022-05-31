import React from 'react'
import styled from 'styled-components'
import banner from '../../../assets/banner.svg'

const ImgWrapper = styled.img`
  width: 100%;
  height: 353px;
  object-fit: cover;
  margin-top: 30px;
`
export default function HomeCom() {
  return <ImgWrapper src={banner} />
}
