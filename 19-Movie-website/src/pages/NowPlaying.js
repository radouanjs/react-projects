import React, {useState, useEffect} from 'react';
import {useFetch} from '../hooks/useFetch';
import {movies} from '../requests';
import Movie from '../components/Movie';
import Loader from '../components/Loader';

function NowPlaying() {
	const [page, setPage] = useState(1);
    const {loading, movieData} = useFetch(movies.nowPlaying, page);
    const [isFetching, setIsFetching] = useState(false);
    console.log(process.env.REACT_APP_API_KEY)
    useEffect(() => {
            const event = window.addEventListener('scroll', () => {
              if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight){
                setPage((oldPage) => oldPage + 1);
                setIsFetching(true);
              }
            });
            return () => window.addEventListener('scroll', event);
        }, []);
    
    if(loading) {
    	return <Loader />
    }


	return (
		<section className="now-playing-movies">
			{
				movieData.map(movie => {
					return <Movie movie={{...movie}}/>
				})
			}
			{isFetching && <h3>Loading...</h3>}
		</section>
	)
}

export default NowPlaying