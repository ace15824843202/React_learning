/*

该文件专门用于暴露一个store对象，整个应用只有一个store对象

*/

//引入createStore,专门用于创建redux中最为核心的store对象
import {createStore,applyMiddleware,combineReducers} from "redux";
//引入为Count组件服务的reducer
import countReducer from './reducers/count'
import personReducer from './reducers/person'
import thunk from 'redux-thunk'
//combineReducers汇总成一个大reducer对象

import {composeWithDevTools} from 'redux-devtools-extension'

export default createStore(combineReducers({count:countReducer,person:personReducer}),composeWithDevTools(applyMiddleware(thunk)))
