import React, { Component, PropTypes } from 'react';
import ReactSwipe from 'react-swipe';
import "./index.scss";
import {NavLink} from "react-router-dom"
class Recommend extends Component {
    constructor() {
        super();
        this.state={
          bannerlist:[],
          rqmylist:[],
          pdlist:[],
          ysmhlist:[],
          musiclist:[],
          yllist:[],
          cmlist:[],
          gbjlist:[],
          rzlist:[],
          tslist:[],
          pylist:[],
          lslist:[]
        }
    }
    componentWillMount() {
        axios.get("/mobileWeb/newHomepage3").then(res=>{
          console.log(res.data.info.banner);
          this.setState({
            bannerlist:res.data.info.banner,
            rqmylist:res.data.info.sound,
            pdlist:res.data.info.channel
          })
         });
        axios.get("/sound/newhomepagedata").then(res=>{
          console.log(res.data.music[0].objects_point.slice(0,3));
          this.setState({
            ysmhlist:res.data.music[0].objects_point.slice(0,3),
            musiclist:res.data.music[1].objects_point.slice(0,3),
            yllist:res.data.music[2].objects_point.slice(0,3),
            cmlist:res.data.music[3].objects_point.slice(0,3),
            gbjlist:res.data.music[4].objects_point.slice(0,3),
            rzlist:res.data.music[5].objects_point.slice(0,3),
            tslist:res.data.music[6].objects_point.slice(0,3),
            pylist:res.data.music[7].objects_point.slice(0,3),
            lslist:res.data.music[8].objects_point.slice(0,3)
          })
         });

    }
   
    render() {
        return (
           <div id="recommend">
           {
            //轮播
           }
               <ReactSwipe className="carousel"key={this.state.bannerlist.length} swipeOptions={{continuous: true, auto: 4000}}>
                 {
                   this.state.bannerlist.map(item=>
                      <img src={item.pic} key={item.url}/>
                   )
                 }
             </ReactSwipe>
             {
              // 人气M音
             }
             <div id="rqmy">
                 <div className="top">
                     <i className="i1"></i>
                     <span>人气M音</span>
                     <b>排行榜<i className="ic"></i></b>
                 </div>
                 <div className="list">
                   <ul key={this.state.rqmylist.length}>
                      {
                        this.state.rqmylist.map(item=>
                           <li key={item.id}><NavLink to={`/detail/${item.id}`}>
                              <img src={item.front_cover}/><i className="i2"></i>
                              <div className="title">{item.soundstr}</div>
                              <div className="b">
                              <span><i></i>{item.view_count}</span>
                              <strong><i></i>{item.comment_count}</strong>
                              </div>
                           </NavLink></li>
                        )
                      }
                   </ul>
                 </div>
             </div>


                {
                  // 频道
                }
             <div id="pd">
                  <div className="top">
                      <i className="i1"></i>
                      <span>频道</span>
                      <b>更多<i className="ic"></i></b>
                  </div>
                  <div className="list">
                  <ul key={this.state.pdlist.length}>
                  {
                    this.state.pdlist.map(item=>
                    <li key={item.id}><a href="#">
                     <img src={item.bigpic}/>
                     <span className="tupiao"><i className="icon"></i>{item.follow_num}</span>
                     <span className="title">{item.name}</span>
                     </a></li>
                    )
                  }
                  </ul>
                  </div>
             </div>
              
              {
                // 有声漫画
              }

             <div id="ysmh">
             <div className="top">
                 <i className="i1"></i>
                 <span>有声漫画</span>
                 <b>更多<i className="ic"></i></b>
             </div>
             <div className="list">
             <ul>
             {
              this.state.ysmhlist.map(item=>
                 <li key={item.id}><NavLink to={`/detail/${item.id}`}>
                     <img src={`http://static.missevan.com/coversmini/${item.cover_image}`}/><i className="i2"></i>
                     <div className="title">{item.soundstr}</div>
                     <div className="b">
                     <span><i></i>{item.view_count}</span>
                     <strong><i></i>{item.comment_count}</strong>
                     </div>
                 </NavLink></li>
              )
             }
             </ul>
             </div>
             </div>







             <div id="music">
             <div className="top">
                 <i className="i1"></i>
                 <span>音乐</span>
                 <b>更多<i className="ic"></i></b>
             </div>
             <div className="list">
             <ul>
             {
              this.state.musiclist.map(item=>
                 <li key={item.id}><NavLink to={`/detail/${item.id}`}>
                     <img src={`http://static.missevan.com/coversmini/${item.cover_image}`}/><i className="i2"></i>
                     <div className="title">{item.soundstr}</div>
                     <div className="b">
                     <span><i></i>{item.view_count}</span>
                     <strong><i></i>{item.comment_count}</strong>
                     </div>
                 </NavLink></li>
              )
             }
             </ul>
             </div>
             </div>



             <div id="yl">
             <div className="top">
                 <i className="i1"></i>
                 <span>娱乐</span>
                 <b>更多<i className="ic"></i></b>
             </div>
             <div className="list">
             <ul>
             {
              this.state.yllist.map(item=>
                 <li key={item.id}><NavLink to={`/detail/${item.id}`}>
                     <img src={`http://static.missevan.com/coversmini/${item.cover_image}`}/><i className="i2"></i>
                     <div className="title">{item.soundstr}</div>
                     <div className="b">
                     <span><i></i>{item.view_count}</span>
                     <strong><i></i>{item.comment_count}</strong>
                     </div>
                 </NavLink></li>
              )
             }
             </ul>
             </div>


             </div>



             <div id="cm">
             <div className="top">
                 <i className="i1"></i>
                 <span>催眠</span>
                 <b>更多<i className="ic"></i></b>
             </div>
             <div className="list">
             <ul>
             {
              this.state.cmlist.map(item=>
                 <li key={item.id}><NavLink to={`/detail/${item.id}`}>
                     <img src={`http://static.missevan.com/coversmini/${item.cover_image}`}/><i className="i2"></i>
                     <div className="title">{item.soundstr}</div>
                     <div className="b">
                     <span><i></i>{item.view_count}</span>
                     <strong><i></i>{item.comment_count}</strong>
                     </div>
                 </NavLink></li>
              )
             }
             </ul>
             </div>


             </div>


             <div id="gbj">
             <div className="top">
                 <i className="i1"></i>
                 <span>广播剧</span>
                 <b>更多<i className="ic"></i></b>
             </div>
             <div className="list">
             <ul>
             {
              this.state.gbjlist.map(item=>
                 <li key={item.id}><NavLink to={`/detail/${item.id}`}>
                     <img src={`http://static.missevan.com/coversmini/${item.cover_image}`}/><i className="i2"></i>
                     <div className="title">{item.soundstr}</div>
                     <div className="b">
                     <span><i></i>{item.view_count}</span>
                     <strong><i></i>{item.comment_count}</strong>
                     </div>
                 </NavLink></li>
              )
             }
             </ul>
             </div>



             </div>


             <div id="rz">
             <div className="top">
                 <i className="i1"></i>
                 <span>日抓</span>
                 <b>更多<i className="ic"></i></b>
             </div>
             <div className="list">
             <ul>
             {
              this.state.rzlist.map(item=>
                 <li key={item.id}><NavLink to={`/detail/${item.id}`}>
                     <img src={`http://static.missevan.com/coversmini/${item.cover_image}`}/><i className="i2"></i>
                     <div className="title">{item.soundstr}</div>
                     <div className="b">
                     <span><i></i>{item.view_count}</span>
                     <strong><i></i>{item.comment_count}</strong>
                     </div>
                 </NavLink></li>
              )
             }
             </ul>
             </div>
             </div>
             <div id="ts">
             <div className="top">
                 <i className="i1"></i>
                 <span>听书</span>
                 <b>更多<i className="ic"></i></b>
             </div>
             <div className="list">
             <ul>
             {
              this.state.tslist.map(item=>
                 <li key={item.id}><NavLink to={`/detail/${item.id}`}>
                     <img src={`http://static.missevan.com/coversmini/${item.cover_image}`}/><i className="i2"></i>
                     <div className="title">{item.soundstr}</div>
                     <div className="b">
                     <span><i></i>{item.view_count}</span>
                     <strong><i></i>{item.comment_count}</strong>
                     </div>
                 </NavLink></li>
              )
             }
             </ul>
             </div>
             </div>
             <div id="py">
             <div className="top">
                 <i className="i1"></i>
                 <span>配音</span>
                 <b>更多<i className="ic"></i></b>
             </div>
             <div className="list">
             <ul>
             {
              this.state.pylist.map(item=>
                 <li key={item.id}><NavLink to={`/detail/${item.id}`}>
                     <img src={`http://static.missevan.com/coversmini/${item.cover_image}`}/><i className="i2"></i>
                     <div className="title">{item.soundstr}</div>
                     <div className="b">
                     <span><i></i>{item.view_count}</span>
                     <strong><i></i>{item.comment_count}</strong>
                     </div>
                 </NavLink></li>
              )
             }
             </ul>
             </div>
             </div>
             <div id="ls">
             <div className="top">
                 <i className="i1"></i>
                 <span>铃声</span>
                 <b>更多<i className="ic"></i></b>
             </div>
             <div className="list">
             <ul>
             {
              this.state.lslist.map(item=>
                 <li key={item.id}><NavLink to={`/detail/${item.id}`}>
                     <img src={`http://static.missevan.com/coversmini/${item.cover_image}`}/><i className="i2"></i>
                     <div className="title">{item.soundstr}</div>
                     <div className="b">
                     <span><i></i>{item.view_count}</span>
                     <strong><i></i>{item.comment_count}</strong>
                     </div>
                 </NavLink></li>
              )
             }
             </ul>
             </div>
             </div>
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

export default Recommend;
