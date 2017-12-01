import React, { Component, PropTypes } from 'react';
import Top from "../common/headerbar"
import Sidebar from "../common/sidebar"
import "./index.scss"
import Loading from "../loading"
class App extends Component {

    constructor() {
        super();
        this.state={
          isshow:false
        }
    }

    render() {
        return (
          <div id="app">
              <Top  isshow={()=>{
                    this.setState({
                      show:!this.state.show
                    })
               }}></Top>
              <Sidebar isshow={this.state.show} event={()=>{
                  this.setState({
                      show:false
                    })
               }}></Sidebar>
              {
                this.props.children
              }

          </div>  
        )
    }
}

export default App;
