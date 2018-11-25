import React, { Component } from 'react';
import{
    Prism
} from '@/components'
import { hot } from 'react-hot-loader';

let image = {
    chainImage:require('@/image/chain.png'),
}


class View8 extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        // 对象
        let obj = {};
        // 函数
        function fun() {
        }
        //object {}
        console.log(obj.__proto__);
        // f {} 
        console.log(fun.__proto__);

        // undefined
        console.log(obj.prototype);
        // object {}
        console.log(fun.prototype);

        // --------------------- prototype 向对象中添加属性和方法 ---------------------
        function user() {}
        user.prototype.name = 'Raccoon';
        user.prototype.emaill = 'xxxxxxxx@163.com';
        
        let u = new user();
        // Raccoon
        console.log(u.name);
        // xxxxxxxx@163.com
        console.log(u.name);



        // ---- __proto__ 指向
        // 字面量形式
        let A = 'hello prototype';
        // true
        console.log(A.__proto__ == A.constructor.prototype);

        // 构造器形式
        function B() {}
        // true
        console.log(B.__proto__ == B.constructor.prototype);

        // Object.create 形式
        let object = Object.create({});
        // false
        console.log(object.__proto__ == object.constructor.prototype);

        //原型链条
        function getUserInfo() {
            this.name = '小黄';
        }
        getUserInfo.prototype.emaill = 'xxxxxx@163.com';
        let uinfo = new getUserInfo();

        console.log(uinfo);

        return (
            <main>
                <strong>prototype 和 __proto__ 的区别</strong>
                <p>了解原型和原型链的概念，首先了解下prototype 和 __proto__  的区别.</p>
                <ol>
                    <li>
                        <p className='green'>prototype 和 __proto__ 不同在于，prototype 是函数具有的属性，而 __proto__ 是任何对象都具有的属性。</p>
                        <p>如下示例，通常我们认为 __proto__ 是构造器(new function)的原型，而prototype 是对象（Object）的原型：</p>
                        <Prism>{`
                        // 对象
                        let obj = {};
                        // 函数
                        function fun() {
                        }

                        // undefined
                        console.log(obj.prototype);
                        // object {}
                        console.log(fun.prototype);

                        //object {}
                        console.log(obj.__proto__);
                        // f {} 
                        console.log(fun.__proto__);
                    `}</Prism>
                    </li>
                    <li>
                        <p>prototype 只有函数才具有的属性，因此通常我们可以使用prototype 属性有向函数添加对象和属性：</p>
                        <Prism>{`
                        function user() {}
                        user.prototype.name = 'Raccoon';
                        user.prototype.emaill = 'xxxxxxxx@163.com';
                        
                        let u = new user();
                        // Raccoon
                        console.log(u.name);
                        // xxxxxxxx@163.com
                        console.log(u.name);
                        `}</Prism>

                    </li>
                    
                </ol>

                <strong>__proto__ 指向</strong>
                <p className='indent'>通过上面对 __proto__ 和 prototype 基本的了解，prototype 对象总是引用于 __proto__ ，即__proto__ 的总是指向得 prototype，当JS 引擎查找对象时，指针不会直接指向prototype 而是指向__proto__ ,通过下面的示例更加直观得到了解到 __proto__ 指向以及在原型链中的组成部分：</p>
                <p className='indent'>construcotr 构造函数是创建和初始化对象的特殊方法，用于返回指定对象的引用。construcotr 方法在Es6 classs 声明函数对象时被引申为一个默认方法，和在JS 原型对象一致.</p>
                <Prism>{`
                // 字面量形式
                let A = 'hello prototype';
                // true
                console.log(A.__proto__ == A.constructor.prototype);
        
                // 构造器形式
                function B() {}
                // true
                console.log(B.__proto__ == B.constructor.prototype);
        
                // Object.create 形式
                let object = Object.create({});
                // false => 由于 prototype 是函数独有的属性，因此__proto__ 指针指向一个对象时，值为null.
                console.log(object.__proto__ == object.constructor.prototype);
                `}</Prism>

                <strong>原型/原型对象/原型链</strong>
                <p className='indent'>原型 => 任何对象都有一个原型，这个对象指向其内置的属性 __proto__ </p>
                <p className='indent'>原型链 => 原型的核心是对象依赖的 __proto__ 的指向，JS 引擎查找对象时，指针不会直接指向prototype，而是 __proto__ ,当自身属性不存在时，就会继续往下查找对象的 __proto__ 指向，直到迭代最后为Object 没有 __proto__ 的prototype 属性，值为null. 这种连接对象理解成为原型链。</p>
                <p>通过Chrome 控制台打印一个函数对象，可以直观得查看到原型对象在原型链的组成：</p>
                <Prism>{`
                function getUserInfo() {
                    this.name = '小黄';
                }
                getUserInfo.prototype.emaill = 'xxxxxx@163.com';
                let uinfo = new getUserInfo();
        
                console.log(uinfo);
                `}</Prism>

                <img src={image.chainImage} alt=""/>
            </main>
        )
    }
}
 
export default hot(module)(View8);