import React, { useState } from 'react';
import { FaPlay, FaStop } from 'react-icons/fa';

import './Controls.css';
import kick from '../audio/kick.wav';

const Controls = (props) => {
	const { measureNum, onChangeMeasureCount } = props;
	const [intervalId, setIntervalId] = useState();

	const handleMeasureChange = (e) => {
		const selectVal = e.target.value;
		onChangeMeasureCount(selectVal);
	};

	const togglePlay = () => {
		if (intervalId) {
			clearInterval(intervalId);
			setIntervalId();
			console.log('Sound off');
			return
		}

		// Arrays from Instrument component need to go here
		const newIntervalId = setInterval(() => {
			console.log('Sound on');
			new Audio(kick).play();
		}, 1000);
		setIntervalId(newIntervalId);
	};

	return (
		<div className="controls">
			<div className="measures">
				<label className="measures_label">Measures</label>
				<select
					type="text"
					className="measures_num"
					onChange={handleMeasureChange}
					value={measureNum}
				>
					<option value={1}>1</option>
					<option value={2}>2</option>
					<option value={3}>3</option>
					<option value={4}>4</option>
				</select>
			</div>
			<div>
				<button
					className={intervalId ? 'btn stop' : 'btn play'}
					onClick={togglePlay}
				>
					{intervalId ? <FaStop /> : <FaPlay />}
				</button>
			</div>
		</div>
	);
};

export default Controls;
