import axios, { AxiosInstance, AxiosResponse } from 'axios'
// import { showMessage } from './status'

// export const baseUrl = 'http://101.37.83.146:3000/'
export const baseUrl = process.env.REACT_APP_BASE_URL

export const axiosInstance: AxiosInstance = axios.create({
  // baseURL: '',
  baseURL: baseUrl,
  timeout: 60000,
})

// axios实例拦截响应
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    // const { code } = response.data
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
    if (response) {
      // message.error(showMessage(response.status))
      return Promise.reject(response.data)
    }
    // message.error('网络连接异常,请稍后再试!')
  }
)

// axios 请求拦截器
axiosInstance.interceptors.request.use(
  (config: any) => {
    const root = localStorage.getItem('persist:root')
    if (root) {
      const { token } = JSON.parse(JSON.parse(root).userInfo).userInfoData
      if (token) {
        config!.headers!.Authorization = `Bearer ${token}`
        config!.headers!['Content-Type'] = 'application/json'
        config!.headers!.charset = 'UTF-8'
      }
    } else {
      // 没有token 且不是登录
      // eslint-disable-next-line no-lonely-if
      if (window.location.pathname.indexOf('/login') === -1) {
        // message.warning('token过期， 请重新登录')
        window.location.href = `${window.location.origin}/gh/login`
      }
    }
    return config
  },
  (error: any) => Promise.reject(error)
)
