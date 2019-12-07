import React from "react";
import {Link} from "react-router-dom"
import GamerService from "../Services/GamerService"
import ReviewService from "../Services/ReviewService"

class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: null
    };
  }
    authenticate() {
    console.log(this.props.setUser)
    let un = document.getElementById("username").value;
    let pw = document.getElementById("password").value;
    
    
    //Actual anuthentication done with database
    if (un) {
      this.props.setUser(un)
    } else {
      alert("username required")
      return;
    }
    
    //document.getElementById("login").style.display = "block";
    //document.getElementById("authenticate").style.display = "none";
    
  }
  
  updateConsumer(id) {
    let gs = GamerService.getInstance()
    let user = gs.findGamerById(id)
    
    let un = document.getElementById("username").value;
    let pw = document.getElementById("password").value;
    let pwv = document.getElementById("passwordVerify").value;
    
    let newUser;
    
    if (pw === "" && pwv === "" && un === "") {
      alert("Fill out fields to update profile");
      return;
    }
    
    if (pw !== pwv) {
      alert("Passwords do not match")
      return;
    }
    
    if (un !== "") {
      user.username = un;
    }
    if (pw !== "") {
      user.password = pw;
    }
    gs.updateGamer(user)
    
    
  }
  
  updateRev() {
    //alert("reviewUpdatee")
    let revs = document.getElementsByClassName("reviewEdit");
    let rid;
    let content;
    for (let i = 0; i < revs.length; i++) {
      if (revs[i].style.backgroundColor === "lightgray") {
        rid = revs[i].id
        content = revs[i].innerHTML
      
      }
    }
    let rs = ReviewService.getInstance()
    let rev = {id: rid, reviewContent: content}
    rs.updateReview(rev)
  }
  
  selectRev(event) {
    let revs = document.getElementsByClassName("reviewEdit");
    for (let i = 0; i < revs.length; i++) {
      revs[i].style.backgroundColor = "none"
    }
    console.log(event)
    event.target.style.backgroundColor = "lightgray"
    document.getElementById("exampleFormControlTextarea1").value = event.target.innerHTML
  }
  
  test(id, size) {
    let gs = GamerService.getInstance()
    let user = gs.findGamerById(id).then(response => this.test2(response))
    console.log(user)
  }
  
  test2(user) {
    this.setState({user:user})
    console.log(this.state.user)
    if (this.state.user.reviews) {
      if (this.state.user.reviews.length > 0) {
        document.getElementById("editReview").style.display = "block"
      } else {
        alert("You have no reviews")
      }
    }
    
  }
  
  render () {
    return (
 
     <div>
  {!this.props.isThirdParty.location.isThirdParty ?
<div class="register container">
  
 <h1>Profile</h1>

   <div class="form-group row">
     <label for="username" class=" col-sm-2 col-form-label">
       Username </label>
     <div class="col-sm-10">
       
       <input class="form-control wbdv-field wbdv-username"
                     id="username"
           placeholder={this.props.username}></input>
     </div>
   </div>
   <div class="form-group row">
     <label for="password" class="col-sm-2 col-form-label">
       New Password </label>
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

     {this.props.type == "dev" ?
     <Link to="/newGame"><button class="btn btn-primary">Add Game</button></Link>:<button class="btn btn-primary" onClick={() => this.test(this.props.userId)}>View Reviews</button>}
     {this.state.user ? 
       this.state.user.reviews ? 
        this.state.user.reviews.length > 0 ? this.state.user.reviews.map(r => {
          return (<div id={r.id} onClick={(event) => this.selectRev(event)} class="reviewLarge reviewEdit">{r.reviewContent}</div>)      
            }) 
     :null
     : null
     
     : null
     }
     
     <div id="editReview" style={{display:"none"}} >
       <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea><button onClick={()=> this.updateRev()} class="btn btn-primary">UpdateReview</button></div>
     

   </div>
   <div class="form-group row">
     <label class="col-sm-2 col-form-label"></label>
     <div class="col-sm-10">
       
         <div class="d-flex">
          <button onClick={() => this.updateConsumer(this.props.UserId)} class="btn btn-primary wbdv-button wbdv-register">Update Profile!</button>
       <Link to="/"><button class="btn btn-primary wbdv-button wbdv-register">Return Home</button></Link>
       </div>
       <div class="row">
         <div class="col-6">
           
         </div>
         
       </div>
     </div>
   </div>
</div>: 
     <div> 
          
          {typeof this.props.isThirdParty.location.isThirdParty.reviews !== 'undefined' ?
         
          <div> 
  <div class="d-flex justify-content-center"> <h1 id="profile-heading"> User:&nbsp;{this.props.isThirdParty.location.isThirdParty.username}</h1></div>
          <div class="d-flex justify-content-center"> <h2 id="profile-heading">Reviews:</h2> </div>
          {this.props.isThirdParty.location.isThirdParty.reviews.map(review => {
            return (<p style={{color:"white"}} class="reviewLarge">{review.reviewContent}</p>)
          })}
          </div> :
          <div> 
  <div class="d-flex justify-content-center"> <h1 id="profile-heading"> User:&nbsp;{this.props.isThirdParty.location.isThirdParty.username}</h1></div>
          <div class="d-flex justify-content-center"> <h2 id="profile-heading">Games:</h2> </div>
          {this.props.isThirdParty.location.isThirdParty.games.map(game => {
            return (<p style={{color:"white"}}  class="reviewLarge">{game.id}</p>)
          })}
          </div>
          
          }
          
          </div>
         
  }
      </div>
    )}
}
export default Profile

