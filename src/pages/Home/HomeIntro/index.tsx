import React from 'react'
import styled from 'styled-components'
import IntroItemWrapper from '../../../components/IntroItemWrapper/index'

const Wrapper = styled.div`
  width: 1020px;
  height: 400px;
  margin-top: 50px;
  padding: 0 12px;
`
const IntroWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
const TitleWrapper = styled.div`
  /* height: 98px; */
  font-size: 35px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #3f3d55;
  line-height: 49px;
  text-align: center;
`

export default function HomeIntro() {
  return (
    <Wrapper>
      <TitleWrapper>
        学习感悟、生活感慨、爱好研究。这里文章囊括计算机、哲学、玄学、科学、生活感悟等。
      </TitleWrapper>
      <IntroWrapper>
        <IntroItemWrapper>哲学</IntroItemWrapper>
        <IntroItemWrapper>科学</IntroItemWrapper>
        <IntroItemWrapper>玄学</IntroItemWrapper>
      </IntroWrapper>
    </Wrapper>
  )
}
