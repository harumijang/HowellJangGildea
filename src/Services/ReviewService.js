
export default class ReviewService {

    static getInstance() {
        if (ReviewService.myInstance == null) {
            ReviewService.myInstance =
                new ReviewService();
        }
        return this.myInstance;
    }


createReview = (content, gameID, userID) => 
    // fetch(`https://damp-hollows-38137.herokuapp.com/api/games/${gameID}/reviews`, {
    fetch(`http://localhost:8080/api/games/${gameID}/reviews`, {
     method: 'post',
     body: JSON.stringify({content:content, gid: gameID, uid: userID}),
     headers: {
            'content-type': 'application/json'
     }
  }).then(response => response.json());
  

findAllReviewsForGame = gid =>
fetch(`https://damp-hollows-38137.herokuapp.com/api/games/${gid}/reviews`)
.then(response => response.json())


findReviewById = rid => 
    fetch(`https://damp-hollows-38137.herokuapp.com/api/reviews/${rid}`)
    .then(response => response.json())


deleteReview = rid =>
fetch(`https://damp-hollows-38137.herokuapp.com/api/reviews/${rid}`, {
    method: 'DELETE'

}).then(response => response.json())

updateReview = ( newRev) => {
  console.log(newRev)
  fetch(`https://damp-hollows-38137.herokuapp.com/api/reviews/${newRev.id}`, {
     method: 'put',
     body: JSON.stringify(newRev),
     headers: {
        'content-type': 'application/json'
     }
      })
}

}