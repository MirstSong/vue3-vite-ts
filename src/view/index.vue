<template>
  <div class="pagination">
     <el-pagination
      v-model:current-page="currentPage"
      v-model:page-size="pageSize"
      :page-sizes="pageSizes"
      background
      :layout="layout"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    >
    </el-pagination>
  </div>
</template>
<script setup>
import { computed, ref } from 'vue'
const props = defineProps({
  total: {
    required: true,
    type: Number
  },
  page: {
    type: Number,
    default: 1
  },
  limit: {
    type: Number,
    default: 20
  },
  pageSizes: {
    type: Array,
    default () {
      return [10, 20, 30, 50, 100]
    }
  },
  layout: {
    type: String,
    default: 'total, sizes, prev, pager, next, jumper'
  },
  background: {
    type: Boolean,
    default: true
  },
  autoScroll: {
    type: Boolean,
    default: true
  },
  hidden: {
    type: Boolean,
    default: false
  }
})
const emits = defineEmits(['update:page','update:limit','pagination'])
const currentPage = computed({
  get : () => {
    return props.page
  },
  set (val)   {
    emits('update:page',val)
  }
})
const pageSize = computed ({
   get : () => {
     return props.limit
   },
  set : val => {
    emits('update:limit',val)
  }
})
const handleSizeChange = (val) => {
  emits('pagination',{
    page : currentPage,
    limit : val
  })
  
}
const handleCurrentChange = (val) => {
 emits('pagination',{
    page : val,
    limit : pageSize
  })
}
</script>
<style lang="scss" scoped>
.pagination{
  margin-top: 20px;
  text-align: right;
}
</style>