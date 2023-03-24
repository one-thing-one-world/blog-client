import React from 'react'
import styled from 'styled-components'
import { ListContainer } from '../../style/common'

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
`

const ContentWrapper = styled.div`
  font-size: 18px;
  height: 56px;
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
const ListItem = ({ time, title, content }: IListItem) => (
  <ListWrapper>
    <TitleWrapper>{title}</TitleWrapper>
    <ContentWrapper>{content}</ContentWrapper>
    <TimeWrapper>
      <div>{time}</div>
    </TimeWrapper>
  </ListWrapper>
)

interface IList {
  list: IListItem[]
}
export default function List(props: IList) {
  const { list } = props
  return (
    <ListContainer>
      {list.map(({ time, title, content }, index) => (
        <ListItem key={index} title={title} content={content} time={time} />
      ))}
    </ListContainer>
  )
}
