import React, {useState, useEffect} from 'react'
import {useFetch} from '../hooks/useFetch';
import {movies} from '../requests';
import Movie from '../components/Movie';
import Loader from '../components/Loader';

function TopRated() {
	const [page, setPage] = useState(1);
    const {loading, movieData} = useFetch(movies.topRated, page);
    const [isFetching, setIsFetching] = useState(false);
 
    useEffect(() => {
            const event = window.addEventListener('scroll', () => {
              if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight){
                setPage((oldPage) => oldPage + 1)
                setIsFetching(true);
              }
            });
            return () => window.addEventListener('scroll', event);
        }, []);
    if(loading) {
    	return <Loader />
    }

	return (
		<section className="top-rated-movies">
			{
				movieData.map(movie => {
					return <Movie movie={{...movie}}/>
				})
			}
			{isFetching && <h3>Loading...</h3>}
		</section>
	)
}

export default TopRated