import React from 'react'
// import styled from 'styled-components'
import { Button, Typography } from '@mui/material'
import CenterWrapper from '../../../style/common'
import BasicHomeCom from '../../../components/BasicHomeCom'

export default function MetaphysicsCom() {
  return (
    <BasicHomeCom bgColor="#E8F5E9">
      <CenterWrapper>
        <Typography
          variant="h4"
          sx={{ marginBottom: '60px' }}
          gutterBottom
          component="div"
        >
          玄之又玄，众妙之门。
        </Typography>
        <Button variant="contained" size="large">
          开始阅读
        </Button>
      </CenterWrapper>
    </BasicHomeCom>
  )
}
