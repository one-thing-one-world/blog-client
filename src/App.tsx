import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import Login from './pages/Login'
import { routes } from './router'

export default function App() {
  const isLogin = localStorage.getItem('isLogin')
  return (
    <Routes>
      <Route path="/" element={isLogin ? <Layout /> : <Login />}>
        <Route index element={<Home />} />
        {routes.map((item) => (
          <Route
            path={item.path}
            key={item.path}
            element={<item.component />}
          />
        ))}
      </Route>
    </Routes>
  )
}
