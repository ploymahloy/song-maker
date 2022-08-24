import React, { useState } from 'react';

import hihat from '../audio/hihat.wav';
import kick from '../audio/kick.wav';
import snare from '../audio/snare.wav';

const Cell = (props) => {
	const { instrument, onSaveCellVal } = props;
	const [isActive, setIsActive] = useState(false);

	let arrayVal;

	const toggleCell = () => {
		setIsActive((current) => !current);

		isActive ? (arrayVal = 0) : (arrayVal = 1);
		onSaveCellVal(arrayVal);
	};

	const playSample = () => {
		if (!isActive) {
			switch (instrument) {
				case 'hihat':
					new Audio(hihat).play();
					break;
				case 'kick':
					new Audio(kick).play();
					break;
				case 'snare':
					new Audio(snare).play();
					break;
				default:
					return;
			}
		}
	};

	const handleClick = () => {
		toggleCell();
		playSample();
	};

	return (
		<button
			className={isActive ? 'cell on' : 'cell off'}
			onClick={handleClick}
		/>
	);
};

export default Cell;
