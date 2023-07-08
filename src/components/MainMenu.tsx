import React from "react";

import DifficultySelector from "./DifficultySelector";
import PlaySnakeButton from "./PlaySnakeButton";
import MenuFooter from "./MenuFooter";
import SnakeTitleImg from "../img/snake-title.png";
import InitialActiveSelectors from "../data/difficulties";

import { handleStartGame } from "../utils/InitGame";

function MainMenu() {
  const [difficultyDataArr, setDifficultyDataArr] = React.useState(
    InitialActiveSelectors
  );

  const resetSelectors: () => void = () => {
    setDifficultyDataArr((prev) => {
      const newData = prev;
      return newData.map((difficulty) => {
        return { ...difficulty, isSelected: false };
      });
    });
  };

  const setSelectorActive: (index: number) => void = (index) => {
    console.log(index);
    setDifficultyDataArr((prev) => {
      return prev.map((difficulty, i) => {
        if (i === index) return { ...difficulty, isSelected: true };
        else return difficulty;
      });
    });
  };

  const isAnySelectorActive: () => boolean = () => {
    console.log("Running isAnySelectorActive");
    let isActive = false;
    difficultyDataArr.forEach((difficulty) => {
      if (difficulty.isSelected) isActive = true;
    });
    return isActive;
  };

  function handleClick() {
    handleStartGame();
  }

  return (
    <div className="w-screen h-screen bg-background bg-no-repeat bg-cover font-rubik flex justify-center">
      <div className="h-screen w-1/2 flex flex-col pt-32 items-center gap-10 max-w-3xl">
        <img className="w-2/3 h-auto" src={SnakeTitleImg} alt="Snake - Title" />
        <div className="w-full h-1/2 bg-gray-400 rounded-lg border-4 border-black flex flex-col p-6 min-w-500">
          <DifficultySelector
            difficultyDataArr={difficultyDataArr}
            resetSelectors={resetSelectors}
            setSelectorActive={setSelectorActive}
          />
          <PlaySnakeButton isAnyActive={isAnySelectorActive()} />
          <MenuFooter />
        </div>
      </div>
    </div>
  );
}

export default MainMenu;
