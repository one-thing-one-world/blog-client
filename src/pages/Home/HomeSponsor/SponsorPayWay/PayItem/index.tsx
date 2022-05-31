import React from 'react'
import styled, { keyframes, css } from 'styled-components'

interface PayItemProps {
  payType?: 'blockChain' | 'weChat' | 'zhiFuBao'
  activeKey?: number
  isActive?: boolean
  onClick?: () => undefined
}
interface PayItemWrapperPorps {
  isActive: boolean
}
const trasformAnimation = keyframes`
from {
  left:0px
}

to {
  left:162px
}
`

const animatinStyle = css`
  animation: ${trasformAnimation} 0.6s ease-in-out 1 forwards;
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
  ${props => props.isActive && animatinStyle};
`
const WeChatnWrapper = styled(PayItemWrapper)<PayItemWrapperPorps>`
  position: absolute;
  z-index: 2;
  bottom: 57px;
  background: #62d374;

  ${props => props.isActive && animatinStyle};
`
const ZhiFuBaoWrapper = styled(PayItemWrapper)<PayItemWrapperPorps>`
  position: absolute;
  bottom: 0px;
  z-index: 1;
  background: #337cf3;
  ${props => props.isActive && animatinStyle};
`
export default function PayItem(props: PayItemProps) {
  const { activeKey, isActive, payType, onClick } = props
  console.log(activeKey, isActive, onClick, payType, 'ces')
  if (payType === 'blockChain') {
    return <PayItemWrapper onClick={onClick} isActive={activeKey === 9} />
  }
  if (payType === 'weChat') {
    return <WeChatnWrapper onClick={onClick} isActive={activeKey === 1} />
  }
  if (payType === 'zhiFuBao') {
    return <ZhiFuBaoWrapper onClick={onClick} isActive={activeKey === 2} />
  }

  return null
}
