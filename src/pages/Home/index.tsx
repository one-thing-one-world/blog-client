import React, { useEffect } from 'react'
import styled from 'styled-components'
// import { useNavigate } from 'react-router-dom'

import HomeBanner from './HomeBanner'
import HomeIntro from './HomeIntro'
import HomeSponsor from './HomeSponsor'
import HomeEmail from './HomeEmail'
import { useAppDispatch } from '../../hook/reduxHook'
import { setterUserInfoStoreState } from '../../store/userInfo'

const Wrapper = styled.div`
  /* font-size: 2000rw !important; */
`
export default function Home() {
  // const navigate = useNavigate()
  const dispatch = useAppDispatch()
  useEffect(() => {
    console.log(window.location, 'home')
  }, [])
  useEffect(
    () => () => {
      // 一天后退出登录
      setTimeout(() => {
        dispatch(
          setterUserInfoStoreState({
            type: 'isLogin',
            value: 0,
          })
        )
      }, 1000 * 60 * 60 * 24)
    },
    []
  )
  return (
    <Wrapper>
      <HomeBanner />
      <HomeIntro />
      <HomeSponsor />
      <HomeEmail />
    </Wrapper>
  )
}
