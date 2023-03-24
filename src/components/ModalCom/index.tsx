import React, { ReactElement } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

interface IShareBoardModal {
  children: ReactElement
  visible: boolean
}

interface IWrapper {
  visible: boolean
}
const Wrapper = styled.div<IWrapper>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: ${({ visible }) => (visible ? '9999' : '-1')};
  background: rgba(78, 78, 78, 0.4);
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
  display: flex;
  justify-content: center;
  align-items: center;
`

export default function ModalCom({ children, visible }: IShareBoardModal) {
  return ReactDOM.createPortal(
    <Wrapper visible={visible}>{children}</Wrapper>,
    document.body
  )
}
