<template>
  <div class="home-container">
    <el-row>
      <el-col :md="12" :xl="6">
        <el-card shadow="hover" class="card">
          <el-row>
            <el-col :span="12" style="text-align: left">
              <h5 class="text-muted">GMV</h5>
              <h3 class="margin-top-1 margin-bottom-1">9,113</h3>
              <p class="text-muted">
                <span class="text-success margin-right-1"><Top />5.66%</span>
              </p>
            </el-col>
            <el-col :span="12" class="flex flex-column flex-end">
              <div class="e-chart" style="height: 70px; width: 100%">
                <div ref="RefGMV" style="width: inherit; height: inherit; min-height: 70px"></div>
              </div>
            </el-col>
          </el-row>
        </el-card>
      </el-col>

      <el-col :md="12" :xl="6">
        <el-card shadow="hover" class="card">
          <el-row>
            <el-col :span="12" style="text-align: left">
              <h5 class="text-muted">MAU</h5>
              <h3 class="margin-top-1 margin-bottom-1">6,168</h3>
              <p class="text-muted">
                <span class="text-success margin-right-1"><Top />5.66%</span>
              </p>
            </el-col>
            <el-col :span="12" class="flex flex-column flex-end">
              <div class="e-chart" style="height: 70px; width: 100%">
                <div ref="RefMVU" style="width: inherit; height: inherit; min-height: 70px"></div>
              </div>
            </el-col>
          </el-row>
        </el-card>
      </el-col>

      <el-col :md="12" :xl="6">
        <el-card shadow="hover" class="card">
          <el-row>
            <el-col :span="12" style="text-align: left">
              <h5 class="text-muted">Revenue</h5>
              <h3 class="margin-top-1 margin-bottom-1">3,168</h3>
              <p class="text-muted">
                <span class="text-success margin-right-1"><Top />5.66%</span>
              </p>
            </el-col>
            <el-col :span="12" class="flex flex-column flex-end">
              <div class="e-chart" style="height: 70px; width: 100%">
                <div ref="RefCost" style="width: inherit; height: inherit; min-height: 70px"></div>
              </div>
            </el-col>
          </el-row>
        </el-card>
      </el-col>

      <el-col :md="12" :xl="6">
        <el-card shadow="hover" class="card">
          <el-row>
            <el-col :span="12" style="text-align: left">
              <h5 class="text-muted">Revenue</h5>
              <h3 class="margin-top-1 margin-bottom-1">3,168</h3>
              <p class="text-muted">
                <span class="text-success margin-right-1"><Top />5.66%</span>
              </p>
            </el-col>
            <el-col :span="12" class="flex flex-column flex-end">
              <div class="e-chart" style="height: 70px; width: 100%">
                <div ref="RefRevenue" style="width: inherit; height: inherit; min-height: 70px"></div>
              </div>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import { useInitBarChart } from './useInitChart'
import { GMVInitLineChart } from './GMV'
import { onMounted, ref } from 'vue'

const RefGMV = ref()
const RefMVU = ref()
const RefCost = ref()
const RefRevenue = ref()

onMounted(() => {
  GMVInitLineChart(RefGMV.value)
  useInitBarChart(RefMVU.value)
  useInitBarChart(RefCost.value)
  useInitBarChart(RefRevenue.value)
})
</script>

<style lang="scss">
.home-container {
  color: black;
  padding: 0px 20px;
  background-color: #fafbfe;
  .el-card {
    margin-bottom: 30px;
    margin-right: 20px;
    .bg-primary {
      background-color: #46a0fc;
    }
  }

}

</style>
