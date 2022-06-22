<!-- src/views/layout/Layout.vue -->
<template>
  <el-container class="layout-container">
    <el-header class="header-container">
      <div class="logo">
        <img src="../assets/logo.png" class="logoImg" />
      </div>
      <div class="header-left">
        <el-dropdown class="outLogin">
          <span class="el-dropdown-link">
           {{UserName}}
            <el-icon class="el-icon--right">
              <arrow-down />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>深圳市金讯祥</el-dropdown-item>
              <el-dropdown-item divided @click="OutLogin">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </el-header>
    <el-container>
      <el-aside class="aside-layout" width="200px">
        <el-menu :default-active="router.currentRoute.value.path" class="el-menu-vertical-demo menu-box" :router="true">
          <el-menu-item v-for="item in menuList" :index="item.path">
            <el-icon>
              <component :is="item.icon" />
            </el-icon>
            <span> {{ item.name }}</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main class="main-container">
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>
<script lang="ts" setup>
import { useRouter, useRoute } from "vue-router";

import toot from '@/utlis/ELMessage'

const router = useRouter();

const UserName = JSON.parse(sessionStorage.getItem('UserInfo'))?.UserName

interface Menu {
  name: string;
  path: string;
  icon?: string;
}
// 主应用左侧菜单
const menuList: Array<Menu> = [
  { name: "客户信息", path: "/Client", icon: "Calendar" },
  { name: "用户信息", path: "/User", icon: "User" },
  { name: "激活信息", path: "/List", icon: "Monitor" },
];

/**
 * 退出登录
 */
const OutLogin = ()=>{
    sessionStorage.clear()
    toot.$Message('退出成功')
    setTimeout(() => {
      router.push('/Login')
    }, 500);
}

</script>




<style lang="scss">
.layout-container {
  font-family: Avenir, Helvetica, Arial, sans-serif;

  .aside-layout {
    height: calc(100vh - 60px);

    .menu-box {
      height: 100%;
    }
  }

  .header-container,
  .main-container {
    padding: 0 !important;
    background-color: #f1eded10;
  }

  .header-container {
    height: 60px;
    border-bottom: 1px solid #dcdfe6;
    display: flex;
    justify-content: space-around;

    .header-left {
      width: calc(100% - 199px);
      .outLogin {
        float: right;
        padding-right: 20px;
        line-height: 60px;
      }

    }

    .logo {
      height: 58px;
      width: 199px;
      border-right: 1px solid #dcdfe6;
      // background-color: #dcdfe6;
      display: flex;
      justify-content: center; // 内容自适应：上下居中
      align-items: center; // 子项对齐方式：左右居中

      .logoImg {
        height: 45px;
      }
    }
  }
}
</style>
