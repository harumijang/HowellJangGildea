import React from "react";
import { Router, Route, Link } from "react-router-dom";

let r1 = {user:"herpes_free_since_03", text:"I just wanted to have a peak into this game, being a FPS fan, and... I decided to stick around. The game is utterly fun. It really is, but on some occasions it gets tiresome, just like most of RPF/FPS games, well if you're playing for pretty damn long time. It grabbed my attention maybe because it reminds me on S.T.A.L.K.E.R., Fallout 3... and maybe little bit on Hellgate London. You know, it has a lot RPG elements... you play with the character that you choose at the start, you can't make your own character, you can just... change their clothes color. But, all those thing are justified in high-voltage, twisted and tense gameplay, really the game action is pretty cool. The more you're growing with levels... the stronger you get. Your opponents are pretty hard, they are specific, which is good point in the game, the AI is also pretty good. The music score sounds pretty swell and ominous on some occasions. The graphics are cool, like being in a comic book. The same graphics were used in new AVP (2010) I guess. You are a mercenary who fights his way to the legendary vault, full of treasure, being attacked by desert nomads, killers, psychos, spider-ants, flying Rakk things... mutants... There's also a lot of references to Mad Max for example, which I like very much. Another reason, perhaps for some people to play this game. I gladly recommend this game to those who likes post-apocalyptic games (well, it just looks visually post-apocalyptic, actually it's an another planet), you'll enjoy it."}


let r2 = {user: "aSoberIrishMan", text: "This game is so much fun. To me it combined the FPS shooter of say Halo with the character leveling and weapon variety of Diablo. Don't get me wrong, it is neither of those games but thats the best way I could describe it to friends that since have played the game and love it as well. The game itself has a simple story, nothing overly fancy going on here. There are main missions and side missions that you do not have to complete. The enemies come back after leaving a level, including bosses. Which, at first are hard to defeat but upon leveling up you can always go back and destroy them for the hell of it. The weapons are fun and so are the character classes you can choose. Now if you are looking for weapons like in say Call of Duty, this is not for you. This game is not meant to be an epic FPS, it is more meant to be fun and a good way to kill some time. Online content I am not sure of, I have only ever played co-op campaign online and it was enjoyable, anything else online I'm not sure. But this game, if you like leveling up, building your character the way you want, using cool random guns, and just blasting random mutants, then don't even think about it, go get this game."}


let r3 = {user: "tradingsexformemes", text:"First perceptions make Borderlands seem like your standard first-person shooter, and it kind of is - The usual control scheme, killing enemies set-up). But the more you play, delving deeper into a fantastical world of bloodthirsty creatures, brutal mercenaries and safeguarding raiders, the more it becomes clear - It, in a way, is NOT a first-person shooter - Well, certainly not the usual type. Don't go into this expecting a linear, objective-strict test of your trigger finger with a thousand identical soldiers in your path for the ultimate emperor who seeks power; don't expect armored spartans and space fights in ships. But if you expect the 'unexpected', chances are your going to be all the more enticed. Borderlands is a great experience, with a huge, semi-open world to explore, thousands of enemies in sprawling locations and hundreds of thousands of guns. Yes, HUNDREDS OF THOUSANDS. It is a highly-accessible shooter, and reaching the level cap never felt better. Again, and unfortunately, with every energized shooter comes a price, but they are not frequent enough to spoil the fun here. It is highly recommended, and may surprise the Call of Duty soldier in you."}


let r4 = {user:"BeatsAroundBush", text:"It's a very streamlined experience; a very easy-to-learn, hard-to-master. From the outset, your fresh off the bus (boat, as it were in GTA, but here it is the not-so American Dream, among other damns) where you picked one of four unique mercenaries prior. There is Mordecai, the Hunter specialized in Sniper weaponry; Brick, the Berserker who specializes in his fists (damn powerful at that); Lilith, the Siren useful with corrosive weapons; and Roland, the Soldier specializing in the standard rifles and soldier weaponry. They are great set-ups, each with unique abilities, chief among them 'Action Skills' - A power that, depending on the class, acts as an ally or a magic spell. For example, Roland's Action skill is a turret, Mordecai's Bloodwing (a bird-like creature), Lilith's is Phasewalk (Invisibility and increased speed on unsuspecting enemies) and Brick's is Berserk, a sixty-second outburst of momentous maniacal damage. All are useful for different situations."}

let r5 ={user:"Smoking Krills", text: "This game is bad go fuck yourself"}



let reviews = [r1,r2,r3, r4, r5]
const reviewsAllowedOnScreen = 30;



class GamePageBody extends React.Component {
  constructor(props) {
    super (props)
    this.state = {reviews:[]};
  }
  componentDidMount() {
    fetch("https://damp-hollows-38137.herokuapp.com/api/reviews")
      .then(res => res.json())
      .then(json => this.setState({ reviews: json }));
  }

    hasPicture = () => {
        if (this.props.game.short_screenshots.length > 0) {
            return this.props.game.short_screenshots[0].image
        } else {
            return "https://legacytaylorsville.com/wp-content/uploads/2015/07/No-Image-Available1.png"
        }
    }
     removeFirstPicture = () => {
        let temp = [];
        for (let i = 1; i < this.props.game.short_screenshots.length; i++) {
            temp.push(this.props.game.short_screenshots[i])
        }
        return temp;
    }
     parseDate = (date) => {
        let dateArr = date.split("-")
        var monthMap = new Map([["01" , "January"], ["02" ,"February"] ,["03", "March"], ["04", "April"], ["05", "May"], ["06", "June"], ["07", "March"],["08", "August"],["09", "September"],["10", "October"],["11", "November"],["12", "December"]]); 
        let temp = dateArr[2];
        temp += " ";
        temp += monthMap.get(dateArr[1])
        temp += ", "
        temp += dateArr[0]
        return temp
    }
     addReview = (type) => {
       if (type != "gamer") {alert("Please sign in with a consumer account");return;}
       document.getElementById("addReview").style.display = "block"
     }
     
     submitReview = (id) => {
       let r = document.getElementById("rev").value
       console.log(r)
       let review = {id:111,reviewContent: r}
       
      fetch("https://damp-hollows-38137.herokuapp.com/api/reviews" , {
         method: 'post',
         body: JSON.stringify(review),
         headers: {
                'content-type': 'application/json'
         }
      });
       
       alert("review submitted")
      // document.getElementById("addReview").style.display = "none"
       
       
     }
    
    render(){
    return (
        
        
        <div>
    <div class="d-flex">
       <img width="292" height="208" src={this.hasPicture()}></img>
       {this.props.game.clip ? <iframe width="620" height="220" src={this.props.game.clip.clip}>
</iframe> : <iframe width="620" height="220" >
</iframe>}
        
        </div>
        <div class="d-flex">
       <strong> <div>Genres:&nbsp;</div></strong>
        {this.props.game.genres ? this.props.game.genres.map((genre, index) => {
                if (index < this.props.game.genres.length-1) {
                    return (<div>{genre.name},&nbsp;</div>)
                } else {return (<div>{genre.name}</div>)}
            }): null}
            </div>
        
            {this.props.game.released ? 
                <div class="d-flex"><strong><div>Release Date:&nbsp;</div> </strong><div>{this.parseDate(this.props.game.released)}</div></div> :
               <strong> <div>Release Date:</div></strong>} 
       
        
        <div class="d-flex flex-column">
       <div class="d-flex">
            
        <div>
        <h4 id="platformHead">Platforms:&nbsp;</h4>
        <div class="d-flex flex-column">
        {this.props.game.platforms ?
        this.props.game.platforms.map(plat => {
                 return (<div>{plat.platform.name}</div>)
            }): null}
    </div>
        </div>
            <div class="">
        <h4 id="platformHead">Stores:&nbsp;</h4>
        <div class="d-flex flex-column">
        {this.props.game.stores ?
        this.props.game.stores.map(store => {
                 return (<div>{store.store.name}</div>)
            }):null}
    </div>
        </div>
           </div>
            </div>
            
      
      
      
        <h3>Pictures</h3>
        {console.log(this.state.reviews)}
        {this.removeFirstPicture().map(pic => {
                return (<img height="108" width="192" src={pic.image}></img>)
            })}
        <div class="d-flex justify-content-between">
          
          
          
          <h3><strong>Reviews</strong></h3>
          <button onClick={() => this.addReview(this.props.type)} class="btn btn-primary">Add Review</button>
        </div>
        {this.props.userId ? <div id="addReview" style={{display:"none"}} >
         <textarea class="form-control" id="rev" rows="3"></textarea>
        <button onClick={() => this.submitReview()} class="btn btn-primary">Submit</button>
        </div>:null}
        
        
        
        {this.state.reviews.map((r, index) => {
         
          if (index < reviewsAllowedOnScreen) {
            return (r.reviewContent.length<100 ? <div class="reviewSmall"><p >{r.reviewContent.substr(0,100)}</p></div>:  <Link to={
                    { 
                        pathname: '/review',
                        review: r,
                        rGame: this.props.game
                    }
                      }>
                     
            <div class="reviewSmall"><p >{r.reviewContent.substr(0,100)}........</p></div></Link>)     
          }
          if (index === reviewsAllowedOnScreen) {
            return (<h3>See More!</h3>)
          }
      
            
        })}
        </div>
    )}
}
export default GamePageBody

