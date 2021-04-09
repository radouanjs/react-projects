export const reducer = (state, action) => {
	if(action.type === 'CALCULATE_AMOUNT') {
		return {
			...state,
			amount: state.products.reduce((acc, item)=>acc+item.amount, 0),
		}
	}
	if(action.type === 'CALCULATE_TOTAL') {
		let total = state.products.reduce((acc, item)=>(acc+(+item.price))*item.amount, 0);
		return {
			...state,
			total: total.toFixed(2), 
		}
	}
	if(action.type === 'DISPLAY_PRODUCTS') {
		return {
			...state,
			products: action.payload,
		}
	}
	if(action.type === 'LOADING') {
		return {
			...state,
			loading: action.payload,
		}
	}
	if(action.type === 'TOGGLE_AMOUNT') {

		const {id, value} = action.payload;
        let newProducts = state.products.map(product => {
        	if(product.id === id) {
        		if(value === 'inc'){
        	        return {...product, amount: product.amount+1}
        	    }
        	    if(value === 'dec'){
        	        return {...product, amount: product.amount-1}
        	    }
            }
            return product;
	        }).filter(product => product.amount !== 0);
            return {
	 		    ...state,
	 		    products: newProducts,
		    }
	}
	if(action.type === 'REMOVE_PRODUCT') {
        return {
        	...state,
        	products: state.products.filter(product=> product.id !== action.payload)
        }
	}
	if(action.type === 'CLEAR_CART') {
        return {
        	...state,
        	products: [],
        }
	}
}