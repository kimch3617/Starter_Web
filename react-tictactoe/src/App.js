import './App.css';
import { useState } from 'react';
import { Board } from './Board';

function App() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [xIsNext, setXIsNext] = useState(false);
  const currentSquares = history[history.length - 1];

  const onPlay = (newSquares) => {
    setHistory([...history, newSquares]);
    setXIsNext(prev => !prev);
  }

  const jumpTo = (index) => {
    const jumpToHistory = history.slice(0, index + 1);

    setHistory(jumpToHistory);
    setXIsNext(jumpToHistory.length % 2 === 0);
  }

  const moves = history.map((step, index) => {
    const desc = index ?
      `Go to move #${index}` :
      `Go to game start`;

    return (
      <li className='list-item-jump'>
        <button className='btn-jump' onClick={() => jumpTo(index)}>{desc}</button>
      </li>
    )
  })

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }

    return null;
  }

  const handleClick = (i) => {
    if (calculateWinner(currentSquares) || currentSquares[i]) {
      return;
    }

    const newSquares = currentSquares.map();

    if (xIsNext) {
      newSquares[i] = 'X';
    } else {
      newSquares[i] = 'O';
    }

    onPlay(newSquares);
  }

  const winner = calculateWinner(currentSquares);
  let status;
  
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={currentSquares} xIsNext={xIsNext} onClick={handleClick} />
      </div>
      <div className="game-info">
        <div className="status">{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

export default App;
