export const reducer = (state, action) => {
	if(action.type === 'FETCH_DATA') {
        return {
        	...state,
        	stories: action.payload,
        }
	}
    
    if(action.type === 'STOP_LOADING') {
        return {
        	...state,
        	loading: action.payload,
        }
	}

    if(action.type === 'SEARCH_QUERY') {
        return {
        	...state,
        	query: action.payload,
        }
	}

	if(action.type === 'NEXT_PAGE') {
        return {
        	...state,
        	page: state.page > 44 ? 1 : state.page + 1,
        }
	}

	if(action.type === 'PREV_PAGE') {
		 return {
        	...state,
        	page: state.page === 1 ? 45 : state.page - 1,
        }
	}

	if(action.type === 'REMOVE_STORY') {
		return {
			...state,
			stories: state.stories.filter(story => story.objectID !== action.payload),
		}
	}

	return state
}