import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import{
    Prism
} from '@/components'

class Bind extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount() {
        let user = {
            getName() {
                return '姓名：' + this.name;
            }
        }

        let modules = {
            name:'小明',
        }
        // bind() 方法返回一个新的函数，参数传入一个对象为调用该方法提供的参数
        let u = user.getName.bind(modules);
        // 执行该方法
        // 打印：姓名：小明
        console.log(u());

    }
    render() { 
        return(
            <main>
                <strong>bind() 方法创建函数</strong>
                <p>bind() 方法返回得是一个新的函数，因此我们简单的可以理解成bind() 方法可以创建一个新的函数，参数指定的对象为调用该方法提供的参数.</p>
                <p>如下示例：</p>
                <Prism>{`
                let user = {
                    getName() {
                        return '姓名：' + this.name;
                    }
                }
        
                let modules = {
                    name:'小明',
                }
                // bind() 方法返回一个新的函数，参数传入一个对象为调用该方法提供的参数
                let u = user.getName.bind(modules);
                // 执行该方法
                // 打印：姓名：小明
                console.log(u());
                `}</Prism>
            </main>
        )
    }
}
 
export default hot(module)(Bind);