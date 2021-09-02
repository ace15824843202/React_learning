/*

该文件专门用于暴露一个store对象，整个应用只有一个store对象

*/

//引入createStore,专门用于创建redux中最为核心的store对象
import {createStore,applyMiddleware,} from "redux";
import thunk from 'redux-thunk'
//combineReducers汇总成一个大reducer对象
import reducers from "./reducers";

import {composeWithDevTools} from 'redux-devtools-extension'

export default createStore(reducers,composeWithDevTools(applyMiddleware(thunk)))
