export default class GamerService {

    static getInstance() {
        if (GamerService.myInstance == null) {
            GamerService.myInstance =
                new GamerService();
        }
        return this.myInstance;
    }


findGamerById = cid => 
    fetch(`https://damp-hollows-38137.herokuapp.com/api/consumers/${cid}`)
    .then(response => response.json())


deleteGamer = gid =>
fetch(`https://damp-hollows-38137.herokuapp.com/api/gamers/${gid}`, {
    method: 'DELETE'

}).then(response => response.json())

updateGamer = ( newUser) => {
  fetch(`https://damp-hollows-38137.herokuapp.com/api/gamers/${newUser.id}`, {
     method: 'put',
     body: JSON.stringify(newUser),
     headers: {
        'content-type': 'application/json'
     }
      })
}

}