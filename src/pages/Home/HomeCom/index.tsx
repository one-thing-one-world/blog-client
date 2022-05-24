import React from 'react'
import { Typography } from '@mui/material'
import styled from 'styled-components'
// import BasicHomeCom from '../../../components/BasicHomeCom'

const Wrapper = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 0 12px;
  box-sizing: border-box;
  max-width: 1020px;
  /* @media (max-width: 750px) {
    font-size: 2rem;
  }
  @media (min-width: 750px) {
    font-size: 20px;
  } */
`
export default function HomeCom() {
  return (
    <Wrapper>
      <Typography
        sx={{
          marginBottom: '60px',
          height: '353px',
          border: '1px solid red',
          background:
            'linear-gradient(313deg, #FECDC9 0%, #BFF7F2 64%, #A8C4FB 100%)',
        }}
        gutterBottom
        component="div"
      >
        在这里你可以记录自己的学习感悟，生活感慨，以及爱好的研究。这里文章囊括有计算机，哲学，玄学，科学，生活感悟等等。
      </Typography>

      {/* <Button variant="contained" size="large">
        开始阅读
      </Button> */}
    </Wrapper>
  )
}
