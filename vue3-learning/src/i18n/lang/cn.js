/**
 * User: lj.michale
 * Date: 2023/08/8
 * Description: 文件描述
 */
import zhLocale from 'element-plus/es/locale/lang/zh-cn'

const cn = {
  routeName: {
    home: '首页概览',
    dataAsset: '数据资产',
    dataBi: '数据可视化',
    echartBi: 'EchartBI',
    duoTuBiao: '多图表',
    dataV: 'DataV绘图',

    elementUi: 'ElementUI',
    elementBasic: 'Basic基础组件',
    elementComponent: 'Element组件',
    elementFrom1: '表单1',
    elementFrom2: '表单2',

    componCommunicate: '组件通信',
    comp_props: 'props通信',
    custom_event: '自定义事件',
    event_bus: '全局事件BUS',
    v_model: 'v_model',
    attrs_listeners: 'attrs_listeners',
    ref_children_parent: 'ref_children_parent',
    provide_inject: 'provide_inject',
    pinia: 'pinia',
    slot: 'slot',
    dataDasbroad: '数据大屏',

    vueSkill:'Vue知识',
    vueAttribute:'属性',
    optionApi:'选项式API',
    compositionApi:'组合式API',
    watchApi:'监听器API',
    methodApi:'事件处理API',
    compNestApi:'组件嵌套',
    dataMock:'数据Mock',
    mockHero:'Mock-Hero',
    guide:'引导页',
    divLayout:'div布局',

    tablePages:'table分页',
    fileUpLoad:'文件上传',

    from:'表单',
    basicFrom:'基础表单',
    stepForm:'分步表单',
    advanceForm:'高级表单',

    systemSetting: '系统设置',
    systemAuth: '系统权限',
    systemUpdateLine: '更新日志',
  },
  rightMenu: {
    close: '关闭',
    closeOther: '关闭其他',
    closeAll: '全部关闭'
  },
  role: {
    superAdmin: '超级管理员',
    admin: '管理员',
    ordinary: '普通用户'
  },
  userDropdownMenu: {
    basicInfor: '基本资料',
    changePassword: '修改密码',
    logout: '退出'
  },

  ...zhLocale //  合并element-ui内置翻译
}

export default cn
