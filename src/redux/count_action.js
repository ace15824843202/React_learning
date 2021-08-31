/*
* 该文件专门为Count组件生产action对象
* */

import {INCREMENT,REDUCE} from './constant'
export  const creatIncrementAction = data =>({type:INCREMENT,data:data})
export  const creatReduceAction = data =>({type:REDUCE,data:data})