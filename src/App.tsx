import React from 'react';
import ScoreBoard from './components/ScoreBoard';
import Board from './components/Board';

import { useSelector } from 'react-redux';
import { handleStartGame } from './utils/InitGame';
import { handleKeyDown } from './utils/HandleKeyPress';
import { GameState } from './reducers/GameState';

function App() {
	const { gameState } = useSelector((state: any) => state.GameState);

	function handleClick() {
		handleStartGame();
	}

	React.useEffect(() => {
		window.addEventListener('keydown', handleKeyDown);
		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, []);

	return gameState === GameState.MENU ? (
		<div className='w-screen h-screen bg-game-pattern-tall bg-no-repeat bg-cover'>
			{' '}
			<button
				onClick={handleClick}
				className='bg-blue-500 border-black py-2 px-4 rounded'
			>
				Simulate Start Game
			</button>
		</div>
	) : (
		<div className='h-screen w-screen flex flex-col items-center justify-center gap-4 px-8'>
			<button
				onClick={handleClick}
				className='bg-blue-500 border-black py-2 px-4 rounded'
			>
				Simulate Start Game
			</button>
			<ScoreBoard />
			<Board />
		</div>
	);
}

export default App;
