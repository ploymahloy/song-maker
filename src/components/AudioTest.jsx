import React from 'react';

import hihat from '../audio/hihat.wav';
import kick from '../audio/kick.wav';
import snare from '../audio/snare.wav';

const AudioTest = () => {

  // useEffect(() => {
  //   setInterval(() => {
  //     new Audio(hihat).play()
  //   }, 1000);
  // }, []);

  // const playSound = (sound) => {
  //   new Audio(sound).play()
  // }


	return (
		<div>
			<button onClick={() => new Audio(kick).play()}>Kick test</button>
			<button onClick={() => new Audio(snare).play()}>Snare test</button>
			<button onClick={() => new Audio(hihat).play()}>Hihat test</button>
		</div>
	);
};

export default AudioTest;
