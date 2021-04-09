import React from 'react';
import Meal from './Meal';
import {useGlobalContext} from '../context';

function Meals() {
    const {meals} = useGlobalContext();

	return (
		<div className="meals">
			{
				meals.map(meal => {
					return <Meal key={meal.id} {...meal}/>
				})
			}
		</div>
	)
}

export default Meals