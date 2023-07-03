import React from 'react';
import { useSelector } from 'react-redux';

import Square from './Square';
import { RootState } from '../reducers';

function Board() {
	const { squaresArray } = useSelector((state: RootState) => state.BoardData);

	function createBoard() {
		const boardContainer: any = [];
		for (let i = 0; i < squaresArray.length; i++) {
			for (let j = 0; j < squaresArray.length; j++) {
				boardContainer.push(<Square squareState={squaresArray[i][j]} />);
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
