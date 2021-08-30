import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class MyNavLink extends Component {
    render() {
        return (
            /*NavLink有高亮效果，而Link没有，可以添加activeClassName*/
            // <NavLink activeClassName="activeClass"
            //          className="list-group-item" {...this.props}>{this.props.children}</NavLink>
            //children 是特殊的标签属性
        <NavLink activeClassName="activeClass" className="list-group-item" {...this.props}/>
    )
        ;
    }
}

export default MyNavLink;