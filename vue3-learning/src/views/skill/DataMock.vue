<template>
  <div>
    <p class="title"><i class="el-icon-tickets"></i>最新10条等待处理订单</p>
    <el-table
      border
      :data="useInfo.value"
      style="width: 100%">
      <el-table-column
        type="index">
      </el-table-column>
      <el-table-column
        sortable
        prop="avatar"
        label="网址">
      </el-table-column>
      <el-table-column
        prop="userId"
        label="用户ID"
        width="100">
      </el-table-column>
      <el-table-column
        prop="password"
        label="密码"
        width="100">
      </el-table-column>
      <el-table-column
        prop="desc"
        label="描述"
        width="130">
      </el-table-column>
      <el-table-column
        prop="token"
        label="Token">
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup lang="ts">
import {ref,computed, watch, onMounted,reactive} from 'vue';
import { getMockDataInfos } from "@/api/apis/demoApi.ts";

async function fetchDemoApi() {
  const res = await getMockDataInfos()

  if(res.status == 200) {
    return res
  }
}


const useInfo = reactive([])

onMounted(() => {
  fetchDemoApi().then(res => {
    console.log("开始mock数据调用...")
    console.log(res.data.data.userList)
    useInfo.value = res.data.data.userList
  }).catch(error => {
    console.log(error)
  })
})


</script>

<style scoped>

</style>
