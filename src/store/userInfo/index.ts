import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// eslint-disable-next-line import/no-cycle
import { RootState } from '../index'
// import { fetchCount } from './counterAPI'

export interface UserInfoState {
  isLogin: 0 | 1
  bgColor: string
  tagVisible: boolean
}

const initialState: UserInfoState = {
  isLogin: 0,
  bgColor: '#E8F5E9',
  tagVisible: false,
}

export const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    setterUserInfoStoreState: (
      state: any,
      action: PayloadAction<{ type: keyof UserInfoState; value: any }>
    ) => {
      const { type, value } = action.payload
      state[type] = value
    },
  },
})

export const isLogin = (state: RootState) => state.userInfo.isLogin
export const { setterUserInfoStoreState } = userInfoSlice.actions

export default userInfoSlice.reducer
