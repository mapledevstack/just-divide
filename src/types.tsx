export type Cell = number | null

export type Grid = Cell[]

export type GameState = {
  grid: Grid
  queue: number[]
  score: number
  level: number
  keepVal: number | null
  trashCount: number
}
