import React, {useState, useEffect} from 'react';
import {FiChevronRight, FiChevronLeft} from 'react-icons/fi';
import {FaQuoteRight} from 'react-icons/fa';
import data from './data';

function App(){
	const [index, setIndex] = useState(0);
	const [people, setPeople] = useState(data);
    const style = {
    	transform: 'translateX('+(650*(-index))+'px)'
    }

    const nextSlide = ()=>{
    	if(index === people.length-1){
    		setIndex(people.length-1);
    	}else{
    	    setIndex(index + 1);
        }
    }
    const prevSlide = ()=>{
    	if(index === 0){
    		setIndex(0);
    	}else{
            setIndex(index - 1);
    	}
    }
    
    const automaticSlide = ()=>{
    		if(index === people.length-1){
    			setIndex(0)
    		}else{
    			setIndex(index + 1)
    		}
    }

     useEffect(()=>{
     	const slider = setInterval(automaticSlide, 3000);
     	return ()=>clearInterval(slider);
     }, [index])

	return (
		<section className="reviews">
		    <header><h1>Reviews</h1></header>
		    <div className="reviews-container" style={style}>
		        {people.map(person=>{
		        	const {id, image, name, title, quote} = person;
		        	return (
		        		<div className="review" key={id}>
		                    <div className="image">
		                        <img src={image} alt={name} />
		                    </div>
		                    <h3 className="name">{name.toUpperCase()}</h3>
		                    <p className="title">{title}</p>
		                    <p className="quote">{quote}</p>
		                    <span className="quote-icon"><FaQuoteRight /></span>
		               </div>
		        	)
		        })}
		    </div>
		    <button className="pervBtn" onClick={prevSlide}>
		        <FiChevronLeft />
		    </button>
		    <button className="nextBtn" onClick={nextSlide}>
		        <FiChevronRight />
		    </button>
		</section>
	)
}

export default App;