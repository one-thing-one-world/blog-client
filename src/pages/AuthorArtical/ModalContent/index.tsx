/* eslint-disable react/jsx-one-expression-per-line */
import React, { ReactNode, useRef, useState } from 'react'
import styled from 'styled-components'
import { useClickAway } from 'ahooks'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import { useDispatch } from 'react-redux'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import CloseIcon from '@mui/icons-material/Close'
import moment from 'moment'
// import { useSnackbar } from '@mui/base'
import { useSnackbar } from 'notistack'
import { setterUserInfoStoreState } from '../../../store/userInfo'
import { useAppSelector } from '../../../hook/reduxHook'
import { ColorButton } from '..'
import { addArtical } from '../../../https/artical'

const ModalContentWrapper = styled.div`
  padding: 32px 48px;
  width: 670px;
  height: 350px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid #e3e3e3;
  background: white;
  display: flex;
  /* justify-content: center; */
  flex-direction: column;
  /* .css-11ul6pg-MuiButtonBase-root-MuiButton-root {
    color: white;
  } */
`

const LabelComWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
`
const LabelTitleWrapper = styled.div`
  width: 90px;
  height: 28px;
  margin-right: 8px;
  font-size: 16px;
  color: #606266;
  white-space: nowrap;
  display: flex;
  align-items: center;
`
const AddWrapper = styled.div`
  width: 120px;
  padding: 0 8px;
  height: 28px;
  background: #fff;
  border-radius: 4px;
  border: 1px solid #e8e8ee;
  color: #555666;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  position: relative;
`
interface ITagWrapper {
  isHideTag: boolean
}
const TagWrapper = styled.div<ITagWrapper>`
  height: ${({ isHideTag }) => (isHideTag ? '100px' : '0')};
  width: 420px;
  position: absolute;
  z-index: 2;
  transition: all 0.5s ease-in-out;
  top: 32px;
  left: 0;
  background: white;
  border: ${({ isHideTag }) =>
    isHideTag ? '1px solid rgba(195, 191, 191, 0.1)' : '1px solid white'};
  box-shadow: ${({ isHideTag }) =>
    isHideTag ? '0 2px 6px 0 rgba(0, 0, 0, 0.1)' : '0 2px 6px 0 white'};
  overflow: hidden;
`
const TagTabWrapper = styled.div`
  padding: 0 8px;
  height: 24px;
  background-color: #ecfcec;
  border-radius: 2px;
  font-weight: 400;
  color: #507999;
  line-height: 24px;
  cursor: pointer;
  margin-right: 16px;
  margin-bottom: 16px;
  border: none;
  font-size: 13px !important;
`
const ToTagTabWrapper = styled.div`
  padding: 0 8px;
  height: 24px;
  background-color: #ecfcec;
  border-radius: 2px;
  font-weight: 400;
  color: #507999;
  line-height: 24px;
  cursor: pointer;
  margin-left: 16px;
  /* margin-bottom: 16px; */
  border: none;
  font-size: 13px !important;
  display: flex;
  align-items: center;
`

const TagContentwrapper = styled.div`
  display: flex;
  padding: 20px;
`

const ToTagWrapper = styled.div`
  display: flex;
  align-items: center;
`

interface TabListItem {
  name: string
  value: string
}
const TagLabelCom = () => {
  const dispatch = useDispatch()
  const tagVisible = useAppSelector(state => state.userInfo.tagVisible)
  const addRef = useRef<HTMLDivElement>(null)
  //   const [isHideTag, setIsHideTag] = useState<boolean>(false)
  useClickAway(() => {
    dispatch(
      setterUserInfoStoreState({
        type: 'tagVisible',
        value: false,
      })
    )
    console.log(123, 'isHasClickItemFlag')
  }, addRef)

  let tagList = [
    {
      name: '玄学',
      value: 'metaphysics',
    },
    {
      name: '科学',
      value: 'science',
    },
    {
      name: '计算机',
      value: 'tech',
    },
    {
      name: '生活',
      value: 'trivial',
    },
  ] as const

  const [fromTagList, setFromTagList] = useState<TabListItem[]>(
    JSON.parse(JSON.stringify(tagList))
  )
  const [toTagList, setToTagList] = useState<TabListItem[]>([])

  return (
    <LabelComWrapper ref={addRef}>
      <LabelTitleWrapper>文章标签:</LabelTitleWrapper>
      <AddWrapper
        onClick={() => {
          dispatch(
            setterUserInfoStoreState({
              type: 'tagVisible',
              value: true,
            })
          )
          console.log(tagVisible, 'tagVisible')
        }}
      >
        + 添加文章标签
        <TagWrapper isHideTag={tagVisible}>
          <TagContentwrapper>
            {fromTagList.map((tagItem, tagInd) => (
              <TagTabWrapper
                onClick={e => {
                  e.stopPropagation()
                  const isHasClickItemFlag = fromTagList.some(
                    fromTag => fromTag.value === tagItem.value
                  )
                  if (isHasClickItemFlag) {
                    let arr = fromTagList.filter(
                      fromTag => fromTag.value !== tagItem.value
                    )
                    setFromTagList([...arr])
                    toTagList.push(tagItem)
                    setToTagList([...toTagList])
                  }
                  console.log(
                    isHasClickItemFlag,
                    fromTagList,
                    'isHasClickItemFlag1',
                    toTagList,
                    tagVisible
                  )
                }}
                key={tagItem.value}
              >
                {tagItem.name}
              </TagTabWrapper>
            ))}
          </TagContentwrapper>
        </TagWrapper>
      </AddWrapper>

      <ToTagWrapper>
        {toTagList.map((tagItem, tagInd) => (
          <ToTagTabWrapper
            onClick={e => {
              e.stopPropagation()
              fromTagList.push(tagItem)
              setFromTagList([...fromTagList])
              let arr = toTagList.filter(
                fromTag => fromTag.value !== tagItem.value
              )
              setToTagList([...arr])
              console.log(
                // isHasClickItemFlag,
                fromTagList,
                'isHasClickItemFlag2',
                toTagList,
                tagVisible
              )
            }}
            key={tagItem.value}
          >
            {tagItem.name}
            <HighlightOffIcon sx={{ marginLeft: '4px', fontSize: '14px' }} />
          </ToTagTabWrapper>
        ))}
      </ToTagWrapper>
    </LabelComWrapper>
  )
}

interface ILabelCom {
  title: string
  children?: ReactNode
}

const LabelContentWrapper = styled.div`
  color: #555666;
  font-size: 14px;
`

const LabelCom = ({ title, children }: ILabelCom) => (
  //   const addRef = useRef<HTMLDivElement>(null)
  //   const [isHideTag, setIsHideTag] = useState<boolean>(false)
  //   useClickAway(() => {
  //     setIsHideTag(false)
  //   }, addRef)
  <LabelComWrapper>
    <LabelTitleWrapper> {title}:</LabelTitleWrapper>
    <LabelContentWrapper>{children}</LabelContentWrapper>
  </LabelComWrapper>
)

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

const CloseWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  /* &:hover {
    background: #ecffea;
  } */
  /* width: 100px;
  height: 100px; */
  /* border: 1px solid red; */
`

interface IModalContent {
  html: string
  inputValue: string
  setModalVisible: (arg: boolean) => void
}
export default function ModalContent(props: IModalContent) {
  const { html, inputValue, setModalVisible } = props
  const [value, setValue] = React.useState<string>('1')
  const { enqueueSnackbar } = useSnackbar()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value)
  }
  return (
    <ModalContentWrapper>
      <h3 style={{ marginLeft: '-12px', position: 'relative' }}>
        发布文章
        <CloseWrapper onClick={() => setModalVisible(false)}>
          <CloseIcon />
        </CloseWrapper>
      </h3>
      <TagLabelCom />
      <LabelCom title="文章类型">
        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel
              color="success"
              value="1"
              control={<Radio />}
              label="原创"
            />
            <FormControlLabel
              color="success"
              value="2"
              control={<Radio />}
              label="转载"
            />
          </RadioGroup>
        </FormControl>
      </LabelCom>
      <ButtonWrapper>
        <ColorButton
          variant="contained"
          sx={{ marginTop: '100px', color: 'white' }}
          onClick={() => {
            // let time = new Date()
            // moment().format('YYYY-MM-DD HH:mm:ss')

            addArtical({
              title: inputValue,
              content: html,
              author: 'liujuncai',
              createtime: moment().format('YYYY-MM-DD HH:mm:ss'),
            })
              .then(res => {
                console.log(res)

                if (res.data.code === 200) {
                  setModalVisible(false)
                  enqueueSnackbar('文章发布成功', {
                    variant: 'success',
                    anchorOrigin: {
                      vertical: 'top',
                      horizontal: 'center',
                    },
                    autoHideDuration: 2000,
                  })
                } else {
                  enqueueSnackbar('文章发布失败', {
                    variant: 'error',
                    anchorOrigin: {
                      vertical: 'top',
                      horizontal: 'center',
                    },
                    autoHideDuration: 2000,
                  })
                }
              })
              .catch(err => console.log(err))
          }}
        >
          发布文章
        </ColorButton>
      </ButtonWrapper>
    </ModalContentWrapper>
  )
}
