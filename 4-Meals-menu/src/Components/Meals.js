import React, {useState} from 'react';
import Meal from './Meal';

const Meals = ({meals})=>{

	return (
		<div className="meals">
		    {meals.map(meal => {
		    	return (
                    <Meal id={meal.id}
                          title={meal.title}
                          img={meal.img}
                          price={meal.price}
                          desc={meal.desc}
                    />
		    	)
		    })}
		</div>
	)
}

export default Meals;