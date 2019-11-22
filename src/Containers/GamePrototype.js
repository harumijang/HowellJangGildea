import React, { Component } from "react";
import SearchList from "../Components/SearchList";
import { BrowserRouter as Router } from "react-router-dom";
import {Route} from "react-router-dom"
import GamePageHeader from "../Components/GamePageHeader";
export default class GamePrototype extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
      game: null
    };
  }

  componentDidMount() {
    console.log("Component Did Mount");
    this.findGameByTitle("borderlands");
  }

  searchGame = searchTitleChanged => this.findGameByTitle(searchTitleChanged);

  setCurrentGame(newGame) {
      this.setState({game:newGame});
  }

  findGameByTitle = title => {
    return fetch(`https://api.rawg.io/api/games?search=${title}`)
      .then(response => response.json())
      .then(response => {
        console.log(response.results);
        this.setState({
          games: response.results
        });
      });
  };


  render() {
    return (
        <Router>
        <SearchList setCurrentGame={this.props.setCurrentGame} searchGame={this.searchGame} results={this.state.games} />
         <Route path="/game:d" render={() => <GamePageHeader game={this.props.game} />} />
        </Router>

    );
  }
}
