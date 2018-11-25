import React, { Component } from 'react';
import{
    Prism
} from '@/components'
import { hot } from 'react-hot-loader';

class View9 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        let object = {
            A:'100',
            B:'200',
            C:'300',
        }

        let {A,...rest} = object;
        // 100
        console.log(A);
        // {B: "200", C: "300"}
        console.log(rest);
        
        




        return (
            <main>
                <p className='indent'>解耦赋值，在Es6 规范中允许我们按照一定的模式，从对象或者数组中提取指定的value，这可以使我们非常方便得从一个对象/数组中提取到我们需要的属性、对象.</p>
                <p>使用上也非常简单，对象和数组的解耦方式也都大行一致，如下示例就对对象解耦使用方法：</p>
                <strong>对象解耦 => 变量赋值解耦</strong>
                <Prism>{`
                let object = {
                    A:'100',
                    B:'200',
                    C:'300',
                }

                //100 
                let {A} = object;
                console.log(A);
                `}</Prism>

                <strong>对象解耦 => 设置默认值</strong>
                <Prism>{`
                let object = {
                    A:'100',
                    B:'200',
                    C:'300',
                }

                let {X = '300'} = object;
                // 300
                console.log(X);
                `}</Prism>

                <strong>对象解耦 => Rest 解耦</strong>
                <Prism>{`
                let object = {
                    A:'100',
                    B:'200',
                    C:'300',
                }

                let {A,...rest} = object;
                // 100
                console.log(A);
                // {B: "200", C: "300"}
                console.log(rest);
                `}</Prism>
            </main>
        );
    }
}
 
export default hot(module)(View9);