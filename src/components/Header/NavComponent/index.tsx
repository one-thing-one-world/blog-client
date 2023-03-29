import React, { useState, useEffect, useMemo } from 'react'
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
// import MenuIcon from '@mui/icons-material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import { ITabList, tabList as authList } from '../tabList'
import { useAppDispatch, useAppSelector } from '../../../hook/reduxHook'
import { isLogin, setterUserInfoStoreState } from '../../../store/userInfo'

const PcTab = () => {
  const [value, setValue] = useState('/home')
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const dispatch = useAppDispatch()
  const loginFlag = useAppSelector(isLogin)
  document.title = '一物一世界'

  useEffect(
    () => (pathname === '/' ? setValue('/home') : setValue(pathname)),
    [pathname]
  )

  const tabList: ITabList[] = useMemo(() => {
    let originArr = JSON.parse(JSON.stringify(authList))
    loginFlag ? originArr : originArr.pop()
    return originArr
  }, [loginFlag])
  return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider', height: '60px' }}>
      <Tabs
        value={value}
        onChange={(event: React.SyntheticEvent, newValue: string) => {
          const tabObj = tabList.find(item => item.componentPath === newValue)
          dispatch(
            setterUserInfoStoreState({
              type: 'bgColor',
              value: tabObj?.color,
            })
          )
          console.log(newValue, event, 'color', tabObj)
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
  const dispatch = useAppDispatch()
  const loginFlag = useAppSelector(isLogin)

  const [tabList, setTabList] = useState<ITabList[]>(authList)

  useEffect(() => {
    let originArr = JSON.parse(JSON.stringify(authList))
    loginFlag ? originArr : originArr.pop()
    setTabList(originArr)
  }, [loginFlag])

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
                  dispatch(
                    setterUserInfoStoreState({
                      type: 'bgColor',
                      value: tab.color,
                    })
                  )
                  setIsShowDrawer(false)
                  navigate(tab.componentPath)
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
