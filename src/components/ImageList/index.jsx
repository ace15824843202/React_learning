import React, {Component} from 'react';
import Item from "../Item";

class ImageList extends Component {
    render() {
        return (
            <div className="row">
                {
                    this.props.avatar.map(item=>{
                        return <Item key={item.id} data={item}/>
                    })
                }
            </div>
        );
    }
}

export default ImageList;