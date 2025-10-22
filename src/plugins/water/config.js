/*
 * @Description:
 * @Version: 1.668
 * @Autor: 地虎降天龙
 * @Date: 2023-11-10 16:11:27
 * @LastEditors: 地虎降天龙
 * @LastEditTime: 2025-07-22 09:54:51
 */

export default {
    name: 'water',
    title: '水相关',
    intro: '河流、水域、海洋等场景',
    version: '0.0.1',
    author: '地虎降天龙',
    website: 'https://gitee.com/hawk86104',
    state: 'active',
    require: [],
    preview: [
        { src: 'plugins/water/preview/staticWaterPage.png', type: 'img', name: 'staticWaterPage', title: '静态水' },
        { src: 'plugins/water/preview/tilingCaustics.png', type: 'img', name: 'tilingCaustics', title: '波纹A' },
        { src: 'plugins/water/preview/waterGlass.png', type: 'img', name: 'waterGlass', title: '波浪B' },
        { src: 'plugins/water/preview/waveC.png', type: 'img', name: 'waveC', title: '波浪C' },
        { src: 'plugins/water/preview/threeExampleOcean.png', type: 'img', name: 'threeExampleOcean', title: 'three例子-海洋' },
        {
            src: 'plugins/water/preview/customWater.png',
            type: 'img',
            name: 'customWater',
            title: '自定义水',
            referenceSource: { title: 'CustomShaderMaterial', url: 'https://github.com/FarazzShaikh/THREE-CustomShaderMaterial' },
        },
        {
            src: 'plugins/water/preview/realWater.png',
            type: 'img',
            name: 'realWater',
            title: '真实水',
            referenceSource: { title: 'realWater', url: 'https://github.com/martinRenou/threejs-water' },
        },
        {
            src: 'plugins/water/preview/iceFloor.png',
            type: 'img',
            name: 'iceFloor',
            title: '冰面',
            referenceSource: { title: 'ice-trails', url: 'https://github.com/rock-biter/ice-trails' },
        },
    ],
}
