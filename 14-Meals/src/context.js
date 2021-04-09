import React, {createContext, useContext, useState, useEffect} from 'react';
const defaulteUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

const AppContext = createContext();

function AppProvider({children}) {
    const [meals, setMeals] = useState([]);
    const [url, setUrl] = useState(defaulteUrl);
    const [loading, setLoading] = useState(false);

    const fetchMeals = async (url) => {
    	    setLoading(true)
    	try {
    	    const response = await fetch(url);
    	    const data = await response.json();
    	    const {meals} = data;
    	    if(meals) {

               const newMeals = meals.map(meal => {
               	   const {idMeal, strMeal, strMealThumb, strCategory} = meal;
               	   return {
               	   	id: idMeal,
               	   	name: strMeal,
               	   	image: strMealThumb,
               	   	category: strCategory,
               	   }
               })
               setMeals(newMeals);

    	    } else {
    	    	setMeals([]);
    	    }
            setLoading(false);
    	}
        catch(error) {
        	console.log(error);
        	setLoading(false);
        }
    }

    const handleInput = (e) => {
    	const inputValue = e.target.value;
    	setUrl(defaulteUrl + inputValue);
    }

    useEffect(() => {
        fetchMeals(url);
    }, [url])


return (
	    <AppContext.Provider value={{meals, handleInput, loading}}>
	    	{children}
	    </AppContext.Provider>
    )
}

const useGlobalContext = () => {
	return useContext(AppContext);
}

export {AppProvider, useGlobalContext};
