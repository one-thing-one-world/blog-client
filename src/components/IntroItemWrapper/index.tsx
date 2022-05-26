import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 305px;
  height: 139px;
  background: #ffffff;
  box-shadow: 0px 8px 50px 0px rgba(149, 157, 165, 0.2);
  border-radius: 25px;
`
interface Iprops {
  children: React.ReactNode
}
const TitleText = styled.div``
const TittleDesc = styled.div``
export default function IntroItemWrapper(props: Iprops) {
  const { children } = props
  return (
    <Wrapper>
      {/* {React.Children.map(props.children, props =>
        React.cloneElement(<div>123</div>)
      )} */}
      {children}
      <TitleText>title</TitleText>
      <TittleDesc>desc</TittleDesc>
    </Wrapper>
  )
}
