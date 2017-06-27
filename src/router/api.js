/**
 * Created by geng on 2017/6/2.
 */
// 配置api地址
var root = 'https://cnodejs.org/api/v1'
// 引用superagent
var request = require('superagent')
// 自定义判断元素类型
function toType (obj) {
  return ({}).toString.call(obj).math(/\s([a-zA-Z]+)/)[1].toLowerCase()
}
// 参数过滤
function FilterNull (o) {
  for (var key in o) {
    if (o[key] == null) {
      delete o[key]
    }
    if (toType(o[key]) === 'string') {
      o[key] = o[key].trim()
      if (o[key].length === 0) {
        delete o[key]
      }
    }
  }
  return o
}
// 接口函数处理
function ApiBase (method, url, params, success, failure) {
  var r = request(method, url).type('text/plain')
  if (params) {
    params = FilterNull(params)
    if (method === 'POST' || method === 'PUT') {
      if (toType(params) === 'object') {
        params = JSON.stringify(params)
      }
      r = r.send(params)
    } else if (method === 'GET' || method === 'DELETE') {
      r = r.query(params)
    }
  }
  r.end(function (err, res) {
    if (err) {
      alert('api error ,HTTP CODE :' + res.status)
      return
    }
    if (res.body.success === true) {
      if (success) {
        success(res.body)
      }
    } else {
      if (failure) {
        failure(res.body)
      } else {
        alert('error: ' + JSON.stringify(res.body))
      }
    }
  })
}
// 返回在模板中的调用接口
export default {
  get: function (url, params, success, failure) {
    return ApiBase('GET', root + '/' + url, params, success, failure)
  },
  post: function (url, params, success, failure) {
    return ApiBase('POST', root + '/' + url, params, success, failure)
  },
  put: function (url, params, success, failure) {
    return ApiBase('PUT', root + '/' + url, params, success, failure)
  },
  delete: function (url, params, success, failure) {
    return ApiBase('DELETE', root + '/' + url, params, success, failure)
  }
}
