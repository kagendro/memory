import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

export default function game_init(root) {
  ReactDOM.render(<Starter />, root);
}

{/* Function iterated from: https://reactjs.org/tutorial/tutorial.html*/}
function Square(props) {
  return (
    <button 
      className="square" 
      onClick={props.onClick}>
      {props.value}
    </button>
  );
}



class Starter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H'],
      finalAss: [],
      openSquares: [],
    };
  }


  handleClick(i) {
    const squares = this.state.squares.slice();
    if (this.state.noGuess) {
      {/* If the user hasn't guessed yet*/}
      guess1 = this.state.squares[i];
    } else {
      {/*two conditions: 
      1. guess is correct
      2. guess is incorrect
      */}
      if (guess1 == this.state.squares[i]) {
        {/* TODO Reveal the two squares */}
      } else {
        {/* TODO Hide the two squares */}
      }
    }
  }


  
  renderSquare(i) {
    return (
      <Square value={this.state.squares[i]}
      onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {

    return (
      <div className="row">
        {this.renderSquare(1)}
        {this.renderSquare(2)}
        {this.renderSquare(3)}
        {this.renderSquare(4)}
      </div>;
      <div className="row">
        {this.renderSquare(5)}
        {this.renderSquare(6)}
        {this.renderSquare(7)}
        {this.renderSquare(8)}
      </div>;
      <div className="row">
        {this.renderSquare(9)}
        {this.renderSquare(10)}
        {this.renderSquare(11)}
        {this.renderSquare(12)}
      </div>;
      <div className="row">
        {this.renderSquare(13)}
        {this.renderSquare(14)}
        {this.renderSquare(15)}
        {this.renderSquare(16)}
      </div>;
     );
    }
  }
}

