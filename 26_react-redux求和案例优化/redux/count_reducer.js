/*
* 该文件用于创建一个为Count组件服务的reducer,reducer的本质就是一个函数
*
* reducer函数会接收到两个参数，分别是：之前的状态（preState）。动作对象（action）
*
* 只做单纯的加减操作，条件（异步加还是奇数加）放在组件里判断
*
* */
//初始化
import {INCREMENT,REDUCE} from './constant'
const initState = 0
export default function count_reducer(preState = initState, action) {
    //从action对象中获取：type、data
    const {type, data} = action
    switch (type) {
        case INCREMENT:
            return preState + data
        case REDUCE:
            return preState - data
        default:
            return preState
    }
}