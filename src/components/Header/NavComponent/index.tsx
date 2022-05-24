import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import {
  Box,
  Tabs,
  Tab,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { tabList } from '../tabList'

const PcTab = () => {
  const [value, setValue] = useState('/home')
  const navigate = useNavigate()
  const { pathname } = useLocation()
  useEffect(
    () => (pathname === '/' ? setValue('/home') : setValue(pathname)),
    [pathname]
  )
  return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider', height: '60px' }}>
      <Tabs
        value={value}
        onChange={(event: React.SyntheticEvent, newValue: string) => {
          setValue(newValue)
          navigate(newValue)
        }}
        sx={{ height: '60px' }}
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
    </Box>
  )
}

const PhoneTab = () => {
  const [isShowDrawer, setIsShowDrawer] = useState(false)
  const navigate = useNavigate()

  return (
    <>
      <Drawer
        anchor="top"
        open={isShowDrawer}
        onClose={() => setIsShowDrawer(false)}
      >
        <List>
          {tabList.map(tab => (
            <ListItem
              key={tab.navName}
              sx={{ borderBottom: '1px solid #e6e1e1' }}
              disablePadding
            >
              <ListItemButton
                onClick={() => {
                  navigate(tab.componentPath)
                  setIsShowDrawer(false)
                }}
              >
                <ListItemText primary={tab.navName} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 1 }}
        onClick={() => setIsShowDrawer(true)}
      >
        <MenuIcon />
      </IconButton>
    </>
  )
}

export default function NavComponent() {
  const isMobile = useMediaQuery({ query: `(max-width: ${750}px` })
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{isMobile ? <PhoneTab /> : <PcTab />}</>
}
