import { createSlice } from '@reduxjs/toolkit'
// eslint-disable-next-line import/no-cycle
import { RootState } from '../index'
// import { fetchCount } from './counterAPI'

export interface userInfoState {
  isLogin: 'login' | 'notLogin'
}

const initialState: userInfoState = {
  isLogin: 'login',
}
export const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    login: (state) => {
      state.isLogin = 'login'
    },
    logout: (state) => {
      state.isLogin = 'notLogin'
    },
  },
})
export const isLogin = (state: RootState) => state.userInfo.isLogin

export const { login, logout } = userInfoSlice.actions
export default userInfoSlice.reducer
