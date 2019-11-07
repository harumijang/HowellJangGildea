import React, { Component } from "react";
import SearchList from "../Components/SearchList";


export default class GamePrototype extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: []
    };
  }

  componentDidMount() {
    console.log("Component Did Mount");
    this.findGameByTitle("borderlands");
  }

  searchGame = searchTitleChanged => this.findGameByTitle(searchTitleChanged);

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
      <SearchList searchGame={this.searchGame} results={this.state.games} />
    );
  }
}
