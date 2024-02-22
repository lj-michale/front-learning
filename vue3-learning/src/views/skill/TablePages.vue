<template>
  <el-card class="main-card">
    <!-- 表格展示 -->
    <CommonTable
      :tableData="tableData"
      :tableHeader="tableHeader"
      :isOperate="isOperate"
      :total="total"
      :operateWidth="operateWidth"
      @handleSizeChange="sizeChange"
      @handleCurrentChange="currentChange"
    >
      <template v-slot:isReview>
        <el-tag v-if="isReview == 0" type="warning">审核中</el-tag>
        <el-tag v-if="isReview == 1" type="success">正常</el-tag>
      </template>
      <template v-slot:state>
        <el-tag v-if="state == 1">文章</el-tag>
        <el-tag v-if="state == 2" type="danger">留言</el-tag>
        <el-tag v-if="state == 3" type="success">关于我</el-tag>
        <el-tag v-if="state == 4" type="warning">友链</el-tag>
        <el-tag v-if="state == 5" type="warning">说说</el-tag>
      </template>
      <template v-slot:action>
        <el-button
          v-if="action == 0"
          size="mini"
          type="success"
          @click="updateCommentReview(scope.row.id)">
          通过
        </el-button>
        <el-popconfirm style="margin-left: 10px" title="确定删除吗？" @confirm="deleteComments(scope.row.id)">
          <el-button size="mini" type="danger"> 删除 </el-button>
        </el-popconfirm>
      </template>
    </CommonTable>
  </el-card>
</template>

<script setup lang='ts'>
import { reactive, ref, onMounted, computed } from "vue";
import CommonTable from "@/components/Table/CommonTable";

// import { defineStore } from "pinia";
// const store = defineStore();
// 表格所需的数据
const tableData = reactive([
  {
    avatar: "头像",
    nickname: "评论人",
    replyNickname: "回复人",
    articleTitle: "文章标题",
    commentContent: "评论内容",
    createTime: "评论时间",
    isReview: "状态",
  },
  {
    avatar: "头像2",
    nickname: "评论人2",
    replyNickname: "回复人2",
    articleTitle: "文章标题2",
    commentContent: "评论内容2",
    createTime: "评论时间2",
    isReview: "状态2",
  },
  {
    avatar: "头像3",
    nickname: "评论人3",
    replyNickname: "回复人",
    articleTitle: "文章标题",
    commentContent: "评论内容",
    createTime: "评论时间",
    isReview: "状态",
  },
  {
    avatar: "头像2",
    nickname: "评论人2",
    replyNickname: "回复人2",
    articleTitle: "文章标题2",
    commentContent: "评论内容2",
    createTime: "评论时间2",
    isReview: "状态2",
  },
  {
    avatar: "头像",
    nickname: "评论人",
    replyNickname: "回复人",
    articleTitle: "文章标题",
    commentContent: "评论内容",
    createTime: "评论时间",
    isReview: "状态",
  },
  {
    avatar: "头像2",
    nickname: "评论人2",
    replyNickname: "回复人2",
    articleTitle: "文章标题2",
    commentContent: "评论内容2",
    createTime: "评论时间2",
    isReview: "状态2",
  },
  {
    avatar: "头像",
    nickname: "评论人",
    replyNickname: "回复人",
    articleTitle: "文章标题",
    commentContent: "评论内容",
    createTime: "评论时间",
    isReview: "状态",
  },
  {
    avatar: "头像2",
    nickname: "评论人2",
    replyNickname: "回复人2",
    articleTitle: "文章标题2",
    commentContent: "评论内容2",
    createTime: "评论时间2",
    isReview: "状态2",
  },

]);
//表头数据  辅助tableData的数据 tableData是自己定义
const tableHeader = reactive([
  {
    prop: "avatar",
    fixed: "left",
    label: "头像",
    width: "130px",
    align: "center", // 对齐方式
  },
  {
    prop: "nickname",
    label: "评论人",
    width: "130px",
    align: "center", // 对齐方式
  },
  {
    prop: "replyNickname",
    label: "回复人",
    width: "130px",
    align: "left", // 对齐方式
  },
  {
    prop: "articleTitle",
    label: "文章标题",
    width: "130px",
    align: "left", // 对齐方式
  },
  {
    prop: "commentContent",
    label: "评论内容",
    width: "130px",
    align: "left", // 对齐方式
  },
  {
    prop: "createTime",
    label: "评论时间",
    width: "130px",
    align: "left", // 对齐方式
  },
  {
    prop: "isReview", //prop
    label: "状态", //label
    slot: "isReview", //插槽根据需求显示
    width: "130px", //宽度
    align: "left", // 对齐方式
    fixed:''//固定左侧或右侧？true/flase
  },
  {
    label: "来源",
    slot: "state",
    width: "130px",
    align: "left", // 对齐方式
  },
  {
    label: "操作",
    slot: "action",
    fixed: "right",
    width: "130px",
    align: "center", // 对齐方式
  },
]);

const operateWidth = ref(160); // 操作列宽度
const isOperate = ref(true); // 操作列是否显示
const pageSize = ref(10); // 每页显示条数
const pageNum = ref(2); // 当前页码
const total = ref(100); // 总条数
const isReview=ref(0);
const state=ref(1);
const action=ref(0)
// const isReview=ref(null);
// 分页改变事件
const sizeChange = (val) => {
  pageSize.value = val;

};
// 当前页改变事件
const currentChange = (val) => {
  pageNum.value = val;

};
</script>



<style lang="less" scoped>
.article-status-menu {
  font-size: 14px;
  margin-top: 16px;
  color: #999;
}
.table {
  margin-top: 10px;
  .option-box {
    margin-top: 1.5rem;
    .el-select {
      margin-right: 1.5rem;
    }
    .search {
      margin-top: 0.5rem;
    }
  }
  .operation-container {
    display: flex;
    align-items: center;
    // margin-bottom: 1.25rem;
    // margin-top: 1.25rem;
  }
}
.el-table {
  margin-top: 1rem;
}
</style>
