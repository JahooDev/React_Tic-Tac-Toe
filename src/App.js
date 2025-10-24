import { use, useState } from 'react';

function Square() {
  const [value, setValue] = useState(null);
  function handleClick() {
    setValue('X');
  }
  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
}

export default function Board() {
  const [square, setSquare] = useState(Array(9).fill(null));
  return (
    <>
      <div>
        <div className="status">Status here</div>
        <div className="board-row">
          <Square />
          <Square />
          <Square />
        </div>
        <div className="board-row">
          <Square />
          <Square />
          <Square />
        </div>
        <div className="board-row">
          <Square />
          <Square />
          <Square />
        </div>
      </div>
    </>
  );
}
