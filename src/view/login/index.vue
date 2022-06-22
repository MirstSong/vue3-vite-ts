<!--
 * new page
 * @author: Song
 * @since: 2022-06-16
 * index.vue
-->
<template>
  <div class="login">
    <img src="../../assets/Login/logoWhiteOK.png" class="logo-icon" alt="" />
    <div class="login-main">
      <img src="../../assets/Login/login-img.png" class="login-img" />
      <!-- <img src="../assets/logo.png" class="logo-icon" alt="" /> -->
      <div class="login-main-right">
        <div class="title">金讯祥 · CRM</div>
        <el-form ref="form" :model="UserInfo" class="form-box">

          <el-form-item>
            <el-input v-model="UserInfo.uNo" @keyup.enter.native="enterFun('suPas')" ref="suCode" placeholder="用户名"
              :prefix-icon="User">
            </el-input>
          </el-form-item>

          <el-form-item>
            <el-input type="password" v-model="UserInfo.uPW" @keyup.enter.native="enterFun('submit')" ref="suPas"
              :prefix-icon="Lock" placeholder="密码" show-password:true></el-input>
          </el-form-item>


          <el-form-item>
            <el-button type="primary" :loading="longLoading" @keyup.enter.native="enterFun" @click="submit"
              class="login-btn">登录</el-button>
          </el-form-item>
          <!-- <div class="hr"></div> -->
        </el-form>
        <!-- <div class="login-footer">金讯祥科技有限公司</div> -->
        <span class="copyright">©2022 版权所有，金讯祥</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue'
import { ref, reactive, nextTick } from 'vue';
import { useRouter } from 'vue-router'
import loginApi from './loginAPI'
import toot from '@/utlis/ELMessage'
import { json } from 'stream/consumers';
const routre = useRouter()

// 聚焦
const suCode = ref();
const suPas = ref();
nextTick(() => {
  suCode.value.focus()
})
const enterFun = (Flag: string) => {
  if (Flag === 'suPas') suPas.value.focus();
  if (Flag === 'submit') submit();
}


//  登录
const longLoading = ref(false)

const UserInfo: LOGIN_VIEW.UserType = reactive({
  uNo: '',
  uPW: ""
});

/**
 * 提交
 */
const submit = () => {
  longLoading.value = true;
  // let res = await loginApi.login(UserInfo);
  loginApi.login(UserInfo).then(res => {
    toot.$Message(res.ResMsg, res.ResCode);
    longLoading.value = false;
    sessionStorage.setItem('UserInfo', JSON.stringify(res?.ResData))
    if (res.ResCode === 0) return routre.push('/Home');
  }).catch(err => {
    longLoading.value = false;
    toot.$Message(err.ResMsg, err.ResCode);
  })
}
</script>

<style lang="scss" scoped>
.login {
  height: 100%;
  width: 100%;
  background-image: url("../../assets/Login/bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;

  .logo-icon {
    position: absolute;
    width: 150px;
    top: 20px;
    left: 40px;
  }

  @media screen and (min-width: 1680px) {
    &-main {
      margin: 0 auto;
      position: relative;
      width: 700px;
      height: 300px;
      background: #fff;
      border-radius: 20px;
      padding: 40px;

      .login-img {
        width: 370px;
        height: 348px;
        position: absolute;
        left: 40px;
        bottom: 12px;
      }

      .logo-icon {
        position: absolute;
        width: 100px;
        top: 20px;
        right: 40px;
      }

      &-right {
        //   padding: 40px 40px 0 40px;
        float: right;
        position: relative;
        height: 100%;
        padding-top: 20px;
        text-align: center;

        .form-box {
          width: 300px;
          margin: 0 auto;

          &-select {
            width: 300px;
          }
        }

        .title {
          font-size: 18px;
          font-weight: 600;
          font-family: Helvetica !important;
          border-bottom: 1px solid #1172be;
          margin: 0 auto;
          display: inline-block;
          padding: 0 10px 6px 10px;
          color: #1172be;
          margin-bottom: 30px;
        }

        .hr {
          border-top: 1px solid #d8d8d8;
          width: 100%;
          margin: 30px 0 30px 0;
        }

        .login-btn {
          width: 300px;
          height: 36px;
          font-size: 18px;
          background: #007fe0;
        }

        .login-footer {
          text-align: center;
          color: #73879c;
          margin-bottom: 30px;
          font-size: 24px;
        }

        .copyright {
          color: #a7b2be;
          font-size: 12px;
          display: inline-block;
          margin-top: 30px;
          width: 100%;
        }
      }
    }
  }

  @media screen and (max-width: 1679px) {
    .logo-icon {
      position: absolute;
      width: 130px;
      top: 20px;
      left: 40px;
    }

    &-main {
      margin: 0 auto;
      position: relative;
      width: 600px;
      height: 250px;
      background: #fff;
      border-radius: 20px;
      padding: 30px;

      .login-img {
        width: 300px;
        height: 285px;
        position: absolute;
        left: 30px;
        bottom: 8px;
      }

      .logo-icon {
        position: absolute;
        width: 100px;
        top: 20px;
        right: 40px;
      }

      &-right {
        //   padding: 40px 40px 0 40px;
        float: right;
        position: relative;
        height: 100%;
        padding-top: 10px;
        text-align: center;

        .form-box {
          width: 280px;
          margin: 0 auto;

          &-select {
            width: 280px;
          }
        }

        .title {
          font-size: 14px;
          font-weight: 600;
          font-family: Helvetica !important;
          border-bottom: 1px solid #1172be;
          margin: 0 auto;
          display: inline-block;
          padding: 0 10px 6px 10px;
          color: #1172be;
          margin-bottom: 14px;
        }

        .hr {
          border-top: 1px solid #d8d8d8;
          width: 100%;
          margin: 30px 0 30px 0;
        }

        .login-btn {
          width: 280px;
          height: 30px;
          font-size: 12px;
          background: #007fe0;
        }

        .login-footer {
          text-align: center;
          color: #73879c;
          margin-bottom: 30px;
          font-size: 24px;
        }

        .copyright {
          color: #a7b2be;
          font-size: 12px;
          display: inline-block;
          margin-top: 6px;
          width: 100%;
        }
      }
    }
  }
}

.el-input__inner::placeholder {
  color: #000;
  text-align: center;
}

/* 谷歌 */
.el-input__inner::-webkit-input-placeholder {
  color: #000;
  text-align: center;
}

/* 火狐 */
.el-input__inner:-moz-placeholder {
  color: #000;
  text-align: center;
}

/*ie*/
.el-input__inner:-ms-input-placeholder {
  color: #000;
  text-align: center;
}
</style>
