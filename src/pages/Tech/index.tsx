import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { TypographyCom } from '../../components/TypographyCom'
import { BannerWrapper, CenterWrapper } from '../../style/common'
import List from '../../components/List'
import { getArticalList } from '../../https/artical'

const FlameWrapper = styled.div`
  width: 100%;
`
export default function Tech() {
  const [articalList, setarticalList] = useState<any>([])

  useEffect(() => {
    getArticalList()
      .then(res => {
        console.log(res, 'res')
        // science","trivial","tech","metaphysics
        let arr = res.data.list.filter(({ tagType }) =>
          tagType.includes('science')
        )
        setarticalList(arr)
      })
      .catch(err => console.log(err))
  }, [])
  return (
    <FlameWrapper>
      <CenterWrapper>
        <BannerWrapper bgColor="#ffebee">
          <TypographyCom text="前端，后端，网络，系统，web3。" />
        </BannerWrapper>
        <List list={articalList} />
      </CenterWrapper>
    </FlameWrapper>
  )
}
