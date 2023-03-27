import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { BannerWrapper, CenterWrapper } from '../../style/common'
import List from '../../components/List'
import { getArticalList } from '../../https/artical'
import { TypographyCom } from '../../components/TypographyCom'
// import { useNavigate } from 'react-router-dom'

const SoilWrapper = styled.div`
  width: 100%;
`
export default function Metaphysics() {
  const [articalList, setarticalList] = useState<any>([])
  useEffect(() => {
    getArticalList()
      .then(res => {
        console.log(res, 'res')
        // science","trivial","tech","metaphysics
        let arr = res?.data?.list?.filter(({ tagType }) =>
          tagType.includes('metaphysics')
        )
        setarticalList(arr)
      })
      .catch(err => console.log(err))
  }, [])
  return (
    <SoilWrapper>
      {/* 玄学 */}
      <CenterWrapper>
        <BannerWrapper bgColor="#e8f5e9">
          <TypographyCom text="玄之又玄，众妙之门。" />
        </BannerWrapper>
        <List list={articalList} />
      </CenterWrapper>
    </SoilWrapper>
  )
}
