import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
// import Typography from '@mui/material/Typography'
import CssBaseline from '@mui/material/CssBaseline'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import Box from '@mui/material/Box'
// import Container from '@mui/material/Container'
import Fab from '@mui/material/Fab'
import Zoom from '@mui/material/Zoom'

interface Props {
  children: React.ReactNode
}

function ScrollTop(props: Props) {
  const { children } = props
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  })

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector('#back-to-top-anchor')

    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      })
    }
  }

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Zoom>
  )
}

export default function BackTop(props: Props) {
  const { children } = props
  return (
    <>
      <CssBaseline />
      <AppBar sx={{ background: 'white', color: 'black', boxShadow: 'unset' }}>
        <Toolbar>{children}</Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      <ScrollTop {...props}>
        <Fab color="primary" size="large" aria-label="scroll back to top">
          回顶部
        </Fab>
      </ScrollTop>
    </>
  )
}
