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

function randify(array) {
  return array.sort(() => Math.random() - 0.5);
}


class Starter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tiles: randify(consTiles),
      score: 0,
      openSquares: [],
      show: true
    };
  }

  displayTile(tile){
    if(true){
      return tile
    } else {

    }
  }

  

  removeTiles(tile){
    return this.createTiles().filter((item)=> {
        return item.props.children == tile
    })
  }

  createTiles(){
    return this.state.tiles.map((tile,key) => {
      return(
        <button key={key}
        className="button button-outline column tile"
        onClick={() => {
          this.setState({
            score: this.state.score + 1
          })
        }}>
          {this.displayTile(tile)}
        </button>
      )
    })
  }


  render() {
    return (
      <div className="starter">
        <div className="row board">
        {console.log("Displays created tiles: ",this.createTiles())}
          {this.createTiles()}
        </div>
        <button
        onClick={()=>{
          this.setState({
            tiles: randify(consTiles),
            score: 0
          })
        }}>Reset
        </button>
        <p>Score: {this.state.score}</p>
      </div>
    );
  }
}

/* import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

export default function game_init(root) {
  ReactDOM.render(<Starter />, root);
*/
/*Referenced sources:
 *https://reactjs.org/tutorial/tutorial.html
 *https://www.youtube.com/watch?v=ZniVgo8U7ek
 *https://codeburst.io/learning-react-js-by-building-a-minesweeper-game-ced9d41560ed
 *https://codepen.io/yigitcukuren/pen/GyxxVm?editors=0010
 *https://stackoverflow.com/questions/5836833/create-an-an-array-with-random-values
*/
/*

const squares: ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H'];


class Starter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      finalBoard: [],
      randomAss: [],
      openSquares: [],
    };
    this.start();
  }


  handleClick(name, index) {

    if (this.state.openSquares.length == 2) {
        setTimeout(() => {
          this.isEqual()
        },750)
    } else {
      let square = {
        name,
	index,
    }
    let finalBoard = this.state.finalBoard
    let squares = this.state.openSquares
    finalBoard[index].close = false
    squares.push(square)
    this.setState({
      openSquares: squares,
      finalBoard: finalBoard,
    })
    if (this.state.openSquares.length == 2) {
       setTimeout(() => {
         this.isEqual()
         },750)   
      }
    }
  }

  isEqual(){
    let finalBoard = this.state.finalBoard
    if((this.state.openSquares[0].name == this.state.openSquares[1].name) && (this.state.openSquares[0].index != this.state.openSquares[1])){
     finalBoard[this.state.openSquares[0].index].complete = true
     finalBoard[this.state.openSquares[1].index].complete = true
    }else{
     finalBoard[this.state.openSquares[0].index].close = true
     finalBoard[this.state.openSquares[1].index].close = true
    }
    this.state({
      finalBoard,
      openSquares: [],
    })

  }

  start(){
    console.log("Hi")
    let finalBoard = []
    this.state.randomAss = this.randomizeValues(this.state.squares)
    this.state.randomAss.map((name, index) => {
      finalBoard.push({
	name,
        complete: false,
        close: true,
      })
    })
  this.state.finalBoard = finalBoard
  }
   
  randomizeValues(arr) {
    let currentIndex = arr.length, randomIndex, temp;
    while(0 !== currentIndex){
      currentIndex -= 1;
      randomIndex = Math.floor(Math.random * (currentIndex + 1));
      temp = arr[currentIndex]
      arr[currentIndex] = arr[randomIndex];
      arr[randomIndex] = temp;
    }
  }

  render() {
    return (
      <div className="starter">
      {
        this.state.finalBoard.map((square, index) => {
          return 
	    <Square square={square.name} 
	    click={this.handleclick(square.name, index)} 
	    close={square.close} 
	    complete={square.complete}
	    />
	  })
      }
      </div>
      )
    }
  }

class Square extends React.Component {
   constructor(props){
      super(props)
      this.state = {

      }
   }
   clicked(square){
      this.props.click(square)
   }
   render(){
     return(
       <div className={"square" + (!this.props.close ? ' opened' : '') + (this.props.complete ? ' matched' : '')} onClick ={() => this.clicked(this.props.square)}>
         <div className="front">
           ?
         </div>
         <div className="back">
         </div>
       </div>

     )
   } 
 }
   
}

*/

