import React, {Component} from 'react';
import PubSub from 'pubsub-js'
import Item from "../Item";

class ImageList extends Component {
    state = {list: [], showTip: true, isLoading: false, err: ""}
    componentDidMount() {
        this.token = PubSub.subscribe('githubSearch',(_,stateObj)=>{
            this.setState(stateObj)
        })
    }
    componentWillUnmount() {
        PubSub.unsubscribe(this.token)
    }

    render() {
        const {list,showTip,isLoading,err} = this.state
        return (
            <div className="row">
                {
                    showTip?<h2>Enter name to search</h2>:
                        isLoading? <h2>Loading...</h2>:
                            err? <h2 style={{color:'red'}}>{err}</h2>:
                    (list.map(item=>{
                        return <Item key={item.id} data={item}/>
                    }))
                }
            </div>
        );
    }
}

export default ImageList;