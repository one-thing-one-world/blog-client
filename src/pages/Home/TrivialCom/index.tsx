import React from 'react'
// import styled from 'styled-components'
import { Button, Typography } from '@mui/material'
import { CenterWrapper } from '../../../style/common'
import BasicHomeCom from '../../../components/BasicHomeCom'

export default function TrivialCom() {
  return (
    <BasicHomeCom bgColor="#FFFDE7">
      {/* 生活琐事 */}
      <CenterWrapper>
        <Typography
          sx={{ marginBottom: '60px' }}
          variant="h4"
          gutterBottom
          component="div"
        >
          人是一根能思想的苇草
        </Typography>
        <Button variant="contained" size="large">
          开始阅读
        </Button>
      </CenterWrapper>
    </BasicHomeCom>
  )
}
