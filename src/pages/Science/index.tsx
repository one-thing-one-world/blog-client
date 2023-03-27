import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { TypographyCom } from '../../components/TypographyCom'
import { BannerWrapper, CenterWrapper } from '../../style/common'
import List from '../../components/List'
import { getArticalList } from '../../https/artical'

const WatterWrapper = styled.div`
  width: 100%;
`

export default function Science() {
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
    <WatterWrapper>
      <CenterWrapper>
        <BannerWrapper bgColor="#fffde7">
          <TypographyCom text=" 细胞，数学，宇宙。" />
        </BannerWrapper>
        <List list={articalList} />
      </CenterWrapper>
    </WatterWrapper>
  )
}
