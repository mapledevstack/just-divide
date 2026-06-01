import { LucideTrash } from "lucide-react"

type Props = {
  queue: number[],
  keepVal: number | null,
  trashCount: number,
  handleKeep: () => void,
  handleTrash: () => void
}

const ActionPanel = ({ queue, keepVal, trashCount, handleKeep, handleTrash } : Props) => {
  return (
    <div className="action-panel-section">
      
      <div className="keep">
        <p className="tile" onClick={() => handleKeep()}>{keepVal}</p>
        <p>KEEP</p>
      </div>

      <div className="queue">
        <div className="tile">{queue[0]}</div>
        <div className="tile">{queue[1]}</div>
      </div>

      <div className="trash">
        <p className="tile" onClick={() => handleTrash()}>
          <LucideTrash />
        </p>
        <p>TRASH x {trashCount}</p>
      </div>

    </div>
  )
}
export default ActionPanel
