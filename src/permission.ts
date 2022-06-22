/*
 * @Description: 权限
 */

import router from '@/router'
import { RouteLocationNormalized } from 'vue-router'

import { ElMessage } from 'element-plus'

const whiteList = ['/login']


router.beforeEach(async(to: RouteLocationNormalized, _: RouteLocationNormalized, next: any) => {
let token = JSON.parse(sessionStorage.getItem('UserInfo'))?.Token;
  if (token) {
        next()
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      if(token){ //有token 切过期
        ElMessage({
          type: 'error',
          message:'令牌过期请重新登录',
        })
      }
      next(`/login`)
    }
  }
})

router.afterEach((to: RouteLocationNormalized) => {
  // console.log(to)
 
  
})
