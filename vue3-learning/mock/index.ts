import { MockMethod } from 'vite-plugin-mock'
import { Random } from 'mockjs'

export default [
  {
    url: "/api/turing/mock/test-datas",
    method: "get",
    response: () => {
      return {
        "code": "200",
        "massage": "成功",
        "data": {
          token: () => Random.id(),
        }
      }
    }
  }
] as MockMethod[]
