import { useState, useEffect } from 'react';
import Board from './Board';
import GameStatus from './GameStatus';
import ScoreTable from './ScoreTable';

const winCombination = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export default function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [gameMoves, setGameMoves] = useState(0);
  const [winner, setWinner] = useState(null);
  const [status, setStatus] = useState('Next Player: X');
  const [scoreX, setScoreX] = useState(0);
  const [scoreO, setScoreO] = useState(0);

  useEffect(() => {
    if (winner) {
      setStatus(`Winner: ${winner}`);
    } else if (gameMoves === 9) {
      setStatus('DRAW !! Try again!');
    } else {
      setStatus(`Next Player: ${currentPlayer}`);
    }
  }, [winner, currentPlayer, gameMoves]);

  const checkIfPlayerWinGame = (currentSquares) => {
    for (let [a, b, c] of winCombination) {
      if (
        currentSquares[a] &&
        currentSquares[a] === currentSquares[b] &&
        currentSquares[a] === currentSquares[c]
      ) {
        setWinner(currentSquares[a]);
        if (currentSquares[a] == 'X') setScoreX(scoreX + 1);
        else setScoreO(scoreO + 1);
        return currentSquares[a];
      }
    }
    return null;
  };

  const onSquareClick = (squareIndex) => {
    if (squares[squareIndex] || winner) return;

    const newSquares = [...squares];
    newSquares[squareIndex] = currentPlayer;

    const nextMove = gameMoves + 1;
    setSquares(newSquares);
    setGameMoves(nextMove);

    const winnerFound = checkIfPlayerWinGame(newSquares);
    if (winnerFound) return;

    if (nextMove < 9) {
      setCurrentPlayer((prev) => (prev === 'X' ? 'O' : 'X'));
    }
  };

  const onNextGameButtonClick = () => {
    setSquares(Array(9).fill(null));
    setCurrentPlayer('X');
    setGameMoves(0);
    setWinner(null);
    setStatus('Next Player: X');
  };
  const onRestarScoreButtonClick = () => {
    onNextGameButtonClick();
    setScoreX(0);
    setScoreO(0);
  };

  return (
    <div className="game-container ">
      <div className="game-box glass-effect">
        <GameStatus status={status} />
        <Board squares={squares} onSquareClick={onSquareClick} />
        <NextGameButton nextGame={onNextGameButtonClick} />
      </div>
      <div className="score-table-container">
        <ScoreTable scoreX={scoreX} scoreO={scoreO} />
        <RestartGameButton restartGame={onRestarScoreButtonClick} />
      </div>
    </div>
  );
}

function NextGameButton({ nextGame: nextGame }) {
  return (
    <div>
      <button className="restart-button" onClick={nextGame}>
        Next Game
      </button>
    </div>
  );
}
function RestartGameButton({ restartGame: restartGame }) {
  return (
    <div>
      <button className="restart-button" onClick={restartGame}>
        Restart Game
      </button>
    </div>
  );
}
