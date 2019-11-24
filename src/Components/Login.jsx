import React from "react";
import {Link} from "react-router-dom"

const Head = () => {
    return (
        <div class="container">
 <h1>Sign In</h1>
 
   <div class="form-group row">
     <label for="username" class="col-sm-2 col-form-label">
       Username </label>
     <div class="col-sm-10">
       <input class="form-control wbdv-field wbdv-username"
                     id="username"
           placeholder="Alice"></input>
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
     <label class="col-sm-2 col-form-label"></label>
     <div class="col-sm-10">
       
         <Link to="/"><button class="btn btn-primary btn-block wbdv-login">Sign in</button></Link>
       <div class="row">
         
         <div class="col-6">
          <Link to="/register"><div>Sign up</div></Link>
         </div>
       </div>
     </div>
   </div>
 
</div>
    )
}
export default Head

