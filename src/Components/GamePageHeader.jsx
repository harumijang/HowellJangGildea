import GamePageBody from "./GamePageBody.jsx";
import React, { Component } from "react";


export default class GamePageHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTitle: ""
    };
  }
    render () {
        return (
                <div id="gamePage">
      <div id="title" class="d-flex justify-content-center">
      </div>
      <div class="container">
        <div class="row">
          <div class="col"></div>
          <div class="col-9 gamePageBody">
          <div class="d-flex justify-content-around">
           <h1>{this.props.game.name}</h1>
           <div class="d-flex"><h1>{this.props.game.rating}/5&nbsp;</h1><p>{this.props.game.ratings_count}&nbsp;ratings</p></div>
           </div>
            <GamePageBody game={this.props.game} />
          </div>
          <div class="col"></div>
        </div>
      </div>
    </div>
        )
    }
}
