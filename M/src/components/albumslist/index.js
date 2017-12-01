import React, { Component, PropTypes } from 'react';
import { connect } from "react-redux"
import "./index.scss"
import {NavLink} from "react-router-dom"
class Albumslist extends Component {
    constructor() {
        super();
        this.state = {
             infolist:[]
        }
    }
    componentWillMount() {
        var id = this.props.match.params.zyid;
        this.props.getalbumslist(id);
        
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.location.pathname != this.props.location.pathname) {
        	var id = this.props.match.params.zyid;
        this.props.getalbumslist(id);
     } 
    }
    render() {
        return ( 
        	<div id = "albumslist">
              {
              	this.props.infolist.album?
              	<div className="header">
                  <img className="bg" src={this.props.infolist.album.front_cover}/>
                  <img src={this.props.infolist.album.front_cover} className="xt"/>
                  <div className="side">
                    <p className="title">{this.props.infolist.album.title}</p>
                    <b>{this.props.infolist.album.username}</b>
                  </div>
              	</div>:null
              }
              {
              	this.props.infolist.sounds?
              	<div className="list">
              	<ul className="aul" key={this.props.infolist.sounds.length}>
              	{
              		this.props.infolist.sounds.map(item=>
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


              	</ul>


              	</div>:null
              }
      </div>
        )
    }
}

export default connect(
    (state) => {
        return {
            infolist: state.albumsinfo
        }
    }, 
    {
        getalbumslist: (id) => {
            return (dispatch) => {
                axios.get(`/sound/soundalllist?albumid=${id}`).then(res => {
                    console.log(res.data);
                    dispatch({
                        type: "albumslists",
                        payload: res.data.info
                    })
                })
            }
        }
    }
)(Albumslist);