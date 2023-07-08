import React from "react";

import SelectOption from "./SelectOption";
import InitialActiveSelectors from "../data/difficulties";

type DifficultyData = {
  isSelected: boolean;
  selectedSrc: string;
  src: string;
  color: string;
  text: string;
};

interface DifficultySelectorProps {
  difficultyDataArr: DifficultyData[];
  resetSelectors: () => void;
  setSelectorActive: (index: number) => void;
}

function DifficultySelector({
  difficultyDataArr,
  resetSelectors,
  setSelectorActive,
}: DifficultySelectorProps) {
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

  return (
    <div className="basis-1/3 grow flex justify-center shrink-0 mt-16">
      {activeSelectors()}
    </div>
  );
}

export default DifficultySelector;
