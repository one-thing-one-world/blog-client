import React from 'react'
import styled from 'styled-components'
import cup from '../../../../assets/cup.png'

const SponsorDescWrapper = styled.div`
  width: 579px;
  text-align: center;
  @media (max-width: 750px) {
    width: 375px;
  }
`
const SponsorDescTitle = styled.div`
  width: 100%;
  font-size: 35px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #3f3d55;
`
const SponsorDescText = styled.div`
  width: 100%;
  font-size: 18px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(63, 61, 85, 0.63);
  line-height: 28px;
  margin-top: 26px;
  text-align: left;
  padding: 0 12px;
`
const SponsorDescPic = styled.img`
  margin-top: 66px;
  width: 100%;
  min-width: 335px;
  max-width: 400px;
`
export default function SponsorDesc() {
  return (
    <SponsorDescWrapper>
      <SponsorDescTitle>支持我</SponsorDescTitle>
      <SponsorDescText>
        如果文章对你有帮助或者你也喜欢的话，你可以赞助我，可以通过支付宝或微信或者数字货币赞助我。
      </SponsorDescText>
      <SponsorDescPic src={cup} />
    </SponsorDescWrapper>
  )
}
