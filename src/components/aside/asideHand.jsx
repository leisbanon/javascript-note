import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import {withRouter} from 'react-router-dom'
import './aside.css'

let image = {
    book:require('@/image/book.png'),
    hands:require('@/image/hands.png'),
    back:require('@/image/back.png'),
}

class AsideHand extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subPath:'',
        }
    }
    componentDidMount() {
        let asideState = window.sessionStorage.getItem('asideState');
        if(asideState == '1') {
            let asideHand = document.getElementById('asideHand');
            asideHand.style.transform = 'initial';
        }else if(asideState == '0') {
            let asideHand = document.getElementById('asideHand');
            asideHand.style.transform = 'translate(-280px)'; 
        }
    }
    onBack() {
        let asideHand = document.getElementById('asideHand');
        asideHand.style.transform = 'translate(-280px)'; 
        window.sessionStorage.setItem('asideState','0');
    }
    toView(route,component) {
        window.sessionStorage.setItem('spannerItem',component);
        this.props.history.push({
            pathname:this.props.match.path + '/' + route,
            state:{component:component}
        });
    }
    render() {
        let asideList = [
            {title:'delete 操作符',route:'spanner',component:'delete'},
            {title:'in 操作符',route:'spanner',component:'in'},
            {title:'call() 操作函数',route:'spanner',component:'call'},
            {title:'apply()',route:'spanner',component:'apply'},
            {title:'bind()',route:'spanner',component:'bind'},
            {title:'super()',route:'spanner',component:'super'},
        ];

        let spannerItem = window.sessionStorage.getItem('spannerItem');

        return (
            <div className='aside' id='asideHand'>
                <div className='tip'>
                    <span className='tip-code'>JavaScript-Spanner</span>
                    <img src={image.back} alt="" onClick={this.onBack.bind(this)}/>
                </div>

                <ul>
                    {
                        asideList.map((v,i) => {
                            return(
                                <li className={spannerItem == v.component ? 'handAsideStyleActive' : ''} key={i} onClick={this.toView.bind(this,v.route,v.component)}>{v.title}</li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}
 
export default hot(module)(withRouter(AsideHand));