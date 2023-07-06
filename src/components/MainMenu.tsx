import React from "react";
import { handleStartGame } from "../utils/InitGame";
import SnakeTitleImg from "../img/snake-title.png";

function MainMenu() {
  function handleClick() {
    handleStartGame();
  }

  return (
    <div className="w-screen h-screen bg-background bg-no-repeat bg-cover font-rubik flex justify-center">
      <div className="h-screen w-1/2 flex flex-col pt-32 items-center gap-10 max-w-3xl">
        <img className="w-2/3 h-auto" src={SnakeTitleImg} alt="Snake - Title" />
        <div className="w-full h-1/2 bg-gray-300 rounded-lg border-4 border-black grid grid-rows-4 pt-16">
          <div className="row-span-2 w-2/3 justify-self-center">
            <div className="flex justify-between w-full gap-4 h-full">
              <div className="flex-grow flex flex-col">
                <div className="h-1/2"></div>
                <h3>Easy</h3>
              </div>
              <div className="flex-grow flex flex-col"></div>
              <div className="flex-grow flex flex-col"></div>
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default MainMenu;
