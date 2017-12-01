import React, { Component, PropTypes } from 'react';
import "./index.scss"
var _ = require('lodash');
import {NavLink} from "react-router"
class Carts extends Component {
    constructor() {
        super();
        this.state={
        	list:[],
        	count:0
        }
    }
 componentWillMount() {
     //console.log(JSON.parse(localStorage.list));
 	//console.log(localStorage.getItem());
 }
 componentDidMount(){
 	       var arr=JSON.parse(localStorage.id);
 	       var 	data=[]
 	       for(var i=0;i<arr.length;i++){
 	       //	console.log(arr[i].id);
 	        data.push(arr[i].id);
 	       }
 	       //console.log(data);
 	       var uniqCarts = _.uniq(data);
 	       function getCartNumber(data,matchId){
 	            var num = 0;
 	            for(let i=0;i<data.length;i++){
 	                if(data[i] === matchId){
 	                    num++
 	                }
 	            }
 	            return num;
 	        }
 	        var child=[];
 	        var sub=[];
 	        for(let i=0;i<uniqCarts.length;i++){
 	        	var id=uniqCarts[i];
 	        	var count=getCartNumber(data,uniqCarts[i]);
 	           //console.log(id,count);
 	            child.push({id,count});
 	            //console.log(child);
 	        }
 	        console.log(child.length);
            for(var i=0;i<child.length;i++){
            	console.log(child[i].id)
            	var id=child[i].id
            	var count=child[i].count
            	axios.get(`/sound/getsound?soundid=${child[i].id}`).then(res=>{
            	 	           console.log(res.data.info);
            	 	           	sub.push({
            	 	           	data:res.data.info.sound,
            	 	           	counter:count
            	 	           });
            	 	           	  this.setState({
            	 	           	       list:sub
            	 	           	})

            	})
            }
            console.log(sub);
 }


    render() {
        return (
           <div id="carts">    
           <div className="title">我的爱好痕迹</div>
          {
          	this.state.list?
          	<ul key={this.state.list.length}>
            {
            	this.state.list.map((item,index)=>
                 <li key={index}><a href="#">
                 <img src={item.data.front_cover}/>
                 <div className="content">
                 <p className="tit">{item.data.soundstr}</p>
                 <p className="count"><i></i>{item.counter}</p>
                 </div>
                 </a></li>
            	)
            }
          	</ul>:null
          }
        </div> 
        );
    }
}

export default Carts;
