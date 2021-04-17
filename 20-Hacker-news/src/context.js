import React, {useContext, useReducer} from 'react';
import {reducer} from './reducer';

const AppContext = React.createContext();
const initialState = {
	stories: [],
	loading: true,
	query: "reactjs",
	page: 1,
	totalPages: 45,
}

function AppProvider({children}){
    const [state, dispatch] = useReducer(reducer, initialState);
    
    const fetchData = (data) => {
    	dispatch({type: 'FETCH_DATA', payload: data});
    }
    const stopLoading = (value) => {
    	dispatch({type: 'STOP_LOADING', payload: false});
    }
    const goToNextPage = () => {
    	dispatch({type: 'NEXT_PAGE'});
    }
    const goToPrevPage = () => {
    	dispatch({type: 'PREV_PAGE'});
    }
    const searchQuery = (query) => {
    	dispatch({type: 'SEARCH_QUERY', payload: query});
    }
    const removeStory = (id) => {
    	dispatch({type: 'REMOVE_STORY', payload: id});
    }
	return (
        <AppContext.Provider value={{...state,
                                     fetchData, 
        	                         goToNextPage, 
        	                         goToPrevPage, 
        	                         removeStory,
        	                         searchQuery,
        	                         stopLoading,
        	                        }}>
        	{children}
        </AppContext.Provider>
	)
}

export const useGlobalContext = () => {
	return useContext(AppContext);
}

export default AppProvider
