import React, {Component} from 'react';
import PubSub from 'pubsub-js'
import axios from "axios";

class Search extends Component {
    handleSearch=()=>{
        //解构赋值连续写法 input没有被定义 console.log(input)报错
        const {input:{value}} = this
        console.log(value)
        PubSub.publish('githubSearch',{showTip:false,isLoading: true})
        axios.get(`http://localhost:3000/api1/search/users?q=${value}`).then(res=>{
            PubSub.publish('githubSearch',{isLoading: false,list:res.data.items})
            console.log('res',res.data)
        },error=>{
            console.log(error)
            PubSub.publish('githubSearch',{isLoading: false,err:error.message})

        })

    }
    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input ref={c=>this.input=c} type="text" placeholder="enter the name you search"/>&nbsp;
                    <button onClick={this.handleSearch}>Search</button>
                </div>
            </section>
        );
    }
}

export default Search;