import React, { Component } from "react";
import SearchList from "../Components/SearchList";
import Head from "../Components/Head";
import { BrowserRouter as Router } from "react-router-dom";
import {Route} from "react-router-dom"
import GamePageHeader from "../Components/GamePageHeader";
import Register from "../Components/Register";
import Login from "../Components/Login";
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
    
    /*searchGame(searchTitleChanged) {
        this.findGameByTitle(searchTitleChanged)
    }*/

//  searchGame = searchTitleChanged => this.findGameByTitle(searchTitleChanged);

  setCurrentGame(newGame) {
      console.log('here')
      this.setState({game: newGame});
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

searchGame = searchTitleChanged => this.findGameByTitle(searchTitleChanged);


  render() {
    return (
        <Router>
           <Head />
            <Route exact path="/"><SearchList setCurrentGame={this.setCurrentGame} searchGame={this.searchGame} results={this.state.games} /></Route>
            <Route path="/register"><Register /></Route>
            <Route path="/login"><Login /></Route>
             <Route path="/game" render={(game) => {
                    console.log(game)
                    return (<GamePageHeader game={game.location.game} />)
                }} />
        </Router>

    );
  }
}
