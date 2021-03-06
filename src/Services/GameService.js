export default class GameService {

    static getInstance() {
        if (GameService.myInstance == null) {
            GameService.myInstance =
                new GameService();
        }
        return this.myInstance;
    }


createGame = (newGame, devObjects) => {
//    fetch("https://damp-hollows-38137.herokuapp.com/api/games", {
 fetch(`http://localhost:8080/api/games`, {

     method: 'post',
     body: JSON.stringify(newGame, devObjects),
     headers: {
            'content-type': 'application/json'
     }
  });
  }


findGameById = gid => 
    fetch(`https://damp-hollows-38137.herokuapp.com/api/games/${gid}`)
    .then(response => response.json())


deleteGame = gid =>
fetch(`https://damp-hollows-38137.herokuapp.com/api/games/${gid}`, {
    method: 'DELETE'

}).then(response => response.json())

updateGame = (newGame, gid) => {
  fetch(`https://damp-hollows-38137.herokuapp.com/api/consumers/${gid}`, {
     method: 'put',
     body: JSON.stringify(newGame),
     headers: {
        'content-type': 'application/json'
     }
      })
}

}