<template>
  <div>
    <el-table
        border
        :data="updateTimeLineInfos"
        style="width: 100%">
      <el-table-column
          type="index">
      </el-table-column>
      <el-table-column
          sortable
          prop="author"
          width="150"
          label="作者">
      </el-table-column>
      <el-table-column
          prop="action"
          width="100"
          label="操作">
      </el-table-column>
      <el-table-column
          prop="context"
          label="操作内容"
          width="800">
      </el-table-column>
      <el-table-column
          prop="createTime"
          label="创建时间">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {defineComponent, onMounted, reactive} from 'vue'
import {ref} from 'vue'
import {getUpdateTimeLine} from '@/api/apis/demoApi.ts'

async function fetchUpdateTimeLine() {
  const res = await getUpdateTimeLine()

  // eslint-disable-next-line eqeqeq
  if(res.status == 200) {
    return res
  }
}

export default {
  name: 'FromTest2',
  setup() {
    let updateTimeLineInfos = ref([])
    onMounted(() => {
      fetchUpdateTimeLine().then(response => {
        updateTimeLineInfos.value = response.data.result
        console.log(updateTimeLineInfos.value)
      }).catch(error => {
        console.log(error)
      })
    })

    console.log("updateTimeLineInfos:" + updateTimeLineInfos)
    return {updateTimeLineInfos, onMounted}
  }
}

</script>

<style scoped>

</style>