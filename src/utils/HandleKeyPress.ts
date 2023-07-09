import React from "react";
import store from "../reducers";

import { Direction, setDirection } from "../reducers/Direction";
import { updateSnakeHeadNextCoordinate } from "../reducers/Snake";
import { GameState } from "../reducers/GameState";

export function handleKeyDown(e: any) {
  if (store.getState().GameState.gameState !== GameState.PLAYING) return;
  if (isKeyValid(e.key)) {
    // Set direction here
    const direction = getDirectionFromKey(e.key);
    setCurrentDirection(direction);
    store.dispatch(updateSnakeHeadNextCoordinate({ direction: direction }));
  }
}

function getDirectionFromKey(key: string): Direction {
  key = key.toUpperCase();
  if (key === "ARROWUP" || key === "W") return Direction.NORTH;
  else if (key === "ARROWDOWN" || key === "S") return Direction.SOUTH;
  else if (key === "ARROWLEFT" || key === "A") return Direction.WEST;
  else if (key === "ARROWRIGHT" || key === "D") return Direction.EAST;
  else throw new Error("Key is not valid.");
}

function isKeyValid(key: string) {
  const state = store.getState();
  const direction = state.Direction.direction;

  let isValid: boolean = true;
  // Accept WASD & Arrow keys
  const validKeysArray = [
    "ARROWUP",
    "ARROWRIGHT",
    "ARROWDOWN",
    "ARROWLEFT",
    "W",
    "D",
    "S",
    "A",
  ];
  if (!validKeysArray.includes(key.toUpperCase())) isValid = false;

  if (direction === Direction.NORTH) {
    if (key.toUpperCase() === "ARROWDOWN" || key.toUpperCase() === "S")
      isValid = false;
  } else if (direction === Direction.SOUTH) {
    if (key.toUpperCase() === "ARROWUP" || key.toUpperCase() === "W")
      isValid = false;
  } else if (direction === Direction.WEST) {
    if (key.toUpperCase() === "ARROWRIGHT" || key.toUpperCase() === "D")
      isValid = false;
  } else if (direction === Direction.EAST) {
    if (key.toUpperCase() === "ARROWLEFT" || key.toUpperCase() === "A")
      isValid = false;
  }

  return isValid;
}

export function setCurrentDirection(direction: Direction) {
  store.dispatch(setDirection(direction));
}
