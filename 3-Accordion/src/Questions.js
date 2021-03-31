import React from 'react';
import Question from './Question';
import questions from './data';

const Questions = () => {
	return (
        <div className="questions">
            {questions.map(question => {
            	return <Question id={question.id} title={question.title} info={question.info}/>
            })}
        </div>
 	)
}

export default Questions;