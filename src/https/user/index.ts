import { axiosInstance } from '..'

export interface IResponse<T> {
  code: number
  data: T
  message: string
}

export interface logginParams {
  username: string
  password: string
}

interface IauthLoginData {
  accessToken: string
}
export const authLogin = (
  params: logginParams
): Promise<IResponse<IauthLoginData>> =>
  axiosInstance.post('/auth/login', params)
