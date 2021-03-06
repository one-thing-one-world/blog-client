import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

interface Iprops {
  title: string
  tittleDesc: string
  path: string
}

const Wrapper = styled.div`
  width: 312px;
  height: 139px;
  background: #ffffff;
  box-shadow: 0px 8px 50px 0px rgba(149, 157, 165, 0.2);
  border-radius: 25px;
  padding: 0 20px;
  margin-bottom: 20px;
  cursor: pointer;
`

const TitleText = styled.div`
  width: 80px;
  height: 25px;
  font-size: 18px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #3f3d55;
  line-height: 25px;
  margin: 24px 0;
`
const TittleDesc = styled.div`
  width: 100%;
  font-size: 18px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(63, 61, 85, 0.63);
  line-height: 25px;
`

export default function IntroItemWrapper(props: Iprops) {
  const { title, tittleDesc, path } = props
  const navigate = useNavigate()

  return (
    <Wrapper onClick={() => navigate(path)}>
      <TitleText>{title}</TitleText>
      <TittleDesc>{tittleDesc}</TittleDesc>
    </Wrapper>
  )
}
