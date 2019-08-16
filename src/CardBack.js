import React, {Component} from 'react';
import Axios from 'axios';

export class CardBack extends Component{

    render(){
        let cardStyle = {
            width: "300px"
        }

        let imgStyle = {
            width: "250px"
        }

        return(
            <div className="card mx-4 my-2" style={cardStyle}>
                <div className="card-body">
                    <img style={imgStyle} src={this.state.img} />
                </div>
            </div>
        )
    }
}