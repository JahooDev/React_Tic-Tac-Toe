function Square({ value }) {
  return (
    <button className="square" onClick={console.log('button clicked')}>
      X
    </button>
  );
}

export default function Board() {
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
