import React, { useState } from 'react';

import Instrument from './components/Instrument';
import Controls from './components/Controls';
import './App.css';

function App() {
	const [measureNum, setMeasureNum]  = useState(1);
	// const [soundArr  , setSoundArr]    = useState([0, 0, 0, 0]);
	const instrument = ['hihat', 'snare', 'kick'];

  const barCount = measureNum * 4;

	const instComponent = instrument.map((inst, id) => (
		<Instrument
			key={id}
      instrument={inst}
			bars={barCount}
			// playbackArr={soundArr}
		/>
	));

	return (
		<div className="App">
			{instComponent}
			<Controls
				measureNum={measureNum}
				onChangeMeasureCount={(newMeasureVal) => setMeasureNum(newMeasureVal)}
			/>
		</div>
	);
}

export default App;
