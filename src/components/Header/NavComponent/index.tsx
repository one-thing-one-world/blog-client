import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useNavigate, useLocation } from 'react-router-dom'
import { Box, Tabs, Tab } from '@mui/material'
// import { commonRoutes } from '../../../router/index'

const NavWrapper = styled.div`
  height: 60px;
  display: flex;
`
const tabList = [
  {
    navName: '首页',
    componentPath: '/home',
  },
  {
    navName: '玄学',
    componentPath: '/metaphysics',
  },
  {
    navName: '科学',
    componentPath: '/science',
  },
  {
    navName: '计算机',
    componentPath: '/tech',
  },

  {
    navName: '生活',
    componentPath: '/trivial',
  },
  {
    navName: '写文章',
    componentPath: '/authorArtical',
  },
]

export default function NavComponent() {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const [value, setValue] = useState('/home')
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
    navigate(newValue)
  }
  useEffect(
    () => (pathname === '/' ? setValue('/home') : setValue(pathname)),
    [pathname]
  )

  return (
    <NavWrapper>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', height: '60px' }}>
        <Tabs value={value} onChange={handleChange} sx={{ height: '60px' }}>
          {tabList.map(({ navName, componentPath }) => (
            <Tab
              sx={{ height: '60px' }}
              key={componentPath}
              label={navName}
              value={componentPath}
            />
          ))}
        </Tabs>
      </Box>
    </NavWrapper>
  )
}
