import ActionPanel from "./components/ActionPanel"
import GameBoard from "./components/GameBoard"
import GameHeader from "./components/GameHeader"

const App = () => {
  return (
    <div className="game">
      <GameHeader />

      <div className="play-area">
        <GameBoard />
        <ActionPanel />
      </div>
    </div>
  )
}
export default App
