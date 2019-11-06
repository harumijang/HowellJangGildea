import React, { Component } from "react";

const SearchItem = ({ game }) => {
  return (
    <div className="search-item">
      <a href="#">{game.name}</a>
    </div>
  );
};

export default SearchItem;
