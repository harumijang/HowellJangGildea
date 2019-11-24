import React from "react";
import logo from "./logo.svg";
import "./App.css";
import GamePrototype from "../src/Containers/GamePrototype";
import GamePageHeader from "./Components/GamePageHeader"
import {  Route, Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

class App extends React.Component {
    
    state = {
        currentGame : null
    };

    setCurrentGame (newGame) {
        this.setState({game: newGame})
    }
    
    render () {
        return (
             <GamePrototype />
        )
    
    }
}

export default App;
