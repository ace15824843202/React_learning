/*
* 该文件专门为Count组件返回action值（1）一般对象（同步）（2）返回函数（异步）
* */

import {INCREMENT,REDUCE} from '../constant'
export  const creatIncrementAction = data =>({type:INCREMENT,data})
export  const creatReduceAction = data =>({type:REDUCE,data})


export const createIncrementAsyncAction= (data,time)=>{
    return (dispatch)=>{
        setTimeout(()=>{
            dispatch(creatIncrementAction(data))
        },time)
    }
}
