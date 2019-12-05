import React, { Component } from "react";
import SearchList from "../Components/SearchList";
import Head from "../Components/Head";
import { BrowserRouter as Router } from "react-router-dom";
import {Route} from "react-router-dom"
import GamePageHeader from "../Components/GamePageHeader";
import Register from "../Components/Register";
import Login from "../Components/Login";
import Profile from "../Components/Profile";
import Review from "../Components/Review";
import NewGame from "../Components/NewGame.jsx"
export default class GamePrototype extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
      game: null,
      user: "",
      userType: "",
      userId: 0
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

  setUser = (username,type,userId) => {
      console.log('here')
      this.setState({user: username, userType: type, id:userId});
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
             <Head setUser={this.setUser} username={this.state.user} /> 
             <Route path="/review" render={(review) => { return (<Review review={review.location.review}/>)} }/>
             <Route exact path="/"><SearchList searchGame={this.searchGame} results={this.state.games} /></Route>
            <Route username={this.state.user} path="/register"><Register setUser={this.setUser} /></Route>
            <Route path="/login"><Login  setUser={this.setUser}/></Route>
            <Route  path="/profile"><Profile type={this.state.userType} username={this.state.user} setUser={this.setUser}/></Route>
            <Route path="/newGame"><NewGame userId={this.state.userId}/></Route>
             <Route path="/game" render={(game) => {
                    return (<GamePageHeader type={this.state.userType} game={game.location.game} userId={this.state.userId}/>)
                }} />
        </Router>

    );
  }
}
