import React from "react";

interface SelectOptionProps {
  difficultyImage: string;
  titleColor: string;
  titleText: string;
  index: number;
  resetSelectors: () => void;
  setSelectorActive: (index: number) => void;
}

function SelectOption({
  difficultyImage,
  titleColor,
  titleText,
  index,
  resetSelectors,
  setSelectorActive,
}: SelectOptionProps) {
  const titleClassNames = `font-bold text-lg ${titleColor}`;

  function handleClick(e: React.SyntheticEvent) {
    // Clear any active selection, if none selected, do nothing
    resetSelectors();
    // Set clicked selection as active selection
    setSelectorActive(index);
  }

  return (
    <div className="basis-1/4 shrink-0 flex flex-col items-center gap-4">
      <div className="hover:cursor-pointer" onClick={handleClick}>
        <img src={difficultyImage} />
      </div>
      <h3 className={titleClassNames}>{titleText}</h3>
    </div>
  );
}

export default SelectOption;
