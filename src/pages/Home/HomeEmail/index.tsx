import React from 'react'
import styled from 'styled-components'
import EmailContent from './EmailContent'

const EmailWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`
const EmailTitleWrapper = styled.div`
  /* width: 745px; */
  height: 49px;
  font-size: 35px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #3f3d55;
  line-height: 49px;
  text-align: center;
  margin-bottom: 30px;
`

export default function HomeEmail() {
  return (
    <EmailWrapper>
      <EmailTitleWrapper>请用邮箱联系我</EmailTitleWrapper>
      <EmailContent />
    </EmailWrapper>
  )
}
