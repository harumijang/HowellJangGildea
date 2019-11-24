import React from "react";

const GamePageBody = ({game}) => {
    
    const hasPicture = () => {
        if (game.short_screenshots.length > 0) {
            return game.short_screenshots[0].image
        } else {
            return "https://legacytaylorsville.com/wp-content/uploads/2015/07/No-Image-Available1.png"
        }
    }
    const removeFirstPicture = () => {
        let temp = [];
        for (let i = 1; i < game.short_screenshots.length; i++) {
            temp.push(game.short_screenshots[i])
        }
        return temp;
    }
    const parseDate = (date) => {
        let dateArr = date.split("-")
        var monthMap = new Map([["01" , "January"], ["02" ,"February"] ,["03", "March"], ["04", "April"], ["05", "May"], ["06", "June"], ["07", "March"],["08", "August"],["09", "September"],["10", "October"],["11", "November"],["12", "December"]]); 
        let temp = dateArr[2];
        temp += " ";
        temp += monthMap.get(dateArr[1])
        temp += ", "
        temp += dateArr[0]
        return temp
    }
    
    return (
        
        
        <div>
    <div class="d-flex">
       <img width="292" height="208" src={hasPicture()}></img>
       {game.clip ? <iframe width="620" height="220" src={game.clip.clip}>
</iframe> : <iframe width="620" height="220" >
</iframe>}
        
        </div>
        <div class="d-flex">
       <strong> <div>Genres:&nbsp;</div></strong>
        {game.genres ? game.genres.map((genre, index) => {
                if (index < game.genres.length-1) {
                    return (<div>{genre.name},&nbsp;</div>)
                } else {return (<div>{genre.name}</div>)}
            }): null}
            </div>
        
            {game.released ? 
                <div class="d-flex"><strong><div>Release Date:&nbsp;</div> </strong><div>{parseDate(game.released)}</div></div> :
               <strong> <div>Release Date:</div></strong>} 
       
        
        <div class="d-flex flex-column">
       <div class="d-flex">
            
        <div>
        <h4 id="platformHead">Platforms:&nbsp;</h4>
        <div class="d-flex flex-column">
        {game.platforms ?
        game.platforms.map(plat => {
                 return (<div>{plat.platform.name}</div>)
            }): null}
    </div>
        </div>
            <div class="">
        <h4 id="platformHead">Stores:&nbsp;</h4>
        <div class="d-flex flex-column">
        {game.stores ?
        game.stores.map(store => {
                 return (<div>{store.store.name}</div>)
            }):null}
    </div>
        </div>
           </div>
            </div>
            
      
      
      
        <h3>Pictures</h3>
        {removeFirstPicture().map(pic => {
                return (<img height="108" width="192" src={pic.image}></img>)
            })}
        </div>
    )
}
export default GamePageBody

