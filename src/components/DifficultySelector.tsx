import React from "react";

import SelectOption from "./SelectOption";
import InitialActiveSelectors from "../data/difficulties";

function DifficultySelector() {
  const [activeSelectors, setActiveSelectors] = React.useState(
    initializeActiveSelectors()
  );

  function initializeActiveSelectors() {
    return InitialActiveSelectors.map((selector, key) => (
      <SelectOption
        key={key}
        difficultyImage={selector.src}
        titleColor={selector.color}
        titleText={selector.text}
      />
    ));
  }

  return (
    <div className="basis-1/3 grow flex justify-center shrink-0 mt-16">
      {activeSelectors}
    </div>
  );
}

export default DifficultySelector;
