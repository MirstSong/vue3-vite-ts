<template>
  <div class="user-box">
    <el-card class="form-box">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="用户名称">
          <el-input v-model="formInline.user" placeholder="请输入用户名称" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary">查询</el-button>
          <el-button>清空</el-button>
        </el-form-item>
        <el-form-item class="btn-box">
          <el-button type="primary" @click="addOrEditUser('add')">新增用户</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <div class="table-box">
      <el-table border :data="tableData" style="width: 100%" height="calc(100vh - 250px)">
        <el-table-column fixed prop="userName" label="用户名" />
        <el-table-column prop="account" label="账号" />
        <el-table-column fixed="right" label="操作" width="120">
          <template #default>
            <el-button link type="primary" size="small" @click="addOrEditUser('edit')"
              >修改</el-button
            >
            <el-button link type="danger" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        class="pagination-box"
        background
        small="small"
        layout="total, sizes, prev, pager, next"
        :total="formInline.total"
        :current-page="formInline.page"
        :page-size="formInline.pageSize"
        @size-change="getUserList"
        @current-change="getUserList"
      />
    </div>
  </div>

  <!-- 新增、编辑用户弹框 -->
  <el-dialog
    destroy-on-close
    draggable
    v-model="userDialogVisible"
    :title="userDialogTitle"
    width="500px"
    :close-on-click-modal="false"
  >
    <userDialog @hideDialog="userDialogVisible = false" />
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
import userDialog from "./components/userDialog.vue";

const userDialogVisible = ref<boolean>(false);
const userDialogTitle = ref<string>();

/**
 * @description  新增或修改用户
 * @param {string} flag  add 新增 edit 编辑
 */
const addOrEditUser = (flag: string) => {
  flag === "add"
    ? (userDialogTitle.value = "新增用户")
    : (userDialogTitle.value = "编辑用户");
  userDialogVisible.value = true;
};
const formInline = reactive<USER_API.FormInline>({
  user: "",
  page: 1,
  pageSize: 10,
  total: 0
});


const getUserList = () => {
  console.log("click");
};

const tableData = [
  {
    userName: "2016-05-03",
    account: "Tom",
  },
  {
    userName: "2016-05-02",
    account: "Tom",
  },
  {
    userName: "2016-05-04",
    account: "Tom",
  },
  {
    userName: "2016-05-01",
    account: "Tom",
  },
];
</script>

<style lang="scss" scoped>
.user-box {
  height: calc(100% - 24px);
  padding: 12px;

  .form-box {
    height: 70px;
    width: 100%;
    margin-bottom: 10px;

    .btn-box {
      float: right;
    }
  }
  .table-box {
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
    padding: 20px 20px 60px 20px;
    border-radius: 4px;
    border: 1px solid #ebeef5;
    background-color: #fff;
    .pagination-box {
      margin-top: 15px;
      float: right;
    }
  }
}
</style>
