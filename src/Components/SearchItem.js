import React, { Component } from "react";
import { Route, Router, Link } from "react-router-dom";
import GamePrototype from "../Containers/GamePrototype";


const SearchItem = ({ game }) => {
  return (
    <Router>
      <div className="search-item">
        <Route
          path="game/:game.name"
          render={() => <GamePrototype game={game} />}
        >
          {game.name}
        </Route>
      </div>
    </Router>
  );
};

export default SearchItem;
