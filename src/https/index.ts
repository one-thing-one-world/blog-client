import axios, { AxiosInstance, AxiosResponse } from 'axios'
// import { showMessage } from './status'

// export const baseUrl = 'http://101.37.83.146:3000/'
export const baseUrl = process.env.REACT_APP_BASE_URL
console.log(baseUrl, 'baseUrl')
export const axiosInstance: AxiosInstance = axios.create({
  // baseURL: '',
  baseURL: baseUrl,
  timeout: 60000,
})

// axios实例拦截响应
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    // const { code } = response.data
    console.log('statusCodesss', response)
    if (response.status === 200) {
      return response.data
    }

    // message.error(showMessage(response.status))
    return response
  },
  // 请求失败
  // eslint-disable-next-line consistent-return
  (error: any) => {
    const { response } = error
    console.log(error, 'statusCodesssResponceError')
    if (response) {
      if (
        response.status === 401 &&
        !window.location.pathname.includes('/login')
      ) {
        console.log('没有权限')
        window.location.href = `${window.location.origin}/`
      }
      return Promise.reject(response.data)
    }
    // message.error('网络连接异常,请稍后再试!')
  }
)

// axios 请求拦截器
axiosInstance.interceptors.request.use(
  (config: any) => {
    const token = localStorage.getItem('accessToken')
    console.log(config, token, 'statusCodesss2')

    if (token) {
      config!.headers!.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error: any) => {
    console.log(error, 'error')
    return Promise.reject(error)
  }
)
