import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Home from "./Components/Home.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import GamePrototype from "../src/Containers/GamePrototype";
import {Route} from "react-router-dom";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
