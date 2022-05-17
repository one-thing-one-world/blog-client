import React from 'react'
import styled from 'styled-components'
import CenterWrapper from '../../style/common'

const Wrapper = styled.div`
  width: 100%;
  height: 500px;
`

export default function Science() {
  return (
    <Wrapper>
      <CenterWrapper>细胞，数学，宇宙。</CenterWrapper>
    </Wrapper>
  )
}
