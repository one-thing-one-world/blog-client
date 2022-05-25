import React from 'react'
import { Button, Typography } from '@mui/material'
import { CenterWrapper } from '../../../style/common'
import BasicHomeCom from '../../../components/BasicHomeCom'

export default function WriteArticalCom() {
  return (
    <BasicHomeCom bgColor="#fffbf0">
      <CenterWrapper>
        <Typography
          sx={{ marginBottom: '60px' }}
          variant="h4"
          gutterBottom
          component="div"
        >
          写出所思所想，记录世间万物。
        </Typography>
        <Button variant="contained" size="large">
          开始阅读
        </Button>
      </CenterWrapper>
    </BasicHomeCom>
  )
}
