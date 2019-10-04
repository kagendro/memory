import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

export default function game_init(root) {
  ReactDOM.render(<Starter />, root);
}
/*Referenced sources:
 *https://reactjs.org/tutorial/tutorial.html
 *https://www.youtube.com/watch?v=ZniVgo8U7ek
 *https://codeburst.io/learning-react-js-by-building-a-minesweeper-game-ced9d41560ed
 *https://codepen.io/yigitcukuren/pen/GyxxVm?editors=0010
 *https://stackoverflow.com/questions/5836833/create-an-an-array-with-random-values
 *https://javascript.info/task/shuffle
*/


const consTiles = ["A","B","C","D","E","F","G","H","A","B","C","D","E","F","G","H"];

// SITE: https://javascript.info/task/shuffle
function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}


class Starter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tiles: shuffle(consTiles),
      score: 0,
      openedTiles: [],
      finalizedTiles: [],
      matches: 0,
      maxMatches: 8
    };
    this.start();
  }

  start(){
    let finalizedTiles = [];
    this.state.tiles.map((tile) => {
      finalizedTiles.push({
        tile,
        close: true,
        complete: false,
      })
    })
    this.state.finalizedTiles = finalizedTiles;
  }

    handleClick = (tile,key) => {
        console.log("Tile: " + tile + " Key: " + key)
        let matchesSoFar = this.state.matches;
        if (matchesSoFar !== this.state.maxMatches){
            if(this.state.openedTiles.length === 2){
                setTimeout(() => {
                this.check()
                },750)
            }else {
                let open = {
                    tile,
                    key
                }
                let finalizedTiles = this.state.finalizedTiles
                let openTiles = this.state.openedTiles
                finalizedTiles[key].close = false
                openTiles.push(open)
                this.setState({
                openedTiles: openTiles,
                finalizedTiles: finalizedTiles
                })
                if(this.state.openedTiles.length == 2){
                setTimeout(() => {
                    this.check()
                },750)
                }
            }
        } 
    }

    check(){
      let finalizedTiles = this.state.finalizedTiles
      if((this.state.openedTiles[0].tile == this.state.openedTiles[1].tile) && (this.state.openedTiles[0].key !== this.state.openedTiles[1].key)
        && (finalizedTiles[this.state.openedTiles[0].key].complete !== true)) {
        finalizedTiles[this.state.openedTiles[0].key].complete = true
        finalizedTiles[this.state.openedTiles[1].key].complete = true
        this.incrementScore();


      }else {
        finalizedTiles[this.state.openedTiles[0].key].close = true
        finalizedTiles[this.state.openedTiles[1].key].close = true
        this.decrementScore();
      }
      this.setState({
        finalizedTiles,
        openedTiles: []
      })
      console.log("openTiles is empty again!")
    }
  

    incrementScore() {
        this.setState({
            score: this.state.score + 5,
            matches: this.state.matches + 1
        })

        console.log("Number of matches: " + this.state.matches)
    }

    decrementScore() {
        let yourScore = this.state.score;
        if (yourScore > 1){
            this.setState({
                score: this.state.score - 2,
            })
        return;
        }if(yourScore == 1){
            this.setState({
                score: this.state.score - 1,
            })
        }
    }

    displayTile(tile,key){
        if((this.state.finalizedTiles[key].close == false)||
            (this.state.finalizedTiles[key].complete ==true)){
          return tile
        }
      }

  render() {
    return (
      <div className="starter">
        <div className="row board">

        {this.state.tiles.map((tile,key) => {
            return <button 
                key={key}
                className="button button-outline column tile"
                onClick = {() => {this.handleClick(tile,key)}}
                >
                {this.displayTile(tile, key)}
            </button>
        })}
    
        </div>
        <button
            onClick={()=>{
                this.setState({
                    tiles: shuffle(consTiles),
                    score: 0,
                    matches: 0,
                    openedTiles: [],
                    finalizedTiles: []
                })
            }}>Reset
        </button>
        <p>Your Score: {this.state.score}</p>
        {this.checkWinner}
    </div>
    );
  }
}


