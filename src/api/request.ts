import axios, { AxiosRequestConfig } from 'axios'
const request = axios.create({
  baseURL: 'https://www.fastmock.site/mock/3388614e459bfd040e97bce422f05c57/api'
  // baseURL: '/api' // 跨域接口测试
})

// 请求拦截
request.interceptors.request.use(function (config) {
  return config
}, function (error) {
  return Promise.reject(error)
})

// 相应拦截
request.interceptors.response.use(function (response) {
  return response
}, function (error) {
  return Promise.reject(error)
})

export default <T = any>(config: AxiosRequestConfig) => {
  return request(config).then(res => {
    return res.data.data as T || res
  })
}
