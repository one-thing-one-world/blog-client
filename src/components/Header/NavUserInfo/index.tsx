import React from 'react'
import styled from 'styled-components'
import { Typography, Box } from '@mui/material'

const GitHubWrapper = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 10px;
  cursor: pointer;
`

export default function NavUserInfo() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', height: '60px' }}>
      <GitHubWrapper
        onClick={() => {
          window.location.href = 'https://github.com/one-thing-one-world'
        }}
        src="https://www.zzhack.fun/images/$light_github.svg"
      />
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
