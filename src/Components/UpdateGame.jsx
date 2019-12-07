import React from "react";
import {Link} from "react-router-dom"
import GameService from "../Services/GameService"

const createNewGame = () => {
  let title = document.getElementById("gameTitle").value
  let pics = document.getElementById("image").value.split(" ")
  let relDate = document.getElementById("release").value
  let devs = document.getElementById("devs").value.split(" ")
  let video = document.getElementById("video").value
  let platforms = document.getElementById("plats").value.split(" ")
  let stores = document.getElementById("stores").value.split(" ")
  
  if (title === "" || pics === "" || relDate === "") {
    alert("please fill out all required fields")
    return;
  }
  
  let newGameObject = {name: title, reviews: [], rating:0, rating_count: 0, released:relDate, platforms:platforms, stores:stores, devs:devs, short_screenshots:pics, clip: video}
  
  let gs = GameService.getInstance();
  gs.createGame(newGameObject)
  
}

//https://media.rawg.io/media/screenshots/153/153b36d06eaa5a3ff45cea30a572a169.jpg
//https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg
//https://media.rawg.io/media/stories-640/fcb/fcbf4813476481102d4f8224427d5970.mp4
//https://media.rawg.io/media/screenshots/669/6693c7ffd9e40cc380ce2dc1c7b2d518.jpg

class NewGame extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render () {
  return ( 
<div class="newGame container">
 <h1>Update Game</h1>
  {console.log(this.props)}

   <div class="d-flex form-group row">

     <label for="username" class=" col-sm-2 col-form-label">
       Game Title *</label>
     <div class="col-sm-10">
       <input  class="registerForm form-control wbdv-field wbdv-username"
                     id="gameTitle"></input>
     </div>
   </div>
   <div class="form-group row">
     <label for="image" class="col-sm-2 col-form-label">
       Image URLs *</label>
     <div class="col-sm-10">
       <input class="registerForm form-control wbdv-field wbdv-password"
           id="image"></input>
     </div>
   </div>

     <div class="form-group row">
     <label for="images" class="col-sm-2 col-form-label">
       Release Date *</label>
     <div class="col-sm-10">
       <input  type="date" class="registerForm form-control wbdv-field wbdv-password"
           id="release"></input>
     </div>
   </div>
       <div class="form-group row">
     <label for="images" class="col-sm-2 col-form-label">
       Additional Developers</label>
     <div class="col-sm-10">
       <input  type="otherImages" class="registerForm form-control wbdv-field wbdv-password"
           id="devs"></input>
     </div>
   </div>
   <div class="form-group row">
     <label for="video" class="col-sm-2 col-form-label">
       Video URL </label>
     <div class="col-sm-10">
       <input class="registerForm form-control wbdv-field wbdv-password-verify"
           id="video"></input>
     </div>
   </div>
     <div class="form-group row">
     <label for="plats" class="col-sm-2 col-form-label">
       Platforms </label>
     <div class="col-sm-10">
       <input class="registerForm form-control wbdv-field wbdv-password-verify"
           id="plats"></input>
     </div>
   </div>
     <div class="form-group row">
     <label for="stores" class="col-sm-2 col-form-label">
       Stores </label>
     <div class="col-sm-10">
       <input class="registerForm form-control wbdv-field wbdv-password-verify"
           id="stores"></input>
     </div>
   </div>
   <div class="form-group row">
     <label class="col-sm-2 col-form-label"></label>
     <div class="col-sm-10">
        
         <Link to="/"><button style={{display:"none"}} id="reg" class="btn btn-secondary btn-block wbdv-login">Return Home</button></Link>
       <div class="row">
         <div class="col-6">
           
         </div>
         
       </div>
     </div>
   </div>
</div>
    )}
}
export default NewGame

