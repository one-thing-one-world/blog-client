import React, { useEffect, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useAppSelector } from './hook/reduxHook'
import './App.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import Login from './pages/Login'
import { commonRoutes, accessRoute } from './router'
import { isLogin } from './store/userInfo/index'

export default function App() {
  const [isLoginFlag, setIsLoginFlag] = useState('notLogin')
  const flag = useAppSelector(isLogin)
  useEffect(() => {
    console.log('this is app')
    setIsLoginFlag(flag)
  }, [flag])
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
              isLoginFlag === 'login' ? <Compo /> : <Navigate to="/login" />
            }
          />
        ))}
      </Route>

      <Route path="login" element={<Login />} />
      <Route path="*" element={<div>Hello, no this page~</div>} />
    </Routes>
  )
}
