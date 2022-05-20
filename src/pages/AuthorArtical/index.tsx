import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background: #fffbf0;
  width: 100%;
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
`

export default function AuthorArtical() {
  return <Wrapper>写文章</Wrapper>
}
