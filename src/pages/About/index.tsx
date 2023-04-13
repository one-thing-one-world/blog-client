import React from 'react'
import styled from 'styled-components'

const AboutWrapper = styled.div`
  margin-top: 30px;
  padding: 0 20px;
  background: white;

  min-height: calc(100vh - 64px);
`
const HeaderTitleWrapper = styled.h1`
  text-align: center;
  padding: 50px 0 20px 0;
`

const TabWrapper = styled.div`
  /* border: 1px solid red; */
`
const TitleWrapper = styled.div`
  /* text-align: center; */
  font-weight: 400;
  font-size: 24px;
  margin: 30px 0 10px 0;
  display: flex;
  align-items: center;

  /* margin-left: -20px; */
`

const CircleWrapper = styled.div`
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50% 50%;
  background: #7eccb4;
`
const CircleContainer = styled.div`
  width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`
const ContentWrapper = styled.div`
  /* border: 1px solid green; */
`

export default function About() {
  return (
    <AboutWrapper>
      <HeaderTitleWrapper>简介</HeaderTitleWrapper>
      <TabWrapper>
        <TitleWrapper>
          <CircleContainer>
            <CircleWrapper />
          </CircleContainer>
          关于博客
        </TitleWrapper>
        <ContentWrapper>
          <p>前端: 使用的是react,Antd,styled-components。使用redux管理状态。</p>
          <p>
            后端:使用的框架是nest,使用的是mysql数据库，文章都是存储在mysql的。
          </p>
          <p> 部署: 使用drone docker ci 做的自动化部署。</p>
        </ContentWrapper>

        <TitleWrapper>
          <CircleContainer>
            <CircleWrapper />
          </CircleContainer>
          关于作者
        </TitleWrapper>
        <ContentWrapper>
          <p style={{ textIndent: '2rem' }}>
            你好,我的网络名是一物一世界,我是一个IT工作者,我喜欢和热爱的东西很多,例如:
            关于计算机的React, Vue, Ts, Node, Haskell, Kali Linux, Docker,
            Xss... , 我也很喜欢中国传统文化:例如：周易,
            奇门遁甲等等，我也很喜欢球类运动，足球，羽毛球，乒乓球，台球... 。
          </p>
        </ContentWrapper>
      </TabWrapper>
    </AboutWrapper>
  )
}
