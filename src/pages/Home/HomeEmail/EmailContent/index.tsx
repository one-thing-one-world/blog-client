import React from 'react'
import styled from 'styled-components'

const EmailContentWrapper = styled.div`
  width: 100%;
  height: 200px;
  background: #ffffff;
  box-shadow: 0px 8px 50px 0px rgba(149, 157, 165, 0.2);
  border-radius: 25px;
  padding: 30px 33px;
`
const ContentTitleWrapper = styled.div`
  height: 66px;
  font-size: 18px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(63, 61, 85, 0.63);
  line-height: 25px;
`
const EmailButton = styled.div`
  width: 143px;
  height: 56px;
  background: #7eccb4;
  box-shadow: 0px 8px 24px 0px rgba(149, 157, 165, 0.5);
  border-radius: 15px;
  margin-top: 26px;
  text-align: center;
  line-height: 56px;
  font-size: 18px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
`

export default function EmailContent() {
  return (
    <EmailContentWrapper>
      <ContentTitleWrapper>
        如果你觉得文章哪里需要改进，或者如果你有什么好的想法，欢迎使用邮箱与我进行思想碰撞～
      </ContentTitleWrapper>
      <EmailButton>
        <a style={{ color: '#f5fffc ' }} href="mailto:liujuncai6666@gmail.com">
          Email
        </a>
      </EmailButton>
    </EmailContentWrapper>
  )
}
