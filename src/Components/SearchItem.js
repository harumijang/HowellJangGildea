import React, { Component } from "react";
import { Router, Route, Link } from "react-router-dom";
import GamePrototype from "../Containers/GamePrototype";
import GamePageHeader from "../Components/GamePageHeader";


const SearchItem = ({ game }) => {
  return (
      <div className="search-item">
        <Link to="/game">{game.name}</Link>
        <Route path="/game" render={() => <GamePageHeader game={game} />} />
      </div>
  );
};

export default SearchItem;
