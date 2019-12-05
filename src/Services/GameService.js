export default class GameService {

    static getInstance() {
        if (GameService.myInstance == null) {
            GameService.myInstance =
                new GameService();
        }
        return this.myInstance;
    }


createGame = (newGame) => {
   fetch("https://damp-hollows-38137.herokuapp.com/api/games", {
     method: 'post',
     body: JSON.stringify(newGame),
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

}