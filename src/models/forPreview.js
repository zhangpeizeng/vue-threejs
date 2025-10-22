/*
 * @Description:
 * @Version: 1.668
 * @Autor: 地虎降天龙
 * @Date: 2023-10-21 15:34:19
 * @LastEditors: 地虎降天龙
 * @LastEditTime: 2025-09-23 11:27:45
 */
import { reactive } from 'vue'
import { access, request } from '@fesjs/fes'

export default function userModel() {
    const user = reactive({ userName: '' })

    const signin = () => {
        const { setRole } = access
        user.userName = 'tvt.js'
        setRole('admin')
    }

    const signout = () => {}

    const menuSetup = reactive([])

    const getMenu = () => {
        request(
            `${process.env.NODE_ENV === 'development' ? 'api.icegl' : 'https://www.icegl.cn'}/addons/tvt/index/getMenuSetup`,
            {},
            {
                method: 'get',
            },
        )
            .then((res) => {
                const arrObject = {}
                res.code.menuSetup.forEach((item) => {
                    const { m1text, m2text } = item
                    if (!arrObject[m1text]) {
                        arrObject[m1text] = {}
                    }
                    arrObject[m1text][m2text] = item
                })
                menuSetup.value = arrObject
            })
            .catch((err) => {
                // 处理异常
                console.log(err, '请连接网络，获得样例的更新')
            })
    }

    return {
        user,
        signin,
        signout,
        menuSetup,
        getMenu,
    }
}
