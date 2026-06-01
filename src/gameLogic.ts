import type { Grid } from "./types"

const TILES = Array.from({ length: 40 }, (_, i) => i+1)

export const getRandomTile = () => {
  return TILES[Math.floor(Math.random() * TILES.length)]
}

export const moveQueue = (queue : number[]) => {
  return [queue[1], getRandomTile()]
}

export const getNeighbours = (index : number) => {
  const row = Math.floor(index/4)
  const col = index % 4

  const neighbours = []

  if(row > 0) neighbours.push(index-4)
  if(row < 3) neighbours.push(index+4)
  
  if(col > 0) neighbours.push(index-1)
  if(col < 3) neighbours.push(index+1)

  return neighbours
}

export const canMerge = (a: number, b: number) => {
  if(a === b) return true

  return Math.max(a, b) % Math.min(a, b) === 0
}

export const getMergeResult = (a: number, b:number) => {
  if(a === b) return null

  return Math.max(a, b) / Math.min(a, b)
}

export const handleMerge = (grid: Grid, placedIndex: number) => {
  const newGrid = [...grid]
  const placedValue = newGrid[placedIndex]

  if(placedValue === null) {
    return {
      grid: newGrid,
      scoreGain: 0
    }
  }

  const neighbours = getNeighbours(placedIndex)

  for(const neighbourIndex of neighbours) {
    const neighbourVal = newGrid[neighbourIndex]

    if(neighbourVal === null) continue
    if(!canMerge(placedValue, neighbourVal)) continue

    const result = getMergeResult(placedValue, neighbourVal)

    newGrid[placedIndex] = result
    newGrid[neighbourIndex] = null

    return {
      grid: newGrid,
      scoreGain: 1
    }
  }

  return {
    grid: newGrid,
    scoreGain: 0
  }
}
