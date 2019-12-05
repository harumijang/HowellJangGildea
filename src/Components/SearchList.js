import React, { Component } from "react";
import SearchItem from "./SearchItem";

export default class SearchList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTitle: ""
    };
  }

  searchTitleChanged = event => {
    this.setState({
      searchTitle: event.target.value
    });
    this.props.searchGame(this.state.searchTitle);
  };

  render() {
    return (
      <div className="search-results container" id="results-container">
        <form>
          <input
            onChange={this.searchTitleChanged}
            value={this.state.searchTitle}
            className="form-control"
          />
          <button 
            type="button"
            onClick={() => this.props.searchGame(this.state.searchTitle)}
            className="btn btn-primary"
          >
            Search
          </button>
        </form>

        <ul>
          {this.props.results.map(game => (
            <li>
              <SearchItem game={game}></SearchItem>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
