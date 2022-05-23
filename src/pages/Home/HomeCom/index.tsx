import React from 'react'
import { Typography } from '@mui/material'
import BasicHomeCom from '../../../components/BasicHomeCom'

export default function HomeCom() {
  return (
    <BasicHomeCom bgColor="#fffbf0">
      <Typography
        sx={{ marginBottom: '60px' }}
        variant="h4"
        gutterBottom
        component="div"
      >
        在这里你可以记录自己的学习感悟，生活感慨，以及爱好的研究。这里文章囊括有计算机，哲学，玄学，科学，生活感悟等等。
      </Typography>

      {/* <Button variant="contained" size="large">
        开始阅读
      </Button> */}
    </BasicHomeCom>
  )
}
