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
const from1 = () => import('@/views/element/FromTest.vue')
const from2 = () => import('@/views/element/FromTest2.vue')

const propsTest = () => import('@/views/communicate/01_props/PropsTest.vue')
const eventTest = () => import('@/views/communicate/02_custom-event/EventTest.vue')

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
