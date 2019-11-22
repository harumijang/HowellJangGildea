import React from "react";

const GamePageBody = ({game}) => {
    return (
        <div>
    <div class="d-flex">
       <img width="192" height="108" src={game.short_screenshots[0].image}></img>
       <div class="d-flex flex-column">
       <h1>{game.name}</h1>
           <div class="d-flex"><h1>{game.rating}/5</h1> <h2>Rate</h2></div>
           <p>ADD MORE STUFF HERE LATER</p>
            </div>
        </div>
        {game.short_screenshots.map(pic => {
                return (<img height="42" width="42" src={pic.image}></img>)
            })}
        </div>
    )
}
export default GamePageBody

