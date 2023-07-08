import React from "react";

interface SelectOptionProps {
  difficultyImage: string;
  titleColor: string;
  titleText: string;
}

function SelectOption({
  difficultyImage,
  titleColor,
  titleText,
}: SelectOptionProps) {
  const titleClassNames = `font-bold text-lg ${titleColor}`;

  function handleClick(e: React.SyntheticEvent) {
    console.log(e);
  }

  return (
    <div className="basis-1/4 shrink-0 flex flex-col items-center gap-4">
      <div onClick={handleClick}>
        <img src={difficultyImage} />
      </div>
      <h3 className={titleClassNames}>{titleText}</h3>
    </div>
  );
}

export default SelectOption;
