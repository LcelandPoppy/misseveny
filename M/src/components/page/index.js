import React, { Component, PropTypes } from 'react';
import "./index.scss"
import {connect} from "react-redux"
import {NavLink} from "react-router-dom"
import 'antd-mobile/lib/pagination/style/css';  
import { Pagination, Icon } from 'antd-mobile';
class Page extends Component {

    constructor() {
        super();
        this.state={
        	pagelist:[],
        	count:1
        }
    }
 componentDidMount() {
     var id=this.props.match.params.zyid;
     this.props.getpage(id,1);
 }
    render() {
        return (
           <div id="page">
           <div className="top">类别列表</div>
           <div className="list">
           {
           	this.props.pagelist[36]?
           	<ul key={this.props.pagelist[36].length}>
           	{
           		this.props.pagelist[36].map(item=>
                 <li key={item.id}><NavLink to={`/detail/${item.id}`}>
                         <div className="l">
                         <img src={item.front_cover}/>
                          <i></i><b></b>
                         </div>
                          
                          <div className="r">
                          <p className="p">{item.soundstr}</p>
                          <p><i></i><span>{item.view_count}</span></p>
                          </div>
                        </NavLink></li>
           		)
           	}
           	</ul>:null
           }
           </div>
            <div className="biao"><Pagination total={50}
				      className="custom-pagination-with-icon"
				      current={this.state.count}
				      locale={{
				        prevText: (<span className="arrow-align" onClick={this.jian.bind(this)}><Icon type="left" />上一页</span>),
				        nextText: (<span className="arrow-align"onClick={this.add.bind(this)}>下一页<Icon type="right" /></span>),
				      }}
             /></div>
             {
            //<div className="last" onClick={this.zyclick.bind(this)}>查看下一页</div>
             }
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
    add(){
    	var count=this.state.count+1;
    	this.setState({
    		count:count
    	})
    	if(count>=50){
    		count=50;
    		this.setState({
    		count:count
    	})
    	}
        this.props.getpage(this.state.count);
    }
    jian(){
    	var count=this.state.count-1;
    	this.setState({
    		count:count
    	})
    	if(count<=0){
    		count=1;
    		this.setState({
    		count:count
    	})
    	}
        this.props.getpage(this.state.count);
    }
}   

export default connect(
(state)=>{
	return {
		pagelist:state.pinfo
	}
},
{
	getpage:(count)=>{
		return (dispatch)=>{
         axios.get(`/mobile/site/catalogMenu?order=${count}&cid=36&pagesize=6`).then(res=>{
         	console.log(res.data);
         	dispatch({
         		type:"pageinfo",
         		payload:res.data.info
         	})
         })
		}

	}
}


)(Page);
