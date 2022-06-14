import React from 'react'
import styled from 'styled-components'
import Alipay from '../../../../../assets/alipay.jpeg'
import Wechat from '../../../../../assets/wechat.png'
import WechatText from '../../../../../assets/wechatText.png'
import AlipayText from '../../../../../assets/alipayText.png'

interface PayItemProps {
  payType?: 'blockChain' | 'weChat' | 'zhiFuBao'
  activeKey?: number
  isActive?: boolean
  onClick?: () => void
}
interface PayItemWrapperPorps {
  isActive: boolean
}
const PayItemWrapper = styled.div<PayItemWrapperPorps>`
  width: 100%;
  height: 264px;
  background: #ffffff;
  box-shadow: 0px 8px 50px 0px rgba(149, 157, 165, 0.2);
  border-radius: 25px;
  position: absolute;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
  padding: 60px 24px 18px 0;
`
const WeChatnWrapper = styled(PayItemWrapper)<PayItemWrapperPorps>`
  position: absolute;
  z-index: 2;
  right: 0;
  bottom: 56px;
  background: #01d15c;
  transition: all 300ms ease-in-out;

  @media (max-width: 821px) {
    bottom: ${props => props.isActive && '-110px'};
  }
  @media (min-width: 822px) {
    right: ${props => props.isActive && '-180px'};
  }
`

const PayWayImg = styled.img`
  width: 110px;
  height: 110px;
`
const PayTitle = styled.img`
  height: 30px;
`
const ZhiFuBaoWrapper = styled(PayItemWrapper)<PayItemWrapperPorps>`
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 1;
  background: #166cff;
  transition: all 300ms ease-in-out;

  @media (max-width: 821px) {
    bottom: ${props => props.isActive && '-170px'};
  }
  @media (min-width: 822px) {
    right: ${props => props.isActive && '-180px'};
  }
`
export default function PayItem(props: PayItemProps) {
  const { activeKey, isActive, payType, onClick } = props
  console.log(activeKey, isActive, onClick, payType, 'ces')
  if (payType === 'blockChain') {
    return <PayItemWrapper onClick={onClick} isActive={activeKey === -1} />
  }
  if (payType === 'weChat') {
    return (
      <WeChatnWrapper onClick={onClick} isActive={activeKey === 1}>
        <PayWayImg src={Wechat} />
        <PayTitle src={WechatText} />
      </WeChatnWrapper>
    )
  }
  if (payType === 'zhiFuBao') {
    return (
      <ZhiFuBaoWrapper onClick={onClick} isActive={activeKey === 2}>
        <PayWayImg src={Alipay} />
        <PayTitle src={AlipayText} />
      </ZhiFuBaoWrapper>
    )
  }

  return null
}
