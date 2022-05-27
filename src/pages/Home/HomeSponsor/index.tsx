import React from 'react'
import styled from 'styled-components'
import SponsorDesc from './SponsorDesc'
import SponsorPayWay from './SponsorPayWay'

const SponsorWrapper = styled.div`
  /* height: 60px; */
  display: flex;
  justify-content: space-between;
  width: 100%;
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
