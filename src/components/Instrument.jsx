import React from 'react';

import Cell from './Cell';
import './Instrument.css';
import './Cell.css';

const Instrument = (props) => {
  const { bars, instrument } = props;

  const cellsArr = [];
  const soundArr = [];
  soundArr.length = bars;
  soundArr.fill(0);
  
  for (let i = 1; i <= bars; i++) {
    
    // Toggles arrVal at position on grid relative to array //
		const thisFunc = (val) => {
      soundArr.splice((i-1), 1, val);
      console.log(instrument, soundArr);
    };
    
    // Generates Cell component based on number of selected measures
    cellsArr.push(<Cell key={i} instrument={instrument} onSaveCellVal={thisFunc} />);
  }

	return (
		<div className="row">
			<p className="instrument">{instrument}</p>
			{cellsArr}
		</div>
	);
};

export default Instrument;
