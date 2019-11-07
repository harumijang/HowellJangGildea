import React from 'react'
import GamePageBody from './GamePageBody.jsx'

const GamePageHeader = ({game}) => {
    return (
        
        <div><div id="title" class="d-flex justify-content-center">

        <h1>GAME TITLE</h1>
    
      </div>
        <div class="container">
  <div class="row">
    <div class="col">
     
    </div>
    <div class="col-9">
         
       <GamePageBody/>
    </div>
    <div class="col">
      
    </div>
  </div>
        </div>
        </div>
        
      
    )
}
export default GamePageHeader