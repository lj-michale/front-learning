<template>
  <div>
    <p class="title"><i class="el-icon-tickets"></i>Hero信息列表</p>
    <el-table
      border
      :data="heroInfoList.value"
      style="width: 100%">
      <el-table-column
        type="index"
        width="80">
      </el-table-column>
      <el-table-column
        sortable
        prop="title"
        label="大标题"
        width="100">
      </el-table-column>
      <el-table-column
        prop="skin_name"
        label="小标题"
        width="350">
      </el-table-column>
      <el-table-column
        prop="infourl"
        label="URL地址"
        width="600">
      </el-table-column>
      <el-table-column
        prop="occupation"
        label="职业"
        width="100">
      </el-table-column>
      <el-table-column
        prop="hero_type"
        label="类型"
        width="100">
      </el-table-column>
    </el-table>
  </div>

</template>

<script setup lang="ts">
import {ref,computed, watch, onMounted,reactive} from 'vue';
import { getMockDataInfos, getMockHeroList } from "@/api/apis/mockapi.ts";

const heroInfoList = reactive([])

async function fetchMockDataInfos() {
  const res = await getMockHeroList()

  if(res.status == 200) {
    return res
  }
}

onMounted(() => {
  fetchMockDataInfos().then(res=>{
    heroInfoList.value = res.data.result.heroList
    console.log(res.data.result)
  })
})

</script>

<style scoped>


</style>
