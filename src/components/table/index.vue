<template>
  <div class="TableModle">
    <el-table
      :data="tableData"
      max-height="100%"
      border
      ref="TableRef"
      @rowClick="props.TABLE_COLUMNS.rowClick"
      style="width: 100%"
    >
      <!-- 表格索引 -->
      <el-table-column type="index" width="55" v-if="props.TABLE_COLUMNS.TableIndex" />
      <!-- 选择框按钮 -->
      <el-table-column type="selection" width="55" v-if="props.TABLE_COLUMNS.Selection" />

      <template v-for="(item, key) in props.TABLE_COLUMNS" :key="key">
        <el-table-column
          v-if="Object.prototype.toString.call(item) === '[object Object]'"
          :prop="key"
          show-overflow-tooltip
          :label="item.title"
          :width="item.width"
        >
          <!-- 表格头部 -->
          <template #header v-if="item.soltTitle">
            <slot :name="key"> </slot>
          </template>

          <!-- 表格行内容 -->
          <template  #default="scope">
            <div v-if="item.ClickGrid || item.setTemplay">
              <span v-if="!item.HTMLX"  @click="item.ClickGrid(scope,key)"
                style="'color':'#ffff'" >{{item.setTemplay(scope) || scope.row[key]}}</span>
              <span v-else v-html="item.HTMLX(scope)">

              </span>
              
            </div>
          </template>
        </el-table-column>
      </template>

      <!-- 按钮插槽 -->
      <slot name="ListRight"></slot>
    </el-table>

    <div class="demo-pagination-block" v-if="props.TABLE_COLUMNS.paging">
      <el-pagination
        v-model:currentPage="Page.Pageindex"
        v-model:page-size="Page.pageSize"
        :page-sizes="[100, 200, 300, 400]"
        :background="true"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>

export interface childrenType {
  GetTablData: (url:string,param:PageType,callBack?:(res?:any) => void) => void;
  TableRef,
  handleSizeChange
}

import { reactive, ref } from 'vue';
import type { ElTable } from 'element-plus';
import {PageType} from  './tableType';
import TableApi from './TableApi';


// const emit = defineEmits(['CurrentPage'])

const props = defineProps<{
  TABLE_COLUMNS?:any
}>();

// 表格ref
const TableRef = ref<InstanceType<typeof ElTable>>()


//分页
const Page = reactive({
  Pageindex:1,
  pageSize:100
})
const handleSizeChange = (val: number) => {
  Page.pageSize = val;
};
const handleCurrentChange = (val: number) => {
  Page.Pageindex = val;
};

//表格数据
const tableData = ref([])
const total = ref(0)



const GetTablData = (url,param,callBack) => {
    console.log(param)
    TableApi.GetData(url,param).then(res=>{
      tableData.value = res.ResData?.DataInfo;
      total.value =  res.ResData?.DataCount?.Value;
      if (callBack) callBack(res);
    })
}
defineExpose<childrenType>({
  TableRef,
  handleSizeChange,
  GetTablData
});
</script>

<style scoped lang="scss">
.TableModle .demo-pagination-block + .demo-pagination-block {
  margin-top: 10px;
}
.TableModle .demo-pagination-block .demonstration {
  margin-bottom: 16px;
}
</style>
