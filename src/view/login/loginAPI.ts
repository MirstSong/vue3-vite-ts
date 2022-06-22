
import http from '@/utlis/http';

class LoginApi {
    /**
   * 登录
   * @param uNo 账号 
   * @param uPW 密码 
   * @returns
   */
  login(params: object) {
    return http.request<LOGIN_API.User>({
      url: '/User/UserLogin',
      method: 'POST',
      params,
    })
  }
  DeleteUser(data: object) {
    return http.request<LOGIN_API.User>({
      url: '/User/DeleteUser',
      method: 'POST',
      data,
    })
  }
}
const loginApi = new LoginApi();

export default loginApi;