import React, { Component, PropTypes } from 'react';
import "./index.scss"
import {NavLink} from "react-router-dom"
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
class Sidebar extends Component {
    constructor() {
        super();
    }

    render() {
        return (
        	<div id="sidebar">
            <ReactCSSTransitionGroup
          transitionName="zy"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
          >
            
             {
                this.props.isshow?
                <div className="content">
                <a className="top">
                <i className="head"></i>
                <span>点击登录</span>
                <i className="zuo"></i>
                </a>
                <ul className="Aul"  onClick={()=>{this.props.event();}}>
                <li><NavLink to="/recommend"><b>M-主站</b><i></i></NavLink></li>
                <li><NavLink to="/cart"><b>M-我的点赞记录</b><i></i></NavLink></li>
                <li><a href="#"><b>M-直播</b><i></i></a></li>
                </ul>
                </div>
                :null
             }
         </ReactCSSTransitionGroup>
        	</div>
            
        );
    }
}

export default Sidebar;
