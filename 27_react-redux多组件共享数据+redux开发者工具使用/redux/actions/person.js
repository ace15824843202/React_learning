/*
* 该文件专门为Count组件返回action值（1）一般对象（同步）（2）返回函数（异步）
* */

import {ADD_PERSON} from '../constant'
export  const createAddPersonAction = data =>({type:ADD_PERSON,data})