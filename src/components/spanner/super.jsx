import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import{
    Prism
} from '@/components'

class User {
    constructor(name,emaill) {
        this.name = name;
        this.emaill = emaill;
    }
    getUserInfo() {
        console.log('姓名：' + this.name + '\n邮箱：' + this.emaill);
    }
}

class Super extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return(
            <div>
                Super
            </div>
        )
    }
}
 
export default hot(module)(Super);