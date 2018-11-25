import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import{
    Prism
} from '@/components'

class View2 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        let number = (a,b,c,d) => {
            // 100
            console.log(a);
            // 1
            console.log(b);
            // 2
            console.log(c);
            // 3
            console.log(d);
        }

        let arrya0 = [1,2,3];
        number(...[100],...arrya0);
        
        console.log('------------------');
        let array1 = ['A','B','C'];
        let array2 = [...array1];
        //  ["A", "B", "C"]
        console.log(array2);

        return ( 
            <main>
                <p>Es6 展开语法“...” </p>
                <strong>在函数中使用展开语法:</strong>
                <p>我们可以这样写,实际上它等同于applay 的方式</p>
                <Prism>{`
                    let number = (a,b,c,d) => {
                        // 100
                        console.log(a);
                        // 1
                        console.log(b);
                        // 2
                        console.log(c);
                        // 3
                        console.log(d);
                    }
            
                    let arrya0 = [1,2,3];
                    number(...[100],...arrya0);
                `}</Prism>

                <strong>数组中使用站展开语法：</strong>
                <p>构造数组对象是，使用“...”运算符则更有用，比如往往做数据请求之后对数组拷贝的行为，它的行为和Object.assign()行为一致，执行得都是浅拷贝。 </p>
                <p>一下对数组的拷贝，行为和原生方法Array.concat() 函数行为一致</p>
                <Prism>{`
                    let array1 = ['A','B','C'];
                    let array2 = [ ...array1];
                    //  ["A", "B", "C"]
                    console.log(array2);
                `}</Prism>
            </main>
        );
    }
}
 
export default hot(module)(View2);