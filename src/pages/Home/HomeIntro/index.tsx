import React from 'react'
import styled from 'styled-components'
import IntroItemWrapper from '../../../components/IntroItemWrapper/index'

const Wrapper = styled.div`
  width: 100%;
  margin-top: 50px;
  padding: 12px 0;
  box-sizing: border-box;
`
const IntroWrapper = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
  }
`
const TitleWrapper = styled.div`
  font-size: 35px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #3f3d55;
  line-height: 49px;
  text-align: center;
  padding: 0 12px;
  @media (max-width: 750px) {
    font-size: 26px;
  }
`
const introList = [
  {
    title: '计算机',
    tittleDesc: '前端、后端、网络、系统，web3。',
    path: '/tech',
  },
  {
    title: '科学',
    tittleDesc: ' 细胞、数学、宇宙。',
    path: '/science',
  },
  {
    title: '玄学',
    tittleDesc: '周易、奇门遁甲。',
    path: '/metaphysics',
  },
]

export default function HomeIntro() {
  return (
    <Wrapper>
      <TitleWrapper>
        学习感悟、生活感慨、爱好研究。文章囊括计算机、哲学、玄学、科学、生活感悟等。
      </TitleWrapper>
      <IntroWrapper>
        {introList.map(({ title, tittleDesc, path }) => (
          <IntroItemWrapper
            key={title}
            tittleDesc={tittleDesc}
            title={title}
            path={path}
          />
        ))}
      </IntroWrapper>
    </Wrapper>
  )
}
