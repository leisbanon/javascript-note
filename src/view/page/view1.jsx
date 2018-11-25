import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import{
    Prism
} from '@/components'

class View1 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        let object = {
            a:10,
            b:20,
        }
        let a = object.a;
        // 10
        console.log(a);

        let b = object['b'];
        // 20
        console.log(b);
        return(
            <main>
                <p>属性访问器提供两中方法用户访问一个对象的属性，分别是“点” 和 “方括号”</p>
                <strong>示例</strong>
                <Prism>{`
                    let object = {
                        a:10,
                        b:20,
                    }
                    let a = object.a;
                    // 10
                    console.log(a);

                    let b = object['b'];
                    // 20
                    console.log(b);
                `}</Prism>
            </main>
        )
    }
}
 
export default hot(module)(View1);