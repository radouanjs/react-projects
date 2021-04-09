import React, {createContext,useContext,useEffect,useReducer} from 'react';
import {reducer} from './reducer';
const url = "https://course-api.com/react-useReducer-cart-project";

const AppContext = createContext();

const defaultState = {
	loading: false,
	amount: 0,
	products: [],
	total: 0,
}

function AppProvider({children}) {
	const [state, dispatch] = useReducer(reducer, defaultState);

    // Getting the products from api
	const fetchProducts = async ()=>{
		dispatch({type: 'LOADING', payload: true});
		const response = await fetch(url);
		const products = await response.json();
		dispatch({type: 'DISPLAY_PRODUCTS', payload: products})
		dispatch({type: 'LOADING', payload: false});
	}


    const calculateAmount = () => {
    	dispatch({type: 'CALCULATE_AMOUNT'})
    }

    const calculateTotal = () => {
	    dispatch({type: 'CALCULATE_TOTAL'});
    }

    useEffect(()=>{
    	calculateAmount(state.products);
	    calculateTotal(state.products);
    }, [state.products])


    const toggleAmount = (id, value) => {
        dispatch({type: 'TOGGLE_AMOUNT', payload: {id, value}});
    }

	useEffect(()=>{
	    fetchProducts();
	}, [])

    const removeProduct = (id) => {
        dispatch({type: 'REMOVE_PRODUCT', payload: id});
    }
    const clearCart = () => {
    	dispatch({type: 'CLEAR_CART'});
    }


	return (
		<AppContext.Provider value={{...state, toggleAmount, removeProduct, clearCart}}>
			{children}
		</AppContext.Provider>
	)
}

const useGlobalContext = () => {
	return useContext(AppContext);
}

export {AppProvider, useGlobalContext}