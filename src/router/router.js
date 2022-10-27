import React from 'react'
import {Redirect} from 'react-router-dom'
import Loadable from 'react-loadable'


/**
 * 组件异步加载装置 => react-loadables
 * @param {String} filename 
 */
const loadables = (filename) => Loadable({
    loader:() => import(`@/view/${filename}`),
    loading:() => <div></div>
});



/**
 * 根路由集合
 */
const rootRouters = [
    {
        //根路由匹配
        path:'/',
        exact:true,
        component:() => <Redirect to='javascript-note'/>
    },
    {
        // 首页
        path:'/javascript-note',
        component:loadables('index')
    },
    {
        // 404 匹配
        path:'*',
        component:loadables('404')
    }
];

/**
 * 嵌套路由集合
 */
const routers = [
    {
        //Spanner
        path:'/spanner',
        component:loadables('page/spanner'),
    },
    {
        // 对象的解耦赋值
        path:'/view0',
        component:loadables('page/view0'),
    },
    {
        //属性访问器
        path:'/view1',
        component:loadables('page/view1'),
    },
    {
        //对象扩展运算符...
        path:'/view2',
        component:loadables('page/view2'),
    },
    {
        //async function 异步函数的应用
        path:'/view3',
        component:loadables('page/view3'),
    },
    {
        //promise 对象构建异步函数
        path:'/view4',
        component:loadables('page/view4'),
    },
    {
        //生成器函数（Geneartor Function）
        path:'/view5',
        component:loadables('page/view5'),
    },
    {
        //生成器函数（Geneartor Function）
        path:'/view6',
        component:loadables('page/view6'),
    },
    {
        // 原型链
        path:'/view7',
        component:loadables('page/view7'),
    },
    {
        // 原型和原型链
        path:'/view8',
        component:loadables('page/view8'),
    },
    {
        // 解耦赋值(对象/数组)
        path:'/view9',
        component:loadables('page/view9'),
    },
    {
        // 类表达式
        path:'/view10',
        component:loadables('page/view10'),
    },
    
]


export {
    rootRouters,
    routers
}