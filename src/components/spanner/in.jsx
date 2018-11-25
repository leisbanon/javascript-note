import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import{
    Prism
} from '@/components'

class In extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        
        // 对象
        let object = {A:'100',B:'200',C:'300'}
        // true
        console.log('A' in object);

        // 数组
        let array = ['A','B','C'];
        // true
        console.log(2 in array);
        // false
        console.log(5 in array);
        // true. Array原型链上存在length属性。因此这里返true
        console.log('length' in array);


        // for...in遍历数组
        let trees = ['A','B','C'];
        for(let i in trees) {
            // A
            // B
            // C
            console.log(trees[i]);
        }


        // for...in 遍历对象
        let object_1 = {
            name:'小明',
            address:'上海',
            email:'xxxxxx@163.com',
        }
        for(let key in object_1) {
            // 小明
            // 上海
            // xxxxxx@163.com
            console.log(object_1[key]);
        }


        return (
            <main>
                <strong>in 操作符</strong>
                <p>in 操作符，指定检查一个属性在一个对象中或者对象原型链中是否存在，返回true or false</p>
                <p>需要注意的是，in 操作符右边的必须是一个对象值，您可以使用String 的构造函数，但不可以是一个String 的字符创。</p>
                <p className='indent'>语法：props in object。</p>
                <Prism>{`
                    // 对象
                    let object = {A:'100',B:'200',C:'300'}
                    // true
                    console.log('A' in object);
            
                    // 数组
                    let array = ['A','B','C'];
                    // true
                    console.log(2 in array);
                    // false
                    console.log(5 in array);
                    // true. Array原型链上存在length属性。因此这里返true
                    console.log('length' in array);
                `}</Prism>
            </main>
        );
    }
}
 
export default hot(module)(In);