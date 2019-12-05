import React from "react";
import Profile from './Profile'
import {Link} from "react-router-dom"

const Head = ({username, setUser}) => {
    return (
        <div class="d-flex justify-content-between" id="header">
        <Link to="/"> <h3>Working Title</h3></Link>
        <div class="d-flex">
          {!username ? <div class="d-flex">
        <Link to="/login"><h6 class="header6">Login</h6></Link>
        <Link to="/register"><h6 class="header6">Sign up</h6></Link></div>:
          <div class="d-flex"><Link to="/profile"><h6 class="header6">{username}</h6></Link>
          <h6 onClick={() => setUser("")} class="header6">Sign out</h6></div>}
        </div>

        </div>
    )
}
export default Head

