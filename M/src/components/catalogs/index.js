import React, { Component, PropTypes } from 'react';
import "./index.scss"
import {NavLink} from "react-router-dom"
class Catalogs extends Component {
   
    constructor() {
        super();
    }

    render() {
        return (
            <div id="catalogs">
            <ul>
            <li><NavLink to="/page/46">
            <i className="i1"></i>
            <span>有声漫画</span>
            </NavLink></li>
            <li><NavLink to="/page/8">
            <i className="i2"></i>
            <span>音乐</span>
            </NavLink></li>
            <li><NavLink to="/page/26">
            <i className="i3"></i>
            <span>娱乐</span>
            </NavLink></li>
            <li><NavLink to="/page/54">
            <i className="i4"></i>
            <span>催眠</span>
            </NavLink></li>
            <li><NavLink to="/drama">
            <i className="i5"></i>
            <span>广播剧</span>
            </NavLink></li>
            <li><NavLink to="/page/41">
            <i className="i6"></i>
            <span>日抓</span>
            </NavLink></li>
            <li><NavLink to="/page/6">
            <i className="i7"></i>
            <span>听书</span>
            </NavLink></li>
            <li><NavLink to="/page/52">
            <i className="i8"></i>
            <span>配音</span>
            </NavLink></li>
            <li><NavLink to="/page/65">
            <i className="i9"></i>
            <span>铃声</span>
            </NavLink></li>
            </ul>





             <div id="footer">
                <p className="p">
                <a href="#">客户端</a>
                <a href="#"><i></i></a>
                <a href="#">返回顶部</a>
                </p>
                <p className="p1">MissEvan弹幕音频网 京ICP备:14055174号-1</p>
             </div>
            



                    
            </div>
        );
    }
}

export default Catalogs;
