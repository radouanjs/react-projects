import React, {useState} from 'react';
import Review from './Review';
import reviews from './data';

function Reviews(){
    const [index, setIndex] = useState(0);
    
    const nextReview = ()=>{
    	index < reviews.length-1 ? setIndex(index+1) : setIndex(0);
    }
    const prevReview = ()=>{
    	index > 0 ? setIndex(index-1) : setIndex(reviews.length-1);
    }

	return (
        <div className="reviews">
        <h1>Our Reviews</h1>
           <Review id={reviews[index].id} 
                   image={reviews[index].image}
                   name={reviews[index].name}
                   job={reviews[index].job}
                   text={reviews[index].text}/>
            <button classNam="prev-btn" onClick={prevReview}>prev</button>
            <button classNam="next-btn" onClick={nextReview}>next</button>
        </div>
    )
}

export default Reviews;