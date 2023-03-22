import { axiosInstance } from '..'

export interface IResponse<T> {
  code: number
  data: T
  message: string
}

interface addArticalParams {
  title: string
  author: string
  createtime: string
  content: string
}
export const addArtical = (
  params: addArticalParams
): Promise<IResponse<null>> => axiosInstance.post('/artical/add', params)
