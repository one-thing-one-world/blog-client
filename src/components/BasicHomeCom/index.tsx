import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface Iprops {
  children?: ReactNode
  bgColor: string
}
const BasicHomeWrapper = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 0 40px;
  box-sizing: border-box;
  background: ${(props: Iprops) => props.bgColor};
`

const BasicHomeCom = ({ children, bgColor }: Iprops) => (
  <BasicHomeWrapper bgColor={bgColor}>{children}</BasicHomeWrapper>
)
export default BasicHomeCom
