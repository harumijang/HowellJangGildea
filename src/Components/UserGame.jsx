import GamePageBody from "./GamePageBody.jsx";
import {Link} from "react-router-dom"
import React, { Component } from "react";
import ReviewService from "../Services/ReviewService"
import GamerService from "../Services/GamerService"
import GameService from "../Services/GameService"

const reviewService = ReviewService.getInstance();
const gameService = GameService.getInstance();
const gamerService = GamerService.getInstance();
const reviewsAllowedOnScreen = 3
export default class UserGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTitle: "",
      newGame: this.findGameById(this.gameId), 
      reviews: []
    };
  }
  componentDidMount() {
   
      let gameId = window.location.href
    let temp = gameId.split("/")
    gameId = temp[temp.length-1]
    //newGame: this.findGameById(gameId)
    
    fetch(`https://damp-hollows-38137.herokuapp.com/api/games/${this.props.game.location.game.id}/reviews`)
      .then(res => res.json())
      .then(json => this.setState({ reviews: json }));
  }
  findGameById(id) {
      fetch(`https://api.rawg.io/api/games/${id}`)
        .then(response => response.json())
        .then(response => {
        console.log(1)
          return response;
      }) 
    };

  
      hasPicture() {
         console.log(this.props)
         
        if (this.props.game.location.game.imgURLs.split(',').length > 0) {
            return this.props.game.location.game.imgURLs.split(',')[0]
        } else {
            return "https://legacytaylorsville.com/wp-content/uploads/2015/07/No-Image-Available1.png"
        }
    }
  
  
       parseDate = (date) => {
        let dateArr = date.split("-")
        var monthMap = new Map([["01" , "January"], ["02" ,"February"] ,["03", "March"], ["04", "April"], ["05", "May"], ["06", "June"], ["07", "March"],["08", "August"],["09", "September"],["10", "October"],["11", "November"],["12", "December"]]); 
        let temp = dateArr[2];
        temp += " ";
        temp += monthMap.get(dateArr[1])
        temp += ", "
        temp += dateArr[0]
        return temp
    }
     addReview = (type) => {
       if (type != "gamer") {alert("Please sign in with a consumer account");return;}

       document.getElementById("addReview").style.display = "block"
     }
     
     submitReview = (id) => {
       let r = document.getElementById("rev").value
       console.log(r)
       let review = {id:111,reviewContent: r}
       
      fetch("https://damp-hollows-38137.herokuapp.com/api/reviews" , {
         method: 'post',
         body: JSON.stringify(review),
         headers: {
                'content-type': 'application/json'
         }
      });
       
       alert("review submitted")
      // document.getElementById("addReview").style.display = "none"
       
       
     }
  
  
  
    render () {
        return (
                <div id="gamePage">
            {console.log(this.props)}
           <Link to="/"> <h3>Return to Home</h3></Link>
      <div id="title" class="d-flex justify-content-center">
      </div>
      <div class="container">
        <div class="row">
          <div class="col"></div>
          <div class="col-9 gamePageBody">
          <div class="d-flex justify-content-around">
           <h1 style={{color:"black"}} >{this.props.game.location.game.name}</h1>
        
            
           <div class="d-flex"><h1 style={{color:"black"}}>/5&nbsp;</h1><p >&nbsp;ratings</p></div>
           </div>
            
            
            
             <div>
    <div class="d-flex">
       <img width="292" height="208" src={this.hasPicture()}></img>
       {this.props.game.location.game.videoURL ? <iframe width="620" height="220" src={this.props.game.location.game.videoURL}>
</iframe> : <iframe width="620" height="220" >
</iframe>}
        
        </div>
        <div class="d-flex">
       <strong> <div>Genres:&nbsp;</div></strong>
        {this.props.game.location.game.genres ? this.props.game.location.game.genres.split(',').map((genre, index) => {
                if (index < this.props.game.location.game.genres.split(',').length-1) {
                    return (<div>{genre},&nbsp;</div>)
                } else {return (<div>{genre}</div>)}
            }): null}
            </div>
        
            {this.props.game.released ? 
                <div class="d-flex"><strong><div>Release Date:&nbsp;</div> </strong><div>{this.parseDate(this.props.game.date)}</div></div> :
               <strong> <div>Release Date:</div></strong>} 
       
        
        <div class="d-flex flex-column">
       <div class="d-flex">
            
        <div>
        <h4 id="platformHead">Platforms:&nbsp;</h4>
        <div class="d-flex flex-column">
        {this.props.game.location.game.platforms ?
        this.props.game.location.game.platforms.split(',').map(plat => {
                 return (<div>{plat}</div>)
            }): null}
    </div>
        </div>
            <div class="">
        <h4 id="platformHead">Stores:&nbsp;</h4>
        <div class="d-flex flex-column">
        {this.props.game.location.game.stores ?
        this.props.game.location.game.stores.split(',').map(store => {
                 return (<div>{store}</div>)
            }):null}
    </div>
        </div>
           </div>
            </div>
            
      
      
      
        <h3>Pictures</h3>
        {this.props.game.location.game.imgURLs.split(',').map(pic => {
                return (<img height="108" width="192" src={pic.image}></img>)
            })}
        <div class="d-flex justify-content-between">
          
          
          
          <h3><strong>Reviews</strong></h3>
          <button onClick={() => this.addReview(this.props.type)} class="btn btn-primary">Add Review</button>
        </div>

       {this.props.type == "gamer" ? <div id="addReview" style={{display:"none"}} >
         <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        <button onClick={() => 
        reviewService.createReview(document.getElementById('exampleFormControlTextarea1').value, 
        gameService.findGameById(this.props.game.location.game.id), gamerService.findGamerById(this.props.userId),
        document.getElementById("addReview").style.display = "none"),
                                     console.log(this.props.game.location.game.id)
             } 
        class="btn btn-primary">Submit</button>
        </div>:null}

        
        
        {this.state.reviews.map((r, index) => {
          const id = this.props.game.id
          if (index < reviewsAllowedOnScreen) {
            return (r.reviewContent.length<100 ? <div class="reviewSmall"><p >{r.reviewContent.substr(0,100)}</p></div>:  <Link to={
                    { 
                        pathname: '/review',
                        review: r,
                        rGame: id
                    }
                      }>
                     
            <div class="reviewSmall"><p >{r.reviewContent.substr(0,100)}........</p></div></Link>)     
          }
          if (index === reviewsAllowedOnScreen) {
            return (<h3>See More!</h3>)
          }
      
            
        })}
        </div>
            
            
            
            
            
            
            
            
            
            
            
            
            

          </div>
          <div class="col"></div>
        </div>
      </div>
    </div>
        )
    }
}
