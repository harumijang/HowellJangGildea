export default class DevService {

    static getInstance() {
        if (DevService.myInstance == null) {
            DevService.myInstance =
                new DevService();
        }
        return this.myInstance;
    }


findDevById = did => 
    fetch(`https://damp-hollows-38137.herokuapp.com/api/developers/${did}`)
    .then(response => response.json())


deleteDev = did =>
fetch(`https://damp-hollows-38137.herokuapp.com/api/developers/${did}`, {
    method: 'DELETE'

}).then(response => response.json())

updateDev = ( newUser) => {
  console.log(newUser)
  fetch(`https://damp-hollows-38137.herokuapp.com/api/developers/${newUser.id}`, {
     method: 'put',
     body: JSON.stringify(newUser),
     headers: {
        'content-type': 'application/json'
     }
      })
}

}