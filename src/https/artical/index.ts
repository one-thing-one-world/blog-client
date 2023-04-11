import { axiosInstance } from '..'

export interface IResponse<T> {
  code: number
  data: T
  message: string
}

export interface addArticalParams {
  title: string
  tagType: string
  author: string
  createTime: string
  content: string
}

export interface IaddArtical {
  code: number
  data: {}
  message: string
}

interface IGetArticalListData {
  list: addArticalParams[]
}
interface IDeleteArticalData {
  id: string
}
export const addArtical = (
  params: addArticalParams
): Promise<IResponse<IaddArtical>> => axiosInstance.post('/artical/add', params)

export const getArticalList = (): Promise<IResponse<IGetArticalListData>> =>
  axiosInstance.get('/artical/all')

export const deleteArtical = (
  id: number
): Promise<IResponse<IDeleteArticalData>> =>
  axiosInstance.delete(`/artical/delete/${id}`)
export const upDateArtical = (
  id: number,
  params: addArticalParams
): Promise<IResponse<IaddArtical>> =>
  axiosInstance.patch(`/artical/update/${id}`, params)
