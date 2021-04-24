import React, {useState} from 'react';
import {useGlobalContext} from './context';

function Preferences() {
	const [value, setValue] = useState(10);
	const {setPref,setIsQuestionOpen,setIsPrefOpen} = useGlobalContext();

	const handleSubmit = (e) => {
		e.preventDefault();
		const formElements = e.target.elements;
        const prefs = {
        	number: +formElements["number"].value,
        	category: formElements["category"].value,
        	difficulty: formElements["difficulty"].value,
        }
		setPref(prefs);
		setIsPrefOpen(false);
		setIsQuestionOpen(true);
	}
	return (
		<section className="preferences">
		    <h1>Setup Quiz</h1>
			<form onSubmit={handleSubmit}>
				<div>
					<label for="number">Number Of Questions</label>
					<input type="number" name="number" 
					                     value={value} 
					                     id="number" 
					                     onChange={(e)=>setValue(e.target.value)}/>
				</div>
				<div>
					<label for="category">Category</label>
					<select name="category" id="category">
						<option value="general">General</option>
						<option value="sport">Sport</option>
						<option value="computer science">Computer</option>
						<option value="music">Music</option>
					</select>
				</div>
				<div>
					<label for="difficulty">Select Difficulty</label>
					<select name="difficulty" id="difficulty">
						<option value="easy">Easy</option>
						<option value="medium">Medium</option>
						<option value="hard">Hard</option>
					</select>
				</div>
				<button type="submit">Start</button>
			</form>
		</section>
	)
}

export default Preferences
