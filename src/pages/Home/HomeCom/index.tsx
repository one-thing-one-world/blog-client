import React from 'react'
// import { Typography } from '@mui/material'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  /* height: 500px; */
  display: flex;
  align-items: center;
  /* flex-direction: column; */
  justify-content: center;
  padding: 0 12px;
  box-sizing: border-box;
  max-width: 1020px;
  margin: 20px;
`

const TextWrapper = styled.div`
  /* margin-bottom: 60px; */
  height: 353px;
  width: 1020px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(313deg, #fecdc9 0%, #bff7f2 64%, #a8c4fb 100%);
  border-radius: 15px;

  font-family: JCfg;
  color: #ffffff;

  @media (max-width: 750px) {
    font-size: 18px;
  }
  @media (min-width: 750px) {
    font-size: 34px;
  }
`
export default function HomeCom() {
  return (
    <Wrapper>
      <TextWrapper>
        {/* 在这里你可以记录自己的学习感悟，生活感慨，以及爱好的研究。这里文章囊括有计算机，哲学，玄学，科学，生活感悟等等。 */}
        科学，哲学，玄学
      </TextWrapper>
    </Wrapper>
  )
}
