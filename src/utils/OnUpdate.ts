import store from "../reducers";
import { resetBoard } from "../reducers/BoardData";

import { GameState, setGameState } from "../reducers/GameState";
import { resetSnake } from "../reducers/Snake";
import { updateBoard } from "./BoardLogic";
import {
  isSnakeOutOfBounds,
  isSnakeOnSelf,
  isSnakeOnFood,
  handleSnakeAte,
  updateSnakePosition,
  isWin,
} from "./SnakeLogic";

export function update() {
  const state = store.getState();
  const direction = state.Direction.direction;

  // Check for win
  if (isWin()) {
    alert(
      "Didn't expect anyone to actually win... I don't have anything for you but good job ;)"
    );
    handleGameOver();
    return;
  }
  if (isSnakeOutOfBounds()) {
    // Check if snake head hit wall
    handleGameOver();
    return;
  }
  // Check if snake ate itself
  if (isSnakeOnSelf()) {
    handleGameOver();
    return;
  }
  // Check if snake ate food
  if (isSnakeOnFood()) {
    handleSnakeAte(direction);
    return;
  }
  // Update snakes position based on next positions
  updateSnakePosition();

  // Update the BoardData state so we can see the snake on the board
  updateBoard();
}

function handleGameOver() {
  const state = store.getState();
  const intervalId = state.GameState.intervalId;
  // Disable the interval (update)
  clearInterval(intervalId);

  // Reset board data
  store.dispatch(resetBoard());

  // Reset snake
  store.dispatch(resetSnake());

  // Change the game state
  store.dispatch(setGameState(GameState.MENU));
}
