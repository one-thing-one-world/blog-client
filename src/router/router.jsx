import AuthorArtical from '../pages/AuthorArtical'
import Home from '../pages/Home'
import Metaphysics from '../pages/Metaphysics'
import NotFound from '../pages/NotFound'
import Tech from '../pages/Tech'
import Trivial from '../pages/Trivial'

export const commonRoutes = [
  {
    path: '/home',
    component: Home,
    ext: true,
    meta: {
      title: 'Home',
    },
  },
  {
    path: '/metaphysics',
    component: Metaphysics,
    ext: true,
    meta: {
      title: 'Metaphysics',
    },
  },
  {
    path: '/tech',
    component: Tech,
    ext: true,
    meta: {
      title: 'Tech',
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
