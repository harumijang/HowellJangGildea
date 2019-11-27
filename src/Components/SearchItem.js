import React, { Component } from "react";
import { Router, Route, Link } from "react-router-dom";
import GamePrototype from "../Containers/GamePrototype";
import GamePageHeader from "../Components/GamePageHeader";


const SearchItem = ({ game}) => {
  return (
      <div className="search-item">
        <Link to={
            { 
                pathname: '/game',
                game: game
            }
        }>
          {game.name}
          </Link> 
      </div>
  );
};

export default SearchItem;
//onclick={() => setCurrentGame(game)}