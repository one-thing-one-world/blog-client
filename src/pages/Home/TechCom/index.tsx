import React from 'react'
// import styled from 'styled-components'
import { Button, Typography } from '@mui/material'
import CenterWrapper from '../../../style/common'
import BasicHomeCom from '../../../components/BasicHomeCom'

export default function TechCom() {
  return (
    <BasicHomeCom bgColor="#FFEBEE">
      {/* 计算机 */}
      <CenterWrapper>
        <Typography
          sx={{ marginBottom: '60px' }}
          variant="h4"
          gutterBottom
          component="div"
        >
          前端，后端，网络，系统，web3。
        </Typography>
        <Button variant="contained" size="large">
          开始阅读
        </Button>
      </CenterWrapper>
    </BasicHomeCom>
  )
}
