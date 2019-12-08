import React from "react";
import {Link} from "react-router-dom"
import banner from "../Content/banner.png";



const Banner = () => {
    return (
        // <div class="d-flex justify-content-between" id="banner">
<div style={{display: 'flex', justifyContent: 'center'}}>
     <Link to="/"><img src={banner} 
    //  height="92" width="400"
     /></Link>
        </div>
    )
}
export default Banner
