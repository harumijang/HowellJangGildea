import React from "react";
import {Link} from "react-router-dom"

const Review = (review, rGame) => {
    
  
  return ( 
    <div class="container review">
      {console.log(rGame)}
    <Link to={
            { 
                pathname: '/game/' + rGame.id,
                game: rGame
            }
      }>Return to Game </Link>
    
      <div class="d-flex justify-content-center"><h1>Review</h1> </div>
      <h6> <strong>User:</strong> {review.review.user}</h6>
      {console.log(review)}
      <p>{review.review.reviewContent}</p>
    </div>
    )
}
export default Review

