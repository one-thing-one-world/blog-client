import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { TypographyCom } from '../../components/TypographyCom'
import { BannerWrapper, CenterWrapper } from '../../style/common'
import List from '../../components/List'
import { getArticalList } from '../../https/artical'

const GoldWrapper = styled.div`
  width: 100%;
`
export default function Trivial() {
  const [articalList, setarticalList] = useState<any>([])

  const getListData = () => {
    console.log('callbackGetData')
    getArticalList(3)
      .then(res => {
        setarticalList(res?.data?.list)
      })
      .catch(err => console.log(err))
  }
  useEffect(() => {
    getListData()
  }, [])
  return (
    <GoldWrapper>
      <CenterWrapper>
        <BannerWrapper bgColor="#e3f2fd">
          <TypographyCom text="人是一根能思想的苇草。" />
        </BannerWrapper>
        <List list={articalList} getListData={getListData} />
      </CenterWrapper>
    </GoldWrapper>
  )
}
