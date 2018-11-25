import React, { Component } from 'react';
import{
    Prism
} from '@/components'
import {
    Link,
} from 'react-router-dom'
import { hot } from 'react-hot-loader';

class View6 extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        // 这里Promise 模拟接口请求返回数据
        let getData = new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve({
                    a:10,
                    b:20,
                });
            }, 1000);
        });

        // 观察这个Geneartor Function. 看上去它非常类似于同步的操作，但是由于yield 关键词，每次next 执行它将会在 yield 处暂定执行.
        function* geneartorAsyncFunction() {
            let data = yield getData;
            console.log(data);
        }

        let g = geneartorAsyncFunction();
        g.next().value.then(data => {
            //这里return data， 下一次then函数将会接收该值
            return data;
        }).then(data => {
            g.next(data)
        });
        return (
            <main>
                <p>上一节讲述了Geneartor 的特性以及它的使用。了解Geneartor 的基本特性那么使用它构建异步处理函数就非常好用了。在传统的异步编程模式中，通常由一下几种实现手段：</p>
                <div>1、回调函数</div>
                <div>2、事件的监听</div>
                <div>3、发布、订阅</div>
                <div>4、Promise 对象</div>
                <p>可以说Geneartor 将异步编程的模式提升一个阶段，它在异步编程的思路上更加合理，当然实现异步处理的形式有很多，熟悉这些异步编程模式更好的知道该如何去选择和使用它。</p>
                <p>根据<Link to="view5">上一节</Link>的描述，Geneartor 返回是一个iterator对象，在调用next()执行时会暂定执行，直到下一次执行next() 又从后面暂定出继续执行。根据这一特性，便可以定义Geneartor 异步函数了！</p>
                <strong>构建Geneartor 异步函数</strong>
                <p>如下示例，创建一个Geneartor异步函数 geneartorAsyncFunction：</p>
                <Prism>{`
                    // 这里Promise 模拟接口请求返回数据
                    let getData = new Promise((resolve,reject) => {
                        setTimeout(() => {
                            resolve({
                                a:10,
                                b:20,
                            });
                        }, 1000);
                    });

                    // 观察这个Geneartor Function. 看上去它非常类似于同步的操作，但是由于yield 关键词，每次next 执行它将会在 yield 处暂定执行.
                    function* geneartorAsyncFunction() {
                        let data = yield getData;
                        console.log(data);
                    }

                    let g = geneartorAsyncFunction();
                    g.next().value.then(data => {
                        //这里return data， 下一次then函数将会接收该值
                        return data;
                    }).then(data => {
                        g.next(data)
                    });
                `}</Prism>
            </main>
        );
    }
}
 
export default hot(module)(View6);