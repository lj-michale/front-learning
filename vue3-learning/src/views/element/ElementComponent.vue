<template>
  <div class="main-box">
    <div class="box-1">
      <h5>Button按钮-基础用法</h5>
      <el-row class="mb-4">
        <el-button>Default</el-button>
        <el-button type="primary">Primary</el-button>
        <el-button type="success">Success</el-button>
        <el-button type="info">Info</el-button>
        <el-button type="warning">Warning</el-button>
        <el-button type="danger">Danger</el-button>
      </el-row>
      <el-row class="mb-4">
        <el-button plain>Plain</el-button>
        <el-button type="primary" plain>Primary</el-button>
        <el-button type="success" plain>Success</el-button>
        <el-button type="info" plain>Info</el-button>
        <el-button type="warning" plain>Warning</el-button>
        <el-button type="danger" plain>Danger</el-button>
      </el-row>
      <el-row class="mb-4">
        <el-button round>Round</el-button>
        <el-button type="primary" round>Primary</el-button>
        <el-button type="success" round>Success</el-button>
        <el-button type="info" round>Info</el-button>
        <el-button type="warning" round>Warning</el-button>
        <el-button type="danger" round>Danger</el-button>
      </el-row>
      <el-row class="mb-4">
        <el-button :icon="Search" circle />
        <el-button type="primary" :icon="Edit" circle />
        <el-button type="success" :icon="Check" circle />
        <el-button type="info" :icon="Message" circle />
        <el-button type="warning" :icon="Star" circle />
        <el-button type="danger" :icon="Delete" circle />
      </el-row>
    </div>
    <div class="box-2">
      <h5>Button按钮-禁用状态</h5>
      <el-row class="mb-4">
        <el-button disabled>Default</el-button>
        <el-button type="primary" disabled>Primary</el-button>
        <el-button type="success" disabled>Success</el-button>
        <el-button type="info" disabled>Info</el-button>
        <el-button type="warning" disabled>Warning</el-button>
        <el-button type="danger" disabled>Danger</el-button>
      </el-row>
      <el-row class="mb-4">
        <el-button plain disabled>Plain</el-button>
        <el-button type="primary" plain disabled>Primary</el-button>
        <el-button type="success" plain disabled>Success</el-button>
        <el-button type="info" plain disabled>Info</el-button>
        <el-button type="warning" plain disabled>Warning</el-button>
        <el-button type="danger" plain disabled>Danger</el-button>
      </el-row>
    </div>

    <div class="box-3">
      <p>Basic link button</p>
      <div class="flex justify-space-between mb-4 flex-wrap gap-4">
        <el-button
          v-for="button in buttons"
          :key="button.text"
          :type="button.type"
          link
        >{{ button.text }}</el-button
        >
      </div>
      <p>Disabled link button</p>
      <div class="flex justify-space-between flex-wrap gap-4">
        <el-button
          v-for="button in buttons"
          :key="button.text"
          :type="button.type"
          link
          disabled
        >{{ button.text }}</el-button
        >
      </div>
    </div>
    <div class="box-4">
      <p>Basic text button</p>
      <div class="flex justify-space-between mb-4 flex-wrap gap-4">
        <el-button
          v-for="button in buttons"
          :key="button.text"
          :type="button.type"
          text
        >{{ button.text }}</el-button
        >
      </div>

      <p>Background color always on</p>
      <div class="flex justify-space-between mb-4 flex-wrap gap-4">
        <el-button
          v-for="button in buttons"
          :key="button.text"
          :type="button.type"
          text
          bg
        >{{ button.text }}</el-button
        >
      </div>

      <p>Disabled text button</p>
      <div class="flex justify-space-between flex-wrap gap-4">
        <el-button
          v-for="button in buttons"
          :key="button.text"
          :type="button.type"
          text
          disabled
        >{{ button.text }}</el-button
        >
      </div>
    </div>
    <div class="box-5">
      <el-button type="primary" :icon="Edit" />
      <el-button type="primary" :icon="Share" />
      <el-button type="primary" :icon="Delete" />
      <el-button type="primary" :icon="Search">Search</el-button>
      <el-button type="primary">
        Upload<el-icon class="el-icon--right"><Upload /></el-icon>
      </el-button>
    </div>
  </div>

</template>

<script lang="ts" setup>
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,Share, Upload
} from '@element-plus/icons-vue'

const buttons = [
  { type: '', text: 'plain' },
  { type: 'primary', text: 'primary' },
  { type: 'success', text: 'success' },
  { type: 'info', text: 'info' },
  { type: 'warning', text: 'warning' },
  { type: 'danger', text: 'danger' },
] as const

const buttons2 = [
  { type: '', text: 'plain' },
  { type: 'primary', text: 'primary' },
  { type: 'success', text: 'success' },
  { type: 'info', text: 'info' },
  { type: 'warning', text: 'warning' },
  { type: 'danger', text: 'danger' },
] as const

</script>
<style scoped>
.mb-4{
  padding: 10px;
}
.box-1{
  background: #99a9bf;
}
.box-2{
  background: #e1e6ea;
}
.box-3{
  background: #99a9bf;
}
.box-4{
  background: #e1e6ea;
}
</style>
