import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useAppSelector } from './hook/reduxHook'

import './App.css'
import Layout from './components/Layout'
import Login from './pages/Login'
import Home from './pages/Home'

import { commonRoutes, accessRoute } from './router'
import { isLogin } from './store/userInfo/index'

export default function App() {
  // const [isLoginFlag, setIsLoginFlag] = useState(0)
  const isLoginFlag = useAppSelector(isLogin)
  // useEffect(() => {
  //   setIsLoginFlag(flag)
  // }, [flag])
  useEffect(() => {
    // console.log(34)
    // return () => {
    //   console.log(123)
    //   window.removeEventListener('beforeunload', beforeunload)
    //   dispatch(
    //     setterUserInfoStoreState({
    //       type: 'isLogin',
    //       value: 0,
    //     })
    //   )
    // }
  }, [])
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        {commonRoutes.map(({ path, component: Compo }) => (
          <Route path={path} key={path} element={<Compo />} />
        ))}
        {isLoginFlag &&
          accessRoute.map(({ path, component: Compo }) => (
            <Route path={path} key={path} element={<Compo />} />
          ))}
      </Route>

      <Route path="login" element={<Login />} />
      <Route path="*" element={<div>Hello, no this page~</div>} />
    </Routes>
  )
}
