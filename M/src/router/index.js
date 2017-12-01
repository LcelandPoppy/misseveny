import React,{Component} from "react"
import ReactDOM from "react-dom"
import {
	HashRouter as Router,
	Redirect,
	Route,
	Switch
} from "react-router-dom"
import App from "../components/App"
import Recommend from "../components/recommend"
import Catalogs from "../components/catalogs"
import Albums from "../components/albums"
import Albumslist from "../components/albumslist"
import {Provider}  from "react-redux";
import store  from "../redux/store";
import Detail from "../components/detail"
import Drama from "../components/drama"
import Search from "../components/search"
import Page from "../components/page"
import Carts from "../components/cart"
const router =(
	<Provider store={store}>
	<Router>
        <App>
        <Switch>
          <Route path="/recommend" component={Recommend}/>
          <Route path="/catalogs" component={Catalogs}/>
          <Route path="/page/:zyid" component={Page}/>
          <Route path="/albums" component={Albums}/>
          <Route path="/album/:zyid" component={Albumslist}/>
          <Route path="/detail/:zyid" component={Detail}/>
          <Route path="/drama" component={Drama}/>
          <Route path="/search" component={Search}/>
          <Route path="/cart" component={Carts}/>
          <Redirect from="*" to="/recommend" />
        </Switch>
        </App>
	</Router>
	</Provider>
)
export default router;