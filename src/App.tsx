import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useAppSelector } from './hook/reduxHook'
import './App.css'
import Layout from './components/Layout'
import Login from './pages/Login'
import Home from './pages/Home'

import { commonRoutes, accessRoute } from './router'
import { isLogin } from './store/userInfo/index'

export default function App() {
  const [isLoginFlag, setIsLoginFlag] = useState('notLogin')
  const flag = useAppSelector(isLogin)
  useEffect(() => {
    setIsLoginFlag(flag)
  }, [flag])
  useEffect(() => {
    // document.addEventListener('click', () => {
    //   const myDiv = document.getElementsByClassName('payTab')
    //   Array.from(myDiv).forEach((item: any) => {
    //     // eslint-disable-next-line no-param-reassign
    //     item.style.right = 0
    //   })
    //   console.log(myDiv, 'Mydiv')
    // })
    // document.body.addEventListener('click', () => {
    //   console.log('first')
    //   const myDiv = document.getElementsByClassName('payTab')
    //   Array.from(myDiv).forEach((item: any) => {
    //     // eslint-disable-next-line no-param-reassign
    //     item.style.right = 0
    //   })
    // })
  }, [])
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        {commonRoutes.map(({ path, component: Compo }) => (
          <Route path={path} key={path} element={<Compo />} />
        ))}
        {accessRoute.map(({ path, component: Compo }) => (
          <Route
            path={path}
            key={path}
            element={
              isLoginFlag === 'login' ? <Compo /> : <Compo />

              // isLoginFlag === 'login' ? <Compo /> : <Navigate to="/login" />
            }
          />
        ))}
      </Route>

      <Route path="login" element={<Login />} />
      <Route path="*" element={<div>Hello, no this page~</div>} />
    </Routes>
  )
}
