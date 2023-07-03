import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SquareState, setSquare } from './reducers/BoardData';
import { setHeadStartingSquare } from './utils/GameLogic';

import ScoreBoard from './components/ScoreBoard';
import Board from './components/Board';

function App() {
	const board = useSelector((state) => state);
	const dispatch = useDispatch();

	function handleClick() {
		console.log(board);
		setHeadStartingSquare(10);
	}

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
