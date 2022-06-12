import React from 'react'
import styled from 'styled-components'

interface PayItemProps {
  payType?: 'blockChain' | 'weChat' | 'zhiFuBao'
  activeKey?: number
  isActive?: boolean
  onClick?: () => undefined
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
`
const WeChatnWrapper = styled(PayItemWrapper)<PayItemWrapperPorps>`
  position: absolute;
  z-index: 2;
  right: 0;
  bottom: 59px;
  background: #62d374;
  transition: all 300ms ease-in-out;

  @media (max-width: 821px) {
    bottom: ${props => props.isActive && '-20px'};
  }
  @media (min-width: 822px) {
    right: ${props => props.isActive && '-180px'};
  }
`
const ZhiFuBaoWrapper = styled(PayItemWrapper)<PayItemWrapperPorps>`
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 1;
  background: #337cf3;
  transition: all 300ms ease-in-out;

  @media (max-width: 821px) {
    bottom: ${props => props.isActive && '-70px'};
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
    return <WeChatnWrapper onClick={onClick} isActive={activeKey === 1} />
  }
  if (payType === 'zhiFuBao') {
    return <ZhiFuBaoWrapper onClick={onClick} isActive={activeKey === 2} />
  }

  return null
}
