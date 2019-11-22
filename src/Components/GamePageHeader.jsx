import GamePageBody from "./GamePageBody.jsx";
import React, { Component } from "react";


export default class SearchList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTitle: ""
    };
  }
    render () {
        {console.log(this.props)}
        return (
                <div>
      <div id="title" class="d-flex justify-content-center">
        <h1>{this.props.game.name}</h1>
      </div>
      <div class="container">
        <div class="row">
          <div class="col"></div>
          <div class="col-9">
            <GamePageBody game={this.props.game} />
          </div>
          <div class="col"></div>
        </div>
      </div>
    </div>
        )
    }
}
