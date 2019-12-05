import React from "react";
import {Link} from "react-router-dom"

class Register extends React.Component {
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
  
  newAccount(u,p,type) {
    let newUser;
      if (type === "developers") {
         newUser = {username:u,password:p,games:[]}
      } else {
        alert("hit");
        newUser = {username:u,password:p,reviews:[]}
      }
    
    console.log(newUser)
   
      fetch("https://damp-hollows-38137.herokuapp.com/api/" + type, {
         method: 'post',
         body: JSON.stringify(newUser),
         headers: {
                'content-type': 'application/json'
         }
      });  
  }
  
  authenticate() {
    let un = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let passwordV = document.getElementById("passwordVerify").value;
  
    
    
    //make sure everything is filled out
    let inputs = document.getElementsByClassName("registerForm");
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].value === "") {
        alert("Please fill out all forms")
        return;
      }
    }
    
    
    let isGamer = document.getElementById("gamer").checked;
    
     if (isGamer) {
        for (let i = 0; i < this.state.gamers.length; i++) {
         if (un === this.state.gamers[i].username) {
           //this.props.setUser(un)
           //document.getElementById("login").style.display = "block";
          //document.getElementById("authenticate").style.display = "none";
           alert ("Consumer Username taken")
           return;
         }
       }
       if (password === passwordV) {
         this.newAccount(un,password,"consumers")
         alert("Consumer approved")
       } else {
         alert("passwords differ")
         
       }
       return;
     }

     for (let i = 0; i < this.state.devs.length; i++) {
       if (un === this.state.devs[i].username && password === this.state.devs[i].password) {
         alert ("Developer username taken")
         return;
       }
     }
       if (password.value === passwordV.value) {
        this.newAccount(un,password,"developers")
         alert("Developer approved")
         this.newAccount(un,password,"developers")
       } else {
         alert("passwords differ")
         
       }
       return;
  }

    render () {
    return (
 
     
<div class="register container">
 <h1>Sign Up</h1>
  <label><input id="gamer" type="radio" name="optradio" checked></input><strong>&nbsp;Gamer&nbsp;&nbsp;&nbsp;</strong> </label>
  <label><input id="dev" type="radio" name="optradio"></input><strong>&nbsp;Developer</strong> </label><br></br>
   <div class="form-group row">
     <label for="username" class=" col-sm-2 col-form-label">
       Username </label>
     <div class="col-sm-10">
       <input  class="registerForm form-control wbdv-field wbdv-username"
                     id="username"
           placeholder="Alice"></input>
     </div>
   </div>
   <div class="form-group row">
     <label for="password" class="col-sm-2 col-form-label">
       Password </label>
     <div class="col-sm-10">
       <input  type="password" class="registerForm form-control wbdv-field wbdv-password"
           id="password" placeholder="123qwe#$%"></input>
     </div>
   </div>
   <div class="form-group row">
     <label for="passwordVerify" class="col-sm-2 col-form-label">
       Verify Password </label>
     <div class="col-sm-10">
       <input type="password" class="registerForm form-control wbdv-field wbdv-password-verify"
           id="passwordVerify" placeholder="123qwe#$%"></input>
     </div>
   </div>
   <div class="form-group row">
     <label class="col-sm-2 col-form-label"></label>
     <div class="col-sm-10">
        <button onClick={() => this.authenticate()} id="authenticate"  class="btn btn-primary btn-block wbdv-login">Register</button>
         <Link to="/"><button style={{display:"none"}} id="reg" class="btn btn-secondary btn-block wbdv-login">Return Home</button></Link>
       <div class="row">
         <div class="col-6">
          <Link to="/login"><div >Sign in!</div></Link>
           
         </div>
         
       </div>
     </div>
   </div>
</div>
    )}
}
export default Register

