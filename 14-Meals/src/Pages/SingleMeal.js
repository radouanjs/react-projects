import React from 'react';
import {useParams} from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Loading from '../Components/Loading';
const url = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";
function MealInfo() {
    const {id} = useParams();
    const [loading, setLoading] = React.useState(false);
    const [meal, setMeal] = React.useState(null);

    
    React.useEffect(() => {
    	const fetchMeal = async () => {
    	setLoading(true);
    	try {
    		const response = await fetch(`${url}${id}`);
    		const data = await response.json();
            
    		if(data.meals) {
    			const {
    				strMealThumb,
    				strMeal,
    				strArea,
                    strIngredient1,
                    strIngredient2,
                    strIngredient3,
                    strIngredient4,
                    strIngredient5,
                    strIngredient6,
                    strIngredient7,
                    strIngredient8,
                    strIngredient9,
                    strIngredient10,
                    strInstructions
    			} = data.meals[0];
    			const meal = {
    				image: strMealThumb,
    				name: strMeal,
    				ingredients: [
	    				strIngredient1,
	                    strIngredient2,
	                    strIngredient3,
	                    strIngredient4,
	                    strIngredient5,
	                    strIngredient6,
	                    strIngredient7,
	                    strIngredient8,
	                    strIngredient9,
	                    strIngredient10,
                    ],
                    instructions: strInstructions,
                    origin: strArea,
    			}
    			setMeal(meal)
    		}else {
    			setMeal(null)
    		}
    	}
    	catch(error) {
            console.log(error);
    	}
    	setLoading(false);
    } 
     fetchMeal()
    }, [id])
    
    if(loading) {
    	return <Loading />
    }

    if (!meal) {
        return <h2 className='no-meal'>no meal to display</h2>
    }else {
   	const {image, name, origin, ingredients, instructions} = meal;

   	return (
		<div>
		    <Navbar />
			<section className="meal-description">
			   <img src={image} alt={name} />
			   <div className="description">
			       <h1>{name}</h1>
			       <p>an {origin} meal</p>
                   <div className="instructions">
                       <h2>Ingredients</h2>
                            <ul>
                            	{
                            		ingredients.map(ingredient=>{
                            			return ingredient && <li>{ingredient}</li>
                            		})
                            	}
                            </ul>
                       <h2>How to prepare</h2>
                       <p>{instructions}</p>
                   </div>
			   </div>
			</section>
		</div>
	)
   }
}

export default MealInfo
