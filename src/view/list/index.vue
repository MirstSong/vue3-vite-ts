<!--
 * new page
 * @author: Song
 * @since: 2022-05-23
 * index.vue
-->
<template>
  <div class="list">
    <table-modle :TABLE_COLUMNS="TABLE_COLUMNS" ref="Table">
      <template #address>
        <span class="tooltip-Text">策略名称 </span>
        <el-tooltip popper-class="tooltip" placement="top">
          <i class="el-icon-warning-outline tooltipIcon"></i>
          <div slot="content" class="tooltip-content">
            <div>指word与pdf文档的文件页码,</div>
            <div>或excel文档的sheet名称”</div>
            <div>当存在多个时，以英文逗号分隔</div>
          </div>
        </el-tooltip>
      </template>

      <template #ListRight>
        <el-table-column fixed="right" label="Operations" width="120">
          <template #default="row">
            <el-button text size="small" @click="handleClick(row)">Detail</el-button>
            <el-button text size="small">Edit</el-button>
          </template>
        </el-table-column>
      </template>
    </table-modle>

    <button @click="getSelectList">点击获取全表格选择数据</button>
    <button @click="getList">获取数据</button>

  </div>
</template>

<script setup lang="ts">
import TableModle, { childrenType } from "@/components/table/index.vue";

import { COLUMNS } from "@/components/table/tableType";

import { ref } from "vue";

const Table = ref<null | InstanceType<typeof TableModle> & childrenType>(null);


const getSelectList = () => {
  //获取表格数据
  console.log(Table.value.TableRef.getSelectionRows());
  console.log(Table.value.handleSizeChange(52));
};
//表格头部配置
const TABLE_COLUMNS: COLUMNS = {
  rowClick: () => { }, //点击单行
  TableIndex: false, //索引列
  Selection: false, //选择列
  paging: true, //页码
  date: {
    title: "时间",
    width: "160",
    ClickGrid: ({ row }: any) => {
      return (row.date = "点击");
    }, //点击行
    setTemplay: ({ row }: any) => {
      return row.date?.split("-")[0];
    }, //行返回数据
  },
  address: {
    title: "地址",
    width: "160",
    soltTitle: "address", //插槽
  },
  name: {
    title: "姓名",
    setTemplay: ({ row }: any) => {
      //   return 4583213
    },
    HTMLX: ({ row }: any) => `<input type="text" placeholder="${row.address}">`,
  },
  address22: {
    title: "22",
    width: "160",
    HTMLX: ({ row }: any) => `<input type="text" placeholder="${row.address}">`,
  },
};

// 点击行
const handleClick = ({ row }: any) => {
  console.log("click", row);
};

const getList = () => {
  let params = {
    pageIndex:1,
    pageSize:10,
    uCode:'',
    uName:''
  }
  let url = '/User/QueryUser'
  Table.value.GetTablData(url,params,res=>{  
    console.log(res)
  })
}
</script>

<style scoped lang="scss">
.list {
  padding: 20px;
  height: 100%;
  width: 100%;
}

.list .tooltip-Text:before {
  content: "*";
  color: red;
  position: absolute;
  left: 97px;
}
</style>
