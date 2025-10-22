/*
 * @Description:
 * @Version: 1.668
 * @Autor: 地虎降天龙
 * @Date: 2024-05-28 12:11:05
 * @LastEditors: 地虎降天龙
 * @LastEditTime: 2025-09-04 15:06:11
 */
export default {
    name: 'goView',
    title: 'goView低代码UI',
    intro: '使用goView导出的配置，导入到本TvT.js快速完成项目落地。整体文档和视频教程详见：<a style="color: #5384ff;" href="https://docs.icegl.cn/docs/three-vue-tres/editor/goview.html" target="_blank">goView低代码UI结合</a>',
    version: '0.0.1',
    author: '地虎降天龙',
    website: 'https://gitee.com/hawk86104',
    state: 'active',
    creatTime: '2024-05-27',
    updateTime: '2024-05-27',
    require: [],
    preview: [
        {
            src: `
            1、使用goView低代码平台<a style="color: #5384ff;" href="https://vue.mtruning.club/" target="_blank">vue.mtruning.club</a>编辑好您的项目;</br>
            2、然后点击右下角的导出按钮，获得json配置文件;</br>
            3、使用: import { viewChart } from 'PLS/goView' 组件来载入json。快速拉起你的项目。</br>
            整体文档和视频教程详见：<a style="color: #5384ff;" href="https://docs.icegl.cn/docs/three-vue-tres/editor/usegwjson.html" target="_blank">导入-GoView配置文件</a>`,
            type: 'text',
            name: 'goViewGF',
            url: 'https://vue.mtruning.club',
            title: 'goView项目纯前端',
        },
        {
            src: 'plugins/goView/preview/goViewPlugin.png',
            type: 'img',
            name: 'index',
            disableFPSGraph: true,
            disableSrcBtn: true,
            title: '简单场景读取json配置',
        },
        {
            src: 'plugins/goView/preview/goViewComPage.png',
            type: 'img',
            name: 'goViewComPage',
            disableFPSGraph: false,
            disableSrcBtn: true,
            title: '配置组件化',
        },
    ],
}
