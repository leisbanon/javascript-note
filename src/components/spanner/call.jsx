import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import{
    Prism
} from '@/components'

class Call extends Component {
    constructor(props) {
        super(props);
        this.image = {
            img0:require('@/image/11230.png'),
        }
    }
    render() {
        // 超市
        function superMarket(commodityType) {
            this.commodityType = commodityType;
            this.named = '大润发';
        }

        // 商品
        function commodity(commodityType) {
            this.text = '商品';
            superMarket.call(this,commodityType);
        }

        let commodityType = '家用电器';
        let c = new commodity(commodityType);
        console.log(c);
        return(
            <main>
                <strong>Call 操作函数</strong>
                <p className='green'>call() 可以改变当前函数指针的指向，接收若干个参数的列表。通常我们可以用该函数实现继承对象</p>
                <p className='indent'>语法：function.call(thisArg,arg1,arg2...)</p>
                <p className='indent'>如下示例，如果我们想让商品方法中 拥有 超市内的属性，那么我们这时就可以使用 call() 方法来继承父类超市：</p>
                <p className='indent'>使用call 方法继承父类的构造函数：</p>
                <Prism>{`
                // 超市
                function superMarket(commodityType) {
                    this.commodityType = commodityType;
                    this.named = '大润发';
                }

                // 商品
                function commodity(commodityType) {
                    this.text = '商品';
                    superMarket.call(this,commodityType);
                }

                let commodityType = '家用电器';
                let c = new commodity(commodityType);
                console.log(c);
                `}
                </Prism>
                <img src={this.image.img0} alt=""/>
                
                <Prism>{`
                //如上图控制台打印原型对象所示，commodity方法等同于如下代码：
                function commodity() {
                    this.commodityType = [
                        {id:'1',name:'家用电器'},
                        {id:'2',name:'家纺用品'},
                        {id:'3',name:'水鲜食物'},
                    ];
                    this.named = '大润发';
                    this.address = '上海宝山区xx街道';
                } 
                `}</Prism>
            </main>
        )
    }
}
 
export default hot(module)(Call);