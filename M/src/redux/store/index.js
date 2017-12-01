import {createStore,combineReducers} from "redux";
import thunk from 'redux-thunk';
import {applyMiddleware} from "redux";
import {reducer,reducer1,reducer2,reducer3,reducer4,reducer5} from "../reducer";
const store = createStore(combineReducers({
	albumsinfo:reducer,
	tinfo:reducer1,
	binfo:reducer2,
	ginfo:reducer3,
	sinfo:reducer4,
	pinfo:reducer5
}),applyMiddleware(thunk));
export default store;