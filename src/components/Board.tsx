import React from 'react';
import { useSelector } from 'react-redux';

import Square from './Square';

interface BoardProps {
	size: number;
}

function Board({ size }: BoardProps) {
	const board = useSelector((state) => state);
	function createBoard() {
		const boardContainer: any = [];
		for (let i = 0; i < size; i++) {
			for (let j = 0; j < size; j++) {
				boardContainer.push(<Square />);
			}
		}
		return boardContainer;
	}

	const gridStyle = {
		display: 'grid',
		gap: '1px',
		backgroundColor: 'black',
		gridTemplateColumns: `repeat(${size}, minmax(0, 1fr))`,
		gridTemplateRows: `repeat(${size},  minmax(0, 1fr))`,
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
