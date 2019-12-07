import React from "react";
import Profile from './Profile'
import {Link} from "react-router-dom"
import logo from "../Content/gamergoon.png";


const Head = ({username, setUser}) => {
    return (
        <div class="d-flex justify-content-between" id="header">
        <Link to="/"><img src={logo} height="92" width="400"/></Link>
        <div class="d-flex">
          {!username ? <div class="d-flex">
        <Link to="/login"><h4 id="login_register" class="header6">Login  </h4></Link>
        <Link to="/register"><h4 id="login_register" class="header6">Sign up</h4></Link></div>:
          <div class="d-flex"><Link to="/profile"><h6 class="header6">{username}</h6></Link>
          <h6 style={{color:"blue"}} onClick={() => setUser("")} class="header6">Sign out</h6></div>}
        </div>

        </div>
    )
}
export default Head

