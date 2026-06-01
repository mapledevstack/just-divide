import cat from "../assets/Cat.png"
import type { Grid } from "../types"

type Props = {
  grid: Grid
  handlePlaceTile: (index: number) => void
}

const GameBoard = ({ grid, handlePlaceTile }: Props) => {
  return (
    <div className="board-section">
      
      <img src={cat} alt="cat" className="cat" />

      <div className="badges">
        <div className="badge">Level&nbsp;1</div>
        <div className="badge">Score&nbsp;40</div>
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
