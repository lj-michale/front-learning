/**

 * User: lj.michale
 * Date: 2023/08/8
 * Description: 文件描述
 */
import enLocale from 'element-plus/es/locale/lang/en'

const en = {
  routeName: {
    home: 'home',
    dataAsset: 'dataAsset',
    dataBi: 'dataBi',
    echartBi: 'echartBi',
    duoTuBiao: 'duoTuBiao',
    dataV: 'dataV',

    elementUi: 'elementUi',
    elementBasic: 'elementBasic',
    elementComponent: 'elementComponent',
    elementFrom1: 'elementFrom1',
    elementFrom2: 'elementFrom2',

    componCommunicate: 'componCommunicate',
    comp_props: 'comp_props',
    custom_event: 'custom_event',
    event_bus: 'event_bus',
    v_model: 'v_model',
    attrs_listeners: 'attrs_listeners',
    ref_children_parent: 'ref_children_parent',
    provide_inject: 'provide_inject',
    pinia: 'pinia',
    slot: 'slot',
    dataDasbroad: 'dataDasbroad',

    vueSkill:'vueSkill',
    vueAttribute:'vueAttribute',
    optionApi:'optionApi',
    compositionApi:'compositionApi',
    watchApi:'watchApi',
    methodApi:'methodApi',
    compNestApi:'compNestApi',
    dataMock:'dataMock',
    mockHero:'mockHero',
    guide:'guide',
    divLayout:'divLayout',

    tablePages:'tablePages',
    fileUpLoad:'fileUpLoad',

    from:'from',
    basicFrom:'basicFrom',
    stepForm:'stepForm',
    advanceForm:'advanceForm',

    systemSetting: 'systemSetting',
    systemAuth: 'systemAuth',
    systemUpdateLine: 'systemUpdateLine',
  },
  rightMenu: {
    close: 'close',
    closeOther: 'closeOther',
    closeAll: 'closeAll'
  },
  role: {
    superAdmin: 'superAdmin',
    admin: 'admin',
    ordinary: 'ordinary'
  },
  userDropdownMenu: {
    basicInfor: 'basicInfor',
    changePassword: 'changePassword',
    logout: 'logout'
  },

  ...enLocale //  合并element-ui内置翻译
}

export default en
