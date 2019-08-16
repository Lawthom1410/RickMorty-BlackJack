import React, {Component} from 'react';
import Axios from 'axios';

export class Card extends Component{
    constructor(){
        super();
        this.state = {
            name: "",
            score: 0,
            img: ""
        }
    }

    componentDidMount(){
        Axios.get(`https://rickandmortyapi.com/api/character/` + this.props.id).then((res) => {
            let cardData = res.data;
            let name = res.data.name;
            let score;

            if(name === "Rick Sanchez" && cardData.origin.name === "Earth (C-137)"){
                score = 10
            } else if (name.includes("Rick")) {
                score = 5
            }

            else if(name === "Morty Smith" && cardData.origin.name === "Earth (C-137)"){
                score = 8
            } else if (name.includes("Morty")) {
                score = 4
            }

            else {
                score = 1
            }
            
            this.props.updateScore(score);

            this.setState({
                name: cardData.name,
                score: score,
                img: cardData.image
            })
        })
    }


    render(){
        let cardStyle = {
            width: "300px"
        }

        let imgStyle = {
            width: "250px"
        }

        return(
            <div className="card mx-4 my-2" style={cardStyle}>
                <div className="row card-header">
                    <h3 className="col">{this.state.name}</h3>
                    <h3 className="col">{this.state.score}</h3>
                </div>
                <div className="card-body">
                    <img style={imgStyle} src={this.state.img} />
                </div>
            </div>
        )
    }
}