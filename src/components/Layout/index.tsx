import React from 'react'
import { Outlet } from 'react-router-dom'
import BackTop from '../BackTop'
import Header from '../Header'

export default function Layout() {
  return (
    <div>
      <BackTop>
        <Header />
      </BackTop>
      <Outlet />
    </div>
  )
}
