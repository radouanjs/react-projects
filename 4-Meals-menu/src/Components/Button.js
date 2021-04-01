import React from 'react';

const Button = ({category, filterMeal})=>{
	return <button className="btn" onClick={()=>filterMeal(category)}>{category}</button>
}

export default Button;
