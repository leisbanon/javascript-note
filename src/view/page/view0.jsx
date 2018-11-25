import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import{
    Prism
} from '@/components'

class View0 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        let [a,b,...rest] = [10,20,30,40,50];
        // 10
        console.log(a);
        // 20
        console.log(b);
        //  [30, 40, 50]
        console.log(rest);

        console.log('---------------------');
        let object = {
            as:10,
            bs:20,
            cs:30,
            ds:40,
            es:50
        }
        let {as,bs,...rests} = object;
        // 10
        console.log(as);
        // 20
        console.log(bs);
        // {cs: 30, ds: 40, es: 50}
        console.log(rests);

        console.log('---------------------');
        let [T0,T1=50] = [10];
        // 10
        console.log(T0);
        // 50
        console.log(T1);
        return ( 
            <main>
                <p>解耦赋值是一个JavaScript 表达式。使可以从数组或者对象中提取到不同的属性。</p>
                <strong>数组解耦:</strong>
                <Prism>{`
                    let [a,b,...rest] = [10,20,30,40,50];
                    // 10
                    console.log(a);
                    // 20
                    console.log(b);
                    //  [30, 40, 50]
                    console.log(rest);
                `}</Prism>

                <strong>对象解耦：</strong>
                <Prism>{`
                    let object = {
                        as:10,
                        bs:20,
                        cs:30,
                        ds:40,
                        es:50
                    }
                    let {as,bs,...rests} = object;
                    // 10
                    console.log(as);
                    // 20
                    console.log(bs);
                    // {cs: 30, ds: 40, es: 50}
                    console.log(rests);
                `}</Prism>

                <strong>设置默认值：</strong>
                <p className='indent'>为了防止从数组或者对象中取出的值是undefined，我们可以为它赋值一个默认值。这是经常做的行为</p> 
                <Prism>{`
                    let [T0,T1=50] = [10];
                    // 10
                    console.log(T0);
                    // 50
                    console.log(T1);
                `}</Prism>
            </main>
        );
    }
}
 
export default hot(module)(View0);