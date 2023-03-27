import styled from 'styled-components'

export const CenterWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-size: 30px;
  padding-bottom: 60px;
  /* border-radius: 15px; */
  /* text-align: center; */
`

interface IBannerWrapper {
  bgColor: string
}
export const BannerWrapper = styled.div<IBannerWrapper>`
  width: 100%;
  height: 320px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  border-radius: 20px;
  background: ${props => props.bgColor};
  box-shadow: 0 6px 16px 0 rgba(0, 0, 0, 0.08),
    0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
`

export const ListContainer = styled.div`
  width: 100%;
`
