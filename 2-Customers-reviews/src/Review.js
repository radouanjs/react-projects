import React from 'react';

function Review({id, name, job, image, text}){
	return (
        <div className="review" key={id}>
            <div className="image">
                <img src={image} alt={name} />
            </div>
            <div className="name">
                <p>{name}</p>
                <p>{job.toUpperCase()}</p>
            </div>
            <p id="text">{text}</p>
        </div>
    )
}

export default Review;