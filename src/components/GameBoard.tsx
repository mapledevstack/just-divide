import cat from "../assets/Cat.png"
import type { Grid } from "../types"

type Props = {
  grid: Grid
  handlePlaceTile: (index: number) => void
  score: number
  level: number
}

const GameBoard = ({ grid, handlePlaceTile, score, level }: Props) => {
  return (
    <div className="board-section">
      
      <img src={cat} alt="cat" className="cat" />

      <div className="badges">
        <div className="badge">Level&nbsp;{level}</div>
        <div className="badge">Score&nbsp;{score}</div>
      </div>

      <div className="grid">
        {grid.map((_, index) => {
          return (
            <div 
              className="cell"
              key={index}
              onClick={() => handlePlaceTile(index)}
            >
              {grid[index]}
            </div>
          )
        })}
      </div>
    
    </div>
  )
}
export default GameBoard
