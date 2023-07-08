import React from "react";

import DifficultySelector from "./DifficultySelector";
import PlaySnakeButton from "./PlaySnakeButton";
import MenuFooter from "./MenuFooter";
import SnakeTitleImg from "../img/snake-title.png";
import InitialActiveSelectors from "../data/difficulties";
import { Difficulty } from "../reducers/GameState";

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

  const getActiveSelector: () => string = () => {
    let result: Difficulty = Difficulty.EASY;
    difficultyDataArr.forEach((difficulty) => {
      if (difficulty.isSelected)
        result = convertStringDifficulty(difficulty.text);
    });
    return result;
  };

  const convertStringDifficulty: (value: string) => Difficulty = (str) => {
    let result: Difficulty = Difficulty.EASY;
    switch (str.toLowerCase()) {
      case "medium":
        result = Difficulty.MEDIUM;
        break;
      case "hard":
        result = Difficulty.HARD;
        break;
    }
    return result;
  };

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
          <PlaySnakeButton activeDifficulty={getActiveSelector()} />
          <MenuFooter />
        </div>
      </div>
    </div>
  );
}

export default MainMenu;
