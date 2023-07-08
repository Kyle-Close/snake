import React from "react";

function PlaySnakeButton() {
  return (
    <div className="grow w-full flex justify-center font-bold text-xl">
      <div className="flex justify-center items-start">
        <button className="border-black border-4 px-12 py-4 rounded-lg bg-blue-300">
          Play Snake
        </button>
      </div>
    </div>
  );
}

export default PlaySnakeButton;
