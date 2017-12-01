import React, { Component, PropTypes } from 'react';
import "./index.scss"
import {NavLink} from "react-router-dom"
class Albums extends Component {
   

    constructor() {
        super();
        this.state={
            list:[]
        }
    }
  componentWillMount() {
      axios.get("/explore/tagalbum?order=0").then(res=>{
        console.log(res.data.albums);
        this.setState({
            list:res.data.albums
        })
      })
  }
    render() {
        return (
            <div id="albums">
               <div className="title">
               <span className="r">|</span><b>全部音单</b>
               <span className="l">类型</span>
               </div>
              <div className="list">

                 <ul key={this.state.list.length}>
                 {
                    this.state.list.map(item=>
                        <li key={item.id}><NavLink to={`/album/${item.id}`}>
                        <img src={`http://static.missevan.com/coversmini/${item.cover_image}`}/>
                        <span>{item.title}</span>
                        </NavLink></li>

                        )
                 }
                 </ul>
              </div>
              <div className="more">查看更多</div>
              <div id="footer">
                 <p className="p">
                 <a href="#">客户端</a>
                 <a href="#"><i></i></a>
                 <a href="#">返回顶部</a>
                 </p>
                 <p className="p1">MissEvan弹幕音频网 京ICP备:14055174号-1</p>
              </div>
            </div>
        )
    }
}

export default Albums;
