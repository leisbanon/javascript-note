import React, { Component } from 'react';
import{
    Prism
} from '@/components'
import { hot } from 'react-hot-loader';

class View3 extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        function getName() {
            return new Promise((resolve,reject) => {
                setTimeout(() => {
                    console.log('获取到姓名');
                    resolve('小明');
                }, 1000);
            })
        }

        function getAddress() {
            return new Promise((resolve,reject) => {
                setTimeout(() => {
                    console.log('获取到地址');
                    resolve('上海');
                }, 1000);
            })
        }

        async function getUser() {
            let name = await getName();
            let address = await getAddress();
            return '姓名：' + name + '\t地址：' + address;
        }
        getUser().then(v => {
            // 2秒后打印=> 姓名：小明	地址：上海
            console.log(v);
        });

        return (
            <main>
                <p>Async 使处理异步函数更加简单。它和生成器函数即Generator Function 形式形式上有一些类似的地方。相对Geneartor Function，函数中的*操作符换成async，yield 操作符换做成await。</p>
                <p className='indent'>一旦函数定义成Async Function,那么该函数将是一个Promise对象。</p>
                <p className='indent'>定义Async Function 中关键字await，await 指定的函数是一个Promise对象。Async 将会等待所有Await 执行完毕才会返回，这便构成一个异步的处理函数。</p>
                <p className='indent'>需要知道的是，await 只能在async function 中使用。 </p>
                <strong>Async Function 的应用</strong>
                <Prism>{`
                    function getName() {
                        return new Promise((resolve,reject) => {
                            setTimeout(() => {
                                console.log('获取到姓名');
                                resolve('小明');
                            }, 1000);
                        })
                    }

                    function getAddress() {
                        return new Promise((resolve,reject) => {
                            setTimeout(() => {
                                console.log('获取到地址');
                                resolve('上海');
                            }, 1000);
                        })
                    }

                    async function getUser() {
                        let name = await getName();
                        let address = await getAddress();
                        return '姓名：' + name + '\t地址：' + address;
                    }
                    getUser().then(v => {
                        // 2秒后打印=> 姓名：小明	地址：上海
                        console.log(v);
                    });
                `}</Prism>
            </main>
        );
    }
}
 
export default hot(module)(View3);