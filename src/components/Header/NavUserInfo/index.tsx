import React from 'react'
// import styled from 'styled-components'
import { Typography, Box } from '@mui/material'

export default function NavUserInfo() {
  return (
    <Box sx={{ display: 'flex', height: '60px' }}>
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
