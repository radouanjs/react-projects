import React, {useState, useEffect} from 'react'
import {useGlobalContext} from './context';
import {FaCheck, FaTimes} from 'react-icons/fa';

function Question() {
	const [correctAnswers, setCorrectAnswers] = useState(0);
	const [wrongAnswers, setWrongAnswers] = useState(0);

	const {
		loading,
		questions,
		setIsQuestionOpen,
		setIsScoreOpen, 
		setScore,
		timer,
		setTimer,
		index,
		setIndex,
	} = useGlobalContext();

    const showNextQuestion = () => {
    	if(index === questions.length-1) {
            setIsQuestionOpen(false);
            const score = (correctAnswers*100)/questions.length;
            setScore(score);
            setIsScoreOpen(true)
    	}
    	setIndex(prev => prev + 1);
    	setTimer(15);
    }

    useEffect(()=>{
    	let interval = null;
    	if(timer !== 0) {
           interval = setInterval(() => {
            setTimer(prev => prev - 1);
           },1000);
    	}else {
    		clearInterval(interval);
    		showNextQuestion();
    		setWrongAnswers(oldValue => oldValue + 1);
    	}
        
        return ()=>clearInterval(interval);
    }, [timer, index])

    const checkAswer = (choice) => {
        if(choice) {
        	setCorrectAnswers(prev => prev + 1);
        }else {
        	setWrongAnswers(prev => prev + 1);
        }
    	showNextQuestion();
    }

    if(loading) {
    	return <h1>Loading...</h1>
    }
   
    const {question, correct_answer, incorrect_answers} = questions[index];
    const answers = [...incorrect_answers];
    const tempIndex = Math.floor(Math.random()*4);
    if(tempIndex === 3) {
    	answers.push(correct_answer);
    }else {
    	answers.push(answers[tempIndex]);
    	answers[tempIndex] = correct_answer;
    }

	return (
		<section className="question">
			<header>
				<div>
					<p><FaCheck /> {correctAnswers} correct</p>
					<p><FaTimes /> {wrongAnswers} wrong</p>
				</div>
				<p>⏱ {timer}</p>
			</header>
			<div className="options">
			   <p>Question {index+1} ({questions.length-(index+1)} Remaining)</p>
			   <p className="question-text">{question}</p>
			   <p>Answer options</p>
			   <ul>
			   	  {
			   	  	answers.map((answer, index) => { 
			   	  		return (
			   	  		<li key={index}>
			   	  		    <button onClick={() => checkAswer(answer === correct_answer)}>
			   	  		        {answer}
			   	  		    </button>
			   	  		</li>
			   	    )})
			   	  }
			   </ul>
			</div>
			<button onClick={showNextQuestion} className="send-btn">Send</button>
		</section>
	)
}

export default Question