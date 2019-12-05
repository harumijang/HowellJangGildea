import React from "react";
import {Link} from "react-router-dom"

const Profile = ({setUser, username, type}) => {
  
    const authenticate = () => {
    console.log(setUser)
    let un = document.getElementById("username").value;
    let pw = document.getElementById("password").value;
    
    
    //Actual anuthentication done with database
    if (un) {
      setUser(un)
    } else {
      alert("username required")
      return;
    }
    
    //document.getElementById("login").style.display = "block";
    //document.getElementById("authenticate").style.display = "none";
    
  }
  
    return (
 
     
<div class="register container">
 <h1>Profile</h1>

   <div class="form-group row">
     <label for="username" class=" col-sm-2 col-form-label">
       Username </label>
     <div class="col-sm-10">
       {console.log(username)}
       <input class="form-control wbdv-field wbdv-username"
                     id="username"
           placeholder={username}></input>
     </div>
   </div>
   <div class="form-group row">
     <label for="password" class="col-sm-2 col-form-label">
       Password </label>
     <div class="col-sm-10">
       <input type="password" class="form-control wbdv-field wbdv-password"
           id="password" placeholder="123qwe#$%"></input>
     </div>
   </div>
   <div class="form-group row">
     <label for="passwordVerify" class="col-sm-2 col-form-label">
       Verify Password </label>
     <div class="col-sm-10">
       <input type="password" class="form-control wbdv-field wbdv-password-verify"
           id="passwordVerify" placeholder="123qwe#$%"></input>
     </div>
     {type == "dev" ?
           <Link to="/newGame"><button class="btn btn-primary">Add Game</button> </Link>:<button class="btn btn-primary">View Reviews</button>}
   </div>
   <div class="form-group row">
     <label class="col-sm-2 col-form-label"></label>
     <div class="col-sm-10">
       
         <div class="d-flex">
          <button onClick={() => authenticate()} class="btn btn-primary wbdv-button wbdv-register">Update!</button>
       <Link to="/"><button class="btn btn-primary wbdv-button wbdv-register">Return Home</button></Link>
       </div>
       <div class="row">
         <div class="col-6">
           
         </div>
         
       </div>
     </div>
   </div>
</div>
    )
}
export default Profile

