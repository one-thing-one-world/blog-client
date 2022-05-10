import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
// eslint-disable-next-line import/no-cycle
import userInfoducer from './userInfo'

export const store = configureStore({
  reducer: {
    userInfo: userInfoducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
