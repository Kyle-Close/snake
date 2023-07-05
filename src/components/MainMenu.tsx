import React from "react";
import { handleStartGame } from "../utils/InitGame";

function MainMenu() {
  function handleClick() {
    handleStartGame();
  }

  return (
    <div className="w-screen h-screen bg-background bg-no-repeat bg-cover font-rubik flex justify-center">
      <div className="h-screen w-1/2 flex flex-col pt-32 items-center">
        <h1 className="text-white text-8xl font-bold font-anton">SNAKE</h1>
        <div className="w-full h-1/2 bg-red-600"></div>
      </div>
    </div>
  );
}

export default MainMenu;
