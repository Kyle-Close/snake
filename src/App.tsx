import React from 'react';
import { useSelector } from 'react-redux';

import {
	setupSnake,
	setHeadStartingSquare,
	setInitialSnakeBodySquares,
} from './utils/InitGame';

import ScoreBoard from './components/ScoreBoard';
import Board from './components/Board';
import { RootState } from './reducers';
import { handleKeyDown } from './utils/HandleKeyPress';
import { update } from './utils/OnUpdate';

import store from './reducers';
import { GameState, setGameState, setIntervalId } from './reducers/GameState';

function App() {
	const { gameState } = useSelector((state: any) => state.GameState);
	const { Direction, BoardData } = useSelector((state: RootState) => state);
	const { direction } = Direction;

	function handleClick() {
		const [x, y] = setHeadStartingSquare(BoardData.squaresArray.length);
		const snakeBody = setInitialSnakeBodySquares([x, y], direction);
		setupSnake([x, y], snakeBody);
		store.dispatch(setGameState(GameState.PLAYING));
		store.dispatch(setIntervalId(window.setInterval(update, 300)));
	}

	React.useEffect(() => {
		window.addEventListener('keydown', handleKeyDown);
		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, []);

	return gameState === GameState.MENU ? (
		<div>
			{' '}
			<button
				onClick={handleClick}
				className='bg-blue-400 border-black py-2 px-4 rounded-full'
			>
				Simulate Start Game
			</button>
		</div>
	) : (
		<div className='h-screen w-screen flex flex-col items-center justify-center gap-4 px-8'>
			<button
				onClick={handleClick}
				className='bg-blue-400 border-black py-2 px-4 rounded-full'
			>
				Simulate Start Game
			</button>
			<ScoreBoard />
			<Board />
		</div>
	);
}

export default App;
