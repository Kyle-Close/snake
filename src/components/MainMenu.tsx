import React from "react";
import { handleStartGame } from "../utils/InitGame";

import SnakeTitleImg from "../img/snake-title.png";

import easyImg from "../img/easy.png";
import mediumImg from "../img/medium.png";
import hardImg from "../img/hard.png";

import githubImg from "../img/github.png";

function MainMenu() {
  function handleClick() {
    handleStartGame();
  }

  return (
    <div className="w-screen h-screen bg-background bg-no-repeat bg-cover font-rubik flex justify-center">
      <div className="h-screen w-1/2 flex flex-col pt-32 items-center gap-10 max-w-3xl">
        <img className="w-2/3 h-auto" src={SnakeTitleImg} alt="Snake - Title" />

        <div className="w-full h-1/2 bg-gray-400 rounded-lg border-4 border-black flex flex-col p-6 min-w-500">
          <div className="basis-1/3 grow flex justify-center shrink-0 mt-16">
            <div className="basis-1/4 shrink-0 flex flex-col items-center gap-4">
              <div>
                <img src={easyImg} />
              </div>
              <h3 className="font-bold text-green-700 text-lg">Easy</h3>
            </div>
            <div className="basis-1/4 shrink-0 flex flex-col items-center gap-4">
              <div>
                <img src={mediumImg} />
              </div>
              <h3 className="font-bold text-orange-300 text-lg">Medium</h3>
            </div>
            <div className="basis-1/4 shrink-0 flex flex-col items-center gap-4">
              <div>
                <img src={hardImg} />
              </div>
              <h3 className="font-bold text-red-600 text-lg">Hard</h3>
            </div>
          </div>
          <div className="grow w-full flex justify-center font-bold text-xl">
            <div className="flex justify-center items-start">
              <button className="border-black border-4 px-12 py-4 rounded-lg bg-blue-300">
                Play Snake
              </button>
            </div>
          </div>
          <div className="grow flex gap-3 items-end">
            <button>
              <img src={githubImg} />
            </button>
            <p>Created by Kyle Close</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainMenu;
