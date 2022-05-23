import React, { useState, useEffect } from 'react'
// import styled from 'styled-components'
import { useNavigate, useLocation } from 'react-router-dom'
import { styled } from '@mui/material/styles'

import { Box, Tabs, Tab } from '@mui/material'
// import { commonRoutes } from '../../../router/index'
import { tabList } from '../tabList'

const BoxWrapper = styled(Box)`
  @media (max-width: 750px) {
    display: none;
  }
  @media (min-width: 750px) {
    display: block;
  }
`
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
    <BoxWrapper
      sx={{ borderBottom: 1, borderColor: 'divider', height: '60px' }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        sx={{ height: '60px', display: 'block' }}
      >
        {tabList.map(({ navName, componentPath }) => (
          <Tab
            sx={{ height: '60px' }}
            key={componentPath}
            label={navName}
            value={componentPath}
          />
        ))}
      </Tabs>
    </BoxWrapper>
  )
}
