import React from 'react'
import styled from 'styled-components'
import { Button, Typography } from '@mui/material'
// import CenterWrapper from '../../../style/common'
// import { useNavigate } from 'react-router-dom'
// import flower from '../../../assets/flower.jpg'

const SoilWrapper = styled.div`
  /* background: #fffde7; */
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 0 40px;
  box-sizing: border-box;
`

export default function HomeCom() {
  return (
    <SoilWrapper>
      <Typography
        sx={{ marginBottom: '60px' }}
        variant="h4"
        gutterBottom
        component="div"
      >
        在这里你可以记录自己的学习感悟，生活感慨，以及爱好的研究。这里文章囊括有计算机，哲学，玄学，科学，生活感悟等等。
      </Typography>
      <Button variant="contained" size="large">
        开始阅读
      </Button>
    </SoilWrapper>
  )
}
