import React from 'react';
import { v4 as uuidv4 } from 'uuid';

function Square() {
	return (
		<div
			key={uuidv4()}
			className='bg-white'
		></div>
	);
}

export default Square;