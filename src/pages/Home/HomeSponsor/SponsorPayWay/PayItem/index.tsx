import React from 'react'
import styled, { css } from 'styled-components'

interface PayItemProps {
  payType?: 'blockChain' | 'weChat' | 'zhiFuBao'
  activeKey?: number
  isActive?: boolean
  onClick?: () => undefined
}
interface PayItemWrapperPorps {
  isActive: boolean
}

const phoneTrasformAnimationStyle = css`
  top: 200px;
`
const PcTransformAnimationStyle = css`
  left: 162px;
`
const PayItemWrapper = styled.div<PayItemWrapperPorps>`
  width: 100%;
  height: 264px;
  background: #ffffff;
  box-shadow: 0px 8px 50px 0px rgba(149, 157, 165, 0.2);
  border-radius: 25px;
  position: absolute;
  bottom: 114px;
  z-index: 3;
  transition: all 600ms ease-in-out;

  @media (max-width: 750px) {
    ${props => props.isActive && phoneTrasformAnimationStyle};
  }
  @media (min-width: 751px) {
    ${props => props.isActive && PcTransformAnimationStyle};
  }
`
const WeChatnWrapper = styled(PayItemWrapper)<PayItemWrapperPorps>`
  position: absolute;
  z-index: 2;
  bottom: 57px;
  background: #62d374;
  top: 0;
  left: 0;
  transition: all 600ms ease-in-out;

  @media (max-width: 750px) {
    bottom: ${props => props.isActive && '-60px'};
  }
  @media (min-width: 751px) {
    right: ${props => props.isActive && '180px'};
  }
`
const ZhiFuBaoWrapper = styled(PayItemWrapper)<PayItemWrapperPorps>`
  position: absolute;
  bottom: 0px;
  z-index: 1;
  background: #337cf3;
  transition: all 6000ms ease-in-out;

  @media (max-width: 750px) {
    bottom: ${props => props.isActive && '-180px'};
  }
  @media (min-width: 751px) {
    right: ${props => props.isActive && '180px'};
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
