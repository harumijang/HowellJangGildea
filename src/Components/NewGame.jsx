import React from "react";
import {Link} from "react-router-dom"

const createNewGame = () => {
  alert ("f u")
}

const NewGame = (devId) => {

  
  return ( 
<div class="newGame container">
 <h1>Create New Game</h1>

   <div class="d-flex form-group row">

     <label for="username" class=" col-sm-2 col-form-label">
       Game Title *</label>
     <div class="col-sm-10">
       <input  class="registerForm form-control wbdv-field wbdv-username"
                     id="username"></input>
     </div>
   </div>
   <div class="form-group row">
     <label for="image" class="col-sm-2 col-form-label">
       Image URL *</label>
     <div class="col-sm-10">
       <input  type="password" class="registerForm form-control wbdv-field wbdv-password"
           id="image"></input>
     </div>
   </div>

     <div class="form-group row">
     <label for="images" class="col-sm-2 col-form-label">
       Release Date *</label>
     <div class="col-sm-10">
       <input  type="date" class="registerForm form-control wbdv-field wbdv-password"
           id="images"></input>
     </div>
   </div>
       <div class="form-group row">
     <label for="images" class="col-sm-2 col-form-label">
       Additional Images</label>
     <div class="col-sm-10">
       <input  type="password" class="registerForm form-control wbdv-field wbdv-password"
           id="images"></input>
     </div>
   </div>
   <div class="form-group row">
     <label for="video" class="col-sm-2 col-form-label">
       Video URL </label>
     <div class="col-sm-10">
       <input type="password" class="registerForm form-control wbdv-field wbdv-password-verify"
           id="video"></input>
     </div>
   </div>
     <div class="form-group row">
     <label for="plats" class="col-sm-2 col-form-label">
       Platforms </label>
     <div class="col-sm-10">
       <input type="password" class="registerForm form-control wbdv-field wbdv-password-verify"
           id="plats"></input>
     </div>
   </div>
     <div class="form-group row">
     <label for="stores" class="col-sm-2 col-form-label">
       Stores </label>
     <div class="col-sm-10">
       <input type="password" class="registerForm form-control wbdv-field wbdv-password-verify"
           id="stores"></input>
     </div>
   </div>
   <div class="form-group row">
     <label class="col-sm-2 col-form-label"></label>
     <div class="col-sm-10">
        <button onClick={() => createNewGame()} id="authenticate"  class="btn btn-primary btn-block wbdv-login">Create New Game</button>
         <Link to="/"><button style={{display:"none"}} id="reg" class="btn btn-secondary btn-block wbdv-login">Return Home</button></Link>
       <div class="row">
         <div class="col-6">
           
         </div>
         
       </div>
     </div>
   </div>
</div>
    )
}
export default NewGame

