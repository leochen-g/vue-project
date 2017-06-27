/**
 * Created by geng on 2017/6/19.
 */
import axios from 'axios'
import qs from 'querystring'
// 接口地址
axios.defaults.baseURL = 'http://b2cwechat.show.wepiao.com/'

// 响应时间
axios.defaults.timeout = 5000
// 请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

// POST传参序列化
axios.interceptors.request.use((config) => {
  if (config.method === 'POST') {
    config.data = qs.stringify(config.data)
  }
  return config
}, (error) => {
  alert('错误的参数')
  return Promise.reject(error)
})
// 请求拦截
axios.interceptors.request.use(function (config) {
  return config
},
function (error) {
  return Promise.reject(error)
})
// 响应拦截
axios.interceptors.response.use(function (response) {
  return response
},
function (error) {
  return Promise.reject(error)
})

export default axios
