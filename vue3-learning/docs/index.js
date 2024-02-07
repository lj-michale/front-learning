/**
 * @description register mock data right here
 */
import Mock from 'mockjs'
// 设置拦截请求的响应时间 ajax 请求；
Mock.setup({
    timeout: '200-600'
})

Mock.mock('/api/data/world-population', 'get', () => ({
    status: 0,
    data: {
        dataSets: [
            { category: 'frontEnd', value: 13832220000, x: 'Vue-next' },
            { category: 'frontEnd', value: 13832210000, x: 'Vuex' },
            { category: 'frontEnd', value: 1383232300, x: 'vue-router' },
            { category: 'frontLib', value: 13832210000, x: 'ElementPlus' },
            { category: 'frontEnd', value: 1383232200, x: 'react' },
            { category: 'frontEnd', value: 13831322200, x: 'antd' },
            { category: 'frontEnd', value: 13831322200, x: 'antv' },
            { category: 'lowcode', value: 1383232400, x: 'lowcode' },
            { category: 'frontEnd', value: 1383232400, x: 'micro-frontend' },
            { category: 'frontEnd', value: 1383232400, x: 'flutter' },
            { category: 'frontEnd', value: 1383232300, x: '微信小程序' },
            { category: 'frontEnd', value: 1383232000, x: 'Taro' },
            { category: 'frontEnd', value: 1383231000, x: '抖音小程序' },
            { category: 'frontEnd', value: 1383236000, x: '快手小程序' },
            { category: 'frontEnd', value: 138322000, x: 'UniApp' },
            { category: 'frontEnd', value: 138322000, x: 'NodeJS' },
            { category: 'frontEnd', value: 138322000, x: 'Koa' },
            { category: 'frontEnd', value: 130922000, x: 'Vite' },
            { category: 'frontEnd', value: 130922009, x: 'VitePress' },
            { category: 'frontEnd', value: 130989000, x: 'TypeScript' },
            { category: 'frontEnd', value: 130989003, x: 'stylus' },
            { category: 'frontEnd', value: 130989003, x: 'less' },
            { category: 'frontEnd', value: 130989003, x: 'sass' },
            { category: 'frontEnd', value: 130989010, x: 'fidder' },
            { category: 'frontEnd', value: 130989015, x: 'G2' },
            { category: 'frontEnd', value: 130989010, x: 'mockjs' }
        ]
    },
    message: '更新成功'
}))

Mock.mock('/api/data/world-population', 'get', () => ({
    status: 0,
    data: {
        dataSets: [
            { category: 'frontEnd', value: 13832220000, x: 'Vue-next' },
            { category: 'frontEnd', value: 13832210000, x: 'Vuex' },
            { category: 'frontEnd', value: 1383232300, x: 'vue-router' },
            { category: 'frontLib', value: 13832210000, x: 'ElementPlus' },
            { category: 'frontEnd', value: 1383232200, x: 'react' },
            { category: 'frontEnd', value: 13831322200, x: 'antd' },
            { category: 'frontEnd', value: 13831322200, x: 'antv' },
            { category: 'lowcode', value: 1383232400, x: 'lowcode' },
            { category: 'frontEnd', value: 1383232400, x: 'micro-frontend' },
            { category: 'frontEnd', value: 1383232400, x: 'flutter' },
            { category: 'frontEnd', value: 1383232300, x: '微信小程序' },
            { category: 'frontEnd', value: 1383232000, x: 'Taro' },
            { category: 'frontEnd', value: 1383231000, x: '抖音小程序' },
            { category: 'frontEnd', value: 1383236000, x: '快手小程序' },
            { category: 'frontEnd', value: 138322000, x: 'UniApp' },
            { category: 'frontEnd', value: 138322000, x: 'NodeJS' },
            { category: 'frontEnd', value: 138322000, x: 'Koa' },
            { category: 'frontEnd', value: 130922000, x: 'Vite' },
            { category: 'frontEnd', value: 130922009, x: 'VitePress' },
            { category: 'frontEnd', value: 130989000, x: 'TypeScript' },
            { category: 'frontEnd', value: 130989003, x: 'stylus' },
            { category: 'frontEnd', value: 130989003, x: 'less' },
            { category: 'frontEnd', value: 130989003, x: 'sass' },
            { category: 'frontEnd', value: 130989010, x: 'fidder' },
            { category: 'frontEnd', value: 130989015, x: 'G2' },
            { category: 'frontEnd', value: 130989010, x: 'mockjs' }
        ]
    },
    message: '更新成功'
}))
Mock.mock('/api/personal/tasks', 'get', () => ({
    status: 0,
    data: {
        tasks: [
            ['2021-05-19', [{ task: '读书看报' }]],

            ['2021-05-20', [{ task: '吃饭打屁' }]]
        ]
    },
    message: '更新成功'
}))


// 项目看板数据
const getProjectInfo = {
    status: 0,
    message: '成功',
    data: [
        {
            projectId: '1',
            projectName: '后台管理系统',
            principal: '张三',
            timeConsuming: '20小时',
            status: '开发中',
            taskList: [
                {
                    taskId: 1,
                    taskName: '导航栏开发',
                    developTime: '3工时',
                    developMember: '李四',
                    taskStatus: 'preparation' // preparation: 准备阶段，development : 开发中， completed: 开发完成， test：测试阶段，released： 待发布
                },
                {
                    taskId: 2,
                    taskName: '内容页开发',
                    developTime: '8工时',
                    developMember: '王五',
                    taskStatus: 'development'
                },
                {
                    taskId: 3,
                    taskName: '侧边栏开发',
                    developTime: '9工时',
                    developMember: '赵六',
                    taskStatus: 'completed'
                },
                {
                    taskId: 4,
                    taskName: '侧边栏开发',
                    developTime: '9工时',
                    developMember: '赵六',
                    taskStatus: 'completed'
                },
                {
                    taskId: 5,
                    taskName: '侧边栏开发',
                    developTime: '9工时',
                    developMember: '赵六',
                    taskStatus: 'test'
                },
                {
                    taskId: 6,
                    taskName: '侧边栏开发',
                    developTime: '9工时',
                    developMember: '赵六',
                    taskStatus: 'released'
                }
            ]
        },
        {
            projectId: '2',
            projectName: '学生管理系统',
            principal: '老王',
            timeConsuming: '27小时',
            status: '开发中',
            taskList: [
                {
                    taskId: 7,
                    taskName: '导航栏开发',
                    developTime: '10工时',
                    developMember: '李四',
                    taskStatus: 'preparation' // preparation: 准备阶段，development : 开发中， completed: 开发完成， test：测试阶段，released： 待发布
                },
                {
                    taskId: 8,
                    taskName: '内容页开发',
                    developTime: '8工时',
                    developMember: '王五',
                    taskStatus: 'development'
                },
                {
                    taskId: 9,
                    taskName: '侧边栏开发',
                    developTime: '9工时',
                    developMember: '赵六',
                    taskStatus: 'completed'
                },
                {
                    taskId: 10,
                    taskName: '侧边栏开发',
                    developTime: '9工时',
                    developMember: '赵六',
                    taskStatus: 'test'
                }
            ]
        },
        {
            projectId: '3',
            projectName: '成绩管理系统',
            principal: '王五',
            timeConsuming: '40小时',
            status: '开发中',
            taskList: [
                {
                    taskId: 11,
                    taskName: '导航栏开发',
                    developTime: '13工时',
                    developMember: '李四',
                    taskStatus: 'preparation' // preparation: 准备阶段，development : 开发中， completed: 开发完成， test：测试阶段，released： 待发布
                },
                {
                    taskId: 12,
                    taskName: '内容页开发',
                    developTime: '18工时',
                    developMember: '王五',
                    taskStatus: 'development'
                },
                {
                    taskId: 13,
                    taskName: '侧边栏开发',
                    developTime: '9工时',
                    developMember: '赵六',
                    taskStatus: 'completed'
                }
            ]
        }
    ]
}
Mock.mock(RegExp('/api/project/list' + '.*'), 'get', getProjectInfo)
