import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import {withRouter} from 'react-router-dom'
import './aside.css'

let image = {
    book:require('@/image/book.png'),
    hands:require('@/image/hands.png'),
}

class Aside extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subPath:'',
        }
    }
    toView(page) {
        window.sessionStorage.removeItem('spannerItem');
        this.props.history.push(this.props.match.path + '/' + page);
    }
    onHand() {
        let asideHand = document.getElementById('asideHand');
        asideHand.style.transform = 'initial';
        window.sessionStorage.setItem('asideState','1');
    }
    render() {
        let asideList = [
            {title:'解耦赋值',component:'view0'},
            {title:'对象属性访问器',component:'view1'},
            {title:'对象扩展运算符(展开语法)...',component:'view2'},
    
            {title:'async function 构建异步函数',component:'view3'},
            {title:'promise 对象构建异步函数',component:'view4'},
            {title:'Geneartor Function（生成器函数）',component:'view5'},
            {title:'Geneartor 对象构建异步函数',component:'view6'},

            {title:'对象属性的可枚举性',component:'view7'},
            {title:'原型和原型链',component:'view8'},
            {title:'解耦赋值(对象/数组)',component:'view9'},
    
        ]

        let {location} = this.props;
        let subPatch = location.pathname.substr(17,location.pathname.length);
        return (
            <div className='aside' id='aside'>
                <div className='tip'>
                    <span className='tip-code'>JavaScript-Note</span>
                    <img src={image.hands} alt="" onClick={this.onHand.bind(this)}/>
                </div>

                <ul>
                    {
                        asideList.map((v,i) => {
                            return(
                                <li key={i} style={{'color':subPatch == v.component ? '#3CB371' : '#4a73ea'}} onClick={this.toView.bind(this,v.component)}>{v.title}</li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}
 
export default hot(module)(withRouter(Aside));