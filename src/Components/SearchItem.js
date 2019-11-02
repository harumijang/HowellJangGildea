import React, { Component } from "react";

const SearchItem = ({ item }) => {
  return (
    <div className="search-item">
      <a href="#">{item.name}</a>
    </div>
  );
};

export default SearchItem;
