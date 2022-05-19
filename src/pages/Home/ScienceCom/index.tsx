import React from 'react'
// import styled from 'styled-components'
import { Button, Typography } from '@mui/material'
import CenterWrapper from '../../../style/common'
import BasicHomeCom from '../../../components/BasicHomeCom'

export default function ScienceCom() {
  return (
    <BasicHomeCom bgColor="#E3F2FD">
      <CenterWrapper>
        <Typography
          variant="h4"
          sx={{ marginBottom: '60px' }}
          gutterBottom
          component="div"
        >
          细胞，数学，宇宙。
        </Typography>
        <Button variant="contained" size="large">
          开始阅读
        </Button>
      </CenterWrapper>
    </BasicHomeCom>
  )
}
