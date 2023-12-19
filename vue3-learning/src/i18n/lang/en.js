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
    dataV: 'dataV',

    elementUi: 'elementUi',
    elementBasic: 'elementBasic',
    elementFrom1: 'elementFrom1',
    elementFrom2: 'elementFrom2',

    componCommunicate: 'componCommunicate',
    comp_props: 'comp_props',
    custom_event: 'custom_event',
    event_bus: 'event_bus',
    v_model: 'v_model',

  
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
