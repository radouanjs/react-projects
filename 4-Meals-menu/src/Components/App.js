import React, {useState} from 'react';
import Meals from  './Meals';
import Navigation from  './Navigation';
import menu from  '../data';

const App = ()=>{

    const [meals, setMeals] = useState(menu);

	const filterMeal = category=>{
		let newMenu;
        if(category === "All"){
            newMenu = menu;
        }else{
            newMenu = menu.filter(meal=>meal.category===category);
        } 
        setMeals(newMenu);
    }

	return (
		<div className="menu">
		    <header><h1>Our Menu</h1></header>
		    <Navigation filterMeal={filterMeal}/>
		    <Meals meals={meals}/>
		</div>
	)
}

export default App;