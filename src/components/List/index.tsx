/* eslint-disable react/no-danger */
import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useSnackbar } from 'notistack'
import { useNavigate } from 'react-router-dom'
import { ListContainer } from '../../style/common'
import { tabList } from '../Header/tabList'
import { isLogin } from '../../store/userInfo/index'
import { useAppSelector } from '../../hook/reduxHook'
import { deleteArtical } from '../../https/artical'

const ListWrapper = styled.div`
  border-radius: 25px;
  padding: 15px;
  /* border: 1px solid #ccc; */
  height: 160px;
  margin-top: 20px;
  background: #ffffff;
  box-shadow: 0 6px 16px 0 rgba(0, 0, 0, 0.08),
    0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
`

const TitleWrapper = styled.div`
  /* border: 1px solid green; */
  display: flex;
  align-items: center;
`
interface ITagTypeWrapper {
  bgColor: string
}
const TagTypeWrapper = styled.div<ITagTypeWrapper>`
  /* border: 1px solid green; */
  font-size: 14px;
  margin-left: 10px;
  background: ${({ bgColor }) => bgColor};
  color: green;
  transform: scale(0.8);
  padding: 2px 6px;
  border-radius: 6px;
  word-break: keep-all;
`
const ContentWrapper = styled.div`
  font-size: 16px;
  height: 50px;
  cursor: pointer;
  /* border: 1px solid #ccc; */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  > div {
    text-indent: 4 !important;
  }
`
const TimeWrapper = styled.div`
  font-size: 18px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  /* border: 1px solid blue; */
`

const TitleNameWrapper = styled.div`
  margin-right: 10px;
  word-break: keep-all;
  overflow: hidden; //超出的文本隐藏
  text-overflow: ellipsis; //溢出用省略号显示
  white-space: nowrap; //溢出不换行
  /* border: 1px solid blue; */
  min-width: 40px;
`

interface IDeleteWrapper {
  isLogin: 0 | 1
}
const DeleteWrapper = styled.div<IDeleteWrapper>`
  margin-right: 20px;
  color: red;
  font-size: 16px;
  display: ${props => (props.isLogin ? 'block' : 'none')};
  cursor: pointer;
`
const ListItem = ({
  createTime,
  title,
  content,
  tagType,
  id,
  author,
  getListData,
}: IListItem) => {
  console.log(JSON.parse(tagType), 'tagType')
  const flag = useAppSelector(isLogin)
  const { enqueueSnackbar } = useSnackbar()
  let bgColorList = tabList.filter(item => tagType.includes(item.name))
  useEffect(() => {
    console.log(isLogin, 'isLogin')
  }, [isLogin])
  const navigate = useNavigate()
  return (
    <ListWrapper
      onClick={() => {
        navigate('/articalDetail', {
          state: {
            content,
            createTime,
            title,
            tagType,
            author,
          },
        })
      }}
    >
      <TitleWrapper>
        <TitleNameWrapper>{title}</TitleNameWrapper>
        {bgColorList.map((tag, tagInd) => (
          <TagTypeWrapper key={tagInd} bgColor={tag.color}>
            {tag.navName}
          </TagTypeWrapper>
        ))}
      </TitleWrapper>
      <ContentWrapper>
        <div dangerouslySetInnerHTML={{ __html: content?.slice(3, -4) }} />
      </ContentWrapper>
      <TimeWrapper>
        <DeleteWrapper
          isLogin={flag}
          onClick={e => {
            e.stopPropagation()
            deleteArtical(id)
              .then(res => {
                if (res.code === 200) {
                  enqueueSnackbar('删除成功', {
                    variant: 'success',
                    anchorOrigin: {
                      vertical: 'top',
                      horizontal: 'center',
                    },
                    autoHideDuration: 2000,
                  })
                  getListData()
                }
              })
              .catch(err => console.log(err))
          }}
        >
          删除
        </DeleteWrapper>
        <div>{createTime}</div>
      </TimeWrapper>
    </ListWrapper>
  )
}

interface IList {
  list: IListItem[]
  getListData: () => void
}
export default function List(props: IList) {
  const { list, getListData } = props
  return (
    <ListContainer>
      {list?.map(
        ({ createTime, title, content, tagType, id, author }, index) => (
          <ListItem
            key={id}
            title={title}
            content={content}
            createTime={createTime}
            tagType={tagType}
            id={id}
            author={author}
            getListData={getListData}
          />
        )
      )}
    </ListContainer>
  )
}
