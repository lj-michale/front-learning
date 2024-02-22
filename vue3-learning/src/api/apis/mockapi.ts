/**
 * User: lj.michale
 * Date: 2022/9/27
 * Description: 文件描述
 */
import axios from '../axios'


export function getMockHeroList() {
  return axios({
    url: `/api/turing/hero`,
    method: 'get',
  })
}
