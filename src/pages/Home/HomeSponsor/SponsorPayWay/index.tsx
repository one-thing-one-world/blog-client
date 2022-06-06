import React from 'react'
import styled from 'styled-components'
import SelectedStatusCom from '../../../../components/SelectedStatusCom'
import PayItem from './PayItem'

const SponsorPayWayWrapper = styled.div`
  width: 389px;
  height: 375px;
  position: relative;
  @media (max-width: 750px) {
    flex-direction: column;
    width: 335px;
  }
`
export default function SponsorPayWay() {
  return (
    <SponsorPayWayWrapper>
      <SelectedStatusCom>
        <PayItem payType="blockChain" />
        <PayItem payType="weChat" />
        <PayItem payType="zhiFuBao" />
      </SelectedStatusCom>
    </SponsorPayWayWrapper>
  )
}
