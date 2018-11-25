import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import{
    Prism
} from '@/components'

class Apply extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
        this.image = {
            img0:require('@/image/11231.png'),
        }
    }
    render() {
        //接收apply 传递的数组对象，并解耦赋值
        function userNameList(...nameList) {
            this.text = '用户名称列表';
            this.nameList = nameList;
        }

        function user(nameList) {
            this.name = '姓名';
            userNameList.apply(this,nameList);
        }

        let list = ['Small Raccoon','Jack Raccoon'];
        let u = new user(list);
        console.log(u);

        let array0 = ['A','B','C'];
        let array1 = ['D','E'];

        array1.push.apply(array1,array0);
        // ["D", "E", "A", "B", "C"]
        console.log(array1);
        return(
            <main>
                <strong>Apply() 函数</strong>
                <p className='green'>apply 和 call 函数非常类似，区别在于call 方法接收的是一个参数列表，我们可以定义多个参数。而apply 方法只能接收一个数组作为参数</p>
                <p className='indent'>语法：function.apply(thisArg,[arg0,arg01,...])</p>
                <p className='indent'>使用apply 方法继承一个构造函数：</p>
                <Prism>{`
                //...nameList 是解耦赋值的写法
                function userNameList(...nameList) {
                    this.text = '用户名称列表';
                    this.nameList = nameList;
                }
        
                function user(nameList) {
                    this.name = '姓名';
                    // nameList 必须是一个数组，否则会抛出异常
                    userNameList.apply(this,nameList);
                }
        
                let list = ['Small Raccoon','Jack Raccoon'];
                let u = new user(list);
                // 观察下面控制台打印，实际和call() 效果一直，不同在于参数接收的形式
                console.log(u);
                `}</Prism>
                <img src={this.image.img0} alt=""/>
                
                <strong>使用apply() 将数组添加到另外一个数组中</strong>
                <p className='indent'>我们知道连接两个或者多个数组我们可以是使用concat() 方法，但是它并不是直接附加到一个数组中，而是concat() 直接返回一个新的数组，如果我们想要是直接将数组附加到另一个数组中，采取如下示例的方法：</p>
                <Prism>{`
                let array0 = ['A','B','C'];
                let array1 = ['D','E'];
        
                array1.push.apply(array1,array0);
                // ["D", "E", "A", "B", "C"]
                console.log(array1);
                `}</Prism>
            </main>
        )
    }
}
 
export default hot(module)(Apply);