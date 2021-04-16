import React, {useState, useEffect} from 'react'
import YouTube from 'react-youtube';
import {useParams, Link} from 'react-router-dom';
import {useFetch} from '../hooks/useFetch';
import {AiFillStar} from 'react-icons/ai';
import Loader from '../components/Loader';
const baseUrl = "https://api.themoviedb.org/3";
const apiKey = process.env.REACT_APP_API_KEY;
const imageUrl = "http://image.tmdb.org/t/p/original";

function SingleMovie() {
	const [similar, setSimilar] = useState([]);
	const [video, setVideos] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();
    const {loading, movieData} = useFetch(`${baseUrl}/movie/${id}?api_key=${apiKey}`);
    console.log(movieData)

    const getRolatedMovies = async () => {
    	try {
    	const response = await fetch(`${baseUrl}/movie/${id}/similar?api_key=${apiKey}`);
    	const data = await response.json();
    	setSimilar(data.results);
        }
        catch(error) {
        	console.log(error);
        }   
    }
    useEffect(() => {
    	getRolatedMovies();
    }, [id]);

    const getVideos = async () => {
    	try {
    	const response = await fetch(`${baseUrl}/movie/${id}/videos?api_key=${apiKey}`);
    	const data = await response.json();
    	setVideos(data.results);
    	setIsLoading(false)
        }
        catch(error) {
        	console.log(error);
        	setIsLoading(false)
        }   
    }
    useEffect(() => {
    	getRolatedMovies();
    }, [id]);
    useEffect(() => {
    	getVideos();
    }, [id]);


    const opts = {
        height: '290',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    };

     const _onReady = (event) => {
        event.target.pauseVideo();
    }
    if(loading) {
    	return <Loader />
    }


    const style = {
    	backgroundImage: `url(${imageUrl}/${movieData.backdrop_path})`,
    	backgroundSize: "cover",
    }
   
    const {
    	   title,
    	   release_date,
    	   genres,
    	   vote_average,
    	   vote_count,
    	   runtime,
    	   spoken_languages,
    	   production_companies,
    	   production_countries,
    	   overview,
    	   tagline,
    	   poster_path,
    	} = movieData;

	return (
		<section className="single-movie">
			<div className="bg-image" style={style}>
                 <div className="info">
                     <img src={`${imageUrl}/${poster_path}`} alt="" />
                     <ul>
                        <h3>{title} ({release_date.substring(0,4)})</h3>
                        <li><b>Genre: </b>{genres.map(genre=>genre.name+" ")}</li>
                        <li><b>Release Date:</b> {release_date}</li>
                        <li>
                            <b>User Rating: </b> 
                            {vote_average}/10 from {vote_count} ratings
                        </li>
                        <li><b>Runtime: </b>{runtime} min</li>
                        <li>
                            <b>Language: </b>
                            {spoken_languages.map(language=>language.name+" ")}
                        </li>
                        <li>
                            <b>Production Company: </b>
                            {production_companies.map(company=>company.name+" ")}
                        </li>
                        <li>
                            <b>Production Country: </b>
                            {production_countries.map(country=>country.name+" ")}
                        </li>
                     </ul>
                 </div>
                 <div className="statistics">
                    <h3><span className="star"><AiFillStar /></span>{vote_average}</h3>
                    From {vote_count} Ratings
                 </div>
			</div>
			<div className="overview">
			    <div className="summary">
			        <h3>Summary</h3>
			        <p className="tagline">{tagline}</p>
			        <p>{overview}</p>
			        <h3>Triler</h3>
                    {!isLoading && <YouTube videoId={video[0].key} opts={opts} onReady={_onReady} />}
			    </div>
			    <div className="related">
			        <h3>Related Movies</h3>
			        <div className="related-movies">
                        {
                        	similar.map(movie => {
                        		const {id, poster_path, release_date, title} = movie;
                        		return (
                                    <div className="similar-movie" key={id}>
                                        <img src={`${imageUrl}/${poster_path}`} alt="" />
                                        <div className="info">
                                            <h4><Link to={`/movie/${id}`}>{title}</Link></h4>
                                            <p>{release_date}</p>
                                            <p className="rate">
                                                <span className="star"><AiFillStar /></span>{vote_average}
                                             </p>
                                        </div>
                                    </div>
                        		)
                        		})
                        }
			        </div>
			    </div>
			</div>
		</section>
	)
}

export default SingleMovie