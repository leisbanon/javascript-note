import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { index } from 'react-syntax-highlighter/styles/prism';

class prism extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return ( 
            <SyntaxHighlighter language='javascript' style={index }>
            {this.props.children}
            </SyntaxHighlighter>
        );
    }
}
 
export default prism;