import React, { Component } from "react";
import { Router, Route, Link } from "react-router-dom";
import GamePrototype from "../Containers/GamePrototype";
import GamePageHeader from "../Components/GamePageHeader";


const SearchItem = ({setCurrentGame, game }) => {
  return (
      <div  className="search-item">
        <Link  to={`game/${game.name}`}>
      {game.name}</Link>
       
      </div>
  );
};

export default SearchItem;
//onclick={() => setCurrentGame(game)}