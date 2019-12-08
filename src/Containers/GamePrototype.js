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
import UpdateGame from "../Components/UpdateGame.jsx"
import UserGame from "../Components/UserGame.jsx"
export default class GamePrototype extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
      game: null,
      users: [],
      user: "",
      userType: "",
      userId: 0
    };
  }

  componentDidMount() {
    console.log("Component Did Mount");
    //this.findGameByTitle("borderlands");
    this.findUserByName("");
  }
    
    /*searchGame(searchTitleChanged) {
        this.findGameByTitle(searchTitleChanged)
    }*/

//  searchGame = searchTitleChanged => this.findGameByTitle(searchTitleChanged);

  setUser = (username,type,userId) => {
      console.log('here')
      this.setState({user: username, userType: type, userId:userId});
      
  }
    

  findGameByTitle = title => {
    return fetch(`https://api.rawg.io/api/games?search=${title}`)
      .then(response => response.json())
      .then(response => {
        this.setState({
          games: response.results
        });
      });
  };
  
  
findUserByName = un => {
  let y = document.getElementById("userSearch").value;
  //alert(y)
     fetch(`https://damp-hollows-38137.herokuapp.com/api/consumers`)
      .then(response => response.json())
      .then(response => {
       for (let i = 0; i < response.length; i++) {
          if (response[i].username === y) {
            let newUsers= [];
            newUsers.push(response[i])
            this.setState({
              users: newUsers
            });
          }
        }
        
      });
       fetch(`https://damp-hollows-38137.herokuapp.com/api/developers`)
      .then(response => response.json())
      .then(response => {
         
        for (let i = 0; i < response.length; i++) {
          
          if (response[i].username === y) {
            let newUsers= [];
            newUsers.push(response[i])
            this.setState({
              users: newUsers
            });
          }
        }
         console.log(response)
        let temp = response.concat(this.state.users)
        
      });
  };

searchGame = searchTitleChanged => {
  this.findGameByTitle(searchTitleChanged);

}
searchUser = searchUserChanged => this.findUserByName(searchUserChanged);


  render() {
    return (
        <Router>
             <Head setUser={this.setUser} username={this.state.user} /> 
             <Route path="/review" render={(state) => {
            return (<Review review={state.location.review} rGame={state.location.rGame}/>)} }/>
             <Route exact path="/"><SearchList searchUser={this.searchUser} searchGame={this.searchGame} results={this.state.games} users={this.state.users}/></Route>
            <Route username={this.state.user} path="/register"><Register setUser={this.setUser} /></Route>
            <Route path="/login"><Login  setUser={this.setUser}/></Route>
         
            <Route path="/newGame"><NewGame userId={this.state.userId}/></Route>
             <Route path="/game" render={(game) => {
                return (<GamePageHeader userId={this.state.userId} type={this.state.userType} game={game.location.game} />)

                }} />
        <Route path="/profile" render={(isThirdParty) => {
                return (<Profile userId={this.state.userId} type={this.state.userType} username={this.state.user} setUser={this.setUser} isThirdParty={isThirdParty}/> )

                }} />
        
        <Route path="/updateGame" render={(gameOld) => {
                return (<UpdateGame game={gameOld}/> )

                }} />
        <Route path="/userGame" render={(gameOld) => {
                return (<UserGame  userId={this.state.userId} type={this.state.userType} game={gameOld}/> )

                }} />
        </Router>

    );
  }
}
