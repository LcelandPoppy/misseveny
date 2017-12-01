import React, { Component, PropTypes } from 'react';
import "./index.scss"
import {connect} from "react-redux"
import {NavLink} from "react-router-dom"
class Search extends Component {
    constructor() {
        super();
        this.state={
        	infolist:[],
        	list:[]
        }
    }
    //componentDidMount() {
        //axios.get("/mobile/site/search?s=纯情罗曼史").then(res=>{
        //	console.log(res.data);
        //})
    //}
    
    render() {
        return (
            <div id="search">
               <div className="top">
                 <input ref="content" type="text" placeholder="请输入内容"/><button onClick={this.zyclick.bind(this)}>搜索</button>
               </div>
               <div className="center">
                 {
                 	this.props.infolist.albums?
                 	<ul key={this.props.infolist.albums.length} className="ul1">
                 	{
                 		this.props.infolist.albums.map(item=>
                 			<li key={item.id}><NavLink to={`/detail/${item.id}`}>
                 			   <img src={item.front_cover}/><b></b><i></i>
                               <div className="r">
                               <p className="p">{item.title}</p>
                               <p className="pp">UP主:{item.username}</p>
                               </div>
                 			</NavLink></li>
                 			)
                 	}
                 	</ul>:null
                 }
               </div>
               <div className="bottom"> {
                 	this.props.infolist.sounds?
                 	<ul key={this.props.infolist.sounds.length} className="ul2">
                 	{
                 		this.props.infolist.sounds.map(item=>
                 			<li key={item.id}><NavLink to={`/detail/${item.id}`}>
                 			   <img src={item.front_cover}/><b></b><i></i>
                               <div className="r">
                               <p className="p">{item.soundstr}</p>
                               <p className="pp">UP主:{item.username}</p>
                               </div>
                 			</NavLink></li>
                 			)
                 	}
                 	</ul>:null
                 }
               </div>
           { //<div className="more">查看更多</div>
            //<div id="footer">
            //   <p className="p">
            //   <a href="#">客户端</a>
            //   <a href="#"><i></i></a>
            //   <a href="#">返回顶部</a>
            //   </p>
            //   <p className="p1">MissEvan弹幕音频网 京ICP备:14055174号-1</p>
            //</div>
}

            </div>
        )
    }
    zyclick(){
           var text=this.refs.content.value;
           this.props.getsearch(text);
    	}
}

export default connect(
(state)=>{
	return {
		infolist:state.sinfo
	}
},
{
	getsearch:(value)=>{
		return (dispatch)=>{
            axios.get(`/mobile/site/search?s=${value}`).then(res=>{
            	console.log(res.data);
            	dispatch({
            		type:"searchinfo",
            		payload:res.data.info
            	})
            })
		}
	}
}



)(Search);
