import React from 'react';
import { useSelector } from 'react-redux';

import Square from './Square';
import { RootState } from '../reducers';

function Board() {
	const squaresArray = useSelector(
		(state: RootState) => state.BoardData.squaresArray
	);

	function createBoard() {
		const boardContainer: any = [];
		for (let y = 0; y < squaresArray.length; y++) {
			for (let x = 0; x < squaresArray.length; x++) {
				boardContainer.push(
					<Square
						key={`${x}-${y}`}
						squareState={squaresArray[x][y]}
					/>
				);
			}
		}
		return boardContainer;
	}

	const gridStyle = {
		display: 'grid',
		gap: '1px',
		backgroundColor: 'black',
		gridTemplateColumns: `repeat(${squaresArray.length}, minmax(0, 1fr))`,
		gridTemplateRows: `repeat(${squaresArray.length},  minmax(0, 1fr))`,
		width: '320px',
		height: '320px',
		border: 'black 1px solid',
	};

	return (
		<div>
			<div style={gridStyle}>{createBoard()}</div>
		</div>
	);
}

export default Board;
