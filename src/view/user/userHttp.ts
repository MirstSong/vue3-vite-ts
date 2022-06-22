
import http from '@/utlis/http';

class UserHttp {
    /**
   * 登录
   * @param us_code 账号 
   * @param us_pas 密码 
   * @returns
   */
  queryUser(params: any) {
    return http.request<any>({
      url: '/api/User/QueryUser',
      method: 'GET',
      params,
    })
  }
}
const userHttp = new UserHttp();

export default userHttp;