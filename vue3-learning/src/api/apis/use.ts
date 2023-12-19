
import axios from '../axios'

export default {
    // 用户账号密码登陆
    userLogin (data: {username: string, password: string}) {
        return axios.post('/api/turing/user/login', data)
    }
}

