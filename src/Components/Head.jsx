import React from "react";
import {Link} from "react-router-dom"

const Head = () => {
    return (
        <div class="d-flex justify-content-between" id="header">
        <Link to="/"> <h3>Working Title</h3></Link>
        <div class="d-flex">
        <Link to="/login"><h6 class="header6">Login</h6></Link>
        <Link to="/register"><h6 class="header6">Sign up</h6></Link>
        </div>

        </div>
    )
}
export default Head

