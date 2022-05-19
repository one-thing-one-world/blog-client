import React, { ReactNode } from 'react'
import styled from 'styled-components'

const BasicHomeWrapper = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 0 40px;
  box-sizing: border-box;
`

const BasicHomeCom = ({ children }: { children: ReactNode }) => (
  <BasicHomeWrapper>{children}</BasicHomeWrapper>
)

export default BasicHomeCom
