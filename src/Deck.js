import React, {Component} from 'react';
import Axios from 'axios';
import { Card } from './Card';
import { Oppositon } from './Opposition';

export class Deck extends Component{
    constructor(){
        super();
        this.state = {
            cardList: [Math.floor(Math.random()*50),Math.floor(Math.random()*50)],
            score: 0,
            isStick: 0
        }
    }

    updateScore = (score) => {
        this.setState({
            score: this.state.score + score
        })       
    }

    addCard = () => {
        let cardList = this.state.cardList;
        cardList.push(Math.floor(Math.random()*50));
        this.setState({
            cardList: cardList
        })
    }

    onStick = () => {
        this.setState({
            isStick: 1
        })
    }

    render(){
        // let cardList = [1,2];
        return(
            <div>
                <h1>Rick and Morty BlackJack</h1>
                <div className="row">
                    <div className="col">
                        <h2>Score: </h2>
                        <h2>{this.state.score}</h2>
                    </div>
                    <div className="col">
                        <button className="btn btn-success m-3 btn-lg" onClick={this.addCard}>Hit</button>
                    </div>
                    <div className="col">
                        <button className="btn btn-success m-3 btn-lg" onClick={this.onStick}>Stick</button>
                    </div>
                </div>
                <div className="row">

                </div>
                <div className="row">
                    {this.state.cardList.map(id => <Card id={id} updateScore={this.updateScore} />)}
                </div>
            </div>
        )
    }
}