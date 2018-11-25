import React, { Component } from 'react';
import{
    Prism
} from '@/components'
import { hot } from 'react-hot-loader';

class View5 extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        function* user() {
            yield '小明';
            yield '上海市松江区漕河泾开发区';
            yield '123456@163.com';
        }
        let u = user();
        // {value: "小明", done: false}
        console.log(u.next());
        // {value: "上海市松江区漕河泾开发区", done: false}
        console.log(u.next());
        // {value: "123456@163.com", done: true}
        console.log(u.next());
        // {value: undefined, done: true}
        console.log(u.next());

        console.log('-----遍历Generator Function-----');
        for(let i of user()) {
            // 小明
            // 上海市松江区漕河泾开发区
            console.log(i);
        }

        console.log('-----Generator Function 传参-----');
        function* number() {
            yield 1;
            let n = yield 2;
            yield n + 3;
        }
        let num = number();
        // {value: 1, done: false}
        console.log(num.next());
        // {value: 2, done: false}
        console.log(num.next());
        // {value: 13, done: false}
        console.log(num.next(10));
        // {value: undefined, done: true}
        console.log(num.next());


        console.log('---------yield*---------');
        function* otherCity() {
            yield '湖南'
            yield '浙江'
            yield '江苏'
        }

        function* city() {
            yield '上海'
            yield* otherCity()
        }
        let c = city();
        // {value: "上海", done: false}
        console.log(c.next());
        // {value: "湖南", done: false}
        console.log(c.next());
        // {value: "浙江", done: false}
        console.log(c.next());
        // {value: "江苏", done: false}
        console.log(c.next());
        return (
            <main>
                <p>function* 这种声明方式，会定义一个生成器函数，也叫做Generator Function. 它返回得是一个Generator 对象。</p>
                <strong>Generator Function 定义和应用</strong>
                <Prism>{`
                    function* user() {
                        yield '小明';
                        yield '上海市松江区漕河泾开发区';
                        yield '123456@163.com';
                    }
                    let u = user();
                    // {value: "小明", done: false}
                    console.log(u.next());
                    // {value: "上海市松江区漕河泾开发区", done: false}
                    console.log(u.next());
                    // {value: "123456@163.com", done: true}
                    console.log(u.next());
                    // {value: undefined, done: true}
                    console.log(u.next());
                `}</Prism>
                <p className='indent'>从上面的示例可以知道，调用一个生成器函数并不会马上执行，而是返回的是一个迭代器（iterator）,调用迭代器的next() 方法，其内部的语句会执行到与下一个yield 的位置为止，并返回该yield 关键字对应的属性.</p>
                <p className='indent green'>Generator Function 在执行时，即调用next() 方法之后会暂停，后面再从暂停处继续执行。</p>
                <p className='indent'>next() 方法返回一个对象，包含两个属性，value 表示本次yield 返回的值，done 表示Geneartor 函数是否执行完成。当done 等于true是，value 为undefined。</p>

                <strong>yield* 表达式</strong>
                <p className='green'>yield* 表示用于委托给另外一个Geneartor 或者可迭代的对象</p>
                <Prism>{`
                        function* otherCity() {
                            yield '湖南'
                            yield '浙江'
                            yield '江苏'
                        }
                
                        function* city() {
                            yield '上海'
                            yield* otherCity()
                        }
                        let c = city();
                        // {value: "上海", done: false}
                        console.log(c.next());
                        // {value: "湖南", done: false}
                        console.log(c.next());
                        // {value: "浙江", done: false}
                        console.log(c.next());
                        // {value: "江苏", done: false}
                        console.log(c.next());
                `}</Prism>

                <strong>Generator 传递参数</strong>
                <p></p>
                <Prism>{`
                    function* number() {
                        yield 1;
                        let n = yield 2;
                        yield n + 3;
                    }
                    let num = number();
                    // {value: 1, done: false}
                    console.log(num.next());
                    // {value: 2, done: false}
                    console.log(num.next());

                    //观察此处，当执行next 方法传入参数时，那么这个值就是做为上一个阶段返回的结果，被函数体内的n 所接收，即n = 10.因此当前返回的对象是：
                    // {value: 13, done: false}
                    console.log(num.next(10));
                    // {value: undefined, done: true}
                    console.log(num.next());
                `}</Prism>

                <strong>遍历Generator Function</strong>
                <p>因为生成器函数返回时一个Iterator 对象，因此我们使用for...of遍历它则显得更加遍历有效,也非常简单如下示例：</p>
                <Prism>{`
                    for(let i of user()) {
                        // 小明
                        // 上海市松江区漕河泾开发区
                        // 123456@163.com
                        console.log(i);
                    }
                `}</Prism>
            </main>
        );
    }
}
 
export default hot(module)(View5);
