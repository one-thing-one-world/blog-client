import React from 'react'
import { Typography } from '@mui/material'
import { useMediaQuery } from 'react-responsive'

export const TypographyCom = ({ text }: { text: string }) => {
  console.log(text)
  const isLabtab = useMediaQuery({ query: '(max-width: 800px)' })
  console.log(isLabtab, 'isLabtab')
  return (
    <Typography variant={isLabtab ? 'h5' : 'h4'} gutterBottom component="div">
      {text}
    </Typography>
  )
}
