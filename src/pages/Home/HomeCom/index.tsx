import React from 'react'
// import { Typography } from '@mui/material'
import styled from 'styled-components'
import banner from '../../../assets/banner.svg'

// const Wrapper = styled.div`
//   width: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: 0 12px;
//   box-sizing: border-box;
//   margin: 20px 0;
// `

// const TextWrapper = styled.div`
//   height: 353px;
//   width: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background: linear-gradient(313deg, #fecdc9 0%, #bff7f2 64%, #a8c4fb 100%);
//   border-radius: 15px;
//   font-family: JCfg;
//   color: #cab8b8;
//   /* mix-blend-mode: difference; */

//   @media (max-width: 750px) {
//     font-size: 18px;
//   }
//   @media (min-width: 750px) {
//     font-size: 34px;
//   }
// `
const ImgWrapper = styled.img`
  width: 100%;
  height: 353px;
  object-fit: cover;
  margin-top: 30px;
`
export default function HomeCom() {
  return (
    // <Wrapper>
    //   <TextWrapper>
    //     {/* 在这里你可以记录自己的学习感悟，生活感慨，以及爱好的研究。这里文章囊括有计算机，哲学，玄学，科学，生活感悟等等。 */}
    //     科学，哲学，玄学
    //   </TextWrapper>
    // </Wrapper>
    <ImgWrapper src={banner} />
  )
}
