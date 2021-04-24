import React from 'react';
import {useGlobalContext} from './context';

function Score() {
	const {score,setIsPrefOpen,setIsScoreOpen} = useGlobalContext();

	const hideScore = () => {
          setIsScoreOpen(false);
          setIsPrefOpen(true);
	} 
	return (
		<section className="score">
			<h2>Congrats!</h2>
			<h3>👏</h3>
			<p>You answered {score}% of questions correctly</p>
			<button onClick={hideScore}>Play Again</button>
		</section>
	)
}

export default Score