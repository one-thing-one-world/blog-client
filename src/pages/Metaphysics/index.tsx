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

  const getListData = () => {
    console.log('callbackGetData')
    getArticalList(1)
      .then(res => {
        console.log(res, 'res')
        setarticalList(res?.data?.list)
      })
      .catch(err => console.log(err))
  }
  useEffect(() => {
    getListData()
  }, [])
  return (
    <SoilWrapper>
      {/* 玄学 */}
      <CenterWrapper>
        <BannerWrapper bgColor="#e8f5e9">
          <TypographyCom text="玄之又玄，众妙之门。" />
        </BannerWrapper>
        <List list={articalList} getListData={getListData} />
      </CenterWrapper>
    </SoilWrapper>
  )
}
