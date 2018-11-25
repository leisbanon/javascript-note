import React, { Component } from 'react';
import{
    Prism
} from '@/components'
import { hot } from 'react-hot-loader';

class View7 extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        let obj = {
            name:'XiaoMin',
            email:'XXXXXX@163.com',
        };

        let name_descriptor = Object.getOwnPropertyDescriptor(obj,'name');
        // {"value":"XiaoMin","writable":true,"enumerable":true,"configurable":true}
        console.log(JSON.stringify(name_descriptor));


        // 如果对象属性不可枚举，那么某些操作将忽略对象属性
        let obj_1 = {
            name:'XiaoMin',
            email:'XXXXXX@163.com',
        };
        Object.defineProperty(obj_1,'name',{
            enumerable:false,
        });
        // {value: "XiaoMin", writable: true, enumerable: false, configurable: true}
        console.log(Object.getOwnPropertyDescriptor(obj_1,'name'));

        // 打印 XXXXXX@163.com，对象的name属性将会被忽略
        for(let i in obj_1) {
            console.log(obj_1[i]);
        }



        return(
            <main>
                <strong>对象可枚举性</strong>
                <p>对象的每个属性都有一个描述。简单来说，对象的可枚举属性用来控制“对象”所描述的属性.</p>
                <p>我们可以通过 Object.getOwnPropertyDescriptor 方法获取该属性的描述：</p>
                <ul>
                    <li>value：该属性的值</li>
                    <li>writable：标识该属性的值是否可写</li>
                    <li>configurable：指定该属性的值是否可以改变或者可以被删除</li>
                    <li>enumerable：可枚举性</li>
                </ul>
                <Prism>{`
                    let obj = {
                        name:'XiaoMin',
                        email:'XXXXXX@163.com',
                    };
            
                    let name_descriptor = Object.getOwnPropertyDescriptor(obj,'name');
                    // {"value":"XiaoMin","writable":true,"enumerable":true,"configurable":true}
                    console.log(JSON.stringify(name_descriptor));
                `}</Prism>
                <p>上面我们通过Object.getOwnPropertyDescriptor 获取对象 obj 属性 name 的描述 => 其中enumerable 的值表示对象的可枚举属性，如果为false,则某些操作会忽略当前操作. </p>
                <p>如下示例、将改变某个对象的可枚举性为false：</p>
                <Prism>{`
                    let obj_1 = {
                        name:'XiaoMin',
                        email:'XXXXXX@163.com',
                    };
                    Object.defineProperty(obj_1,'name',{
                        enumerable:false,
                    });
                    // {value: "XiaoMin", writable: true, enumerable: false, configurable: true}
                    console.log(Object.getOwnPropertyDescriptor(obj_1,'name'));
            
                    // 打印 XXXXXX@163.com，对象的name属性将会被忽略
                    for(let i in obj_1) {
                        console.log(obj_1[i]);
                    }
                `}</Prism>
            </main>
        )
    }
}
 
export default hot(module)(View7);
