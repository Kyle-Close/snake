import React from "react";

import easyImg from "../img/easy.png";
import mediumImg from "../img/medium.png";
import hardImg from "../img/hard.png";

function DifficultySelector() {
  return (
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
  );
}

export default DifficultySelector;
