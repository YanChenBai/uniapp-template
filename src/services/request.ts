import { un } from '@uni-helper/uni-network'

/**
 * HTTP请求
 */
export const request = un.create({
  baseUrl: import.meta.env.VITE_BASE_URL,
})

/** 请求拦截器 */
request.interceptors.request.use(
  (config) => {
    // todo some thing
    return config
  },
  (error) => {
    // todo some thing
    return Promise.reject(error)
  },
)

/** 响应拦截器 */
request.interceptors.response.use(
  (response) => {
    // todo some thing
    return response
  },
  (error) => {
    // todo some thing
    return Promise.reject(error)
  },
)
