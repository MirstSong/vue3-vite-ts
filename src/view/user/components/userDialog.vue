<template>
  <el-form ref="ruleFormRef" :model="userForm" label-width="80px" :rules="rules">
    <el-form-item label="用户名" prop="userName">
      <el-input v-model="userForm.userName" placeholder="请输入用户名" />
    </el-form-item>
    <el-form-item label="账号" prop="account">
      <el-input v-model="userForm.account" placeholder="请输入账号" />
    </el-form-item>
    <el-form-item label="密码" prop="passWork">
      <el-input v-model="userForm.passWork" placeholder="请输入密码" />
    </el-form-item>
  </el-form>
  <div class="dialog-footer">
    <el-button @click="emit('hideDialog')">取消</el-button>
    <el-button type="primary" @click="submitForm(ruleFormRef)">提交</el-button>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
import type { FormInstance, FormRules } from "element-plus";

const ruleFormRef = ref<FormInstance>();
const userForm = reactive<USER_API.UserForm>({
  userId: "",
  userName: "",
  account: "",
  passWork: "",
});

// 表单校验
const rules = reactive<FormRules>({
  userName: [{ required: true, message: "用户名不能为空", trigger: "blur" }],
  account: [
    {
      required: true,
      message: "账号不能为空",
      trigger: "change",
    },
  ],
  passWork: [
    {
      required: true,
      message: "密码不能为空",
      trigger: "change",
    },
    { min: 3, max: 5, message: "Length should be 3 to 5", trigger: "blur" },
  ],
});

const emit = defineEmits(["hideDialog"]);
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log("submit!");
      emit("hideDialog");
    }
  });
};
</script>

<style lang="scss" scoped>
.dialog-footer {
  width: 100%;
  text-align: right;
}
</style>
