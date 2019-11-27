import React from "react";
import {Link} from "react-router-dom"

const Review = (review) => {
    
  
  return ( 
    <div class="container review">
      <div class="d-flex justify-content-center"><h1>Review</h1> </div>
      <h6> <strong>User:</strong> {review.review.user}</h6>
      {console.log(review)}
      <p>{review.review.text}</p>
    </div>
    )
}
export default Review

