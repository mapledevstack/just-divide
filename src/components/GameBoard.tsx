import cat from "../assets/Cat.png"

const GameBoard = () => {
  return (
    <div className="board-section">
      
      <img src={cat} alt="cat" className="cat" />

      <div className="badges">
        <div className="badge">Level&nbsp;1</div>
        <div className="badge">Score&nbsp;40</div>
      </div>

      <div className="grid">
        {Array.from({length: 16}).map((_, index) => {
          return (
            <div className="cell" key={index}>
              0
            </div>
          )
        })}
      </div>
    
    </div>
  )
}
export default GameBoard
