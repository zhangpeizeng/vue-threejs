/*
 * @Description:
 * @Version: 1.668
 * @Autor: 地虎降天龙
 * @Date: 2023-12-20 17:01:37
 * @LastEditors: 地虎降天龙
 * @LastEditTime: 2025-09-22 10:47:42
 */
export default {
    name: 'floor',
    title: '地面地板实例',
    intro: '地面集合例子',
    version: '0.0.1',
    author: '地虎降天龙',
    website: 'https://gitee.com/hawk86104',
    state: 'active',
    require: [],
    preview: [
        { src: 'plugins/floor/preview/ripperfloor.png', type: 'img', name: 'rippleFloor', title: '波纹地板' },
        { src: 'plugins/floor/preview/mechaFloor.png', type: 'img', name: 'mechaFloor', title: '机甲地板' },
        { src: 'plugins/floor/preview/sixface.png', type: 'img', name: 'hexagonalWall', title: '六面柱地板' },
        { src: 'plugins/floor/preview/rubberTilesPage.png', type: 'img', name: 'rubberTilesPage', title: '橡胶地板' },
        { src: 'plugins/floor/preview/simpleReflector.png', type: 'img', name: 'simpleReflector', title: '简单镜面' },
        { src: 'plugins/floor/preview/reflectorShader.png', type: 'img', name: 'reflectorShader', title: '镜面材质着色器' },
        { src: 'plugins/floor/preview/reflectorDiffuse.png', type: 'img', name: 'reflectorDiffuse', title: 'fiber镜面' },
        { src: 'plugins/floor/preview/reflectorDUDV.png', type: 'img', name: 'reflectorDUDV', title: 'dudv镜面' },
        { src: 'plugins/floor/preview/reflectorRoundedBoxPage.png', type: 'img', name: 'reflectorRoundedBoxPage', title: 'RoundedBox镜面' },
        { src: 'plugins/floor/preview/showFloor.png', type: 'img', name: 'showFloor', title: '地板模型拼接+镜面' },
        { src: 'plugins/floor/preview/videoFloor.png', type: 'img', name: 'videoFloor', title: 'video动态底座' },
        { src: 'plugins/floor/preview/imgFloor.png', type: 'img', name: 'imgFloor', title: '图片动态底座' },
        { src: 'plugins/floor/preview/canvasFloor.png', type: 'img', name: 'canvasFloor', title: 'canvas动态底座' },
        { src: 'plugins/floor/preview/digitalGround.png', type: 'img', name: 'digitalGround', title: '数字动态底座' },
        { src: 'plugins/floor/preview/hexGridGround.png', type: 'img', name: 'hexGridGround', title: '网格动态底座' },
        { src: 'plugins/floor/preview/whiteFloor.png', type: 'img', name: 'whiteFloor', title: '白色边缘模糊' },
        { src: 'plugins/floor/preview/gridPlus.png', type: 'img', name: 'gridPlus', title: '网格扩展' },
        {
            src: 'plugins/floor/preview/gridFloor.png', type: 'img', name: 'gridFloor', title: '网格地板',
            referenceSource: { title: 'shaders-jikken', url: 'https://grid-floor.vercel.app/' },
         },
        {
            src: 'plugins/floor/preview/grass.png',
            type: 'img',
            name: 'grass',
            title: '草地',
            referenceSource: { title: 'react-three-fiber', url: 'https://codesandbox.io/s/5xho4' },
        },
        { src: 'plugins/floor/preview/circleWave.png', type: 'img', name: 'circleWave', title: 'shaderCircleWave' },
        { src: 'plugins/floor/preview/cartoonMagicZone.png', type: 'img', name: 'cartoonMagicZone', title: '卡通能量圈' },
        { src: 'plugins/floor/preview/lineMagicZone.png', type: 'img', name: 'lineMagicZone', title: '线条能量圈' },
        { src: 'plugins/floor/preview/particleBasePage.png', type: 'img', name: 'particleBasePage', title: '粒子底座' },
        { src: 'plugins/floor/preview/topoBasePage.png', type: 'img', name: 'topoBasePage', title: '拓扑底座' },
        { src: 'plugins/floor/preview/hexagonalFloorPage.png', type: 'img', name: 'hexagonalFloorPage', title: '六面地板组件化' },
    ],
}
