import React from "react";

import { handleStartGame } from "../utils/InitGame";

interface PlaySnakeButtonProps {
  activeDifficulty: string;
}

function PlaySnakeButton({ activeDifficulty }: PlaySnakeButtonProps) {
  return (
    <div className="grow w-full flex justify-center font-bold text-xl">
      <div className="flex justify-center items-start">
        <button
          disabled={activeDifficulty === "" ? true : false}
          onClick={handleStartGame}
          className="border-black border-4 px-12 py-4 rounded-lg bg-green-400 disabled:cursor-not-allowed disabled:bg-gray-300 disabled:opacity-50 active:scale-90 transform transition"
        >
          Play Snake
        </button>
      </div>
    </div>
  );
}

export default PlaySnakeButton;
