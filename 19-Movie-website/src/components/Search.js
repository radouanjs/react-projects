import React, {useState} from 'react';
import {movies} from '../requests';
import {useFetch} from '../hooks/useFetch';
import Loader from './Loader';
import Movie from './Movie';

function Search() {
	const [value, setValue] = useState("");
	const [query, setQuery] = useState(1);
    const {loading, movieData} = useFetch(movies.searching, null, query);
    
	const handleSubmit = (e) => {
		e.preventDefault();
		setQuery(value);
	}
    console.log(movieData);
	if(loading) {
		return <Loader />
	}

	return (
		<section className="movie-search">
			<form onSubmit={handleSubmit}>
				<input type="text" 
				       value={value} 
				       placeholder="Search form a movie" 
				       onChange={(e) => setValue(e.target.value)}/>
				<button type="submit">Go</button>
			</form>
			<section className="results">
			    {
			    	movieData.results.length > 0 ?
			    	movieData.results.map(movie => <Movie movie={movie}/>) :
			    	<p>☹ No data matches</p>
			    }
			</section>
		</section>
	)
}

export default Search