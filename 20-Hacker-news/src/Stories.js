import React, {useEffect} from 'react';
import Story from './Story';
import Loader from './Loader';
import {useGlobalContext} from './context';
const url = "https://hn.algolia.com/api/v1/search?";

function Stories() {
    const {query, page, totalPages, fetchData, 
    	  stopLoading, loading, stories, 
    	  goToNextPage, goToPrevPage} = useGlobalContext();

    const getStories = async () => {
      try {
        const response = await fetch(`${url}query=${query}&page=${page}`);
        const stories = await response.json();
        fetchData(stories.hits);
        stopLoading(false);
      }
      catch(error){
      	console.log(error);
      	stopLoading(false);
      }
    }
    useEffect(() => {
    	getStories();
    }, [query, page]);

    if(loading) {
    	return <Loader />
    }

	return (
		<div className="storis">
		    <div className="controls">
		    	<button onClick={() => goToPrevPage()}>prev</button>
		    	<span>{page}/{totalPages}</span>
		        <button onClick={() => goToNextPage()}>next</button>
		    </div>
            {
            	stories.map(story => <Story key={story.objectID} story={story}/>)
            }
            <div className="controls">
		    	<button onClick={() => goToPrevPage()}>prev</button>
		    	<span>{page}/{totalPages}</span>
		        <button onClick={() => goToNextPage()}>next</button>
		    </div>
        </div>
	)
}

export default Stories
