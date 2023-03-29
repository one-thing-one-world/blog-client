export interface ITabList {
  navName: string
  componentPath: string
  name: string
  color: string
}
export const tabList: ITabList[] = [
  {
    navName: '首页',
    componentPath: '/home',
    name: 'home',
    color: '#f3f7fd',
    // 无色
  },
  {
    navName: '玄学',
    componentPath: '/metaphysics',
    name: 'metaphysics',
    color: '#E8F5E9',
    // 木色
  },
  {
    navName: '科学',
    componentPath: '/science',
    color: '#FFFDE7',
    name: 'science',

    // 土黄色
  },
  {
    navName: '计算机',
    componentPath: '/tech',
    color: '#FFEBEE',
    name: 'tech',

    // 火色
  },

  {
    navName: '生活',
    componentPath: '/trivial',
    color: '#E3F2FD',
    name: 'trivial',

    // 水色
  },
  {
    navName: '写文章',
    componentPath: '/authorArtical',
    color: '#fffbf0',
    name: 'authorArtical',
    // 金色
  },
]
