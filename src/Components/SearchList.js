import React, { Component } from "react";
import SearchItem from "./SearchItem";

const SearchItem = ({ results }) => {
  return (
    <div className="search-results">
      <ul>
        {results.map(item => (
          <li>
            <SearchItem item={item}></SearchItem>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchItem;
