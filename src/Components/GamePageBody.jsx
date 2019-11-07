import React from 'react'

const GamePageBody = ({game}) => {
    return (
        <div>
    <div class="d-flex">
       <img src="https://picsum.photos/id/119/200/300"></img>
       <div class="d-flex flex-column">
       <h1>Game Title</h1>
           <div class="d-flex"><h1>Score 8.3/10</h1> <h2>Rate</h2></div>
           <p>ADD MORE STUFF HERE LATER</p>
            </div>
        </div>
        <h3>Lead Dev:</h3>
        <h3>Studio:</h3>
        <h3>Publisher</h3>
        </div>
    )
}
export default GamePageBody