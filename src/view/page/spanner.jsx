import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import {withRouter} from 'react-router-dom'
import{
    Prism
} from '@/components'

import {
    Delete,
    In,
    Call,
    Apply,
    Bind,
} from '@/components'

class Spanner extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        try {
            let {component = ''} = this.props.location.state;
            switch(component) {
                case 'delete':
                    return (<Delete />)
                case 'in':
                    return (<In />)
                case 'call':
                    return (<Call />)
                case 'apply':
                    return (<Apply />)
                case 'bind':
                    return (<Bind />)
                default:
                return <div></div>;
            }
        } catch (error) {
            return <div></div>;
        }

    }
}
 
export default hot(module)(withRouter(Spanner));