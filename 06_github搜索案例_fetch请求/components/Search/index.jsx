import React, {Component} from 'react';
import PubSub from 'pubsub-js'
// import axios from "axios";

class Search extends Component {
    handleSearch = async () => {
        //解构赋值连续写法 input没有被定义 console.log(input)报错
        const {input: {value}} = this
        console.log(value)
        PubSub.publish('githubSearch', {showTip: false, isLoading: true})
        /*
         axios.get(`http://localhost:3000/api1/search/users?q=${value}`).then(res=>{
               PubSub.publish('githubSearch',{isLoading: false,list:res.data.items})
               console.log('res',res.data)
           },error=>{
               console.log(error)
               PubSub.publish('githubSearch',{isLoading: false,err:error.message})
           })
         */

        // 使用fetch发送网络请求(分离的设计思想)--未优化
        /* fetch(`http://localhost:3000/api1/search/users?q=${value}`).then(
             res => {
                 console.log('服务器请求成功', res)
                 return res.json()
             },
             err => {
                 console.log('服务器请求失败', err)
                 return new Promise(() => {
                 })
             }
         ).then(
             res => {
                 console.log('数据请求成功',res)
             },
             err => {
                 console.log('数据请求失败',err)
             }
         )*/

        // 使用fetch发送网络请求--优化01
        /*        fetch(`http://localhost:3000/api1/search/users?q=${value}`).then(
                    res => {
                        console.log('服务器请求成功', res)
                        return res.json()
                    },
                ).then(
                    res => {
                        console.log('数据请求成功',res)
                    },
                ).catch(
                //用catch来统一处理err
                    err =>{
                        console.log('请求失败',err)
                    }
                )
                */
        // 使用fetch发送网络请求--终结优化

        try {
            const serverRes = await fetch(`http://localhost:3000/api1/search/users?q=${value}`)
            const data = await serverRes.json()
            console.log('data',data)
            PubSub.publish('githubSearch', {isLoading: false, list: data.items})

        } catch (error) {
            console.log('error',error)
            PubSub.publish('githubSearch', {isLoading: false, err: error.message})
        }


    }

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input ref={c => this.input = c} type="text"
                           placeholder="enter the name you search"/>&nbsp;
                    <button onClick={this.handleSearch}>Search</button>
                </div>
            </section>
        );
    }
}

export default Search;