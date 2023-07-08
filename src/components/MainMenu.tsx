import React from "react";

import DifficultySelector from "./DifficultySelector";
import PlaySnakeButton from "./PlaySnakeButton";
import MenuFooter from "./MenuFooter";
import SnakeTitleImg from "../img/snake-title.png";

import { handleStartGame } from "../utils/InitGame";

function MainMenu() {
  function handleClick() {
    handleStartGame();
  }

  return (
    <div className="w-screen h-screen bg-background bg-no-repeat bg-cover font-rubik flex justify-center">
      <div className="h-screen w-1/2 flex flex-col pt-32 items-center gap-10 max-w-3xl">
        <img className="w-2/3 h-auto" src={SnakeTitleImg} alt="Snake - Title" />
        <div className="w-full h-1/2 bg-gray-400 rounded-lg border-4 border-black flex flex-col p-6 min-w-500">
          <DifficultySelector />
          <PlaySnakeButton />
          <MenuFooter />
        </div>
      </div>
    </div>
  );
}

export default MainMenu;
