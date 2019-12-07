import React from "react";
import { Router, Route, Link } from "react-router-dom";
import ReviewService from "../Services/ReviewService";
import GameService from "../Services/GameService";
import GamerService from "../Services/GamerService";

const reviewService = ReviewService.getInstance();
const gameService = GameService.getInstance();
const gamerService = GamerService.getInstance();


const reviewsAllowedOnScreen = 30;

class GamePageBody extends React.Component {
  
  constructor(props) {
    super (props)
    this.state = {reviews: []};
  }
  componentDidMount() {
    fetch(`https://damp-hollows-38137.herokuapp.com/api/games/${this.props.game.id}/reviews`)
      .then(res => res.json())
      .then(json => this.setState({ reviews: json }));
  }
  
    hasPicture = () => {
      if (this.props.game.short_screenshots){
        if (this.props.game.short_screenshots.length > 0) {
            return this.props.game.short_screenshots[0].image
        } else {
            return "https://legacytaylorsville.com/wp-content/uploads/2015/07/No-Image-Available1.png"
        }
      } else {
        if (this.props.game.imgURLs.length > 0) {
          let temp = this.props.game.imgURLs.split(',')
          return temp[0]
        } else {
          return "https://legacytaylorsville.com/wp-content/uploads/2015/07/No-Image-Available1.png"
        }
          
      }
    }
     removeFirstPicture = () => {
        let temp = [];
       if (this.props.game.imgURLs) {
         temp = this.props.game.imgURLs.split(',');
         return temp
       }
        for (let i = 1; i < this.props.game.short_screenshots.length; i++) {
            temp.push(this.props.game.short_screenshots[i])
        }
        return temp;
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

    
    render(){
    return (
        
        
        <div>
    <div class="d-flex">
       <img width="292" height="208" src={this.hasPicture()}></img>
       {this.props.game.clip ? <iframe width="620" height="220" src={this.props.game.clip.clip}>
</iframe> : <iframe width="620" height="220" >
</iframe>}
        
        </div>
        <div class="d-flex">
       <strong> <div>Genres:&nbsp;</div></strong>
        {
            this.props.game.imgURLs ? this.props.game.genres.split(',').map((genre, index) => {
                if (index < this.props.game.genres.split(',').length-1) {
                    return (<div>{genre.name},&nbsp;</div>)
                } else {return (<div>{genre.name}</div>)}
            }): 
          this.props.game.genres.map((genre, index) => {
                if (index < this.props.game.genres.length-1) {
                    return (<div>{genre.name},&nbsp;</div>)
                } else {return (<div>{genre}</div>)}
            })
          
          }
            </div>
        
            {this.props.game.released ? 
                <div class="d-flex"><strong><div>Release Date:&nbsp;</div> </strong><div>{this.parseDate(this.props.game.released)}</div></div> :
               <strong> <div>Release Date:</div></strong>} 
       
        
        <div class="d-flex flex-column">
       <div class="d-flex">
            
        <div>
        <h4 id="platformHead">Platforms:&nbsp;</h4>
        <div class="d-flex flex-column">
        {typeof this.props.game.platforms == "object" ?
        this.props.game.platforms.map(plat => {
                 return (<div>{plat.platform.name}</div>)
            }): 
        this.props.game.platforms.split(',').map(plat => {
                 return (<div>{plat}</div>)})
        }
    </div>
        </div>
            <div class="">
        <h4 id="platformHead">Stores:&nbsp;</h4>
        <div class="d-flex flex-column">
        {typeof this.props.game.stores == "object" ?
        this.props.game.stores.map(store => {
                 return (<div>{store.store.name}</div>)
            }):null}
    </div>
        </div>
           </div>
            </div>
            
      
      
      
        <h3>Pictures</h3>
        {console.log("reviews state check" + this.state.reviews)}
        {console.log("body" + this.props.game.id + " " + this.props.userId)}
        {this.removeFirstPicture().map(pic => {
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
        gameService.findGameById(this.props.game.id), gamerService.findGamerById(this.props.userId),
        document.getElementById("addReview").style.display = "none")} 
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
    )}
}
export default GamePageBody

