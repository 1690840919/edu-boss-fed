/**
 * @description 公共基础接口封装
 */
import request from './request'
import { loginInfo } from './types/common'

export const getLoginInfo = () => {
  return request<loginInfo>({
    method: 'GET',
    url: '/login/info'
  })
}
