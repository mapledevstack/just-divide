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
    
    setGameState(prev => {
      const score = prev.score + scoreGain
      return {
        ...prev,
        grid,
        queue: moveQueue(prev.queue),
        score,
        level: Math.floor(score / 10) + 1
      }
    })
  }

  const handleKeep = () => {
    setGameState(prev => {
      if(prev.keepVal === null) {
        return {
          ...prev,
          keepVal: prev.queue[0],
          queue: moveQueue(prev.queue)
        }
      }

      return {
        ...prev,
        keepVal: prev.queue[0],
        queue: [prev.keepVal, prev.queue[1]]
      }
    })
  }

  const handleTrash = () => {
    setGameState(prev => {
      if(prev.trashCount <= 0) {
        return prev
      }

      return {
        ...prev,
        queue: moveQueue(prev.queue),
        trashCount: prev.trashCount - 1
      }
    })
  }

  return (
    <div className="game">
      <GameHeader />

      <div className="play-area">
        <GameBoard grid={gameState.grid} handlePlaceTile={handlePlaceTile} score={gameState.score} level={gameState.level} />

        <ActionPanel queue={gameState.queue} keepVal={gameState.keepVal} trashCount={gameState.trashCount} handleKeep={handleKeep} handleTrash={handleTrash} />
      </div>
    </div>
  )
}
export default App
