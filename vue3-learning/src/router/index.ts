/**

 * User: lj.michale
 * Date: 2022/3/19
 * Description: 文件描述
 */
import {RouteRecordRaw, createRouter, createWebHashHistory} from 'vue-router'

import en from '../i18n/lang/en.js'

import Login from '@/views/login/index'
import Layout from '@/views/layout/index'
import Home from '@/views/home/Index'

/** 不是必须加载的组件使用懒加载 */
const NotFound = () => import('@/views/page404.vue')
const dataAsset = () => import('@/views/data/asset/index.vue')
const multiEchart = () => import('@/views/data/echart/MultiEchart.vue')
const multiElementUi = () => import('@/views/element/MultiEchart.vue')
const ElementComponent = () => import('@/views/element/ElementComponent.vue')
const from1 = () => import('@/views/element/FromTest.vue')
const from2 = () => import('@/views/element/FromTest2.vue')

const propsTest = () => import('@/views/communicate/01_props/PropsTest.vue')
const eventTest = () => import('@/views/communicate/02_custom-event/EventTest.vue')
const eventBus = () => import('@/views/communicate/03_event-bus/EventBusTest.vue')
const vModel = () => import('@/views/communicate/04_v-model/ModelTest.vue')
const attrsListeners = () => import('@/views/communicate/05_attrs-listeners/AttrsListenersTest.vue')
const refChildrenParent = () => import('@/views/communicate/06_ref-children-parent/RefChildrenParentTest.vue')
const provideInject = () => import('@/views/communicate/07_provide-inject/ProvideInjectTest.vue')
const pinia = () => import('@/views/communicate/08_pinia/index.vue')
const slot = () => import('@/views/communicate/09_slot/SlotTest.vue')

const VueAttributes = () => import('@/views/skill/VueAttributes.vue')
const OptionApi = () => import('@/views/skill/OptionApi.vue')
const CompositionApi = () => import('@/views/skill/CompositionAPI.vue')
const WatchApi = () => import('@/views/skill/Watch.vue')
const MethodApi = () => import('@/views/skill/Method.vue')
const ComponentNestRoot = () => import('@/views/skill/ComponentNestRoot.vue')
const DataMock = () => import('@/views/skill/DataMock.vue')
const HeroMock = () => import('@/views/skill/HeroMockData.vue')
const TablePage = () => import('@/views/skill/TablePages.vue')
const FileUpLoad = () => import('@/views/element/FileUpLoad.vue')
const Guide = () => import('@/views/skill/guide/Guide.vue')
const FromInfo = () => import('@/views/from/fromInfo.vue')
const StepFrom = () => import('@/views/from/stepFrom.vue')
const AdvanceForm = () => import('@/views/from/advanceForm.vue')
const DivLayout = () => import('@/views/skill/DivLayout.vue')

const SystemSetting = () => import('@/views/system/Index.vue')

const routeName = en.routeName

export type IRouter = {
  hidden?: boolean
  iconCls?: string
  alone?: boolean
  children: Array<IRouter>
} & RouteRecordRaw

const defaultRouter: Array<IRouter> = [
    {   path: '/',
        redirect: '/index',
        hidden: true,
        children: []
    },
    {
      path: '/login',
      component: Login,
      name: '',
      hidden: true,
      children: []
    },
    {
      path: '/index',
      iconCls: 'fa fa-dashboard', // 图标样式class
      name: routeName.home,
      component: Layout,
      alone: true,
      children: [
        {
          path: '/index',
          iconCls: 'fa fa-dashboard', // 图标样式class
          name: routeName.home,
          component: Home,
          children: []
        }
      ]
    },
    {
      path: '/404',
      component: NotFound,
      name: '404',
      hidden: true,
      children: []
    },
]

/**
 * @descr 添加路由
 * */
const addRouter = [
    /* Echart */
    {
        path: '/',
        iconCls: 'fa fa-paw', // 图标样式class
        name: routeName.dataBi,
        component: Layout,
        children: [
            {
                path: '/data/bi/echart',
                iconCls: 'fa fa-life-ring', // 图标样式class
                name: routeName.echartBi,
                component: multiEchart,
                children: []
            },
            {
                path: '/data/bi/datav',
                iconCls: 'fa fa-life-ring', // 图标样式class
                name: routeName.dataV,
                component: dataAsset,
                children: []
            }
        ]
    },
    /* ElementUI-Plus*/
    {
        path: '/',
        iconCls: 'fa fa-paw', // 图标样式class
        name: routeName.elementUi,
        component: Layout,
        children: [
            {
                path: '/element-ui/basic',
                iconCls: 'fa fa-life-ring', // 图标样式class
                name: routeName.elementBasic,
                component: multiElementUi,
                children: []
            },
            {
                path: '/element-ui/element-component',
                iconCls: 'fa fa-life-ring', // 图标样式class
                name: routeName.elementComponent,
                component: ElementComponent,
                children: []
            },
            {
                path: '/element-ui/from1',
                iconCls: 'fa fa-life-ring', // 图标样式class
                name: routeName.elementFrom1,
                component: from1,
                children: []
            },
            {
                path: '/element-ui/from2',
                iconCls: 'fa fa-life-ring', // 图标样式class
                name: routeName.elementFrom2,
                component: from2,
                children: []
            },
        ]
    },
    /* 组件通信 */
    {
        path: '/',
        iconCls: 'fa fa-paw', // 图标样式class
        name: routeName.componCommunicate,
        component: Layout,
        children: [
            {
                path: '/components/communicate/props',
                iconCls: 'fa fa-life-ring', // 图标样式class
                name: routeName.comp_props,
                component: propsTest,
                children: []
            },
            {
                path: '/components/communicate/custom-event',
                iconCls: 'fa fa-life-ring', // 图标样式class
                name: routeName.custom_event,
                component: eventTest,
                children: []
            },
            {
                path: '/components/communicate/event-bus',
                iconCls: 'fa fa-life-ring', // 图标样式class
                name: routeName.event_bus,
                component: eventBus,
                children: []
            },
            {
                path: '/components/communicate/v-model',
                iconCls: 'fa fa-life-ring', // 图标样式class
                name: routeName.v_model,
                component: vModel,
                children: []
            },
            {
                path: '/components/communicate/attrs-listeners',
                iconCls: 'fa fa-life-ring', // 图标样式class
                name: routeName.attrs_listeners,
                component: attrsListeners,
                children: []
            },
            {
                path: '/components/communicate/ref-children-parent',
                iconCls: 'fa fa-life-ring', // 图标样式class
                name: routeName.ref_children_parent,
                component: refChildrenParent,
                children: []
            },
            {
                path: '/components/communicate/provide-inject',
                iconCls: 'fa fa-life-ring', // 图标样式class
                name: routeName.provide_inject,
                component: provideInject,
                children: []
            },
            {
                path: '/components/communicate/pinia',
                iconCls: 'fa fa-life-ring', // 图标样式class
                name: routeName.pinia,
                component: pinia,
                children: []
            },
            {
                path: '/components/communicate/slot',
                iconCls: 'fa fa-life-ring', // 图标样式class
                name: routeName.slot,
                component: slot,
                children: []
            },
        ]
    },
    /* vue3知识点学 */
    {
        path: '/',
        iconCls: 'fa fa-paw', // 图标样式class
        name: routeName.vueSkill,
        component: Layout,
        children: [
            {
                path: '/vue3/skill/attribute',
                iconCls: 'fa fa-life-ring', // 图标样式class
                name: routeName.vueAttribute,
                component: VueAttributes,
                children: []
            },
            {
                path: '/vue3/skill/option-api',
                iconCls: 'fa fa-life-ring', // 图标样式class
                name: routeName.optionApi,
                component: OptionApi,
                children: []
            },
            {
                path: '/vue3/skill/composition-api',
                iconCls: 'fa fa-life-ring', // 图标样式class
                name: routeName.compositionApi,
                component: CompositionApi,
                children: []
            },
            {
                path: '/vue3/skill/watch',
                iconCls: 'fa fa-life-ring', // 图标样式class
                name: routeName.watchApi,
                component: WatchApi,
                children: []
            },
            {
                path: '/vue3/skill/method',
                iconCls: 'fa fa-life-ring', // 图标样式class
                name: routeName.methodApi,
                component: MethodApi,
                children: []
            },
            {
                path: '/vue3/skill/comp-nest',
                iconCls: 'fa fa-life-ring', // 图标样式class
                name: routeName.compNestApi,
                component: ComponentNestRoot,
                children: []
            },
            {
                path: '/vue3/skill/mock-data',
                iconCls: 'fa fa-life-ring', // 图标样式class
                name: routeName.dataMock,
                component: DataMock,
                children: []
            },
            {
                path: '/vue3/skill/mock-hero',
                iconCls: 'fa fa-life-ring', // 图标样式class
                name: routeName.mockHero,
                component: HeroMock,
                children: []
            },
            {
                path: '/vue3/skill/table-page',
                iconCls: 'fa fa-life-ring', // 图标样式class
                name: routeName.tablePages,
                component: TablePage,
                children: []
            },
            {
                path: '/vue3/skill/guide',
                iconCls: 'fa fa-life-ring', // 图标样式class
                name: routeName.guide,
                component: Guide,
                children: []
            },
            {
                path: '/vue3/skill/di-layout',
                iconCls: 'fa fa-life-ring', // 图标样式class
                name: routeName.divLayout,
                component: DivLayout,
                children: []
            },
        ]
    },

    /*文件上传*/
    {
        path: '/',
        iconCls: 'fa fa-paw', // 图标样式class
        name: routeName.fileUpLoad,
        component: Layout,
        children: [
            {
                path: '/vue3/skill/file-up-load',
                iconCls: 'fa fa-life-ring', // 图标样式class
                name: routeName.fileUpLoad,
                component: FileUpLoad,
                children: []
            },
        ]
    },

    /*表单*/
    {
        path: '/',
        iconCls: 'fa fa-paw', // 图标样式class
        name: routeName.from,
        component: Layout,
        children: [
            {
                path: '/vue3/skill/basic-from',
                iconCls: 'fa fa-life-ring', // 图标样式class
                name: routeName.basicFrom,
                component: FromInfo,
                children: []
            },
            {
                path: '/vue3/skill/step-from',
                iconCls: 'fa fa-life-ring', // 图标样式class
                name: routeName.stepForm,
                component: StepFrom,
                children: []
            },
            {
                path: '/vue3/skill/advance-from',
                iconCls: 'fa fa-life-ring', // 图标样式class
                name: routeName.advanceForm,
                component: AdvanceForm,
                children: []
            },
        ]
    },

    /*系统设置*/
    {
        path: '/',
        iconCls: 'fa fa-paw', // 图标样式class
        name: routeName.systemSetting,
        component: Layout,
        children: [
            {
                path: '/system/setting/updateline',
                iconCls: 'fa fa-life-ring', // 图标样式class
                name: routeName.systemUpdateLine,
                component: SystemSetting,
                children: []
            },
        ]
    },
    { path: '/:catchAll(.*)',
      redirect: '/404',
      hidden: true,
      children: []
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: defaultRouter,
})

export default router
export {defaultRouter, addRouter}
