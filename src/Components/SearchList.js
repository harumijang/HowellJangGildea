import React, { Component } from "react";
import SearchItem from "./SearchItem";

export default class SearchList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTitle: "",
      searchUser: ""
    };
  }

  searchTitleChanged = event => {
    this.setState({
      searchTitle: event.target.value
    });
    //this.props.searchGame(this.state.searchTitle);
  };
  
    searchTitleChangedUser = event => {
    this.setState({
      searchUser: event.target.value
    });
    //this.props.searchUser(this.state.searchUser);
  };

  render() {
    return (
      <div class="d-flex">
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
            Search Games
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
      <div className="search-results container" >
        <form>
          <input
            id="userSearch"
            
            className="form-control"
          />
          
          <button 
            type="button"
            onClick={() => this.props.searchUser(this.state.searchUser)}
            className="btn btn-primary"
          >
            Search Users
          </button>
        </form>

        <ul>
          {this.props.users.map(user => (
            <li>
               <SearchItem user={user}></SearchItem>
            </li>
          ))}
        </ul>
      </div>
      </div>
    );
  }
}
