import Button from './Button';
import menu from '../data';

const Navigation = ({filterMeal})=>{
	
	const categorys = ["All", ...new Set(menu.map(meal=>meal.category))];

	return (
		<nav>
		    {categorys.map(category => {
		    	return (
                    <Button category={category} filterMeal={filterMeal}/>
		    	)
		    })}
		</nav>
	)
}

export default Navigation;
