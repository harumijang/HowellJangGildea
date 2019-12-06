import React, { Component } from "react";
import { Router, Route, Link } from "react-router-dom";
import GamePrototype from "../Containers/GamePrototype";
import GamePageHeader from "../Components/GamePageHeader";


const SearchItem = ({user, game}) => {
  return (
    <div>
    {game ?
      <div className="search-item">
        <Link to={
            { 
                pathname: '/game/' + game.id,
                game: game
            }
        }>
          {game.name}
          </Link> 
      </div> :
       <div className="search-item">
        <Link to={
            { 
                pathname: '/profile/',
                isThirdParty: user
            }
        }>
          {user.username}
          </Link> 
      </div> 
    
    }
      </div>
  );
};

export default SearchItem;
//onclick={() => setCurrentGame(game)}