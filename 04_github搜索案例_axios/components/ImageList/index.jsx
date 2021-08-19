import React, {Component} from 'react';
import Item from "../Item";

class ImageList extends Component {
    render() {
        const {list,showTip,isLoading,err} = this.props
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