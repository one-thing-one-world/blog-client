/* eslint-disable react/no-danger */
import React from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'

export interface IDetailState {
  content: string
  createTime: string
  title: string
  tagType: string
  author: string
}
const Wrapper = styled.div`
  margin-top: 20px;
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  flex-direction: column;
  background: white;
  min-height: calc(100vh - 100px);
  padding: 20px;
  padding: 20px;
`

const TitleWrapper = styled.h2`
  display: flex;
  align-items: baseline;
  margin-bottom: 20px;
  flex-wrap: wrap;
  justify-content: center;
`
const AuthorWrapper = styled.div`
  font-size: 16px;
  margin-left: 20px;
  font-weight: 300;
  word-break: keep-all;
`

const ContentWrapper = styled.div`
  width: 100%;
  min-height: 200px;
  & p {
    line-height: 26px !important;
  }
`

const AuthoreInfoWrapper = styled.div`
  display: flex;
`
export default function ArticalDetail() {
  const { state } = useLocation()
  const { content, createTime, title, tagType, author } = state as IDetailState
  console.log(tagType)
  return (
    <Wrapper>
      <TitleWrapper>
        {title}
        <AuthoreInfoWrapper>
          <AuthorWrapper>
            作者:&nbsp;
            {author}
          </AuthorWrapper>
          <AuthorWrapper>
            创作时间:&nbsp;
            {createTime}
          </AuthorWrapper>
        </AuthoreInfoWrapper>
      </TitleWrapper>
      <ContentWrapper
        dangerouslySetInnerHTML={{ __html: content?.slice(3, -4) }}
      />

      {/* <TimeWrapper>{createTime}</TimeWrapper> */}
    </Wrapper>
  )
}
