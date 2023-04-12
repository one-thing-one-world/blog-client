import React from 'react'
import styled from 'styled-components'

const AboutWrapper = styled.div``
const HeaderTitleWrapper = styled.h1`
  text-align: center;
  margin: 50px 0 20px 0;
`

const TabWrapper = styled.div`
  border: 1px solid red;
`
const TitleWrapper = styled.div`
  text-align: center;
`
const ContentWrapper = styled.div`
  border: 1px solid green;
`

export default function About() {
  return (
    <AboutWrapper>
      <HeaderTitleWrapper>简介</HeaderTitleWrapper>
      <TabWrapper>
        <TitleWrapper>关于博客</TitleWrapper>
        <ContentWrapper>待开发</ContentWrapper>
      </TabWrapper>
    </AboutWrapper>
  )
}
