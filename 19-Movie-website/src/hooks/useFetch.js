import {useState, useEffect} from 'react';

export const useFetch = (url, page = null, query = null) => {
	    const [movieData, setMovieData] = useState([]);
        const [loading, setLoading] = useState(true);

        const getData = async () => {
        	try {
        	    const response = await fetch(url+`${query ? `&query=${query}`: ""}${page ? `&page=${page}`: ""}`);
        	    const data = await response.json();
        	    setMovieData(prev => {
                    if(page){
                        return [...prev,...data.results];
                    }else{
                        return data;
                    }
                });
                setLoading(false);
            }
            catch(error) {
            	console.log(error);
            	setLoading(false);
            }
        } 

        useEffect(() => {
        	getData();
        }, [url, page, query]);

    return {loading, movieData}
}