import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import{
    Prism
} from '@/components'

class Delete extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        let object = {
            a:10,
            b:20,
            c:30
        }
        // {a: 10, b: 20, c: 30}
        console.log(object);
        delete object.a;
        // {b: 20, c: 30}
        console.log(object);

        // delete 删除数组元素
        let array = ['100','200','300','400','500'];
        //  ["100", "200", "300", "400", "500"]
        console.log(array);
        delete array[2];
        // ["100", "200", empty, "400", "500"]
        console.log(array);

        // splice 删除数组元素
        let array_1 = ['100','200','300'];
        // ["100", "200", "300"]
        console.log(array_1);
        array_1.splice(1,1);
        //  ["100", "300"]
        console.log(array_1);
        return (
            <main>
                <p>delete 操作符用于删除“对象”的某一个属性。如果对象不存在，那么他将会被释放。</p>
                <strong>以下一个简单的实例：</strong>
                <Prism>{`
                    let object = {
                        a:10,
                        b:20,
                        c:30
                    }
                    // {a: 10, b: 20, c: 30}
                    console.log(object);
                    delete object.a;
                    // {b: 20, c: 30}
                    console.log(object);
                `}</Prism>

                <strong>delete 删除数组元素</strong>
                <p>需要明白的是，使用delete 删除数组元素，数组的长度的不会发生改变的。即删除了某一个数组中的一个元素，那么对应在该元素在数组中的值为undefined，如下示例：</p>
                <Prism>{`
                    let array = ['100','200','300','400','500'];
                    //  ["100", "200", "300", "400", "500"]
                    console.log(array);
                    delete array[2];
                    // ["100", "200", undefined, "400", "500"]
                    console.log(array);
                `}</Prism>
                <p>因此实际应用中，若需要删除数组元素，应当使用splice 方法来删除数据元素。更多关于JavaScript 对数据的操作，您可以阅览这一篇文章：</p>
                <a href="https://blog.csdn.net/china_guanq/article/details/71104645" target="__blank">https://blog.csdn.net/china_guanq/article/details/71104645</a>
                <Prism>{`
                    let array_1 = ['100','200','300'];
                    // ["100", "200", "300"]
                    console.log(array_1);
                    array_1.splice(1,1);
                    //  ["100", "300"]
                    console.log(array_1);
                `}</Prism>
            </main>
        );
    }
}
 
export default hot(module)(Delete);