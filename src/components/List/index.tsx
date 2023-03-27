import React from 'react'
import styled from 'styled-components'
import { ListContainer } from '../../style/common'
import { tabList } from '../Header/tabList'

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
`
const ContentWrapper = styled.div`
  font-size: 16px;
  height: 50px;
  cursor: pointer;
  text-indent: 4 !important;

  /* border: 1px solid #ccc; */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`
const TimeWrapper = styled.div`
  font-size: 18px;
  display: flex;
  justify-content: flex-end;
  /* border: 1px solid blue; */
`

const TitleNameWrapper = styled.div`
  margin-right: 10px;
`

const ListItem = ({ createTime, title, content, tagType }: IListItem) => {
  console.log(JSON.parse(tagType), 'tagType')
  // let typeTagArr = JSON.parse(tagType)
  // ;('#f3f7fd')
  let bgColorList = tabList.filter(item => tagType.includes(item.name))
  return (
    <ListWrapper>
      <TitleWrapper>
        <TitleNameWrapper>{title}</TitleNameWrapper>
        {bgColorList.map((tag, tagInd) => (
          <TagTypeWrapper bgColor={tag.color}>{tag.navName}</TagTypeWrapper>
        ))}
      </TitleWrapper>
      <ContentWrapper>
        &nbsp;&nbsp;&nbsp;&nbsp;
        {content}
      </ContentWrapper>
      <TimeWrapper>
        <div>{createTime}</div>
      </TimeWrapper>
    </ListWrapper>
  )
}

interface IList {
  list: IListItem[]
}
export default function List(props: IList) {
  const { list } = props
  return (
    <ListContainer>
      {list?.map(({ createTime, title, content, tagType }, index) => (
        <ListItem
          key={index}
          title={title}
          content={content}
          createTime={createTime}
          tagType={tagType}
        />
      ))}
    </ListContainer>
  )
}
