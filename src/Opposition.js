import React, {Component} from 'react';
import Axios from 'axios';
import { Card } from './Card';

export class Oppositon extends Component{
    constructor(){
        super();
        this.state = {
            cardList: [Math.floor(Math.random()*100),Math.floor(Math.random()*100)],
            isShow: 0
        }
    }

    render(){

        if (this.state.isShow) {
            return(
                <div className="row">
                    {this.state.cardList.map(id => <Card id={id} opposition={1} />)}               
                </div>
            )
        } else {
            return(
                <div className="row">
                    <h2 className="col">op Cards</h2>            
                </div>
            )
        }
    }
}