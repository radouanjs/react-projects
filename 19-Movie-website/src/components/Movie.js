import React from 'react';
import {Link} from 'react-router-dom';
import {AiFillStar} from 'react-icons/ai';
import {useGlobalContext} from '../context';

function Movie({movie}) {
    const {setIsSearchOpen} = useGlobalContext();
    const {id, poster_path, title, vote_average, release_date} = movie;

	return (
		<section className="movie" key={id}>
			<img src={`http://image.tmdb.org/t/p/original/${poster_path}`} alt="" />
                <div className="info">
                    <p onClick={()=>setIsSearchOpen(false)}><Link to={`/movie/${id}`}>{title}</Link></p>
                    <p>{release_date.substring(0, 4)}</p>
                </div>
                <p className="rate">
                    <span className="star"><AiFillStar /></span>{vote_average}
                </p>
		</section>
	)
}

export default Movie