import React from 'react'
import styled from 'styled-components'
import SponsorDesc from './SponsorDesc'
import SponsorPayWay from './SponsorPayWay'

const SponsorWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  @media (max-width: 750px) {
    flex-direction: column;
  }
`

export default function HomeSponsor() {
  return (
    <SponsorWrapper>
      <SponsorDesc />
      <SponsorPayWay />
    </SponsorWrapper>
  )
}
