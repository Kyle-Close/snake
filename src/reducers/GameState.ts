import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export enum Difficulty {
  HARD = "HARD",
  MEDIUM = "MEDIUM",
  EASY = "EASY",
}

export enum GameState {
  PLAYING = "PLAYING",
  MENU = "MENU",
}
interface GameStateSliceState {
  gameState: GameState;
  intervalId: any;
  difficulty: Difficulty | null;
}

const initialState: GameStateSliceState = {
  gameState: GameState.MENU,
  intervalId: null,
  difficulty: null,
};

const GameStateSlice = createSlice({
  name: "gameState",
  initialState,
  reducers: {
    setGameState(state, action: PayloadAction<GameState>) {
      state.gameState = action.payload;
    },
    setIntervalId(state, action: PayloadAction<any>) {
      state.intervalId = action.payload;
    },
    setDifficulty(state, action: PayloadAction<Difficulty>) {
      state.difficulty = action.payload;
    },
  },
});

export default GameStateSlice.reducer;
export const { setGameState, setIntervalId, setDifficulty } =
  GameStateSlice.actions;
