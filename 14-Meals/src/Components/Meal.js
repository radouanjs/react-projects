import React from 'react';
import {Link} from 'react-router-dom';

function Meal({id, name, image, category}) {

	return (
	        <div className="meal" key={id}>
                <img src={image} alt={name} />
                <div className="meal-info">
                    <h3>{name}</h3>
                    <div>
                        <p>{category}</p>
                        <Link to={`/meal/${id}`}>Details</Link>
                    </div>
                </div>
	        </div>
	)
}

export default Meal