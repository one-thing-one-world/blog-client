import Home from '../pages/Home'
import Login from '../pages/Login'
import Metaphysics from '../pages/Metaphysics'
import NotFound from '../pages/NotFound'
import Tech from '../pages/Tech'
import Trivial from '../pages/Trivial'

export const routes = [
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
]

export const commonRoutea = [
  {
    path: '/login',
    ext: true,
    component: Login,
    meta: {
      title: 'Login',
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
