import React from "react";
import ScoreBoard from "./components/ScoreBoard";
import Board from "./components/Board";
import MainMenu from "./components/MainMenu";

import { useSelector } from "react-redux";
import { handleKeyDown } from "./utils/HandleKeyPress";
import { GameState } from "./reducers/GameState";
import StartGameModal from "./components/StartGameModal";

function App() {
  const { gameState } = useSelector((state: any) => state.GameState);

  React.useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return gameState === GameState.MENU ? (
    <MainMenu />
  ) : (
    <div className="h-screen w-screen flex flex-col items-center justify-center gap-4 px-8 bg-background bg-no-repeat bg-cover font-rubik">
      <StartGameModal />
      <Board />
    </div>
  );
}

export default App;
