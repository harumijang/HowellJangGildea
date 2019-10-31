import React, { Component } from "react";

const SearchItem = ({ item }) => {
  return (
    <div className="search-item">
      <a href={item.url}>{item.title}</a>
    </div>
  );
};

export default SearchItem;
