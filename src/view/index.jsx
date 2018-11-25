import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './index.css'
import {
    BrowserRouter as
    Router,
    Route,
    Switch,
}from 'react-router-dom'

import {
    routers
} from '@/router/router'

import {
    Aside,
    AsideHand,
} from '@/components'

const Content = ({props}) => {
    let onAside = () => {
        let aside = document.getElementById('aside');
        aside.style.left = window.getComputedStyle(aside).left == '-280px' ? '0px' : '-280px';

        let asideHand = document.getElementById('asideHand');
        asideHand.style.left = window.getComputedStyle(asideHand).left == '-280px' ? '0px' : '-280px';

        let content = document.getElementById('content');
        content.style.marginLeft = window.getComputedStyle(content).marginLeft == '280px' ? '0px' : '280px';
    }
    return(
        <div id='content'>
            <div className='icon-shrink' onClick={() => onAside()}>〓</div>
            <div className='content-container'>
                <div className='title'>场景示例</div>
                {
                    <Switch location={props.location}>
                        {
                            routers.map((route,index) => {
                                return(
                                    <Route
                                    key={index}
                                    path={`${props.match.path}` + route.path}
                                    component={route.component}
                                    />
                                )
                            })
                        }
                    </Switch>
                }
            </div>
        </div>
    )
}

class Index extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div id='app-container'>
                <Aside props={this.props}/>
                <AsideHand props={this.props}/>

                <Content props={this.props}/>

            </div>
        )
    }
}
 
export default hot(module)(Index);