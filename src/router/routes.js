/**
 * Created by geng on 2017/6/2.
 */

import home from '../page/home'
import cinema from '../page/cinema'
import movie from '../page/movie'
import cityList from '../page/city_list'

export default [
  {
    path: '/home',
    name: 'home',
    component: home
  },
  {
    path: '/cinema',
    name: 'cinema',
    component: cinema
  },
  {
    path: '/',
    name: 'movie',
    component: movie
  },
  {
    path: '/cityList',
    name: 'cityList',
    component: cityList
  }
]
