import React, { Component } from 'react';
import{
    Prism
} from '@/components'
import { hot } from 'react-hot-loader';

class View4 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        let getBook = () => {
            return new Promise((resolve,reject) => {
                setTimeout(() => {
                    resolve('戒为良药');
                }, 1000);
            });
        }

        let getPrice = (bookName) => {
            if(bookName == '戒为良药') {
                return new Promise((resolve,reject) => {
                    setTimeout(() => {
                        resolve('50');
                    }, 1000);
                });
            }else {
                return '100';
            }
        }

        getBook().then(v0 => {
            //打印：戒为良药
            console.log(v0);
            return getPrice(v0);
        }).then(v1 => {
            // 打印：50
            console.log(v1);
        }).catch(e => {
            //异常捕获
        }).finally(() => {
            //结束，始终执行函数
            console.log('finish');
        });

        Promise.all([getBook(),getPrice('戒为良药')]).then(v => {
            // ["戒为良药", "100"]
            console.log(v);
        });
    
        return (
            <main>
                <p>Promise 同样也是异步编程的解决方法。同样比传统的回调事件更强大好用。Promise分别对应有一下3中状态：</p>
                <p>1：pending：进行中、2：finish：完成、3：rejected：失败</p>
                <p>Promise 是一个构造函数，因此我们使用它将要new 来声明它。</p>
                <p className='indent'>这里需要说明的是async function 和Promise之间的应用，实际上它们之间往往在实际应用场景中是相辅相成的，async function 中的await操作符等待的是一个Promise 对象，Promise强大之处在于可以链式调用。</p>

                <strong>Promise 构建异步函数以及链式调用</strong>
                <p>如上示例应一个Promise函数进行链式调用的场景应用。三个关键函数1：then()、2：catch()、3：finally()</p>
                <div className='indent'>1、then => Promise 函数放回结果由then 函数接收。当Promise 对象第一个参数resolve() 函数执行成后调用then()</div>
                <div className='indent'>2、catch => 异常捕获函数。当Promise 对象的第二个参数reject() 函数执行后调用catch()</div>
                <div className='indent'>3、finally => 始终执行函数。综合上述，这和在JavaScript 中try catch finally 有类似的概念</div>
                <Prism>{`
                    let getBook = () => {
                        return new Promise((resolve,reject) => {
                            setTimeout(() => {
                                resolve('戒为良药');
                            }, 1000);
                        });
                    }
            
                    let getPrice = (bookName) => {
                        if(bookName == '戒为良药') {
                            return new Promise((resolve,reject) => {
                                setTimeout(() => {
                                    resolve('50');
                                }, 1000);
                            });
                        }else {
                            return '100';
                        }
                    }
            
                    getBook().then(v0 => {
                        //打印：戒为良药
                        console.log(v0);
                        return getPrice(v0);
                    }).then(v1 => {
                        // 打印：50
                        console.log(v1);
                    }).catch(e => {
                        //异常捕获
                    }).finally(() => {
                        //结束，始终执行函数
                        console.log('finish');
                    });
                `}</Prism>
                
                <strong>全局对象：Promise.all(array)</strong>
                <p>Promise.all(arrya) 用于将多个Promise对象包装成一个新的实例，它接收一个数组做为参数。只有当所有的Promise resolve 状态时，Promise.alll() 才会执行返回then 函数。</p>
                <p>示例应用，同样使用上面定义的Promise 函数：</p>
                <Prism>{`
                    Promise.all([getBook(),getPrice('戒为良药')]).then(v => {
                        //1秒后打印 ["戒为良药", "50"]
                        console.log(v);
                    });
                `}</Prism>
            </main>
        );
    }
}
 
export default hot(module)(View4);