import { TextField } from '@mui/material'
import React, { useState } from 'react'
import styled from 'styled-components'
import { styled as muistyled } from '@mui/material/styles'
// eslint-disable-next-line import/no-unresolved
import { green } from '@mui/material/colors'
import Button, { ButtonProps } from '@mui/material/Button'
import moment from 'moment'
import { addArtical } from '../../https/artical'
import EditorDraft from '../../components/EditorDraft'

const TitleBtnWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 0 0 10px 0;
  .css-11ul6pg-MuiButtonBase-root-MuiButton-root {
    color: white;
  }
`

const Wrapper = styled.div`
  /* background: #fffbf0; */
  /* background: white; */

  width: 100%;
  /* height: 700px; */
  padding-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 30px;
  .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input {
    font-size: 18px;
  }
`
// const primaryColor = '#7ECCB4'
const ColorButton = muistyled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(green[300]),
  backgroundColor: green[300],
  '&:hover': {
    backgroundColor: green[300],
  },
  whiteSpace: 'nowrap',
}))
const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#7ECCB4',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#7ECCB4',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#ccc',
    },
    '&:hover fieldset': {
      borderColor: '#7ECCB4',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#7ECCB4',
    },
  },
})
export default function AuthorArtical() {
  const [inputValue, setInputValue] = useState<string>('')
  const [html, setHtml] = useState('<p></p>')

  return (
    <Wrapper>
      <TitleBtnWrapper>
        <CssTextField
          id="outlined-basic2"
          fullWidth
          label="请输入标题"
          variant="outlined"
          size="small"
          color="success"
          sx={{ margin: '0  10px  0 0', background: 'white' }}
          value={inputValue}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            console.log(inputValue)
            setInputValue(event.target.value)
          }}
        />
        <ColorButton
          variant="contained"
          onClick={() => {
            // let time = new Date()
            // moment().format('YYYY-MM-DD HH:mm:ss')

            addArtical({
              title: inputValue,
              content: html,
              author: '',
              createtime: moment().format('YYYY-MM-DD HH:mm:ss'),
            })
              .then(res => console.log(res, 'res'))
              .catch(err => console.log(err))
            console.log(inputValue, html)
          }}
        >
          发布文章
        </ColorButton>
      </TitleBtnWrapper>
      <EditorDraft html={html} setHtml={setHtml} />
    </Wrapper>
  )
}
