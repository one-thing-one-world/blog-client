import React from 'react'
import styled from 'styled-components'
import cup from '../../../../assets/cup.png'

const SponsorDescWrapper = styled.div`
  @media (max-width: 750px) {
  }
`
const SponsorDescTitle = styled.div`
  width: 279px;
  height: 49px;
  font-size: 35px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #3f3d55;
  line-height: 49px;
`
const SponsorDescText = styled.div`
  width: 579px;
  height: 75px;
  font-size: 18px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(63, 61, 85, 0.63);
  line-height: 25px;
  margin-top: 26px;
`
const SponsorDescPic = styled.img`
  margin-top: 66px;
`
export default function SponsorDesc() {
  return (
    <SponsorDescWrapper>
      <SponsorDescTitle>买杯coffee</SponsorDescTitle>
      <SponsorDescText>
        如果文章你也喜欢或者有帮助，我也很高兴，但如果你想赞助我，你可以通过支付宝或微信支付，当然你也可以用数字货币赞助我。
      </SponsorDescText>
      <SponsorDescPic src={cup} />
    </SponsorDescWrapper>
  )
}
