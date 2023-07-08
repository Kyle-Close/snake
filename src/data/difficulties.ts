import easyImg from "../img/easy.png";
import easySelectedImg from "../img/easy-selected.png";
import mediumImg from "../img/medium.png";
import mediumSelectedImg from "../img/medium-selected.png";
import hardImg from "../img/hard.png";
import hardSelectedImg from "../img/hard-selected.png";

const InitialActiveSelectors = [
  {
    isSelected: false,
    src: easyImg,
    selectedSrc: easySelectedImg,
    color: "text-green-700",
    text: "Easy",
  },
  {
    isSelected: false,
    src: mediumImg,
    selectedSrc: mediumSelectedImg,
    color: "text-orange-300",
    text: "Medium",
  },
  {
    isSelected: false,
    src: hardImg,
    selectedSrc: hardSelectedImg,
    color: "text-red-600",
    text: "Hard",
  },
];

export default InitialActiveSelectors;
