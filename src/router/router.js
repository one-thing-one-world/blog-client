import AuthorArtical from '../pages/AuthorArtical'
import Home from '../pages/Home'
import Metaphysics from '../pages/Metaphysics'
import NotFound from '../pages/NotFound'
import Tech from '../pages/Tech'
import Trivial from '../pages/Trivial'
import Science from '../pages/Science'
import ArticalDetail from '../pages/ArticalDetail'
import About from '../pages/About'

export const commonRoutes = [
  {
    path: '/home',
    component: Home,
    ext: true,
    meta: {
      title: '首页',
    },
  },
  {
    path: '/metaphysics',
    component: Metaphysics,
    ext: true,
    meta: {
      title: '玄学',
    },
  },
  {
    path: '/tech',
    component: Tech,
    ext: true,
    meta: {
      title: '计算机技术',
    },
  },
  {
    path: '/trivial',
    component: Trivial,
    ext: true,
    meta: {
      title: 'Trivial',
    },
  },
  {
    path: '/science',
    component: Science,
    ext: true,
    meta: {
      title: '科学',
    },
  },
  {
    path: '/articalDetail',
    component: ArticalDetail,
    ext: true,
    meta: {
      title: '文章详情',
    },
  },
  {
    path: '/about',
    component: About,
    ext: true,
    meta: {
      title: '文章详情',
    },
  },
  {
    path: '/404',
    ext: true,
    component: NotFound,
    meta: {
      title: '404',
    },
  },
]

export const accessRoute = [
  {
    path: '/authorArtical',
    ext: true,
    component: AuthorArtical,
    meta: {
      title: 'AuthorArtical',
    },
  },
]
