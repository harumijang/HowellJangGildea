import React from 'react'
import GamePageBody from './GamePageBody.jsx'

const GamePageHeader = ({game}) => {
    return (
    <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">

        <h1>GAME TITLE</h1>
    
     </nav> 
       <GamePageBody/>
        </div>
    )
}
export default GamePageHeader