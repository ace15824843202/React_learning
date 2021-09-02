import {combineReducers} from "redux";
//引入为Count组件服务的reducer
import count from './count'
import persons from './person'
const reducers= combineReducers({count,persons})
export default reducers