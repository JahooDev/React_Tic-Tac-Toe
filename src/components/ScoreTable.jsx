export default function ScoreTable({ scoreX, scoreO }) {
  return (
    <div className="score-table-box glass-effect ">
      <div className="div1 scoreBox">X</div>
      <div className="div2 scoreBox">O</div>
      <div className="div3 scoreBox">{scoreX}</div>
      <div className="div4 scoreBox">{scoreO}</div>
    </div>
  );
}
