import React, { Component } from "react";
import "./index.scss"
import "@/assets/iconfont/iconfont.css"
import {NavLink } from "react-router-dom"
class Top extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div id="top">
            <div id="header">
               <NavLink to="/recommend" activeClassName="zyclass"><img src={require("@/assets/missevan.png")} className="logo" /></NavLink>
               <i className="menu" onClick={()=>{
                 this.props.isshow();
               }}></i>
               <NavLink to="/search"><i className="search"></i></NavLink>
            </div>
            <div id="tab">
              <ul>
                 <li><NavLink to="/albums" activeClassName="zyclass">音单</NavLink></li>
                 <li><NavLink to="/recommend" activeClassName="zyclass">推荐</NavLink></li>
                 <li><NavLink to="/catalogs" activeClassName="zyclass">分类</NavLink></li>
              </ul>
            </div>
            </div>
        )
    }

}

export default Top;
