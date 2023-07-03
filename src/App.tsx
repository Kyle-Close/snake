import React from 'react';
import { useSelector } from 'react-redux';
import {
	setFoodLocation,
	setHeadStartingSquare,
	setInitialSnakeBodySquares,
} from './utils/GameLogic';

import ScoreBoard from './components/ScoreBoard';
import Board from './components/Board';
import { RootState } from './reducers';
import { handleKeyDown } from './utils/HandleKeyPress';
import { update } from './utils/GameLogic';

function App() {
	const { Direction, BoardData } = useSelector((state: RootState) => state);
	const { direction } = Direction;

	function handleClick() {
		const [x, y] = setHeadStartingSquare(BoardData.squaresArray.length);
		setInitialSnakeBodySquares([x, y], direction);
		setFoodLocation();
		window.setInterval(update, 1000);
	}

	React.useEffect(() => {
		window.addEventListener('keydown', handleKeyDown);
		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, []);

	return (
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
