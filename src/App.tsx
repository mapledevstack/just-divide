import { useState } from "react"
import ActionPanel from "./components/ActionPanel"
import GameBoard from "./components/GameBoard"
import GameHeader from "./components/GameHeader"
import type { GameState } from "./types"
import { getRandomTile, handleMerge, moveQueue } from "./gameLogic"

const App = () => {
  const [gameState, setGameState] = useState<GameState>({
    grid: Array(16).fill(null),
    queue: [getRandomTile(), getRandomTile()],
    score: 0,
    level: 1,
    keepVal: null,
    trashCount: 10
  })

  const activeTile = gameState.queue[0]

  const handlePlaceTile = (index : number) => {
    if(gameState.grid[index] !== null) return

    const newGrid = [...gameState.grid]
    newGrid[index] = activeTile

    const { grid, scoreGain } = handleMerge(newGrid, index)

    setGameState(prev => (
      {
        ...prev,
        grid,
        queue: moveQueue(prev.queue),
        score: prev.score + scoreGain
      }
    ))
  }

  return (
    <div className="game">
      <GameHeader />

      <div className="play-area">
        <GameBoard grid={gameState.grid} handlePlaceTile={handlePlaceTile} />
        <ActionPanel queue={gameState.queue} keepVal={gameState.keepVal} trashCount={gameState.trashCount} />
      </div>
    </div>
  )
}
export default App
