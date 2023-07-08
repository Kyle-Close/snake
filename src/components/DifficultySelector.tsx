import React from "react";

import SelectOption from "./SelectOption";
import InitialActiveSelectors from "../data/difficulties";

function DifficultySelector() {
  const [difficultyDataArr, setDifficultyDataArr] = React.useState(
    InitialActiveSelectors
  );

  const activeSelectors = () => {
    return difficultyDataArr.map((difficulty, key) => (
      <SelectOption
        key={key}
        index={key}
        difficultyImage={
          difficulty.isSelected ? difficulty.selectedSrc : difficulty.src
        }
        titleColor={difficulty.color}
        titleText={difficulty.text}
        resetSelectors={resetSelectors}
        setSelectorActive={setSelectorActive}
      />
    ));
  };

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

  return (
    <div className="basis-1/3 grow flex justify-center shrink-0 mt-16">
      {activeSelectors()}
    </div>
  );
}

export default DifficultySelector;
