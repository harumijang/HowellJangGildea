import React from "react";
import {Link} from "react-router-dom"
import GamerService from "../Services/GamerService"
import ReviewService from "../Services/ReviewService"
import DevService from "../Services/DevService"


class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: null,
      games: [],
      consumers: [],
      devs: [],
      ifIsGamer: null,
      ifIsDev:null
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
  
  componentDidMount() {
    let id = this.props.userId.id
    console.log(this.props)
    if (this.props.isThirdParty.location.isThirdParty) {
      id = this.props.isThirdParty.location.isThirdParty.id;
      console.log(id)
    fetch(`https://damp-hollows-38137.herokuapp.com/api/developers/${id}/games`)
    .then(response => response.json())
    .then(response => this.setState({games:response}))
    
        fetch(`https://damp-hollows-38137.herokuapp.com/api/consumers`)
    .then(response => response.json())
    .then(response => this.setState({consumers:response}))

   
    if (this.props.isThirdParty.location.isThirdParty.reviews) {
        fetch(`https://damp-hollows-38137.herokuapp.com/api/consumers/${id}`)
      .then(response => response.json())
      .then(response => this.setState({ifIsGamer:response}))
    } else {
        fetch(`https://damp-hollows-38137.herokuapp.com/api/developers/${id}`)
      .then(response => response.json())
      .then(response => this.setState({ifIsDev:response}))
    }
    
    //let user = gs.findGamerById(id).
   // then(response => this.whatType(response))
    
    }
    
     fetch(`https://damp-hollows-38137.herokuapp.com/api/consumers`)
    .then(response => response.json())
    .then(response => this.setState({consumers:response}))
     
      fetch(`https://damp-hollows-38137.herokuapp.com/api/developers`)
    .then(response => response.json())
    .then(response => this.setState({devs:response}))
    
        fetch(`https://damp-hollows-38137.herokuapp.com/api/developers/${id}/games`)
    .then(response => response.json())
    .then(response => this.setState({games:response}))
    
    
    
    
  }
  
  whatType(user) {
    if (user.reviews) {
      this.setState({isIsGamer:user})
    } 
    //if (user.)
  }
  
  updateUser(id) {
    //console.log(id)
    let gs = GamerService.getInstance()
    let ds = DevService.getInstance()
    let type = this.props.type;
    let user
    if (type == "gamer") {
      user = gs.findGamerById(id)
    } else {
      console.log(id)
      user = ds.findDevById(id.id)
    }
    
    
    
    let un = document.getElementById("username").value;
    let pw = document.getElementById("password").value;
    let pwv = document.getElementById("passwordVerify").value;
    
    let newUser;
    
    if (pw === "" || pwv === "" || un === "") {
      alert("Fill out fields to update profile");
      return;
    }
    
    if (pw !== pwv) {
      alert("Passwords do not match")
      return;
    }
    
   
      for (let i = 0; i < this.state.consumers.length; i++) {
        if (this.state.consumers[i].username == un && this.props.username != un) {
          alert("username taken")
          return;
        }
      }
     
      for (let i = 0; i < this.state.devs.length; i++) {
        if (this.state.devs[i].username == un && this.props.username != un) {
          alert("username taken")
          return;
        }
      }
    
      user.username = un;
      user.password = pw;
    
    
    if (this.props.type == "gamer") {
      gs.updateGamer(user, id)
    } else {
      //user.games = this.state.games
      ds.updateDev (user, id.id)
    }
  
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("passwordVerify").value = "";
   alert("done")
    //gs.updateGamer(user, id)
    
    
  }
  
  updateRev() {
    //alert("reviewUpdatee")
    let revs = document.getElementsByClassName("reviewEdit");
    let rev;
    let rid;
    let content = document.getElementById("exampleFormControlTextarea1").value;
    for (let i = 0; i < revs.length; i++) {
      if (revs[i].style.backgroundColor == "lightgray") {
        rid = revs[i].id
      }
    }
    rev = {id:rid, reviewContent:content}
    //console.log(rev)
    let rs = ReviewService.getInstance()
    rs.updateReview(rev)
  }
  
  selectRev(event) {
    let revs = document.getElementsByClassName("reviewEdit");
    for (let i = 0; i < revs.length; i++) {
      revs[i].style.backgroundColor = "transparent"
    }
    //console.log(event)
    event.target.style.backgroundColor = "lightgray"
    document.getElementById("exampleFormControlTextarea1").value = event.target.innerHTML
  }
  
  findGamer(id, size) {
    let gs = GamerService.getInstance()
    let user = gs.findGamerById(id).then(response => this.test2(response))
    console.log(user)
  }
  
  findDev(devel) {
    //console.log(id)
    let ds = DevService.getInstance()
    let dev = ds.findDevGamesById(devel.id).then(response => this.devHelp(response))
  }
  
  devHelp(games) {
    this.setState({games:games})
    //console.log(this.state.user)
    if (this.state.games) {
      if (this.state.games.length > 0) {
        //document.getElementById("editReview").style.display = "block"
        
      } else {
        alert("You have no games")
      }
    }
  }
  
  test2(user) {
    this.setState({user:user})
    //console.log(this.state.user)
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
       {console.log(this.props)}
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
       <div>
     <Link to="/newGame"><button class="btn btn-primary">Add Game</button></Link>
       <button onClick={() => this.findDev(this.props.userId)} class="btn btn-primary">Update Games</button> 
       
       {this.state.games ? 
       this.state.games ? 
        this.state.games.length > 0 ? this.state.games.map(r => {
          return (
            
            
            <Link to={
            { 
                pathname: '/updateGame/',
                game: r
            }
        }>
          <div style={{color:"white"}} id={r.id} onClick={(event) => this.selectRev(event)} class="reviewLarge reviewEdit">{r.id}</div>
          </Link> 
          
          )      
            }) 
     :null
     : null
     
     : null
     }</div>
       :
       <button class="btn btn-primary" onClick={() => this.findGamer(this.props.userId)}>View Reviews</button>}
     {this.state.user ? 
       this.state.user.reviews ? 
        this.state.user.reviews.length > 0 ? this.state.user.reviews.map(r => {
          return (<div style={{color:"white"}} id={r.id} onClick={(event) => this.selectRev(event)} class="reviewLarge reviewEdit">{r.reviewContent}</div>)      
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
          <button onClick={() => this.updateUser(this.props.userId)} class="btn btn-primary wbdv-button wbdv-register">Update Profile!</button>
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
            {console.log(this.props)}
          <div class="d-flex justify-content-center"> <h2 id="profile-heading">Games:</h2> </div>
          {this.state.games.map(game => {
            return (
              
              
            
             <Link to={
            { 
                pathname: '/game/' + game.id,
                game: game
            }
        }>
          <p style={{color:"white"}}  class="reviewLarge">{game.name}</p>
          </Link> 
              
            )
          })}
          </div>
          
          }
          
          </div>
         
  }
      </div>
    )}
}
export default Profile

