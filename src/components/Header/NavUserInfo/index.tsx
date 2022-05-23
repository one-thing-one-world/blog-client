import React, { useState } from 'react'
// import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import {
  Typography,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { styled } from '@mui/material/styles'
import { tabList } from '../tabList'

const IconWrapper = styled(IconButton)`
  display: none;
  @media (max-width: 750px) {
    display: block !important;
  }
`
export default function NavUserInfo() {
  const [isShowDrawer, setIsShowDrawer] = useState(false)
  const navigate = useNavigate()

  return (
    <Box sx={{ display: 'flex', height: '60px' }}>
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
      <IconWrapper
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 1 }}
        onClick={() => setIsShowDrawer(true)}
      >
        <MenuIcon />
      </IconWrapper>
      <Typography
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, lineHeight: '60px' }}
      >
        一物一世界
      </Typography>
    </Box>
  )
}
