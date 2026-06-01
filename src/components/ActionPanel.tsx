import type { GameState } from "../types"

type Props = Pick<GameState, "queue" | "keepVal" | "trashCount">

const ActionPanel = ({ queue, keepVal, trashCount } : Props) => {
  return (
    <div className="action-panel-section">
      
      <div className="keep">
        <p className="tile">{keepVal}</p>
        <p>KEEP</p>
      </div>

      <div className="queue">
        <div className="tile">{queue[0]}</div>
        <div className="tile">{queue[1]}</div>
      </div>

      <div className="trash">
        <p className="tile">{trashCount}</p>
        <p>TRASH</p>
      </div>

    </div>
  )
}
export default ActionPanel
