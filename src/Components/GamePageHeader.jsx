import GamePageBody from "./GamePageBody.jsx";
import {Link} from "react-router-dom"
import React, { Component } from "react";


export default class GamePageHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTitle: "",
      newGame: this.findGameById(this.gameId)
    };
  }
  
  findGameById(id) {
      fetch(`https://api.rawg.io/api/games/${id}`)
        .then(response => response.json())
        .then(response => {
        console.log(1)
          return response;
      }) 
    };

  componentDidMount() {
    let gameId = window.location.href
    let temp = gameId.split("/")
    gameId = temp[temp.length-1]
    //this.findGameById(gameId);
    //this.setState({
      //newGame: this.findGameById(gameId)
    //});
  }
  
  
  
    render () {
        return (
                <div id="gamePage">
           <Link to="/"> <h3>Return to Home</h3></Link>
      <div id="title" class="d-flex justify-content-center">
      </div>
      <div class="container">
        <div class="row">
          <div class="col"></div>
          <div class="col-9 gamePageBody">
          <div class="d-flex justify-content-around">
           <h1 style={{color:"black"}} >{this.props.game.name}</h1>
           {console.log(this.props.game)}
            
           <div class="d-flex"><h1 style={{color:"black"}}>{this.props.game.rating}/5&nbsp;</h1><p >{this.props.game.ratings_count}&nbsp;ratings</p></div>
           </div>
            <GamePageBody userId={this.props.userId} type={this.props.type} game={this.props.game} />

          </div>
          <div class="col"></div>
        </div>
      </div>
    </div>
        )
    }
}
