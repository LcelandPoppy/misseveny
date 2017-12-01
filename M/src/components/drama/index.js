import React, { Component, PropTypes } from 'react';
import "./index.scss"
import {connect} from "react-redux"
class Drama extends Component {
    constructor() {
        super();
        this.state={
        	info:[]
        }
    }
   componentDidMount() {
   	if(this.props.info.length==0){
   		this.props.getgbj();
   	}
   }
    render() {
        return (
            <div id="darma">
              <div className="title">广播剧</div>
              <div id="main">
               <p className="tou"><a href="#"><i></i>更新时间</a><a href="#"><b></b>分类时间</a></p>
              {
              	this.props.info.last?
              	<div className="t">
              	<p className="option">新作速递</p>
                    <ul key={this.props.info.last.length}>
                    {
                    	this.props.info.last.map(item=>
                    	<li key={item.id}><a href="#">
                    	   <img src={`http://static.missevan.com/dramacoversmini/${item.cover}`}/>
                    	   <p className="name">{item.name}</p>
                    	   <p className="qi">更新至<span>{item.newest}</span></p>
                    	</a></li>
                    	)
                    }
                    </ul>
                    </div>:null
                 }
                 {
                 	this.props.info.classic?
              	<div className="c">
              	<p className="option">经典作品</p>
                    <ul key={this.props.info.classic.length}>
                    {
                    	this.props.info.classic.map(item=>
                    	<li key={item.id}><a href="#">
                    	   <img src={`http://static.missevan.com/dramacoversmini/${item.cover}`}/>
                    	   <p className="name">{item.name}</p>
                    	   <p className="qi">更新至<span>{item.newest}</span></p>
                    	</a></li>
                    	)
                    }
                    </ul>
                    </div>:null
                 }
                 {
                 	   	this.props.info.recommend?
                 		<div className="b">
                 		<p className="option">小编推荐</p>
                 	      <ul key={this.props.info.recommend.length}>
                 	      {
                 	      	this.props.info.recommend.map(item=>
                 	      	<li key={item.id}><a href="#">
                 	      	   <img src={`http://static.missevan.com/dramacoversmini/${item.cover}`}/>
                 	      	   <p className="name">{item.name}</p>
                 	      	   <p className="qi">更新至<span>{item.newest}</span></p>
                 	      	</a></li>
                 	      	)
                 	      }
                 	      </ul>
                 	      </div>:null
                 }

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
		info:state.ginfo
	}
},
{
	getgbj:()=>{
		return (dispatch)=>{
			axios.get("/drama/rest/mobile/homepage").then(res=>{
				console.log(res.data);
				dispatch({
					type:"gbjinfo",
					payload:res.data.info
				})
			})
		}
	}
}


)(Drama);
