/**
 * User: lj.michale
 * Date: 2022/9/27
 * Description: 文件描述
 */
import axios from '../axios'

export function getUpdateTimeLine() {
    return axios({
        url: `/api/turing/update/timeline`,
        method: 'get',
    })
}

// 获取mock测试数据
export function getMockDataInfos() {
    return axios({
        url: `/api/turing/user/info`,
        method: 'get',
    })
}

