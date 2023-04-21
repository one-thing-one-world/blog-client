import { axiosInstance } from '..'

export interface IResponse<T> {
  code: number
  data: T
  message: string
}
export interface addArticalParams {
  title: string
  tags: ITags[]
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
// let tagList = [
//   {
//     name: '玄学',
//     id: 1,
//     value: 'metaphysics',
//   },
//   {
//     name: '科学',
//     id: 2,
//     value: 'science',
//   },
//   {
//     name: '计算机',
//     id: 3,
//     value: 'tech',
//   },
//   {
//     name: '生活',
//     id: 4,
//     value: 'trivial',
//   },
export const getArticalList = (
  id: number
): Promise<IResponse<IGetArticalListData>> =>
  axiosInstance.get(`/artical/all/${id}`)

export const deleteArtical = (
  id: number
): Promise<IResponse<IDeleteArticalData>> =>
  axiosInstance.delete(`/artical/delete/${id}`)
export const upDateArtical = (
  id: number,
  params: addArticalParams
): Promise<IResponse<IaddArtical>> =>
  axiosInstance.patch(`/artical/update/${id}`, params)
