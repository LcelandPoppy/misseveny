import React, { Component } from "react"
import "./index.scss"
import {connect} from "react-redux"
import {NavLink} from "react-router-dom"
class Detail extends Component {
    constructor() {
        super();
        this.state={
        	toplist:[],
        	bottomlist:[],
        	count:0

        }
    }
    componentDidMount() {
        var id=this.props.match.params.zyid;
        console.log(id);
        	 this.props.gettop(id);
        	 this.props.getbottom(id);
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.location.pathname != this.props.location.pathname) {
        	var id = this.props.match.params.zyid;
            this.props.gettop(id);
            this.props.getbottom(id);
     } 
    }
    zyclick(){
       this.refs.addclass.className="active";
       //var id=this.props.match.params.zyid;
       //localStorage.id=id;
      //console.log(localStorage);
      if(localStorage.length<=1){
        var id=this.props.match.params.zyid;
        var arr=[{id}];
        localStorage.id=JSON.stringify(arr);
      }else if(localStorage.id.length!=0){
         var id=this.props.match.params.zyid;
         //console.log(JSON.parse(localStorage.id));
         var arr=JSON.parse(localStorage.id);
         arr.push({id});
          console.log(arr);
         //localStorage.id=[localStorage.id,JSON.stringify(id)];
         localStorage.id=JSON.stringify(arr);
      }
    }
    render() {
        return ( 
        	<div id="detail"> 
        	     <div className="top">
        	     {
        	     	this.props.toplist.sound?
        	     	<div className="t">
        	     	  <img className="mash" src={`http://static.missevan.com/mosaic/${this.props.toplist.sound.cover_image}`}/>
        	     	  <img src={this.props.toplist.sound.front_cover} className="maintu"/>
        	     	  <div className="b">
        	     	    <ul>
        	     	    <li><i className="i1"></i><span>分享</span></li>
        	     	    <li><i className="i2" id="like" ref="addclass" onClick={this.zyclick.bind(this)}></i><span>喜欢</span></li>
        	     	    <li><i className="i3"></i><span>下载</span></li>
        	     	    </ul>
        	     	    <p className="add">用客户端打开</p>
        	     	  </div>
        	     	</div>:<div className="error">
        	     	<img  className="mash" src="http://static.missevan.com/mosaic/201605/19/8d6849613bfc701e38806a99c3a7ea29123041.png"/>
        	     	<img src="http://static.missevan.com/coversmini/201605/19/8d6849613bfc701e38806a99c3a7ea29123041.png"  className="maintu"/>
        	     	<div className="b">
        	     	  <ul>
        	     	  <li><i className="i1"></i><span>分享</span></li>
        	     	  <li><i className="i2"></i><span>喜欢</span></li>
        	     	  <li><i className="i3"></i><span>下载</span></li>
        	     	  </ul>
        	     	  <p className="add">用客户端打开</p>
        	     	</div>
        	     	</div>
        	     }
        	     </div>
        	     <div className="center">
        	       <p className="tit">简介</p>
        	       {
        	       	this.props.toplist.sound?
        	       	<div className="ti">
        	       	  <p className="title">{this.props.toplist.sound.soundstr}</p>
        	       	  <span><i></i>{this.props.toplist.sound.view_count}</span>
                      <span><b></b>{this.props.toplist.sound.comment_count}</span>
                      <span>音频ID:{this.props.toplist.sound.id}</span>
        	       	</div>:null
        	       }
        	       {
        	       		this.props.toplist.user?
        	       		<div className="fabu">
        	       		  <img src={this.props.toplist.user.icon}/>
        	       		  <h6>{this.props.toplist.user.username}</h6>
        	       		  <span>关注</span>
        	       		</div>:null
        	       }
        	     </div>
        	     <div className="bottom">
        	       {
        	       	this.props.bottomlist.albums?
        	       	<div className="t">
        	       	<p className="t2"><span>|</span><b>音频相关</b></p>
        	       	<p className="t1">包含该音频的音单</p>
        	       	<NavLink to={`/album/${this.props.bottomlist.albums[0].id}`}><img src={this.props.bottomlist.albums[0].front_cover}/></NavLink>
        	       	<p className="t1">{this.props.bottomlist.albums[0].title}</p>
        	       	</div>:null
        	       }
        	       <div className="b">
        	       <p><span>相似音频:</span></p>
        	       {
        	       	this.props.bottomlist.sounds?
        	       	 <ul key={this.props.bottomlist.sounds.length}>
                      {
                        this.props.bottomlist.sounds.map(item=>
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
                   </ul>:null
        	       }
        	       

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

export default connect(
   (state)=>{
   	return {
   		toplist:state.tinfo,
   		bottomlist:state.binfo

   	}
   },
   {
   	gettop:(id)=>{
   		return (dispatch)=>{
   			axios.get(`/sound/getsound?soundid=${id}`).then(res=>{
   				console.log(res.data);
   				dispatch({
   					type:"topinfo",
   					payload:res.data.info
   				})
   			})
   		}

   	},
   	getbottom:(id)=>{
        return (dispatch)=>{
        	axios.get(`/sound/getsoundlike?type=7&sound_id=${id}`).then(res=>{
        		console.log(res.data);
        		dispatch({
        			type:"bottominfo",
        			payload:res.data.successVal
        		})
        	})
        }
   	}
   	// getcart:(id,count)=>{
   	// 	return (dispatch)=>{
   	// 		dispatch({
   	// 			type:"cartsinfo",
   	// 			payload:{
   	// 				id:id,
   	// 				count:count
   	// 			}
   	// 		})
   	// 	}
   	// }
   }
)(Detail);
