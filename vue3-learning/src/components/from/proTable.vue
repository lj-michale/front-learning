<template>
  <div class="table">
    <el-table
      :data="tableData"
      border
      max-height="650"
      style="width: 100%"
      v-loading="loading"
      @selection-change="selectionChange"
    >
      <el-table-column type="selection" width="50" />
      <template v-for="(item, index) in tableHeader" :key="item.prop">
        <el-table-column
          :prop="item.prop"
          :label="item.label"
          :fixed="item.fixed"
          :align="item.align || 'center'"
          :show-overflow-tooltip="item.overHidden || false"
          :min-width="item.minWidth || '100px'"
          :sortable="item.sortable || false"
          :type="item.type"
          :width="item.width"
        >
          <!-- 插槽：预留功能 -->
          <template #default="scope" v-if="item.slot">
            <slot :name="item.slot" :data="scope.row"></slot>
          </template>
          <template #default="scope" v-else>
            <span>{{ scope.row[item.prop] ? scope.row[item.prop] : "" }}</span>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      :locale="locale"
      background
      class="pagination"
      small
      :page-sizes="pageSizesArr"
      @size-change="sizeChange"
      @current-change="currentChange"
      :current-page="current"
      :page-size="size"
      :total="total"
      :layout="layout"
    />
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, onMounted, reactive, ref } from "vue";

const emits = defineEmits(["selectionChange", "sizeChange", "currentChange"]);
const props = defineProps({
  // 表格显示的数据
  tableData: {
    type: String,
    default: function () {
      return "";
    }
  },
  // 表头数据
  tableHeader: {
    type: String,
    default: function () {
      return [];
    }
  },
  // 总页数
  total: {
    type: Number,
    // 类型
    required: true,
    default: 0
  },
  // 分页的页容量数组
  pageSizesArr: {
    type: Array,
    default() {
      return [20, 40, 50];
    }
  },
  // 分页的布局
  layout: {
    type: String,
    default: "total, sizes, prev, pager, next, jumper"
  }
});
//表格事件
const selectionChange = val => {
  emits("selectionChange", val);
};

// 页数改变的时候触发的事件
const sizeChange = val => {
  emits("handleSizeChange", val);
};
// 当前页改变的时候触发的事件
const currentChange = val => {
  emits("handleCurrentChange", val);
};
</script>
<style scoped>
.table {
  margin-top: 1rem;
  height: 100%;
}
.pagination {
  float: right;
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
}
</style>

