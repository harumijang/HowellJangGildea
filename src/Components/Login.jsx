import React from "react";
import {Link} from "react-router-dom"

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {gamers:[],devs:[]}    
  }
  
  componentDidMount() {
    fetch("https://damp-hollows-38137.herokuapp.com/api/consumers")
      .then(res => res.json())
      .then(json => this.setState({ gamers: json }));
    fetch("https://damp-hollows-38137.herokuapp.com/api/developers")
      .then(res => res.json())
      .then(json => this.setState({ devs: json }));
  }
   authenticate = () => {
    let un = document.getElementById("username").value;
    let pw = document.getElementById("password").value;
    
    
    //Actual anuthentication done with database 
     /*
    if (un) {
      this.props.setUser(un)
    } else {
      alert("username required")
      return;
    }
     */
     for (let i = 0; i < this.state.gamers.length; i++) {
       if (un === this.state.gamers[i].username && pw === this.state.gamers[i].password) {
       
         this.props.setUser(un, "gamer", this.state.gamers[i].id)
         document.getElementById("login").style.display = "block";
        document.getElementById("authenticate").style.display = "none";
         document.getElementById('username').disabled = true;
         document.getElementById('password').disabled = true;
         return;
       }
     }
     for (let i = 0; i < this.state.devs.length; i++) {
       if (un === this.state.devs[i].username && pw === this.state.devs[i].password) {
         this.props.setUser(un, "dev", this.state.devs[i])
       
         document.getElementById("login").style.display = "block";
        document.getElementById("authenticate").style.display = "none";
         document.getElementById('username').disabled = true;
         document.getElementById('password').disabled = true;
         return;
       }
     }
     
     alert ("Invalid Login")
    
    //document.getElementById("login").style.display = "block";
    //document.getElementById("authenticate").style.display = "none";
    
  }
  
   render()  {
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
       <button onClick={() => this.authenticate()} id="authenticate"  class="btn btn-primary btn-block wbdv-login">Login</button>
         <Link to="/"><button style={{display:"none"}} id="login" class="btn btn-secondary btn-block wbdv-login">Return Home</button></Link>
       <div class="row">
         
         <div class="col-6">
          <Link to="/register"><div>Sign up</div></Link>
         </div>
       </div>
     </div>
   </div>
 
</div>
    )}
}
export default Login

