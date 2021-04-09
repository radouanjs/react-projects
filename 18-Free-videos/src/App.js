import { useState, useEffect } from 'react';
import {ImSearch} from 'react-icons/im';
import Video from './components/Video';
import './App.css';
const apiKey = "21054976-2aa337d2abf2a829b4ce7b2ea";
const mainUrl = "https://pixabay.com/api/videos/";

function App() {
  const [loading, setLoading] = useState(true);
  const [videos, setVideos] = useState([]);
  const [page, setPage] = useState(1);
  const [value, setValue] = useState("");
  const [query, setQuery] = useState("");

  const getVideos = async () => {
	  	try {
	  	    const response = await fetch(`${mainUrl}?q=${query}&key=${apiKey}&page=${page}`);
	  	    const data = await response.json();
	  	    const {hits} = data;
            
            setVideos(prev => {
            	if(query && page === 1) {
            		return hits
            	}else {
            		return [...prev, ...hits];
            	}
            })
	        
	        setLoading(false); 
	    }catch(error) {
	    	console.log(error);
	    	setLoading(false)
	    }
    }
    useEffect(() => {
    	getVideos();
    }, [page, query]);

    useEffect(() => {
        const event = window.addEventListener('scroll', () => {
        	if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight){
                setPage((oldPage) => oldPage + 1)
            }
        });
        return window.removeEventListener('scroll', event);
    }, []);


    if(loading) {
    	return <h1>Loading...</h1>
    }
    const newVideos = videos.map(video => {
    	const { id,tags,duration,picture_id,
    		    videos:{tiny:{url}},
    		    views,likes,comments,downloads
            } = video;
         return {
             id,
             tags,
             duration,
             picture_id,
             url,
             views,
             likes,
             comments,
             downloads
         }
    })
    const handleSubmit = (e) => {
    	e.preventDefault();
        setQuery(value);
    }
  return (
    <div className="App">
        <form className="search" onSubmit={handleSubmit}>
			<input type="text" value={value}
			       onChange={(e)=>setValue(e.target.value)} 
			       placeholder="Search your favorite video"/>
			<button type="submit"><ImSearch /></button>
		</form>
        <section className="videos">
           {
           	newVideos.map(video => <Video key={video.id} video={{...video}}/>)
           }
        </section>
        {loading && <h3>Loading more</h3>}
    </div>
  );
}

export default App;
